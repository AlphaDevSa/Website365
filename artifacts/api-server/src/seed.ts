import { pool } from "@workspace/db";
import { logger } from "./lib/logger";

const ADMIN_USERNAME = "admin@website365.co.za";
const ADMIN_PASSWORD_HASH =
  process.env["ADMIN_PASSWORD_HASH"] ||
  "$2b$12$BLOstwhYL7PPa/osw6KjO.qW9vhYnPsMNZ9l5LGjUJAqJJXsMl.jG";

const DOMAIN_PRICING = [
  { tld: "co.za",     register: 99,  renew: 99,  transfer: 0,   sort_order: 1  },
  { tld: "org.za",    register: 99,  renew: 99,  transfer: 0,   sort_order: 2  },
  { tld: "net.za",    register: 99,  renew: 99,  transfer: 0,   sort_order: 3  },
  { tld: "web.za",    register: 99,  renew: 99,  transfer: 0,   sort_order: 4  },
  { tld: "capetown",  register: 295, renew: 295, transfer: 295, sort_order: 5  },
  { tld: "durban",    register: 295, renew: 295, transfer: 295, sort_order: 6  },
  { tld: "joburg",    register: 295, renew: 295, transfer: 295, sort_order: 7  },
  { tld: "africa",    register: 295, renew: 295, transfer: 295, sort_order: 8  },
  { tld: "com",       register: 249, renew: 249, transfer: 249, sort_order: 9  },
  { tld: "net",       register: 289, renew: 289, transfer: 289, sort_order: 10 },
  { tld: "org",       register: 299, renew: 299, transfer: 299, sort_order: 11 },
  { tld: "info",      register: 329, renew: 329, transfer: 329, sort_order: 12 },
  { tld: "biz",       register: 349, renew: 349, transfer: 349, sort_order: 13 },
  { tld: "online",    register: 199, renew: 199, transfer: 199, sort_order: 14 },
  { tld: "site",      register: 149, renew: 149, transfer: 149, sort_order: 15 },
  { tld: "tech",      register: 249, renew: 249, transfer: 249, sort_order: 16 },
];

export async function runSeed(): Promise<void> {
  if (!pool) {
    logger.warn("[seed] DATABASE_URL not set, skipping seed");
    return;
  }
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        form_type TEXT NOT NULL,
        data JSONB NOT NULL,
        submitted_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS domain_pricing (
        id SERIAL PRIMARY KEY,
        tld VARCHAR(50) NOT NULL UNIQUE,
        register NUMERIC(10,2) NOT NULL DEFAULT 0,
        renew NUMERIC(10,2) NOT NULL DEFAULT 0,
        transfer NUMERIC(10,2) NOT NULL DEFAULT 0,
        sort_order INTEGER NOT NULL DEFAULT 99,
        enabled BOOLEAN NOT NULL DEFAULT true,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS smtp_settings (
        id INTEGER PRIMARY KEY DEFAULT 1,
        host TEXT NOT NULL,
        port INTEGER NOT NULL,
        secure BOOLEAN NOT NULL DEFAULT false,
        username TEXT NOT NULL,
        password_enc TEXT NOT NULL,
        from_email TEXT,
        from_name TEXT,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    const adminResult = await pool.query(
      `INSERT INTO admin_users (username, password_hash)
       VALUES ($1, $2)
       ON CONFLICT (username) DO UPDATE SET password_hash = EXCLUDED.password_hash`,
      [ADMIN_USERNAME, ADMIN_PASSWORD_HASH]
    );
    if ((adminResult.rowCount ?? 0) > 0) {
      logger.info("[seed] Admin user upserted");
    } else {
      logger.info("[seed] Admin user already exists, skipping");
    }

    for (const row of DOMAIN_PRICING) {
      await pool.query(
        `INSERT INTO domain_pricing (tld, register, renew, transfer, sort_order, enabled)
         VALUES ($1, $2, $3, $4, $5, true)
         ON CONFLICT (tld) DO NOTHING`,
        [row.tld, row.register, row.renew, row.transfer, row.sort_order]
      );
    }
    logger.info("[seed] Domain pricing seeded");
  } catch (err) {
    logger.error({ err }, "[seed] Seed failed");
    throw err;
  }
}
