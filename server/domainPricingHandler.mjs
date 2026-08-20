import { STATIC_PRICING } from './pricing.mjs';

const parseTlds = (value) => {
  const raw = String(value || '').trim();
  if (!raw) return [];
  return raw
    .split(',')
    .map((t) => t.trim().toLowerCase().replace(/^\./, ''))
    .filter(Boolean)
    .slice(0, 20);
};

export const handleDomainPricing = async (req, res, { origin = 'https://website365.co.za' } = {}) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const tlds = parseTlds(url.searchParams.get('tlds'));
    
    if (!tlds.length) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.end(JSON.stringify({ error: 'Missing tlds parameter' }));
      return;
    }

    const payload = {
      currencyCode: 'ZAR',
      tlds: Object.fromEntries(
        tlds.map((tld) => {
          const pricing = STATIC_PRICING[tld] || null;
          return [
            tld,
            {
              register: pricing?.register ?? null,
              renew: pricing?.renew ?? null,
              transfer: pricing?.transfer ?? null
            }
          ];
        })
      )
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
    }
    res.end(JSON.stringify(payload));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify({ error: err?.message || 'Domain pricing failed' }));
  }
};
