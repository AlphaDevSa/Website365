import fs from "fs"
import path from "path"
import pg from "pg"

const { Client } = pg

function loadDotEnv(): void {
  const candidates = [
    path.resolve(process.cwd(), ".env"),
    path.resolve(process.cwd(), "..", ".env"),
  ]

  const envPath = candidates.find((p) => fs.existsSync(p))
  if (!envPath) return

  const raw = fs.readFileSync(envPath, "utf8")
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eq = trimmed.indexOf("=")
    if (eq <= 0) continue
    const key = trimmed.slice(0, eq).trim()
    const value = trimmed.slice(eq + 1)
    if (!key) continue
    const current = process.env[key]
    const shouldOverride =
      current == null ||
      current === "" ||
      (typeof current === "string" && current.includes("does-not-exist.invalid"))
    if (shouldOverride) process.env[key] = value
  }
}

function shouldUseSsl(databaseUrl: string): boolean {
  try {
    const url = new URL(databaseUrl)
    const sslMode = url.searchParams.get("sslmode")
    if (sslMode?.toLowerCase() === "require") return true
    if (url.hostname.endsWith(".neon.tech")) return true
    return false
  } catch {
    return false
  }
}

async function main(): Promise<void> {
  loadDotEnv()

  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) throw new Error("DATABASE_URL must be set")

  const client = new Client({
    connectionString: databaseUrl,
    ssl: shouldUseSsl(databaseUrl) ? true : undefined,
  })

  const statements = [
    `CREATE SCHEMA IF NOT EXISTS "public"`,
    `CREATE TABLE IF NOT EXISTS "admin_users" (
      "id" serial PRIMARY KEY,
      "username" text NOT NULL CONSTRAINT "admin_users_username_key" UNIQUE,
      "password_hash" text NOT NULL,
      "created_at" timestamp with time zone DEFAULT now()
    )`,
    `CREATE TABLE IF NOT EXISTS "domain_pricing" (
      "id" serial PRIMARY KEY,
      "tld" varchar(50) NOT NULL CONSTRAINT "domain_pricing_tld_key" UNIQUE,
      "register" numeric(10, 2) DEFAULT '0' NOT NULL,
      "renew" numeric(10, 2) DEFAULT '0' NOT NULL,
      "transfer" numeric(10, 2) DEFAULT '0' NOT NULL,
      "sort_order" integer DEFAULT 0 NOT NULL,
      "enabled" boolean DEFAULT true NOT NULL,
      "created_at" timestamp with time zone DEFAULT now() NOT NULL,
      "updated_at" timestamp with time zone DEFAULT now() NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS "form_submissions" (
      "id" serial PRIMARY KEY,
      "form_type" text NOT NULL,
      "data" jsonb NOT NULL,
      "submitted_at" timestamp with time zone DEFAULT now()
    )`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "admin_users_pkey" ON "admin_users" ("id")`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "admin_users_username_key" ON "admin_users" ("username")`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "domain_pricing_pkey" ON "domain_pricing" ("id")`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "domain_pricing_tld_key" ON "domain_pricing" ("tld")`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "form_submissions_pkey" ON "form_submissions" ("id")`,
  ]

  await client.connect()
  try {
    await client.query("begin")
    try {
      for (const sql of statements) {
        await client.query(sql)
      }
      await client.query("commit")
    } catch (err) {
      await client.query("rollback")
      throw err
    }

    const verify = await client.query<{
      table_name: string
    }>(
      "select table_name from information_schema.tables where table_schema = 'public' and table_name in ('admin_users','domain_pricing','form_submissions') order by table_name",
    )
    process.stdout.write(`Tables: ${verify.rows.map((r) => r.table_name).join(", ")}\n`)
  } finally {
    await client.end()
  }

  process.stdout.write("Schema applied.\n")
}

main().catch((err) => {
  const msg = err instanceof Error ? err.message : String(err)
  process.stderr.write(msg + "\n")
  process.exit(1)
})
