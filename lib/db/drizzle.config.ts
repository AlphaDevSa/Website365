import { defineConfig } from "drizzle-kit";
import path from "path";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

const databaseUrl = (() => {
  try {
    const url = new URL(process.env.DATABASE_URL);
    const sslMode = url.searchParams.get("sslmode");
    const hasSslParam = url.searchParams.has("ssl");

    if (sslMode?.toLowerCase() === "require" && !hasSslParam) {
      url.searchParams.set("ssl", "true");
    }

    return url.toString();
  } catch {
    return process.env.DATABASE_URL;
  }
})();

export default defineConfig({
  schema: path.join(__dirname, "./src/schema/index.ts"),
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
