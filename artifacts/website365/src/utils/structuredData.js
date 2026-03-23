
export const generateOrganizationData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Website365",
  "url": "https://website365.co.za",
  "logo": "https://website365.co.za/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+27-83-600-0152",
    "contactType": "customer service"
  }
});

export const generateWebSiteData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://website365.co.za",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://website365.co.za/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});
