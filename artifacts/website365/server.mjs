import http from 'http';
import { handleDomainCheck } from './server/domainCheckHandler.mjs';
import { handleDomainPricing } from './server/domainPricingHandler.mjs';

const port = Number.parseInt(process.env.PORT || '4173', 10);
const origin = process.env.CORS_ORIGIN || 'https://website365.co.za';

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/api/domain/check') {
    await handleDomainCheck(req, res, { origin });
    return;
  }
  if (url.pathname === '/api/domain/pricing') {
    await handleDomainPricing(req, res, { origin });
    return;
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(port, () => {
  process.stdout.write(`Server listening on http://localhost:${port}\n`);
});
