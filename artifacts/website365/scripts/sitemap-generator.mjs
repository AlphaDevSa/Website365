
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const publicDir = path.resolve(__dirname, '../public');
const baseUrl = 'https://website365.co.za';
const today = new Date().toISOString().slice(0, 10);

const coreRoutes = [
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
  { path: '/servers/vps', priority: 0.8, changefreq: 'weekly' },
  { path: '/servers/high-performance-vps', priority: 0.8, changefreq: 'weekly' },
  { path: '/servers/vds', priority: 0.8, changefreq: 'weekly' },
  { path: '/hosting/reseller', priority: 0.8, changefreq: 'weekly' },
  { path: '/hosting/reseller/cpanel', priority: 0.7, changefreq: 'weekly' },
  { path: '/hosting/reseller/master', priority: 0.7, changefreq: 'weekly' },
  { path: '/web-design/website', priority: 0.8, changefreq: 'monthly' },
  { path: '/web-design/maintenance', priority: 0.7, changefreq: 'monthly' },
  { path: '/web-design/development', priority: 0.7, changefreq: 'monthly' },
  { path: '/web-design/ecommerce', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
];

const saProvinces = [
  {
    slug: 'gauteng',
    cities: [
      'johannesburg','sandton','midrand','centurion','pretoria','randburg','roodepoort',
      'germiston','alberton','edenvale','boksburg','benoni','brakpan','springs','soweto',
      'krugersdorp','vereeniging','vanderbijlpark','nigel','kempton-park','tembisa',
      'fourways','bryanston','rosebank','bedfordview','diepsloot','soshanguve','mamelodi',
      'menlyn','lynnwood','hatfield','rivonia','woodmead','sunninghill','kyalami',
      'halfway-house','parktown','hyde-park','illovo','norwood','alexandra','lenasia',
      'orange-farm','atteridgeville','brooklyn-pretoria','waterkloof','lyttelton','irene',
      'randfontein','ekurhuleni',
    ]
  },
  {
    slug: 'western-cape',
    cities: [
      'cape-town','bellville','paarl','stellenbosch','somerset-west','george','knysna',
      'mossel-bay','oudtshoorn','worcester','hermanus','strand','claremont','rondebosch',
      'wynberg','muizenberg','fish-hoek','simons-town','hout-bay','green-point','sea-point',
      'bloubergstrand','melkbosstrand','durbanville','brackenfell','century-city','milnerton',
      'plettenberg-bay','jeffreys-bay','wilderness','langebaan','saldanha','wellington',
      'franschhoek','malmesbury','swellendam','caledon','grabouw','robertson','montagu',
      'barrydale','beaufort-west','parow','goodwood','pinelands','khayelitsha',
      'mitchells-plain','athlone','kuils-river','gordons-bay','tableview','parklands',
    ]
  },
  {
    slug: 'kwazulu-natal',
    cities: [
      'durban','pietermaritzburg','umhlanga','pinetown','westville','hillcrest','amanzimtoti',
      'ballito','port-shepstone','ladysmith','newcastle','richards-bay','vryheid','kokstad',
      'scottburgh','margate','tongaat','phoenix-kzn','chatsworth','stanger','kwadukuza',
      'mtubatuba','empangeni','ulundi','dundee','howick','estcourt','ixopo','greytown',
      'umzinto','umlazi','kingsburgh','la-lucia','kloof',
    ]
  },
  {
    slug: 'eastern-cape',
    cities: [
      'port-elizabeth','gqeberha','east-london','grahamstown','makhanda','queenstown',
      'uitenhage','despatch','humansdorp','port-alfred','aliwal-north','cradock',
      'graaff-reinet','king-williams-town','bhisho','butterworth','mthatha','dimbaza',
      'barkly-east','elliot','lady-frere','sterkstroom',
    ]
  },
  {
    slug: 'free-state',
    cities: [
      'bloemfontein','welkom','bethlehem','phuthaditjhaba','sasolburg','kroonstad','parys',
      'virginia-fs','odendaalsrus','frankfort','ficksburg','ladybrand','botshabelo',
      'thaba-nchu','hennenman','viljoenskroon','theunissen','wesselsbron','winburg',
      'vredefort','senekal',
    ]
  },
  {
    slug: 'limpopo',
    cities: [
      'polokwane','pietersburg','tzaneen','phalaborwa','thohoyandou','mokopane','bela-bela',
      'lephalale','seshego','makhado','louis-trichardt','musina','giyani','malamulele',
      'thabazimbi','northam','marble-hall','jane-furse','burgersfort','lebowakgomo',
      'alldays','hoedspruit','haenertsburg',
    ]
  },
  {
    slug: 'mpumalanga',
    cities: [
      'nelspruit','mbombela','witbank','emalahleni','secunda','standerton',
      'middelburg-mpumalanga','ermelo','barberton','white-river','hazyview','sabie',
      'graskop','lydenburg','mashishing','carolina','belfast-mpumalanga','trichardt',
      'piet-retief','volksrust',
    ]
  },
  {
    slug: 'north-west',
    cities: [
      'klerksdorp','mafikeng','mahikeng','rustenburg','brits','hartbeespoort',
      'potchefstroom','vryburg','lichtenburg','wolmaransstad','schweizer-reneke',
      'stilfontein','orkney','fochville','coligny','delareyville','zeerust',
      'swartruggens','koster','groot-marico','mmabatho',
    ]
  },
  {
    slug: 'northern-cape',
    cities: [
      'kimberley','upington','springbok','de-aar','kathu','kuruman','prieska','britstown',
      'carnarvon','calvinia','vanrhynsdorp','vredendal','clanwilliam','sutherland',
      'victoria-west','hanover-nc','richmond-nc','loxton','fraserburg','williston',
      'griquatown','hartswater','jan-kempdorp',
    ]
  },
];

const locationRoutes = saProvinces.flatMap(({ cities }) =>
  cities.map((citySlug) => ({
    path: `/location/${citySlug}`,
    priority: 0.6,
    changefreq: 'monthly',
  }))
);

const allRoutes = [...coreRoutes, ...locationRoutes];

const urlEntry = ({ path, priority, changefreq }) => {
  const loc = `${baseUrl}${path === '/' ? '' : path}`;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    '  </url>',
  ].join('\n');
};

const sitemapContent = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  allRoutes.map(urlEntry).join('\n'),
  '</urlset>',
].join('\n');

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8');
console.log(`Sitemap generated with ${allRoutes.length} URLs (${locationRoutes.length} location pages).`);
