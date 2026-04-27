import pg from "pg"
import dns from "dns/promises"

const { Client } = pg

type MigrationMode = "merge" | "replace"

const SOURCE_DATABASE_URL = process.env.SOURCE_DATABASE_URL
const TARGET_DATABASE_URL = process.env.TARGET_DATABASE_URL
const mode: MigrationMode =
  process.env.MIGRATE_MODE === "replace" ? "replace" : "merge"

if (!SOURCE_DATABASE_URL) throw new Error("SOURCE_DATABASE_URL must be set")
if (!TARGET_DATABASE_URL) throw new Error("TARGET_DATABASE_URL must be set")

const sourceUrl = SOURCE_DATABASE_URL
const targetUrl = TARGET_DATABASE_URL

type RedactedUrlParts = {
  protocol: string
  username: string | null
  host: string
  database: string | null
  search: string
}

function redactDatabaseUrl(databaseUrl: string): string {
  try {
    const url = new URL(databaseUrl)
    const parts: RedactedUrlParts = {
      protocol: url.protocol,
      username: url.username ? `${url.username.slice(0, 2)}…` : null,
      host: url.host,
      database: url.pathname ? url.pathname.replace(/^\//, "") : null,
      search: url.search,
    }
    const user = parts.username ? `${parts.username}:***@` : ""
    const db = parts.database ? `/${parts.database}` : ""
    return `${parts.protocol}//${user}${parts.host}${db}${parts.search}`
  } catch {
    return "[unparseable DATABASE_URL]"
  }
}

async function preflightDns(label: string, databaseUrl: string): Promise<void> {
  let hostname: string
  try {
    hostname = new URL(databaseUrl).hostname
  } catch {
    throw new Error(`${label} is not a valid URL`)
  }

  try {
    await dns.lookup(hostname, { all: true })
  } catch (err) {
    const e = err as { code?: unknown; message?: unknown }
    const code = typeof e.code === "string" ? e.code : "UNKNOWN"
    const msg = typeof e.message === "string" ? e.message : String(err)
    throw new Error(
      `${label} DNS lookup failed (${code}) for host "${hostname}". ${msg}`,
    )
  }
}

async function connectWithContext(label: string, databaseUrl: string): Promise<pg.Client> {
  await preflightDns(label, databaseUrl)
  const client = createClient(databaseUrl)
  try {
    await client.connect()
    return client
  } catch (err) {
    const e = err as { code?: unknown; message?: unknown }
    const code = typeof e.code === "string" ? e.code : "UNKNOWN"
    const msg = typeof e.message === "string" ? e.message : String(err)
    throw new Error(`${label} connection failed (${code}): ${msg}. URL=${redactDatabaseUrl(databaseUrl)}`)
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

function createClient(databaseUrl: string): pg.Client {
  return new Client({
    connectionString: databaseUrl,
    ssl: shouldUseSsl(databaseUrl) ? true : undefined,
  })
}

async function queryCount(client: pg.Client, table: string): Promise<number> {
  const r = await client.query<{ count: string }>(`select count(*)::text as count from ${table}`)
  return Number(r.rows[0]?.count ?? 0)
}

async function migrateAdminUsers(source: pg.Client, target: pg.Client): Promise<void> {
  const rows = await source.query<{
    username: string
    password_hash: string
    created_at: string
  }>("select username, password_hash, created_at from admin_users")

  for (const r of rows.rows) {
    await target.query(
      `insert into admin_users (username, password_hash, created_at)
       values ($1, $2, $3)
       on conflict (username) do update
       set password_hash = excluded.password_hash`,
      [r.username, r.password_hash, r.created_at],
    )
  }
}

async function migrateDomainPricing(source: pg.Client, target: pg.Client): Promise<void> {
  const rows = await source.query<{
    tld: string
    register: string
    renew: string
    transfer: string
    sort_order: number
    enabled: boolean
    created_at: string
    updated_at: string
  }>(
    "select tld, register, renew, transfer, sort_order, enabled, created_at, updated_at from domain_pricing",
  )

  for (const r of rows.rows) {
    await target.query(
      `insert into domain_pricing (tld, register, renew, transfer, sort_order, enabled, created_at, updated_at)
       values ($1, $2, $3, $4, $5, $6, $7, $8)
       on conflict (tld) do update set
         register = excluded.register,
         renew = excluded.renew,
         transfer = excluded.transfer,
         sort_order = excluded.sort_order,
         enabled = excluded.enabled,
         updated_at = excluded.updated_at`,
      [
        r.tld,
        r.register,
        r.renew,
        r.transfer,
        r.sort_order,
        r.enabled,
        r.created_at,
        r.updated_at,
      ],
    )
  }
}

async function migrateFormSubmissions(source: pg.Client, target: pg.Client): Promise<void> {
  const rows = await source.query<{
    id: number
    form_type: string
    data: unknown
    submitted_at: string
  }>("select id, form_type, data, submitted_at from form_submissions order by id asc")

  for (const r of rows.rows) {
    await target.query(
      `insert into form_submissions (id, form_type, data, submitted_at)
       values ($1, $2, $3::jsonb, $4)
       on conflict (id) do nothing`,
      [r.id, r.form_type, JSON.stringify(r.data ?? {}), r.submitted_at],
    )
  }

  await target.query(
    `select setval(pg_get_serial_sequence('form_submissions','id'),
      (select coalesce(max(id), 0) from form_submissions)
    )`,
  )
}

async function ensureTargetTablesExist(target: pg.Client): Promise<void> {
  await target.query(`
    create table if not exists admin_users (
      id serial primary key,
      username text not null unique,
      password_hash text not null,
      created_at timestamptz default now()
    )
  `)

  await target.query(`
    create table if not exists form_submissions (
      id serial primary key,
      form_type text not null,
      data jsonb not null,
      submitted_at timestamptz default now()
    )
  `)

  await target.query(`
    create table if not exists domain_pricing (
      id serial primary key,
      tld varchar(50) not null unique,
      register numeric(10,2) not null default 0,
      renew numeric(10,2) not null default 0,
      transfer numeric(10,2) not null default 0,
      sort_order integer not null default 99,
      enabled boolean not null default true,
      created_at timestamptz default now(),
      updated_at timestamptz default now()
    )
  `)
}

async function truncateTarget(target: pg.Client): Promise<void> {
  await target.query("truncate table form_submissions restart identity cascade")
  await target.query("truncate table domain_pricing restart identity cascade")
  await target.query("truncate table admin_users restart identity cascade")
}

async function main(): Promise<void> {
  const source = await connectWithContext("SOURCE_DATABASE_URL", sourceUrl)
  const target = await connectWithContext("TARGET_DATABASE_URL", targetUrl)

  try {
    await ensureTargetTablesExist(target)
    if (mode === "replace") {
      await truncateTarget(target)
    }

    const before = {
      admin_users: await queryCount(target, "admin_users"),
      domain_pricing: await queryCount(target, "domain_pricing"),
      form_submissions: await queryCount(target, "form_submissions"),
    }

    await target.query("begin")
    try {
      await migrateAdminUsers(source, target)
      await migrateDomainPricing(source, target)
      await migrateFormSubmissions(source, target)
      await target.query("commit")
    } catch (err) {
      await target.query("rollback")
      throw err
    }

    const after = {
      admin_users: await queryCount(target, "admin_users"),
      domain_pricing: await queryCount(target, "domain_pricing"),
      form_submissions: await queryCount(target, "form_submissions"),
    }

    process.stdout.write(
      JSON.stringify({ mode, before, after }, null, 2) + "\n",
    )
  } finally {
    await Promise.allSettled([source.end(), target.end()])
  }
}

main().catch((err) => {
  const msg = err instanceof Error ? err.message : String(err)
  process.stderr.write(msg + "\n")
  process.exit(1)
})
