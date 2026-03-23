import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import metadata from '../../public/metadata.json';
import {
  generateOrganizationData,
  generateWebSiteData,
  generateLocalBusinessData,
} from '../utils/structuredData';
import { seoLocations } from '../utils/seoLocations';

const SEO = ({
  titleOverride,
  descriptionOverride,
  keywordsOverride,
  canonicalOverride,
  extraSchemas = [],
  noLocalExpansion = false,
}) => {
  const location = useLocation();
  const path = location.pathname;

  const pageMeta = metadata[path] || {
    title: '404 Not Found | Website365',
    description: 'The page you are looking for does not exist.',
    keywords: '',
    localSeoPrefixes: [],
  };

  const title = titleOverride || pageMeta.title;
  const description = descriptionOverride || pageMeta.description;
  const canonicalUrl = canonicalOverride || `https://website365.co.za${path}`;

  const baseKeywords =
    typeof (keywordsOverride || pageMeta.keywords) === 'string'
      ? (keywordsOverride || pageMeta.keywords)
          .split(',')
          .map((k) => k.trim())
          .filter(Boolean)
      : [];

  const localSeoPrefixes = Array.isArray(pageMeta.localSeoPrefixes)
    ? pageMeta.localSeoPrefixes
    : [];

  const localKeywords =
    !noLocalExpansion && localSeoPrefixes.length > 0
      ? localSeoPrefixes.flatMap((prefix) =>
          seoLocations.map((loc) => `${prefix} ${loc}`)
        )
      : [];

  const keywords = Array.from(
    new Set([...baseKeywords, ...localKeywords])
  ).join(', ');

  const organizationSchema = generateOrganizationData();
  const localBusinessSchema = generateLocalBusinessData();
  const websiteSchema = generateWebSiteData();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Website365" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
      <meta httpEquiv="content-language" content="en-ZA" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://website365.co.za/opengraph.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Website365" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://website365.co.za/opengraph.jpg" />
      <meta name="twitter:site" content="@website365" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {extraSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
