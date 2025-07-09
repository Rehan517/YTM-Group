import React from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import CTAButton, { PrimaryCTAButton, SecondaryCTAButton } from '@/components/atoms/CTAButton';
import { 
  ClockIcon, 
  StarIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  FireIcon 
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { getServiceCTAConfig } from '@/config/service-ctas.config';

interface ConversionOptimizationSectionProps {
  serviceId: string;
  className?: string;
  showSocialProof?: boolean;
  showUrgency?: boolean;
  showValueProposition?: boolean;
  variant?: 'default' | 'minimal' | 'enhanced';
}

/**
 * Conversion Optimization Section Component
 * Displays urgency messages, social proof, value propositions, and CTAs
 */
const ConversionOptimizationSection: React.FC<ConversionOptimizationSectionProps> = ({
  serviceId,
  className,
  showSocialProof = true,
  showUrgency = true,
  showValueProposition = true,
  variant = 'default'
}) => {
  const ctaConfig = getServiceCTAConfig(serviceId);

  if (!ctaConfig) {
    return null;
  }

  const { 
    primaryCTA, 
    secondaryCTA, 
    urgencyMessage, 
    socialProof, 
    valueProposition 
  } = ctaConfig;

  // Determine layout based on variant
  const isMinimal = variant === 'minimal';
  const isEnhanced = variant === 'enhanced';

  return (
    <section className={cn(
      'py-16 lg:py-20',
      isEnhanced ? 'bg-gradient-to-br from-primary-50 via-white to-secondary-50' : 'bg-neutral-50',
      className
    )}>
      <Container size="2xl">
        <div className="max-w-4xl mx-auto">
          
          {/* Main CTA Section */}
          <div className="text-center mb-12">
            {/* Value Proposition */}
            {showValueProposition && valueProposition && (
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                  <SparklesIcon className="w-4 h-4" />
                  <span>Premium Service</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {valueProposition}
                </p>
              </div>
            )}

            {/* Urgency Message */}
            {showUrgency && urgencyMessage && (
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium">
                  {primaryCTA.urgency === 'high' ? (
                    <FireIcon className="w-4 h-4" />
                  ) : (
                    <ClockIcon className="w-4 h-4" />
                  )}
                  <span>{urgencyMessage}</span>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <PrimaryCTAButton 
                cta={primaryCTA}
                trackingData={{ section: 'conversion_optimization' }}
              />
              {secondaryCTA && !isMinimal && (
                <SecondaryCTAButton 
                  cta={secondaryCTA}
                  trackingData={{ section: 'conversion_optimization' }}
                />
              )}
            </div>

            {/* Social Proof */}
            {showSocialProof && socialProof && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-slate-600">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    {socialProof}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Features for Enhanced Variant */}
          {isEnhanced && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Trust Indicators */}
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-200">
                <CheckCircleIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Trusted by Thousands</h3>
                <p className="text-sm text-slate-600">
                  Join satisfied clients who chose our professional services
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-200">
                <SparklesIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Expert Team</h3>
                <p className="text-sm text-slate-600">
                  Certified professionals with years of industry experience
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-200">
                <ExclamationTriangleIcon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">No Hidden Fees</h3>
                <p className="text-sm text-slate-600">
                  Transparent pricing with clear terms and conditions
                </p>
              </div>
            </div>
          )}

          {/* Risk Reversal / Guarantee (for Enhanced variant) */}
          {isEnhanced && (
            <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
              <CheckCircleIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-green-700">
                Not satisfied with our service? We'll work with you until you are, or provide a full refund.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ConversionOptimizationSection; 