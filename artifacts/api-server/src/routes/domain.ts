import { Router, type IRouter, type Request, type Response } from "express";
import dns from "dns";
import { promisify } from "util";

const router: IRouter = Router();

const resolve4 = promisify(dns.resolve4);
const resolveNs = promisify(dns.resolveNs);

// --- Static Pricing ---
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
  if (!raw) {
    res.status(400).json({ error: "Missing tlds parameter" });
    return;
  }

  const tlds = raw
    .split(",")
    .map((t) => t.trim().toLowerCase().replace(/^\./, ""))
    .filter(Boolean)
    .slice(0, 20);

  const result: Record<string, { register: number | null; renew: number | null; transfer: number | null }> = {};
  for (const tld of tlds) {
    const p = STATIC_PRICING[tld] || null;
    result[tld] = {
      register: p?.register ?? null,
      renew: p?.renew ?? null,
      transfer: p?.transfer ?? null,
    };
  }

  res.json({ currencyCode: "ZAR", tlds: result });
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
    const hasDns = await withTimeout(hasDnsRecords(domain), 8000);
    const available = !hasDns;

    const tld = extractTld(domain);
    const pricing = STATIC_PRICING[tld] || null;
    const domainPriceAmount =
      action === "register" ? pricing?.register ?? null :
      action === "transfer" ? pricing?.transfer ?? null :
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
