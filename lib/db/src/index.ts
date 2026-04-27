import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

const databaseUrl = process.env.DATABASE_URL ?? null;

const shouldUseSsl = (() => {
  if (!databaseUrl) return false;
  try {
    const url = new URL(databaseUrl);
    const sslMode = url.searchParams.get("sslmode");

    if (sslMode?.toLowerCase() === "require") return true;
    if (url.hostname.endsWith(".neon.tech")) return true;

    return false;
  } catch {
    return false;
  }
})();

export const pool = databaseUrl
  ? new Pool({
      connectionString: databaseUrl,
      ssl: shouldUseSsl ? true : undefined,
    })
  : null;

export const db = pool ? drizzle(pool, { schema }) : null;

export * from "./schema";
