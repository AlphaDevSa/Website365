import { Router, type IRouter, type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import { pool } from "@workspace/db";
import { requireAdmin, signAdminToken } from "../middleware/auth";
import { isDbUnavailableError } from "../utils/dbErrors";

const router: IRouter = Router();

// POST /api/admin/login
router.post("/admin/login", async (req: Request, res: Response) => {
  if (!pool) {
    res.status(503).json({ error: "Service is unavailable" });
    return;
  }
  const { username, password } = req.body as { username?: string; password?: string };

  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return;
  }

  try {
    const result = await pool.query(
      "SELECT id, username, password_hash FROM admin_users WHERE username = $1",
      [username.trim().toLowerCase()]
    );

    const user = result.rows[0] as { id: number; username: string; password_hash: string } | undefined;

    if (!user) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    const token = signAdminToken(user.username);

    res.cookie("admin_token", token, {
      httpOnly: true,
      secure: process.env["NODE_ENV"] === "production",
      sameSite: "lax",
      maxAge: 8 * 60 * 60 * 1000, // 8 hours
    });

    res.json({ success: true, username: user.username });
  } catch (err) {
    if (isDbUnavailableError(err)) {
      res.status(503).json({ error: "Service is unavailable" });
      return;
    }
    console.error("[admin] Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/admin/logout
router.post("/admin/logout", (_req: Request, res: Response) => {
  res.clearCookie("admin_token");
  res.json({ success: true });
});

// GET /api/admin/me — check if logged in
router.get("/admin/me", requireAdmin, (req: Request, res: Response) => {
  res.json({ username: (req as Request & { adminUser?: string }).adminUser });
});

// GET /api/admin/submissions — list all submissions
router.get("/admin/submissions", requireAdmin, async (req: Request, res: Response) => {
  if (!pool) {
    res.status(503).json({ error: "Service is unavailable" });
    return;
  }
  const page = Math.max(1, Number(req.query["page"]) || 1);
  const limit = Math.min(100, Math.max(1, Number(req.query["limit"]) || 25));
  const offset = (page - 1) * limit;
  const formType = req.query["form_type"] as string | undefined;
  const search = req.query["search"] as string | undefined;

  try {
    const conditions: string[] = [];
    const values: unknown[] = [];
    let idx = 1;

    if (formType) {
      conditions.push(`form_type = $${idx++}`);
      values.push(formType);
    }
    if (search) {
      conditions.push(`(data::text ILIKE $${idx++})`);
      values.push(`%${search}%`);
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const countResult = await pool.query(
      `SELECT COUNT(*) as total FROM form_submissions ${where}`,
      values
    );
    const total = Number(countResult.rows[0]?.total ?? 0);

    const rows = await pool.query(
      `SELECT id, form_type, data, submitted_at
       FROM form_submissions ${where}
       ORDER BY submitted_at DESC
       LIMIT $${idx++} OFFSET $${idx++}`,
      [...values, limit, offset]
    );

    res.json({
      submissions: rows.rows,
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    });
  } catch (err) {
    if (isDbUnavailableError(err)) {
      res.status(503).json({ error: "Service is unavailable" });
      return;
    }
    console.error("[admin] Submissions error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/admin/stats — summary counts
router.get("/admin/stats", requireAdmin, async (_req: Request, res: Response) => {
  if (!pool) {
    res.status(503).json({ error: "Service is unavailable" });
    return;
  }
  try {
    const total = await pool.query("SELECT COUNT(*) as total FROM form_submissions");
    const byType = await pool.query(
      "SELECT form_type, COUNT(*) as count FROM form_submissions GROUP BY form_type ORDER BY count DESC"
    );
    const recent = await pool.query(
      "SELECT COUNT(*) as total FROM form_submissions WHERE submitted_at >= NOW() - INTERVAL '7 days'"
    );

    res.json({
      total: Number(total.rows[0]?.total ?? 0),
      last7Days: Number(recent.rows[0]?.total ?? 0),
      byType: byType.rows,
    });
  } catch (err) {
    if (isDbUnavailableError(err)) {
      res.status(503).json({ error: "Service is unavailable" });
      return;
    }
    console.error("[admin] Stats error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ── Domain Pricing Management ─────────────────────────────────────────────────

// GET /api/admin/domain-pricing — list all rows
router.get("/admin/domain-pricing", requireAdmin, async (_req: Request, res: Response) => {
  if (!pool) {
    res.status(503).json({ error: "Service is unavailable" });
    return;
  }
  try {
    const result = await pool.query(
      "SELECT id, tld, register, renew, transfer, sort_order, enabled, updated_at FROM domain_pricing ORDER BY sort_order ASC, tld ASC"
    );
    res.json({ rows: result.rows });
  } catch (err) {
    if (isDbUnavailableError(err)) {
      res.status(503).json({ error: "Service is unavailable" });
      return;
    }
    console.error("[admin] domain-pricing list error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/admin/domain-pricing/:tld — update a row
router.put("/admin/domain-pricing/:tld", requireAdmin, async (req: Request, res: Response) => {
  if (!pool) {
    res.status(503).json({ error: "Service is unavailable" });
    return;
  }
  const tldParam = req.params["tld"];
  const tldRaw = Array.isArray(tldParam) ? tldParam[0] : tldParam;
  const tld = tldRaw?.trim().toLowerCase();
  const { register, renew, transfer, enabled, sort_order } = req.body as {
    register?: number; renew?: number; transfer?: number; enabled?: boolean; sort_order?: number;
  };

  if (!tld) { res.status(400).json({ error: "TLD required" }); return; }

  try {
    const sets: string[] = [];
    const values: unknown[] = [];
    let idx = 1;

    if (register !== undefined) { sets.push(`register = $${idx++}`); values.push(Number(register)); }
    if (renew !== undefined)    { sets.push(`renew = $${idx++}`);    values.push(Number(renew));    }
    if (transfer !== undefined) { sets.push(`transfer = $${idx++}`); values.push(Number(transfer)); }
    if (enabled !== undefined)  { sets.push(`enabled = $${idx++}`);  values.push(Boolean(enabled)); }
    if (sort_order !== undefined) { sets.push(`sort_order = $${idx++}`); values.push(Number(sort_order)); }

    if (sets.length === 0) { res.status(400).json({ error: "Nothing to update" }); return; }

    sets.push(`updated_at = NOW()`);
    values.push(tld);

    const result = await pool.query(
      `UPDATE domain_pricing SET ${sets.join(", ")} WHERE tld = $${idx} RETURNING *`,
      values
    );

    if (result.rowCount === 0) { res.status(404).json({ error: "TLD not found" }); return; }
    res.json({ row: result.rows[0] });
  } catch (err) {
    if (isDbUnavailableError(err)) {
      res.status(503).json({ error: "Service is unavailable" });
      return;
    }
    console.error("[admin] domain-pricing update error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/admin/domain-pricing — add a new TLD
router.post("/admin/domain-pricing", requireAdmin, async (req: Request, res: Response) => {
  if (!pool) {
    res.status(503).json({ error: "Service is unavailable" });
    return;
  }
  const { tld, register, renew, transfer, sort_order } = req.body as {
    tld?: string; register?: number; renew?: number; transfer?: number; sort_order?: number;
  };

  const cleanTld = tld?.trim().toLowerCase().replace(/^\./, "");
  if (!cleanTld) { res.status(400).json({ error: "TLD required" }); return; }

  try {
    const result = await pool.query(
      `INSERT INTO domain_pricing (tld, register, renew, transfer, sort_order, enabled)
       VALUES ($1, $2, $3, $4, $5, true)
       ON CONFLICT (tld) DO UPDATE SET register=$2, renew=$3, transfer=$4, sort_order=$5, enabled=true, updated_at=NOW()
       RETURNING *`,
      [cleanTld, Number(register ?? 0), Number(renew ?? 0), Number(transfer ?? 0), Number(sort_order ?? 99)]
    );
    res.json({ row: result.rows[0] });
  } catch (err) {
    if (isDbUnavailableError(err)) {
      res.status(503).json({ error: "Service is unavailable" });
      return;
    }
    console.error("[admin] domain-pricing create error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/admin/domain-pricing/:tld — remove a TLD
router.delete("/admin/domain-pricing/:tld", requireAdmin, async (req: Request, res: Response) => {
  if (!pool) {
    res.status(503).json({ error: "Service is unavailable" });
    return;
  }
  const tldParam = req.params["tld"];
  const tldRaw = Array.isArray(tldParam) ? tldParam[0] : tldParam;
  const tld = tldRaw?.trim().toLowerCase();
  if (!tld) { res.status(400).json({ error: "TLD required" }); return; }

  try {
    await pool.query("DELETE FROM domain_pricing WHERE tld = $1", [tld]);
    res.json({ success: true });
  } catch (err) {
    if (isDbUnavailableError(err)) {
      res.status(503).json({ error: "Service is unavailable" });
      return;
    }
    console.error("[admin] domain-pricing delete error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
