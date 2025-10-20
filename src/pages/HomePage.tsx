import React from 'react';
import { Hero, ServicesGrid, UnderOneRoofSection, FinancialGrowthSection, ReviewsSection, StrategyCTA, LocalBusinessStructuredData, WebPageStructuredData, SEOHead } from '@/components';
import { getSEOData, generateBreadcrumbs } from '@/config/seo.config';

const HomePage: React.FC = () => {
  // Get SEO data for homepage
  const seoData = getSEOData('home');
  const breadcrumbs = generateBreadcrumbs('/');

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
        ogType={seoData.ogType}
        twitterCard={seoData.twitterCard}
        structuredData={breadcrumbs}
      />

      {/* Additional Structured Data */}
      <LocalBusinessStructuredData
        name="YTM Group"
        description="Leading financial planning and legal services firm in Australia, helping families build generational wealth through expert financial strategies."
        address={{
          streetAddress: "1 Princess St",
          addressLocality: "Kew",
          addressRegion: "VIC",
          postalCode: "3101",
          addressCountry: "AU"
        }}
        telephone="+61-3-7046-9786"
        email="info@ytmgroup.com.au"
        url="https://ytmgroup.com.au"
      />
      
      <WebPageStructuredData
        name="Build Wealth That Lasts Generations - YTM Group"
        description="Transform your financial future with personalized strategies from Australia's leading financial planners. Tax-optimized investments, estate planning & more."
        url="https://ytmgroup.com.au"
      />

      {/* Hero Section - Updated to match new design */}
      <Hero className="hero-section" />

      {/* Services Overview Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesGrid
            showCategory={true}
            columns={{
              mobile: 2,
              tablet: 3,
              desktop: 3
            }}
            className="w-full"
          />
        </div>
      </section>

       {/* Under One Roof Section */}
       <UnderOneRoofSection />

      {/* Financial Growth Section */}
      <FinancialGrowthSection />


      {/* Reviews Section */}
      <ReviewsSection />

      {/* Strategy CTA Section */}
      <StrategyCTA />
    </>
  );
};

export default HomePage; 