import crypto from "crypto";
import { pool } from "@workspace/db";

type DbRow = {
  host: string;
  port: number;
  secure: boolean;
  username: string;
  password_enc: string;
  from_email: string | null;
  from_name: string | null;
};

export type SmtpSettingsPublic = {
  host: string;
  port: number;
  secure: boolean;
  username: string;
  fromEmail: string | null;
  fromName: string | null;
  hasPassword: boolean;
};

export type SmtpTransportConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth: { user: string; pass: string };
  fromEmail: string | null;
  fromName: string | null;
};

let cached: { transport: SmtpTransportConfig; public: SmtpSettingsPublic; expiresAt: number } | null =
  null;

function getKey(): Buffer {
  const raw = process.env["SMTP_SETTINGS_KEY"];
  if (raw) {
    const key = Buffer.from(raw, "base64");
    if (key.length !== 32) {
      throw new Error("SMTP_SETTINGS_KEY must be a base64-encoded 32-byte key");
    }
    return key;
  }
  const jwt = process.env["JWT_SECRET"] || "changeme-set-JWT_SECRET-env";
  return crypto.createHash("sha256").update(jwt, "utf8").digest();
}

function encryptSecret(value: string): string {
  const key = getKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const ciphertext = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString("base64")}.${tag.toString("base64")}.${ciphertext.toString("base64")}`;
}

function decryptSecret(enc: string): string {
  const key = getKey();
  const [ivB64, tagB64, dataB64] = enc.split(".");
  if (!ivB64 || !tagB64 || !dataB64) throw new Error("Invalid encrypted secret format");
  const iv = Buffer.from(ivB64, "base64");
  const tag = Buffer.from(tagB64, "base64");
  const data = Buffer.from(dataB64, "base64");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  const plaintext = Buffer.concat([decipher.update(data), decipher.final()]);
  return plaintext.toString("utf8");
}

export function clearSmtpSettingsCache(): void {
  cached = null;
}

export async function loadSmtpSettingsPublic(): Promise<SmtpSettingsPublic | null> {
  if (cached && cached.expiresAt > Date.now()) return cached.public;
  const loaded = await loadSmtpTransportConfig();
  return loaded ? loaded.public : null;
}

export async function loadSmtpTransportConfig(): Promise<{ transport: SmtpTransportConfig; public: SmtpSettingsPublic } | null> {
  if (cached && cached.expiresAt > Date.now()) return { transport: cached.transport, public: cached.public };
  if (!pool) return null;

  const result = await pool.query<DbRow>(
    `SELECT host, port, secure, username, password_enc, from_email, from_name
     FROM smtp_settings
     WHERE id = 1
     LIMIT 1`
  );
  const row = result.rows[0];
  if (!row) return null;

  const password = decryptSecret(row.password_enc);

  const transport: SmtpTransportConfig = {
    host: row.host,
    port: Number(row.port),
    secure: Boolean(row.secure),
    auth: { user: row.username, pass: password },
    fromEmail: row.from_email,
    fromName: row.from_name,
  };

  const pub: SmtpSettingsPublic = {
    host: row.host,
    port: Number(row.port),
    secure: Boolean(row.secure),
    username: row.username,
    fromEmail: row.from_email,
    fromName: row.from_name,
    hasPassword: true,
  };

  cached = { transport, public: pub, expiresAt: Date.now() + 60_000 };
  return { transport, public: pub };
}

export async function saveSmtpSettings(input: {
  host?: string;
  port?: number;
  secure?: boolean;
  username?: string;
  password?: string;
  fromEmail?: string | null;
  fromName?: string | null;
}): Promise<SmtpSettingsPublic> {
  if (!pool) throw new Error("Service is unavailable");

  const existing = await pool.query<{ password_enc: string }>(
    "SELECT password_enc FROM smtp_settings WHERE id = 1 LIMIT 1"
  );
  const existingEnc = existing.rows[0]?.password_enc;

  const host = String(input.host ?? "").trim();
  const username = String(input.username ?? "").trim();
  const port = Number(input.port ?? 587);
  const secure = Boolean(input.secure);
  const fromEmail = input.fromEmail ? String(input.fromEmail).trim() : null;
  const fromName = input.fromName ? String(input.fromName).trim() : null;

  const passwordRaw = typeof input.password === "string" ? input.password : "";
  const password = passwordRaw.trim();

  if (!host) throw new Error("SMTP host is required");
  if (!username) throw new Error("SMTP username is required");
  if (!Number.isFinite(port) || port <= 0 || port > 65535) throw new Error("SMTP port is invalid");

  let passwordEnc = existingEnc;
  if (password) {
    passwordEnc = encryptSecret(password);
  }
  if (!passwordEnc) {
    throw new Error("SMTP password is required");
  }

  await pool.query(
    `INSERT INTO smtp_settings (id, host, port, secure, username, password_enc, from_email, from_name, updated_at)
     VALUES (1, $1, $2, $3, $4, $5, $6, $7, NOW())
     ON CONFLICT (id) DO UPDATE SET
       host = EXCLUDED.host,
       port = EXCLUDED.port,
       secure = EXCLUDED.secure,
       username = EXCLUDED.username,
       password_enc = EXCLUDED.password_enc,
       from_email = EXCLUDED.from_email,
       from_name = EXCLUDED.from_name,
       updated_at = NOW()`,
    [host, port, secure, username, passwordEnc, fromEmail, fromName]
  );

  clearSmtpSettingsCache();

  return {
    host,
    port,
    secure,
    username,
    fromEmail,
    fromName,
    hasPassword: true,
  };
}
