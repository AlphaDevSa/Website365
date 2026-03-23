import { Router, type IRouter, type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import { pool } from "@workspace/db";
import { requireAdmin, signAdminToken } from "../middleware/auth";

const router: IRouter = Router();

// POST /api/admin/login
router.post("/admin/login", async (req: Request, res: Response) => {
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
    console.error("[admin] Submissions error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/admin/stats — summary counts
router.get("/admin/stats", requireAdmin, async (_req: Request, res: Response) => {
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
    console.error("[admin] Stats error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
