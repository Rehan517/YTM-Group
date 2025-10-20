import React from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { SEOHead, ReviewsSection, StrategyCTA } from '@/components';
import { getSEOData, generateBreadcrumbs } from '@/config/seo.config';
import type { Service } from '@/types/services';
import { Link } from 'react-router-dom';

export interface ServiceOption {
  title: string;
  description: string;
  icon?: string; // URL to icon image
  tags?: string[]; // Optional tags/badges for the option
}

interface ServicePageProps {
  service: Service;
  serviceOptions?: ServiceOption[]; // New service options cards
  heroImage?: string; // Optional hero image URL
  className?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  service,
  serviceOptions = [],
  heroImage,
  className
}) => {
  const { title, description, bgColor, href } = service;

  // Get SEO data for this service page
  const serviceKey = href.replace('/services/', '');
  const seoData = getSEOData(`services.${serviceKey}`);
  const breadcrumbs = generateBreadcrumbs(href);

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
        structuredData={[breadcrumbs, seoData.structuredData].filter(Boolean)}
      />

      <div className={cn('min-h-screen bg-white', className)}>
        {/* Service Hero Section */}
        <section className={cn('relative py-8 sm:py-12 lg:py-20', bgColor.replace('bg-', 'bg-').replace('-50', '-100'))}>
          <Container size="2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start lg:items-center">
              {/* Hero Content */}
              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                {/* Service Title */}
                <div>
                  <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-3 sm:mb-4 lg:mb-6">
                    {title}
                  </h1>
                  <div className="w-16 sm:w-20 h-1 bg-primary-600 mb-4 sm:mb-6"></div>
                </div>

                {/* Service Description */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                  {description}
                </p>

                {/* Hero Image - Mobile Only (above button) */}
                <div className="relative lg:hidden">
                  {heroImage ? (
                    /* Clean 3D element for mobile */
                    <img 
                      src={heroImage} 
                      alt={title}
                      className="w-full max-w-sm mx-auto h-auto object-contain"
                    />
                  ) : (
                    /* Placeholder for mobile */
                    <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                      <div className={cn(
                        'w-full h-64 flex items-center justify-center',
                        'bg-gradient-to-br from-primary-100 to-primary-200'
                      )}>
                        <div className="text-center text-primary-600">
                          <p className="text-base font-medium">{title}</p>
                          <p className="text-xs opacity-75">Professional Service Image</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hero CTAs */}
                <div className="flex justify-start pt-2 sm:pt-4">
                  <Link to="/contact">
                  <button className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Get Started
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </button>
                  </Link>
                  
                </div>
              </div>

              {/* Hero Image - Desktop Only */}
              <div className="relative hidden lg:block">
                {heroImage ? (
                  /* Clean 3D element without container styling */
                  <img 
                    src={heroImage} 
                    alt={title}
                    className="w-full h-96 lg:h-[480px] object-contain"
                  />
                ) : (
                  /* Placeholder with container styling */
                  <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                    <div className={cn(
                      'w-full h-96 lg:h-[480px] flex items-center justify-center',
                      'bg-gradient-to-br from-primary-100 to-primary-200'
                    )}>
                      <div className="text-center text-primary-600">
                        <p className="text-lg font-medium">{title}</p>
                        <p className="text-sm opacity-75">Professional Service Image</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>



        {/* Service Options Section */}
        {serviceOptions.length > 0 && (
          <section className="py-8 sm:py-12 lg:py-20 bg-neutral-50">
            <Container size="2xl">
              <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 sm:mb-6">
                  Service Options
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                  Our {title.toLowerCase()} are designed to help you achieve your property and investment goals with competitive rates and flexible terms. Whether you're a first-time homebuyer, seasoned investor, or business owner looking for commercial financing, our experienced team provides personalised service throughout the entire process.
                </p>
              </div>

              {/* Service Options Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {serviceOptions.map((option, index) => {
                  // Create abbreviated description for mobile (first sentence or up to 80 characters)
                  const mobileDescription = option.description.length > 80 
                    ? option.description.split('.')[0] + (option.description.includes('.') ? '.' : '...')
                    : option.description;
                  
                  // Limit tags shown on mobile (first 2 tags)
                  const mobileTags = option.tags ? option.tags.slice(0, 2) : [];
                  
                  return (
                    <div key={index} className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-100 flex flex-col h-full">
                      {/* Option Icon */}
                      {option.icon && (
                        <div className="mb-3 sm:mb-4 lg:mb-6">
                          <img 
                            src={option.icon} 
                            alt={`${option.title} icon`}
                            className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
                          />
                        </div>
                      )}

                      {/* Option Title */}
                      <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-slate-800 mb-2 sm:mb-3 lg:mb-4 leading-tight">
                        {option.title}
                      </h3>

                      {/* Option Description - Responsive content */}
                      <div className="mb-3 sm:mb-4 lg:mb-6">
                        <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed sm:hidden">
                          {mobileDescription}
                        </p>
                        <p className="text-sm lg:text-base text-slate-600 leading-relaxed hidden sm:block">
                          {option.description}
                        </p>
                      </div>

                      {/* Option Tags - Responsive display */}
                      {option.tags && option.tags.length > 0 && (
                        <div className="mb-3 sm:mb-4 lg:mb-6">
                          {/* Mobile tags (first 2) */}
                          <div className="flex flex-wrap gap-1 sm:hidden">
                            {mobileTags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {/* Desktop tags (all) */}
                          <div className="hidden sm:flex flex-wrap gap-1 lg:gap-2">
                            {option.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="inline-flex items-center px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium bg-primary-100 text-primary-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA Button - pushed to bottom */}
                      <div className="mt-auto pt-2 sm:pt-3 lg:pt-4 border-t border-neutral-100">
                        <Link to="/contact"> 
                        <button className="inline-flex items-center justify-center px-2 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-xs sm:text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors duration-200 w-full">
                          
                          <span>Find out more</span>
                        </button>
                        </Link>
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        )}








        {/* Reviews Section */}
        <ReviewsSection />

        {/* Strategy CTA Section */}
        <StrategyCTA />

      </div>
    </>
  );
};

export default ServicePage; 