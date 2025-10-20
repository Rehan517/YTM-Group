import React from 'react';
import { PhoneIcon as Phone, ChevronRightIcon as ChevronRight } from '@heroicons/react/24/outline';
import Container from '@/components/layout/Container';
import { CTAImage } from '@/assets';
import { Link } from 'react-router-dom';

interface StrategyCTAProps {
  className?: string;
}

/**
 * StrategyCTA — Minimal 3D call-to-action section
 * - Matches YTM style: crisp edges, semi‑matte, primary brand accents
 * - Simple content + subtle 3D tile stack accent
 */
const StrategyCTA: React.FC<StrategyCTAProps> = ({ className = '' }) => {
  return (
    <section className={`py-8 sm:py-12 lg:py-20 bg-gray-50 ${className}`}>
      <Container size="2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left: copy + CTA (theme-consistent sizing) */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 lg:order-1">
            <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Free strategy call</p>
            <h2 className="font-heading text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Book your free strategy call
            </h2>
            <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              15–20 min consultation · No obligation · Get expert advice
            </p>

            {/* Mobile Image - Above button */}
            <div className="relative lg:hidden flex justify-center">
              <img
                src={CTAImage}
                alt="YTM Group Strategy Call"
                className="w-full max-w-xs sm:max-w-sm h-auto object-contain"
                loading="lazy"
              />
            </div>

            <div className="pt-2 sm:pt-4">
              <Link to="/contact">
              <button
                className="font-body inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary-800 hover:bg-primary-900 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> 
                Book Free Strategy Call
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              </Link>  
              
            </div>
          </div>

          {/* Right: CTA Image - Desktop only */}
          <div className="relative lg:order-2 hidden lg:flex justify-end overflow-hidden">
            <div className="relative">
              <img
                src={CTAImage}
                alt="YTM Group Strategy Call"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};



export default StrategyCTA;
