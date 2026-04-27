import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  generateOrganizationData,
  generateBreadcrumbData,
  generateWebPageData,
  generateWebSiteData,
  generateLocalBusinessData,
} from '../utils/structuredData';
import { seoLocations } from '../utils/seoLocations';

const MAX_KEYWORDS = 60;

function titleToLabel(title) {
  if (typeof title !== 'string') return null;
  const primary = title.split('|')[0]?.trim();
  return primary || null;
}

function segmentToLabel(segment) {
  if (!segment) return '';
  return segment
    .replace(/-/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const SEO = ({
  title,
  titleOverride,
  description,
  descriptionOverride,
  keywords,
  keywordsOverride,
  canonical,
  canonicalOverride,
  robotsOverride,
  extraSchemas = [],
  noLocalExpansion = false,
  breadcrumbItemsOverride,
  geoPlacenameOverride,
}) => {
  const [metadata, setMetadata] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const cached = sessionStorage.getItem('website365:metadata');
      if (!cached) return null;
      return JSON.parse(cached);
    } catch {
      return null;
    }
  });
  const [metadataLoading, setMetadataLoading] = useState(metadata === null);
  const [metadataError, setMetadataError] = useState(null);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    let alive = true;
    const controller = new AbortController();

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fetchAndCacheMetadata = async ({ background } = {}) => {
      const maxRetries = 4;
      const baseDelayMs = 300;

      if (!background) {
        if (alive) setMetadataLoading(true);
      }
      if (alive) setMetadataError(null);

      let attempt = 0;
      while (attempt <= maxRetries && alive && !controller.signal.aborted) {
        try {
          const r = await fetch('/metadata.json', { signal: controller.signal });
          if (!r.ok) {
            const err = new Error(`metadata.json request failed (${r.status})`);
            err.retryable = r.status >= 500;
            throw err;
          }
          const data = await r.json();
          try {
            sessionStorage.setItem('website365:metadata', JSON.stringify(data));
          } catch {}
          if (alive) setMetadata(data);
          if (!background && alive) setMetadataLoading(false);
          return;
        } catch (err) {
          if (controller.signal.aborted || !alive) return;

          const retryable =
            err && typeof err === 'object' && 'retryable' in err ? err.retryable === true : true;
          if (!retryable || attempt >= maxRetries) {
            if (alive) {
              setMetadataError(err instanceof Error ? err.message : 'Failed to load metadata');
              if (!background) setMetadataLoading(false);
            }
            return;
          }

          const jitter = Math.floor(Math.random() * 150);
          const delay = baseDelayMs * 2 ** attempt + jitter;
          attempt += 1;
          await sleep(delay);
        }
      }
    };

    if (metadata === null) {
      fetchAndCacheMetadata();
    } else {
      fetchAndCacheMetadata({ background: true });
    }

    return () => {
      alive = false;
      controller.abort();
    };
  }, []);

  const defaultMeta = {
    title: 'Web Hosting, Domains & Web Design in South Africa | Website365',
    description:
      'Website365 provides web hosting, domain registration, and professional web design for South African businesses.',
    keywords:
      'web hosting south africa, domain registration south africa, web design south africa, website365',
    localSeoPrefixes: [],
  };

  const pageMeta = (!metadataLoading && metadata && metadata[path]) || defaultMeta;

  const resolvedTitle = titleOverride || title || pageMeta.title;
  const resolvedDescription = descriptionOverride || description || pageMeta.description;
  const canonicalUrl = canonicalOverride || canonical || `https://website365.co.za${path}`;
  const robots =
    robotsOverride || (path === '/thank-you' ? 'noindex, nofollow' : 'index, follow');

  const baseKeywords =
    typeof (keywordsOverride || keywords || pageMeta.keywords) === 'string'
      ? (keywordsOverride || keywords || pageMeta.keywords)
          .split(',')
          .map((k) => k.trim())
          .filter(Boolean)
      : [];

  const localSeoPrefixes = Array.isArray(pageMeta.localSeoPrefixes)
    ? pageMeta.localSeoPrefixes
    : [];

  const keywordSet = new Set();
  for (const k of baseKeywords) {
    if (keywordSet.size >= MAX_KEYWORDS) break;
    keywordSet.add(k);
  }
  if (!noLocalExpansion && localSeoPrefixes.length > 0 && keywordSet.size < MAX_KEYWORDS) {
    for (const prefix of localSeoPrefixes) {
      for (const loc of seoLocations) {
        if (keywordSet.size >= MAX_KEYWORDS) break;
        keywordSet.add(`${prefix} ${loc}`);
      }
      if (keywordSet.size >= MAX_KEYWORDS) break;
    }
  }
  const keywordsContent = Array.from(keywordSet).join(', ');

  const organizationSchema = generateOrganizationData();
  const localBusinessSchema = generateLocalBusinessData();
  const websiteSchema = generateWebSiteData();
  const webPageSchema = generateWebPageData({ title: resolvedTitle, description: resolvedDescription, canonicalUrl });

  const breadcrumbItems = (() => {
    if (Array.isArray(breadcrumbItemsOverride) && breadcrumbItemsOverride.length > 0) {
      return breadcrumbItemsOverride;
    }

    const crumbs = [{ name: 'Home', path: '/' }];
    const segments = path.split('/').filter(Boolean);
    let current = '';

    for (const seg of segments) {
      current += `/${seg}`;
      const metaTitle = metadata && metadata[current] ? titleToLabel(metadata[current].title) : null;
      crumbs.push({ name: metaTitle || segmentToLabel(seg), path: current });
    }

    return crumbs;
  })();
  const breadcrumbSchema = generateBreadcrumbData(breadcrumbItems);

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {keywordsContent ? <meta name="keywords" content={keywordsContent} /> : null}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-za" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      <meta name="robots" content={robots} />
      <meta name="author" content="Website365" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content={geoPlacenameOverride || 'South Africa'} />
      <meta httpEquiv="content-language" content="en-ZA" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content="https://website365.co.za/opengraph.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={resolvedTitle} />
      <meta property="og:site_name" content="Website365" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content="https://website365.co.za/opengraph.jpg" />
      <meta name="twitter:image:alt" content={resolvedTitle} />
      <meta name="twitter:site" content="@website365" />
      <meta name="twitter:creator" content="@website365" />

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
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {extraSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  titleOverride: PropTypes.string,
  description: PropTypes.string,
  descriptionOverride: PropTypes.string,
  keywords: PropTypes.string,
  keywordsOverride: PropTypes.string,
  canonical: PropTypes.string,
  canonicalOverride: PropTypes.string,
  robotsOverride: PropTypes.string,
  extraSchemas: PropTypes.arrayOf(PropTypes.object),
  noLocalExpansion: PropTypes.bool,
  breadcrumbItemsOverride: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  geoPlacenameOverride: PropTypes.string,
};

export default SEO;
