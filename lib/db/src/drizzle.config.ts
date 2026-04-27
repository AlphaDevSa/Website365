import { defineConfig } from "drizzle-kit"
import { fileURLToPath } from "url"

const rawDatabaseUrl = process.env.DATABASE_URL

if (!rawDatabaseUrl) {
  throw new Error("DATABASE_URL, ensure the database is provisioned")
}

const databaseUrl = (() => {
  try {
    const url = new URL(rawDatabaseUrl)
    const sslMode = url.searchParams.get("sslmode")
    const hasSslParam = url.searchParams.has("ssl")

    if (sslMode?.toLowerCase() === "require" && !hasSslParam) {
      url.searchParams.set("ssl", "true")
    }

    return url.toString()
  } catch {
    return rawDatabaseUrl
  }
})()

const schema = fileURLToPath(new URL("./schema/index.ts", import.meta.url))

export default defineConfig({
  schema,
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
})
