
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
const baseUrl = 'https://website365.co.za';

const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/hosting', priority: 0.9, changefreq: 'weekly' },
  { path: '/domains', priority: 0.9, changefreq: 'weekly' },
  { path: '/web-design', priority: 0.9, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/partners', priority: 0.7, changefreq: 'monthly' },

  { path: '/domains/registration', priority: 0.8, changefreq: 'weekly' },
  { path: '/domains/transfer', priority: 0.8, changefreq: 'weekly' },
  { path: '/domains/reseller', priority: 0.7, changefreq: 'monthly' },

  { path: '/hosting/cpanel', priority: 0.8, changefreq: 'weekly' },
  { path: '/hosting/directadmin', priority: 0.7, changefreq: 'weekly' },
  { path: '/hosting/wordpress', priority: 0.8, changefreq: 'weekly' },
  { path: '/hosting/email', priority: 0.7, changefreq: 'weekly' },

  { path: '/servers', priority: 0.7, changefreq: 'weekly' },
  { path: '/servers/vps', priority: 0.7, changefreq: 'weekly' },

  { path: '/hosting/reseller', priority: 0.8, changefreq: 'weekly' },
  { path: '/hosting/reseller/cpanel', priority: 0.7, changefreq: 'weekly' },
  { path: '/hosting/reseller/master', priority: 0.7, changefreq: 'weekly' },

  { path: '/web-design/website', priority: 0.8, changefreq: 'monthly' },
  { path: '/web-design/maintenance', priority: 0.7, changefreq: 'monthly' },
  { path: '/web-design/development', priority: 0.7, changefreq: 'monthly' },
  { path: '/web-design/ecommerce', priority: 0.8, changefreq: 'monthly' },

  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms', priority: 0.3, changefreq: 'yearly' }
];

const generateSitemap = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(({ path, priority, changefreq }) => {
      const loc = `${baseUrl}${path === '/' ? '' : path}`;
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority.toFixed(1)}</priority>`,
        '  </url>'
      ].join('\n');
    })
    .join('\n');

  const sitemapContent = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
  `.trim();

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
