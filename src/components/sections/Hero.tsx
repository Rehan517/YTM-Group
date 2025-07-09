import React from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import { TrustIndicator } from '@/components';
import { 
  CalendarDaysIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

interface HeroProps {
  className?: string;
  children?: React.ReactNode;
}

interface HeroContentProps {
  headline?: string;
  subheadline?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  trustIndicators?: TrustIndicatorType[];
  testimonialQuote?: {
    text: string;
    author: string;
    title?: string;
  };
  heroImage?: string;
  heroImageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
}

interface TrustIndicatorType {
  id: string;
  type: 'stat' | 'certification' | 'award';
  value?: string | number;
  label: string;
  icon?: string;
  description?: string;
}

const Hero: React.FC<HeroProps & HeroContentProps> = ({
  className = '',
  headline = "Your Financial Future Starts Here",
  subheadline = "Expert Financial Guidance",
  description = "Transform your financial future with personalized strategies from trusted experts.",
  primaryCTA = { text: "Get Started", href: "/contact" },
  secondaryCTA = { text: "Learn More", href: "/services" },
  trustIndicators = [],
  testimonialQuote,
  heroImage,
  heroImageAlt = "YTM Group Financial Services",
  secondaryImage,
  secondaryImageAlt = "YTM Group Financial Services",
  children
}) => {
  // Filter out certification and award types, keep only stats
  const statIndicators = trustIndicators.filter(indicator => indicator.type === 'stat');

  // Icon mapping for trust indicators
  const getIconComponent = (indicatorId: string) => {
    switch (indicatorId) {
      case 'experience':
        return <CalendarDaysIcon className="w-5 h-5 text-primary-600" />;
      case 'clients':
        return <UserGroupIcon className="w-5 h-5 text-primary-600" />;
      case 'savings':
        return <CurrencyDollarIcon className="w-5 h-5 text-primary-600" />;
      default:
        return <CalendarDaysIcon className="w-5 h-5 text-primary-600" />;
    }
  };

  return (
    <section 
      className={cn(
        "relative bg-gradient-to-br from-primary-50 to-white py-12 md:py-16 lg:py-12",
        className
      )}
    >
      <Container size="2xl" className="relative z-10">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Subheadline */}
            {subheadline && (
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 uppercase tracking-wide">
                <div className="w-8 h-px bg-primary-600"></div>
                {subheadline}
                <div className="w-8 h-px bg-primary-600"></div>
              </div>
            )}

            {/* Main Headline */}
            {headline && (
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
                {headline}
              </h1>
            )}

            {/* Description */}
            {description && (
              <p className="text-lg md:text-xl lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}

            {/* Trust Indicators - Single Row */}
            {statIndicators.length > 0 && (
              <div className="grid grid-cols-3 gap-6 py-6">
                {statIndicators.map((indicator) => (
                  <div key={indicator.id} className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                        {getIconComponent(indicator.id)}
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">
                      {indicator.value}
                    </div>
                    <div className="text-sm lg:text-base font-medium text-slate-700 mb-1">
                      {indicator.label}
                    </div>
                    {indicator.description && (
                      <div className="text-xs lg:text-sm text-slate-500">
                        {indicator.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  onClick={primaryCTA.onClick}
                  className="inline-flex items-center justify-center px-8 py-4 text-base lg:text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {primaryCTA.text}
                </a>
              )}
              
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  onClick={secondaryCTA.onClick}
                  className="inline-flex items-center justify-center px-8 py-4 text-base lg:text-lg font-medium text-primary-600 bg-white hover:bg-primary-50 border border-primary-600 rounded-lg transition-colors duration-200"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          </div>

          {/* Right Column - Hero Images */}
          <div className="relative">
            {/* Two Overlapping Image Layout */}
            <div className="relative">
              
              {/* Primary Image - Main Focus */}
              <div className="relative transform -rotate-1 rounded-2xl overflow-hidden shadow-2xl -mt-4 lg:-mt-5">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt={heroImageAlt}
                    className="w-full h-72 lg:h-[400px] xl:h-[480px] object-cover"
                  />
                ) : (
                  // Placeholder for primary hero image
                  <div className="w-full h-72 lg:h-[400px] xl:h-[420px] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center text-primary-600">
                      <div className="text-5xl mb-3">📊</div>
                      <p className="text-lg font-medium">Primary Image</p>
                      <p className="text-sm opacity-75">Add your main professional photo here</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary Image - Overlapping, Lower Position */}
              <div className="absolute -bottom-12 lg:-bottom-20 -right-8 w-72 lg:w-90 xl:w-96">
                <div className="relative rounded-xl overflow-hidden shadow-xl transform rotate-3">
                  {secondaryImage ? (
                    <img
                      src={secondaryImage}
                      alt={secondaryImageAlt}
                      className="w-full h-52 lg:h-60 xl:h-72 object-cover"
                    />
                  ) : (
                    // Placeholder for secondary image
                    <div className="w-full h-52 lg:h-60 xl:h-72 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                      <div className="text-center text-secondary-600">
                        <div className="text-3xl mb-2">🏢</div>
                        <p className="text-sm font-medium">Secondary Image</p>
                        <p className="text-xs opacity-75">Add second photo</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Decorative Elements - Adjusted for larger layout */}
            {/* <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div> */}
            {/* <div className="absolute top-1/3 -right-4 w-20 h-20 bg-accent-200 rounded-full opacity-15"></div> */}
          </div>
        </div>

        {/* Testimonial Quote - Bottom Section */}
        {testimonialQuote && (
          <div className="mt-16 lg:mt-20 border-t border-gray-200 pt-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {/* 5-star rating */}
                <div className="flex text-yellow-400 text-xl">
                  {'★'.repeat(5)}
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-slate-700 italic leading-relaxed mb-6">
                "{testimonialQuote.text}"
              </blockquote>
              
              <div className="text-slate-800 font-medium">
                {testimonialQuote.author}
                {testimonialQuote.title && (
                  <span className="text-slate-500 font-normal block sm:inline">
                    {' • '}{testimonialQuote.title}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Additional Children */}
        {children}
      </Container>
    </section>
  );
};

export default Hero; 