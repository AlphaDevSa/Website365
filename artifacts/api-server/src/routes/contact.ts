import { Router, type IRouter, type Request, type Response } from "express";
import { pool } from "@workspace/db";
import { createTransport, buildEmailHtml } from "../mailer";
import { isDbUnavailableError } from "../utils/dbErrors";
import { loadSmtpTransportConfig } from "../utils/smtpSettings";

const router: IRouter = Router();

const NOTIFY_TO = [
  "admin@website365.co.za",
  "info@website365.co.za",
  "webleads@website365.co.za",
].join(", ");

router.post("/contact", async (req: Request, res: Response) => {
  if (!pool) {
    res.status(503).json({ error: "Service is unavailable" });
    return;
  }
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

  // 1. Save to database
  try {
    await pool.query(
      "INSERT INTO form_submissions (form_type, data) VALUES ($1, $2)",
      [formType, JSON.stringify(data)]
    );
  } catch (err: unknown) {
    if (isDbUnavailableError(err)) {
      res.status(503).json({ error: "Service is unavailable" });
      return;
    }
    const msg = err instanceof Error ? err.message : "Database error";
    console.error("[contact] DB insert failed:", msg);
    res.status(500).json({ error: "Failed to save your submission. Please try again." });
    return;
  }

  // 2. Send email notification (non-blocking — don't fail the request if email fails)
  try {
    let smtp: Awaited<ReturnType<typeof loadSmtpTransportConfig>> | null = null;
    try {
      smtp = await loadSmtpTransportConfig();
    } catch {}

    const transport = smtp
      ? createTransport({
          host: smtp.transport.host,
          port: smtp.transport.port,
          secure: smtp.transport.secure,
          auth: smtp.transport.auth,
        })
      : createTransport();
    const senderName = String(body.name || "Website365 Form").trim();
    const subject = `[Website365] New ${formType} from ${senderName}`;
    const fromEmail = smtp?.transport.fromEmail || process.env.SMTP_USER || smtp?.transport.auth.user;
    const fromName = smtp?.transport.fromName || "Website365 Forms";

    await transport.sendMail({
      from: fromEmail ? `"${fromName}" <${fromEmail}>` : fromName,
      to: NOTIFY_TO,
      replyTo: email,
      subject,
      html: buildEmailHtml(data),
    });

    console.info(`[contact] Email sent for "${formType}" from ${email}`);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Email error";
    console.error("[contact] Email send failed (non-fatal):", msg);
  }

  res.json({
    success: true,
    message: "Thank you! Your submission has been received. We will be in touch shortly.",
  });
});

export default router;
