import React from 'react';
import { Hero, ServicesGrid, BusinessStructuredData, WebPageStructuredData } from '@/components';
import { HeroImage, SecondaryHeroImage } from '@/assets';

const HomePage: React.FC = () => {
  // Trust indicators for YTM Group - Only stats (no certifications/awards)
  const trustIndicators = [
    {
      id: 'experience',
      type: 'stat' as const,
      value: '15+',
      label: 'Years Experience',
      description: 'Serving Australian families',
      icon: 'https://via.placeholder.com/32x32/2563eb/ffffff?text=📅'
    },
    {
      id: 'clients',
      type: 'stat' as const,
      value: '500+',
      label: 'Happy Clients',
      description: 'Financial goals achieved',
      icon: 'https://via.placeholder.com/32x32/2563eb/ffffff?text=👥'
    },
    {
      id: 'savings',
      type: 'stat' as const,
      value: '$2M+',
      label: 'Client Savings',
      description: 'In tax optimization',
      icon: 'https://via.placeholder.com/32x32/2563eb/ffffff?text=💰'
    }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <BusinessStructuredData
        name="YTM Group"
        description="Leading financial planning and legal services firm in Australia, helping families build generational wealth through expert financial strategies."
        url="https://ytmgroup.com.au"
        telephone="+61 2 1234 5678"
        email="info@ytmgroup.com.au"
        address={{
          streetAddress: "Level 15, 123 Collins Street",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          postalCode: "3000",
          addressCountry: "AU"
        }}
        services={[
          "Financial Planning",
          "Investment Management", 
          "Estate Planning",
          "Tax Optimization",
          "Retirement Planning",
          "Wealth Management"
        ]}
        foundingDate="2010"
        founders={["Your Name", "Co-founder Name"]}
      />
      
      <WebPageStructuredData
        name="Build Wealth That Lasts Generations - YTM Group"
        description="Transform your financial future with personalized strategies from Australia's leading financial planners. Tax-optimized investments, estate planning & more."
        url="https://ytmgroup.com.au"
        mainEntity="YTM Group Financial Services"
      />

      {/* Hero Section - 2-Column Layout with Two Images */}
      <Hero
        headline="Empowering your financial future"
        subheadline="Trusted Financial & Legal Experts"
        description="Transform your financial future with personalized strategies from Australia's leading financial planners. We've helped over 500 families save millions in taxes and build sustainable wealth."
        primaryCTA={{
          text: "Book Free Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Services", 
          href: "/services"
        }}
        trustIndicators={trustIndicators}
        testimonialQuote={{
          text: "YTM Group transformed our financial situation completely. Their strategic approach helped us save $200K in taxes and secure our retirement. Exceptional service and results!",
          author: "Sarah & Michael Chen",
          title: "Retired Business Owners"
        }}
        heroImage={SecondaryHeroImage}
        heroImageAlt="YTM Group Financial Services Team"
        secondaryImage={HeroImage}
        secondaryImageAlt="YTM Group Professional Services"
        className="hero-section"
      />

      {/* Services Overview Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesGrid
            showCategory={true}
            columns={{
              mobile: 1,
              tablet: 3,
              desktop: 3
            }}
            className="w-full"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage; 