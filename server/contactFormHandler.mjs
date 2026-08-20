export const handleContactForm = async (req, res, { origin = 'https://website365.co.za' } = {}) => {
  try {
    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.end(JSON.stringify({ error: 'Method Not Allowed' }));
      return;
    }

    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const formData = JSON.parse(body);
        
        // In development, we simulate a successful submission
        // You can later add real email sending or WHMCS API calls here
        console.log('Form submission received:', formData);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        if (origin) {
          res.setHeader('Access-Control-Allow-Origin', origin);
          res.setHeader('Vary', 'Origin');
        }
        res.end(JSON.stringify({ success: true, message: 'Form submitted successfully' }));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify({ error: err?.message || 'Form submission failed' }));
  }
};
