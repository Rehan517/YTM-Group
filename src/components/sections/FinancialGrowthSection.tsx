import React from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import { FinancialGrowthImage } from '@/assets';
import { Link } from 'react-router-dom';

interface FinancialGrowthSectionProps {
  className?: string;
}

const FinancialGrowthSection: React.FC<FinancialGrowthSectionProps> = ({
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
          
          {/* Left Column - 3D Element */}
          <div className="relative lg:order-1">
            {/* Background decoration */}
            <div 
              aria-hidden
              className="absolute -inset-4 bg-gradient-to-br from-primary-100/50 to-primary-200/30 rounded-3xl blur-xl"
            />
            
            {/* Main 3D Element */}
            <div className="relative">
              <img
                src={FinancialGrowthImage}
                alt="YTM Group financial growth and wealth building services visualization showing investment planning and portfolio growth"
                className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-lg mx-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 lg:order-2 text-right lg:text-left">
            {/* Main Heading */}
            <h2 className="font-heading text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Financial Growth, made simple
            </h2>

            {/* Subheading */}
            <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl ml-auto lg:ml-0">
            Make your money work, financial growth through structure, smarter borrowing, and proactive action.
            </p>

            {/* Optional CTA Button */}
            <div className="pt-2 sm:pt-4 flex justify-end lg:justify-start">
              <Link to="/contact">
              <button className="font-body inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary-800 hover:bg-primary-900 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Your Growth
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

export default FinancialGrowthSection; 
