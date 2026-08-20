import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import metadata from '../../public/metadata.json';
import { generateOrganizationData, generateWebSiteData } from '../utils/structuredData';
import { seoLocations } from '../utils/seoLocations';

const SEO = () => {
  const location = useLocation();
  const path = location.pathname;

  const pageMeta = metadata[path] || {
    title: '404 Not Found | Website365',
    description: 'The page you are looking for does not exist.'
  };

  const canonicalUrl = `https://website365.co.za${path}`;
  const organizationSchema = generateOrganizationData();
  const websiteSchema = generateWebSiteData();

  const baseKeywords = typeof pageMeta.keywords === 'string'
    ? pageMeta.keywords.split(',').map((k) => k.trim()).filter(Boolean)
    : [];

  const localSeoPrefixes = Array.isArray(pageMeta.localSeoPrefixes) ? pageMeta.localSeoPrefixes : [];
  const localKeywords = localSeoPrefixes.flatMap((prefix) =>
    seoLocations.map((loc) => `${prefix} ${loc}`)
  );

  const keywords = Array.from(new Set([...baseKeywords, ...localKeywords])).join(', ');

  return (
    <Helmet>
      <title>{pageMeta.title}</title>
      <meta name="description" content={pageMeta.description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:image" content="https://website365.co.za/og-image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageMeta.title} />
      <meta property="twitter:description" content={pageMeta.description} />
      <meta property="twitter:image" content="https://website365.co.za/og-image.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
