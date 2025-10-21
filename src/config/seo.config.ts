export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
}

// Base URL for the site
export const SITE_URL = 'https://ytmgroup.com.au';

// Default SEO settings
export const DEFAULT_SEO: PageSEO = {
  title: 'YTM Group - Professional Financial Services Australia',
  description: 'Leading financial planning, legal services, and business consulting firm in Australia. Expert guidance for wealth building, tax optimization, and business growth.',
  keywords: 'financial planning Australia, mortgage brokers Melbourne, business consulting, legal services, tax optimization, wealth management',
  canonical: SITE_URL,
  ogImage: `${SITE_URL}/images/og-default.jpg`,
  ogType: 'website',
  twitterCard: 'summary_large_image'
};

// Page-specific SEO configurations
export const PAGE_SEO: Record<string, PageSEO> = {
  // Homepage
  home: {
    title: 'YTM Group - Professional Financial Services',  // ← Changed this line
    description: 'Transform your financial future with personalized strategies from Australia\'s leading financial planners. Tax-optimized investments, estate planning & more. Free consultation.',
    keywords: 'financial planning Australia, wealth management Melbourne, tax optimization, estate planning, retirement planning, mortgage brokers',
    canonical: SITE_URL,
    ogImage: `${SITE_URL}/images/ytm-hero.jpg`
  },

  // About Page
  about: {
    title: 'About Us - Professional Financial Services Team',
    description: 'Meet our experienced team of financial advisors, mortgage brokers, and business consultants helping Australian families build generational wealth since 2009.',
    keywords: 'about YTM Group, financial services team, company story, mission, values, Australia, Melbourne',
    canonical: `${SITE_URL}/about`,
    ogImage: `${SITE_URL}/images/ytm-team.jpg`
  },

  // Contact Page
  contact: {
    title: 'Contact YTM Group - Free Financial Consultation',
    description: 'Get expert financial advice with a free consultation. Located in Kew, Melbourne. Call (03) 7046 9786 or book online. Professional financial planning services.',
    keywords: 'contact YTM Group, free consultation, financial advisor Melbourne, Kew VIC, book appointment, financial planning',
    canonical: `${SITE_URL}/contact`,
    ogImage: `${SITE_URL}/images/ytm-contact.jpg`
  },

  // Legal Pages
  'privacy-policy': {
    title: 'Privacy Policy - YTM Group | Data Protection & Privacy',
    description: 'YTM Group\'s Privacy Policy outlines how we collect, use, and protect your personal information when you use our financial and legal services.',
    keywords: 'privacy policy, data protection, personal information, YTM Group, privacy rights',
    canonical: `${SITE_URL}/privacy-policy`,
    ogType: 'website',
    twitterCard: 'summary'
  },

  'terms-and-conditions': {
    title: 'Terms and Conditions - YTM Group | Service Terms',
    description: 'YTM Group\'s Terms and Conditions outline the terms of use for our financial and legal services. Read our service terms and conditions.',
    keywords: 'terms and conditions, service terms, YTM Group, legal terms, financial services',
    canonical: `${SITE_URL}/terms-and-conditions`,
    ogType: 'website',
    twitterCard: 'summary'
  },

  // Service Pages - Flattened structure
  'services.lending': {
    title: 'Mortgage & Lending Solutions - Expert Loan Advice',
    description: 'Professional mortgage broking and lending solutions. Access to 40+ lenders, competitive rates, and expert guidance. Home loans, investment property, refinancing.',
    keywords: 'mortgage broker Melbourne, home loans Australia, investment property loans, refinancing, first home buyer, loan comparison',
    canonical: `${SITE_URL}/services/lending`,
    ogImage: `${SITE_URL}/images/lending-services.jpg`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Mortgage & Lending Solutions',
      'description': 'Professional mortgage broking and lending solutions with access to 40+ lenders',
      'provider': {
        '@type': 'Organization',
        'name': 'YTM Group'
      },
      'serviceArea': {
        '@type': 'Country',
        'name': 'Australia'
      },
      'offers': {
        '@type': 'Offer',
        'description': 'Free mortgage consultation and loan comparison'
      }
    }
  },

  'services.financial-planning': {
    title: 'Financial Planning Services - Wealth Management Australia',
    description: 'Comprehensive financial planning including retirement planning, investment strategies, tax optimization, and estate planning. CFP certified advisors.',
    keywords: 'financial planning Australia, retirement planning, investment advice, wealth management, tax optimization, estate planning, CFP',
    canonical: `${SITE_URL}/services/financial-planning`,
    ogImage: `${SITE_URL}/images/financial-planning.jpg`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Financial Planning Services',
      'description': 'Comprehensive financial planning including retirement planning and investment strategies',
      'provider': {
        '@type': 'Organization',
        'name': 'YTM Group'
      }
    }
  },

  'services.legal-services': {
    title: 'Legal Services - Business Law & Legal Advice Australia',
    description: 'Professional legal services including business law, contract review, compliance, and litigation support. Experienced attorneys providing expert legal guidance.',
    keywords: 'business law Australia, legal services Melbourne, contract review, compliance, litigation, legal advice, attorneys',
    canonical: `${SITE_URL}/services/legal-services`,
    ogImage: `${SITE_URL}/images/legal-services.jpg`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Legal Services',
      'description': 'Professional legal services including business law and contract review',
      'provider': {
        '@type': 'Organization',
        'name': 'YTM Group'
      }
    }
  },

  'services.business-insurance': {
    title: 'Business Insurance Solutions - Protect Your Business',
    description: 'Comprehensive business insurance including public liability, professional indemnity, workers compensation, and cyber liability. Protect your business assets.',
    keywords: 'business insurance Australia, public liability, professional indemnity, workers compensation, cyber insurance, business protection',
    canonical: `${SITE_URL}/services/business-insurance`,
    ogImage: `${SITE_URL}/images/business-insurance.jpg`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Business Insurance Solutions',
      'description': 'Comprehensive business insurance solutions including public liability and professional indemnity',
      'provider': {
        '@type': 'Organization',
        'name': 'YTM Group'
      }
    }
  },

  'services.business-advisory': {
    title: 'Business Advisory Services - Strategic Business Consulting',
    description: 'Expert business advisory services including strategic planning, operational efficiency, market analysis, and growth consulting. Transform your business.',
    keywords: 'business advisory Australia, business consulting, strategic planning, operational efficiency, business growth, business transformation',
    canonical: `${SITE_URL}/services/business-advisory`,
    ogImage: `${SITE_URL}/images/business-advisory.jpg`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Business Advisory Services',
      'description': 'Expert business advisory services including strategic planning and operational efficiency',
      'provider': {
        '@type': 'Organization',
        'name': 'YTM Group'
      }
    }
  },

  'services.property-services': {
    title: 'Property Services - Commercial Real Estate & Property Management',
    description: 'Comprehensive property services including commercial real estate, property management, valuation, and investment opportunities. Expert property guidance.',
    keywords: 'property services Australia, commercial real estate, property management, property valuation, property investment, real estate Melbourne',
    canonical: `${SITE_URL}/services/property-services`,
    ogImage: `${SITE_URL}/images/property-services.jpg`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Property Services',
      'description': 'Comprehensive property services including commercial real estate and property management',
      'provider': {
        '@type': 'Organization',
        'name': 'YTM Group'
      }
    }
  }
};

// Utility function to get SEO data for a specific page
export const getSEOData = (pageKey: string): PageSEO => {
  return PAGE_SEO[pageKey] || DEFAULT_SEO;
};

// Utility function to generate breadcrumb structured data
export const generateBreadcrumbs = (path: string) => {
  const pathSegments = path.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: 'Home', url: SITE_URL }
  ];

  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbs.push({
      name,
      url: `${SITE_URL}${currentPath}`
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }))
  };
}; 