import React from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import { UnderOneRoofImage } from '@/assets';
import { Link } from 'react-router-dom';

interface UnderOneRoofSectionProps {
  className?: string;
}

const UnderOneRoofSection: React.FC<UnderOneRoofSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      className={cn(
        "relative bg-gray-50 py-16 sm:py-12 lg:py-20",
        className
      )}
    >
      <Container size="2xl" className="relative z-10">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Right Column - 3D Element */}
          <div className="relative lg:order-2">
            {/* Background decoration */}
            <div 
              aria-hidden
              className="absolute -inset-4 bg-gradient-to-br from-primary-100/50 to-primary-200/30 rounded-3xl blur-xl"
            />
            
            {/* Main 3D Element - No white container */}
            <div className="relative">
              <img
                src={UnderOneRoofImage}
                alt="YTM Group comprehensive services visualization showing coordinated mortgage, financial planning, legal and insurance services under one roof"
                className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-2xl mx-auto"
              />
            </div>
          </div>

          {/* Left Column - Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 lg:order-1">
            {/* Main Heading */}
            <h2 className="font-heading text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            Everything you need, under one roof 
            </h2>

            {/* Subheading */}
            <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Mortgage, financial planning, legal and insurance — coordinated for you. One point of contact, start to finish.
            </p>

            {/* Optional CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Link to="/contact">
              <button className="font-body inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary-800 hover:bg-primary-900 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Learn How We Work Together
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UnderOneRoofSection; 
