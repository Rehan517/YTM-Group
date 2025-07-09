import React from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import type { Service } from '@/types/services';

interface GetStartedCTAProps {
  service: Service;
  className?: string;
}

/**
 * Clean and professional CTA section for service pages
 * Replaces spammy conversion optimization sections with a simple, elegant call-to-action
 */
const GetStartedCTA: React.FC<GetStartedCTAProps> = ({
  service,
  className
}) => {
  const { icon: Icon, title, color, bgColor } = service;

  return (
    <section className={cn('py-16 lg:py-24 bg-neutral-50', className)}>
      <Container size="2xl">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Clean Header */}
          <div className="mb-12">
            <div className={cn('inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6', bgColor)}>
              <Icon className={cn('w-8 h-8', color)} />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Take the next step with our {title.toLowerCase()} services. 
              Contact us today for a personalized consultation.
            </p>
          </div>

          {/* Simple Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-slate-700">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-700">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-700">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Tailored Solutions</span>
            </div>
          </div>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Free Consultation
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
            
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-600 bg-white hover:bg-primary-50 border border-primary-600 rounded-lg transition-colors duration-200">
              Call (555) 123-4567
            </button>
          </div>

          {/* Simple Trust Indicator */}
          <div className="mt-8 text-sm text-slate-500">
            Trusted by hundreds of satisfied clients across Australia
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStartedCTA; 