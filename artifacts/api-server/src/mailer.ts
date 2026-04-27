import nodemailer from "nodemailer";

export type SmtpTransportOptions = {
  host: string;
  port: number;
  secure?: boolean;
  auth: { user: string; pass: string };
  tlsRejectUnauthorized?: boolean;
};

export function createTransport(options?: SmtpTransportOptions) {
  const host = options?.host ?? process.env.SMTP_HOST;
  const port = options?.port ?? Number(process.env.SMTP_PORT || "587");
  const user = options?.auth?.user ?? process.env.SMTP_USER;
  const pass = options?.auth?.pass ?? process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS must be set");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: options?.secure ?? port === 465,
    auth: { user, pass },
    tls: { rejectUnauthorized: options?.tlsRejectUnauthorized ?? false },
  });
}

export function buildEmailHtml(data: Record<string, unknown>): string {
  const formType = String(data.form_type || "General Enquiry");

  const rows = Object.entries(data)
    .filter(([k]) => k !== "form_type")
    .map(([k, v]) => {
      const label = k.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return `<tr>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;white-space:nowrap;width:180px;">${label}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${String(v ?? "")}</td>
      </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <!-- Header -->
        <tr>
          <td style="background:#1e3a5f;padding:24px 32px;">
            <h1 style="margin:0;color:#ffffff;font-size:20px;">Website365 — New Submission</h1>
            <p style="margin:4px 0 0;color:#93c5fd;font-size:14px;">${formType}</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
              ${rows}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#6b7280;font-size:12px;">This email was sent automatically from the Website365 website. Do not reply to this email.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
