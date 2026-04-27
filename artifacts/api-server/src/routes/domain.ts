import { Router, type IRouter, type Request, type Response } from "express";
import dns from "dns";
import { promisify } from "util";
import { pool } from "@workspace/db";

const router: IRouter = Router();

const resolve4 = promisify(dns.resolve4);
const resolveNs = promisify(dns.resolveNs);

// Fallback static pricing (used if DB is unavailable)
const STATIC_PRICING: Record<string, { register: number; transfer: number; renew: number }> = {
  "co.za":    { register: 99,  transfer: 0,   renew: 99  },
  "org.za":   { register: 99,  transfer: 0,   renew: 99  },
  "net.za":   { register: 99,  transfer: 0,   renew: 99  },
  "web.za":   { register: 99,  transfer: 0,   renew: 99  },
  "capetown": { register: 295, transfer: 295, renew: 295 },
  "durban":   { register: 295, transfer: 295, renew: 295 },
  "joburg":   { register: 295, transfer: 295, renew: 295 },
  "africa":   { register: 295, transfer: 295, renew: 295 },
  "com":      { register: 249, transfer: 249, renew: 249 },
  "net":      { register: 289, transfer: 289, renew: 289 },
  "org":      { register: 299, transfer: 299, renew: 299 },
  "info":     { register: 329, transfer: 329, renew: 329 },
  "biz":      { register: 349, transfer: 349, renew: 349 },
  "online":   { register: 199, transfer: 199, renew: 199 },
  "site":     { register: 149, transfer: 149, renew: 149 },
  "tech":     { register: 249, transfer: 249, renew: 249 },
};

type PricingRow = { tld: string; register: string; renew: string; transfer: string };

// Load all enabled pricing rows from DB, fall back to static
async function loadPricing(): Promise<Record<string, { register: number; renew: number; transfer: number }>> {
  if (!pool) return STATIC_PRICING;
  try {
    const result = await pool.query<PricingRow>(
      "SELECT tld, register, renew, transfer FROM domain_pricing WHERE enabled = true ORDER BY sort_order ASC"
    );
    if (result.rows.length === 0) return STATIC_PRICING;
    const map: Record<string, { register: number; renew: number; transfer: number }> = {};
    for (const row of result.rows) {
      map[row.tld] = {
        register: Number(row.register),
        renew: Number(row.renew),
        transfer: Number(row.transfer),
      };
    }
    return map;
  } catch {
    return STATIC_PRICING;
  }
}

const extractTld = (domain: string): string => {
  const d = String(domain || "").trim().toLowerCase();
  if (!d.includes(".")) return "";
  const parts = d.split(".").filter(Boolean);
  if (parts.length < 2) return "";
  const last = parts[parts.length - 1];
  const secondLast = parts[parts.length - 2];
  const candidate2 = `${secondLast}.${last}`;
  if (["co.za", "org.za", "net.za", "web.za"].includes(candidate2)) return candidate2;
  return last;
};

// --- Domain Pricing Endpoint ---
router.get("/domain/pricing", async (req: Request, res: Response) => {
  const raw = String(req.query.tlds || "").trim();

  const pricing = await loadPricing();

  // If specific TLDs requested, return just those; else return all
  const tlds = raw
    ? raw.split(",").map((t) => t.trim().toLowerCase().replace(/^\./, "")).filter(Boolean).slice(0, 50)
    : Object.keys(pricing);

  const result: Record<string, { register: number | null; renew: number | null; transfer: number | null }> = {};
  for (const tld of tlds) {
    const p = pricing[tld] || null;
    result[tld] = {
      register: p?.register ?? null,
      renew: p?.renew ?? null,
      transfer: p?.transfer ?? null,
    };
  }

  res.json({ currencyCode: "ZAR", tlds: result });
});

// --- All enabled TLDs (for dropdown population) ---
router.get("/domain/tlds", async (_req: Request, res: Response) => {
  if (!pool) {
    res.json({ tlds: Object.keys(STATIC_PRICING) });
    return;
  }
  try {
    const result = await pool.query<{ tld: string }>(
      "SELECT tld FROM domain_pricing WHERE enabled = true ORDER BY sort_order ASC"
    );
    const tlds = result.rows.length > 0 ? result.rows.map((r) => r.tld) : Object.keys(STATIC_PRICING);
    res.json({ tlds });
  } catch {
    res.json({ tlds: Object.keys(STATIC_PRICING) });
  }
});

// --- Domain Check Endpoint ---
const hasDnsRecords = async (domain: string): Promise<boolean> => {
  try {
    const results = await Promise.allSettled([resolve4(domain), resolveNs(domain)]);
    return results.some((r) => r.status === "fulfilled");
  } catch {
    return false;
  }
};

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => reject(new Error("timed out")), ms);
    promise.then(
      (val) => { clearTimeout(id); resolve(val); },
      (err) => { clearTimeout(id); reject(err); }
    );
  });
};

router.get("/domain/check", async (req: Request, res: Response) => {
  const domain = String(req.query.domain || "").trim().toLowerCase();
  const action = String(req.query.action || "register").toLowerCase();

  if (!domain || !domain.includes(".") || /\s/.test(domain)) {
    res.status(400).json({ error: "Enter a full domain like example.co.za" });
    return;
  }

  try {
    const [hasDns, pricing] = await Promise.all([
      withTimeout(hasDnsRecords(domain), 8000),
      loadPricing(),
    ]);
    const available = !hasDns;

    const tld = extractTld(domain);
    const domainPricing = pricing[tld] || null;
    const domainPriceAmount =
      action === "register" ? domainPricing?.register ?? null :
      action === "transfer" ? domainPricing?.transfer ?? null :
      null;

    res.json({
      domain,
      status: available ? "available" : "unavailable",
      available,
      transferable: !available,
      action,
      pricing: domainPriceAmount == null ? null : {
        currencyCode: "ZAR",
        amount: domainPriceAmount,
        periodYears: 1,
      },
      lookup: {
        status: available ? "available" : "unavailable",
        whoisSnippet: "",
        source: "dns",
        detail: "",
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Domain check failed";
    const isTimeout = msg.includes("timed out");
    res.status(isTimeout ? 504 : 500).json({
      error: isTimeout ? "Domain check timed out. Please try again." : msg,
    });
  }
});

export default router;
