import fs from "fs";
import path from "path";

function loadDotEnv(): void {
  const candidates = [
    path.resolve(process.cwd(), ".env"),
    path.resolve(process.cwd(), "..", "..", ".env"),
  ];

  const envPath = candidates.find((p) => fs.existsSync(p));
  if (!envPath) return;

  const raw = fs.readFileSync(envPath, "utf8");
  const overrideKeys = new Set([
    "DATABASE_URL",
    "PORT",
    "JWT_SECRET",
    "ADMIN_PASSWORD_HASH",
  ]);

  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1);
    if (!key) continue;
    const current = process.env[key];
    const shouldOverride =
      overrideKeys.has(key) ||
      current == null ||
      current === "" ||
      (typeof current === "string" && current.includes("does-not-exist.invalid"));

    if (shouldOverride) process.env[key] = value;
  }
}

loadDotEnv();

const { logger } = await import("./lib/logger");
const { runSeed } = await import("./seed");
const { default: app } = await import("./app");

const rawPort = process.env["PORT"];

const port = Number(rawPort ?? "3001");

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

async function main() {
  try {
    await runSeed();
  } catch (err) {
    logger.error({ err }, "Seed failed, continuing without database");
  }

  app.listen(port, (err) => {
    if (err) {
      logger.error({ err }, "Error listening on port");
      process.exit(1);
    }
    logger.info({ port }, "Server listening");
  });
}

main().catch((err) => {
  logger.error({ err }, "Startup failed");
  process.exit(1);
});
