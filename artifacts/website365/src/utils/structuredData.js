
export const generateOrganizationData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Website365',
  url: 'https://website365.co.za',
  logo: 'https://website365.co.za/images/logo/logo.png',
  image: 'https://website365.co.za/opengraph.jpg',
  description: 'South African web hosting, domain registration, and professional web design company based in South Africa.',
  foundingDate: '2014',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+27-86-199-5070',
      contactType: 'customer service',
      areaServed: 'ZA',
      availableLanguage: ['English', 'Afrikaans']
    },
    {
      '@type': 'ContactPoint',
      telephone: '+27-83-600-0152',
      contactType: 'sales',
      areaServed: 'ZA',
      availableLanguage: ['English', 'Afrikaans']
    }
  ],
  sameAs: [
    'https://www.facebook.com/website365',
    'https://twitter.com/website365',
    'https://www.linkedin.com/company/website365'
  ]
});

export const generateLocalBusinessData = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://website365.co.za/#organization',
  name: 'Website365',
  url: 'https://website365.co.za',
  logo: 'https://website365.co.za/images/logo/logo.png',
  image: 'https://website365.co.za/opengraph.jpg',
  description: 'Professional web hosting, domain registration, and web design services for South African businesses.',
  telephone: '+27-86-199-5070',
  email: 'support@website365.co.za',
  priceRange: '$$',
  currenciesAccepted: 'ZAR',
  paymentAccepted: 'Credit Card, EFT, Debit Card',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
    addressRegion: 'Western Cape',
    addressLocality: 'Cape Town'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.9249,
    longitude: 18.4241
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  areaServed: {
    '@type': 'Country',
    name: 'South Africa'
  }
});

export const generateWebSiteData = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Website365',
  url: 'https://website365.co.za',
  description: 'South Africa\'s trusted provider of web hosting, domain registration, and web design.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://website365.co.za/domains?domain={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
});

export const generateBreadcrumbData = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `https://website365.co.za${item.path}`
  }))
});

export const generateServiceData = ({ name, description, url, price }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `https://website365.co.za${url}`,
  provider: {
    '@type': 'Organization',
    name: 'Website365',
    url: 'https://website365.co.za'
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa'
  },
  ...(price ? {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'ZAR',
      price,
      availability: 'https://schema.org/InStock'
    }
  } : {})
});

export const generateFAQData = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer
    }
  }))
});

export const generateLocationServiceData = (cityName, provinceName) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `https://website365.co.za/#organization-${cityName.toLowerCase().replace(/\s+/g, '-')}`,
  name: `Website365 - Web Hosting & Web Design in ${cityName}`,
  url: 'https://website365.co.za',
  logo: 'https://website365.co.za/images/logo/logo.png',
  description: `Professional web hosting, domain registration, and web design services for businesses in ${cityName}, ${provinceName}.`,
  telephone: '+27-86-199-5070',
  email: 'support@website365.co.za',
  areaServed: [
    { '@type': 'City', name: cityName },
    { '@type': 'AdministrativeArea', name: provinceName },
    { '@type': 'Country', name: 'South Africa' }
  ]
});
