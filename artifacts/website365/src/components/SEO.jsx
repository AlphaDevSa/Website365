import { useEffect, useState } from 'react';
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
}) => {
  const [metadata, setMetadata] = useState(null);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    let alive = true;

    const fetchAndCacheMetadata = async () => {
      try {
        const r = await fetch('/metadata.json');
        const data = r.ok ? await r.json() : {};
        try {
          sessionStorage.setItem('website365:metadata', JSON.stringify(data));
        } catch {}
        if (alive) setMetadata(data);
      } catch {
        if (alive) setMetadata({});
      }
    };

    try {
      const cached = sessionStorage.getItem('website365:metadata');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (alive) setMetadata(parsed);
      } else {
        fetchAndCacheMetadata();
      }
    } catch {
      fetchAndCacheMetadata();
    }

    return () => {
      alive = false;
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

  const pageMeta = (metadata && metadata[path]) || defaultMeta;

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
      <meta name="geo.placename" content="South Africa" />
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

export default SEO;
