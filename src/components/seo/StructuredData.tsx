import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { TeamMember } from '@/types';

interface OrganizationStructuredDataProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  socialMedia?: string[];
}

interface PersonStructuredDataProps {
  person: TeamMember;
  organizationName?: string;
}

interface LocalBusinessStructuredDataProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email?: string;
  url?: string;
  openingHours?: string[];
  priceRange?: string;
  serviceArea?: string[];
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const OrganizationStructuredData: React.FC<OrganizationStructuredDataProps> = ({
  name = "YTM Group",
  description = "Professional financial services, legal advice, and business consulting for Australian families and businesses.",
  url = "https://ytmgroup.com.au",
  logo = "https://ytmgroup.com.au/logo.png",
  contactPoint = {
    telephone: "+61-3-7046-9786",
    contactType: "customer service",
    email: "info@ytmgroup.com.au"
  },
  address = {
    streetAddress: "1 Princess St",
    addressLocality: "Kew",
    addressRegion: "VIC",
    postalCode: "3101",
    addressCountry: "AU"
  },
  socialMedia = []
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "url": url,
    "logo": logo,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactPoint.telephone,
      "contactType": contactPoint.contactType,
      "email": contactPoint.email,
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "sameAs": socialMedia,
    "foundingDate": "2009",
    "numberOfEmployees": "8-10",
    "slogan": "Build Wealth That Lasts Generations",
    "serviceArea": {
      "@type": "Country",
      "name": "Australia"
    },
    "knowsAbout": [
      "Financial Planning",
      "Mortgage Broking",
      "Legal Services",
      "Business Insurance",
      "Business Advisory",
      "Property Services"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const PersonStructuredData: React.FC<PersonStructuredDataProps> = ({
  person,
  organizationName = "YTM Group"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "jobTitle": person.position,
    "description": person.shortBio,
    "worksFor": {
      "@type": "Organization",
      "name": organizationName
    },
    "email": person.email,
    "telephone": person.phone,
    "image": person.photoUrl,
    "url": person.linkedInUrl,
    "knowsAbout": person.specializations
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const LocalBusinessStructuredData: React.FC<LocalBusinessStructuredDataProps> = ({
  name,
  description,
  address,
  telephone,
  email,
  url,
  openingHours = [
    "Mo-Fr 08:00-18:00"
  ],
  priceRange = "$$",
  serviceArea = ["Australia", "Victoria", "Melbourne"]
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "telephone": telephone,
    "email": email,
    "url": url,
    "openingHours": openingHours,
    "priceRange": priceRange,
    "areaServed": serviceArea.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Financial Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Planning",
            "description": "Comprehensive financial planning and investment advice"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mortgage Broking",
            "description": "Home loan and mortgage broking services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Legal Services",
            "description": "Business and personal legal advisory services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Insurance",
            "description": "Commercial insurance and risk management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Advisory",
            "description": "Strategic business consulting and advisory services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Services",
            "description": "Real estate and property investment services"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const BreadcrumbStructuredData: React.FC<BreadcrumbStructuredDataProps> = ({
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
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Combined structured data component for pages
interface WebPageStructuredDataProps {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

export const WebPageStructuredData: React.FC<WebPageStructuredDataProps> = ({
  name,
  description,
  url,
  breadcrumbs
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
    "about": {
      "@type": "Organization",
      "name": "YTM Group"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "YTM Group"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {breadcrumbs && <BreadcrumbStructuredData items={breadcrumbs} />}
    </>
  );
}; 