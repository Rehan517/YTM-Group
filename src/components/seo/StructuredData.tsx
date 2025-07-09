import React from 'react';

interface BusinessStructuredDataProps {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  services?: string[];
  foundingDate?: string;
  founders?: string[];
}

const BusinessStructuredData: React.FC<BusinessStructuredDataProps> = ({
  name,
  description,
  url,
  telephone,
  email,
  address,
  services = [],
  foundingDate,
  founders = []
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": name,
    "description": description,
    "url": url,
    "serviceType": "Financial Planning",
    "areaServed": "Australia",
    "currenciesAccepted": "AUD",
    ...(telephone && { "telephone": telephone }),
    ...(email && { "email": email }),
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      }
    }),
    ...(services.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Financial Services",
        "itemListElement": services.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service
          }
        }))
      }
    }),
    ...(foundingDate && { "foundingDate": foundingDate }),
    ...(founders.length > 0 && {
      "founder": founders.map(founder => ({
        "@type": "Person",
        "name": founder
      }))
    }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface WebPageStructuredDataProps {
  name: string;
  description: string;
  url: string;
  mainEntity?: string;
}

const WebPageStructuredData: React.FC<WebPageStructuredDataProps> = ({
  name,
  description,
  url,
  mainEntity
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "YTM Group",
      "url": "https://ytmgroup.com.au"
    },
    ...(mainEntity && { "mainEntity": mainEntity }),
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ytmgroup.com.au/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

const BreadcrumbStructuredData: React.FC<BreadcrumbStructuredDataProps> = ({
  items
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export { BusinessStructuredData, WebPageStructuredData, BreadcrumbStructuredData }; 