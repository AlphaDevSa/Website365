import { Router, type IRouter, type Request, type Response } from "express";
import { pool } from "@workspace/db";

const router: IRouter = Router();

router.post("/contact", async (req: Request, res: Response) => {
  const body = req.body as Record<string, unknown>;

  if (!body || typeof body !== "object") {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const formType = String(body.form_type || "General Enquiry").trim().slice(0, 200);

  const email = String(body.email || "").trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "A valid email address is required" });
    return;
  }

  const data = { ...body };

  try {
    await pool.query(
      "INSERT INTO form_submissions (form_type, data) VALUES ($1, $2)",
      [formType, JSON.stringify(data)]
    );

    res.json({
      success: true,
      message: "Thank you! Your submission has been received. We will be in touch shortly.",
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Database error";
    console.error("[contact] DB insert failed:", msg);
    res.status(500).json({ error: "Failed to save your submission. Please try again." });
  }
});

export default router;
