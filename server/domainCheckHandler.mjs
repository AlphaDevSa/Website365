import { fallbackWhoisAvailability } from './fallbackWhoisAvailability.mjs';
import { STATIC_PRICING, extractTld } from './pricing.mjs';

export const handleDomainCheck = async (req, res, { origin = 'https://website365.co.za' } = {}) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const domain = url.searchParams.get('domain') || '';
    const action = (url.searchParams.get('action') || 'register').toLowerCase();
    const normalizedInput = String(domain || '').trim().toLowerCase();

    if (!normalizedInput || !normalizedInput.includes('.') || /\s/.test(normalizedInput)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.end(JSON.stringify({ error: 'Enter a full domain like example.co.za' }));
      return;
    }

    const lookup = await fallbackWhoisAvailability({ domain: normalizedInput });
    const result = {
      domain: lookup.domain,
      status: lookup.available ? 'available' : 'unavailable',
      available: lookup.available,
      whois: '',
      detail: ''
    };

    const transferable = result.status === 'unavailable';
    const tld = extractTld(result.domain);
    const pricing = STATIC_PRICING[tld] || null;

    const domainPriceAmount = action === 'register'
      ? pricing?.register ?? null
      : action === 'transfer'
        ? pricing?.transfer ?? null
        : null;

    const payload = {
      domain: result.domain,
      status: result.status,
      available: result.available,
      transferable,
      action,
      pricing: domainPriceAmount == null ? null : {
        currencyCode: 'ZAR',
        amount: domainPriceAmount,
        periodYears: 1
      },
      lookup: {
        status: result.status,
        whoisSnippet: '',
        source: 'whois',
        detail: ''
      }
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
    const isTimeout = String(err?.message || '').includes('timed out');
    res.statusCode = isTimeout ? 504 : 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify({ error: isTimeout ? 'WHOIS lookup timed out' : (err?.message || 'Domain check failed') }));
  }
};
