import React from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { SmartCrossSellingSection, ConversionOptimizationSection } from '@/components';
import type { Service } from '@/types/services';
import type { BusinessLifecycleStage } from '@/config/cross-selling.config';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServicePageProps {
  service: Service;
  processSteps?: ProcessStep[];
  additionalContent?: {
    overview?: string;
    whyChooseUs?: string[];
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
  contactForm?: React.ReactNode;
  relatedServices?: Service[]; // Keep for backward compatibility
  businessStage?: BusinessLifecycleStage;
  className?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  service,
  processSteps = [],
  additionalContent,
  contactForm,
  relatedServices = [], // Deprecated: kept for backward compatibility
  businessStage = 'growth',
  className
}) => {
  const { icon: Icon, title, description, features = [], benefits = [], color, bgColor } = service;

  return (
    <div className={cn('min-h-screen bg-white', className)}>
      {/* Service Hero Section */}
      <section className={cn('relative py-16 lg:py-24', bgColor.replace('bg-', 'bg-').replace('-50', '-100'))}>
        <Container size="2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              {/* Service Icon */}
              <div className={cn('inline-flex items-center justify-center w-16 h-16 rounded-2xl', bgColor)}>
                <Icon className={cn('w-8 h-8', color)} />
              </div>

              {/* Service Title */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-4">
                  {title}
                </h1>
                <div className="w-20 h-1 bg-primary-600 mb-6"></div>
              </div>

              {/* Service Description */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {description}
              </p>

              {/* Quick Benefits */}
              {benefits.length > 0 && (
                <div className="space-y-3">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center justify-center px-8 py-4 text-base lg:text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 text-base lg:text-lg font-medium text-primary-600 bg-white hover:bg-primary-50 border border-primary-600 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <div className={cn(
                  'w-full h-96 lg:h-[480px] flex items-center justify-center',
                  'bg-gradient-to-br from-primary-100 to-primary-200'
                )}>
                  <div className="text-center text-primary-600">
                    <Icon className="w-20 h-20 mx-auto mb-4" />
                    <p className="text-lg font-medium">{title}</p>
                    <p className="text-sm opacity-75">Professional Service Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Overview Section */}
      {additionalContent?.overview && (
        <section className="py-16 lg:py-24 bg-neutral-50">
          <Container size="2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8 text-center">
                Service Overview
              </h2>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>{additionalContent.overview}</p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Features & Benefits Section */}
      {(features.length > 0 || benefits.length > 0) && (
        <section className="py-16 lg:py-24">
          <Container size="2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Features */}
              {features.length > 0 && (
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
                    What's Included
                  </h2>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {benefits.length > 0 && (
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
                    Key Benefits
                  </h2>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={cn('w-6 h-6 rounded-full flex-shrink-0 mt-0.5', bgColor)}>
                          <Icon className={cn('w-4 h-4 m-1', color)} />
                        </div>
                        <span className="text-slate-700 text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Process Steps Section */}
      {processSteps.length > 0 && (
        <section className="py-16 lg:py-24 bg-neutral-50">
          <Container size="2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure you get the best possible service and results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 h-full">
                    {step.icon && (
                      <div className="mb-4">
                        {step.icon}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line (hidden on last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-neutral-300"></div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Why Choose Us Section */}
      {additionalContent?.whyChooseUs && additionalContent.whyChooseUs.length > 0 && (
        <section className="py-16 lg:py-24">
          <Container size="2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Why Choose YTM Group?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our commitment to excellence sets us apart in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalContent.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-slate-700 text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Contact Form Section */}
      {contactForm && (
        <section className="py-16 lg:py-24 bg-neutral-50">
          <Container size="2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Get Started Today
                </h2>
                <p className="text-lg text-slate-600">
                  Ready to take the next step? Contact us for a personalized consultation.
                </p>
              </div>
              {contactForm}
            </div>
          </Container>
        </section>
      )}

      {/* Conversion Optimization Section - CTAs and persuasion elements */}
      <ConversionOptimizationSection 
        serviceId={service.id}
        variant="enhanced"
      />

      {/* Smart Cross-Selling Section - Replaces old Related Services */}
      <SmartCrossSellingSection 
        currentServiceId={service.id}
        businessStage={businessStage || 'growth'}
      />
    </div>
  );
};

export default ServicePage; 