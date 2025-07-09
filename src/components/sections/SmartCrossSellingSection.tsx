import React, { useState } from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
  TagIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import type { Service } from '@/types/services';
import { getServiceById } from '@/config/services.config';
import { 
  getCrossSellingRecommendations,
  getServiceTestimonial,
  getUrgencyMessage,
  getBundleOffer,
  type BusinessLifecycleStage 
} from '@/config/cross-selling.config';

interface SmartCrossSellingSectionProps {
  currentServiceId: string;
  businessStage?: BusinessLifecycleStage;
  className?: string;
}

const SmartCrossSellingSection: React.FC<SmartCrossSellingSectionProps> = ({
  currentServiceId,
  businessStage = 'growth',
  className
}) => {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);
  
  // Get intelligent recommendations
  const recommendations = getCrossSellingRecommendations(currentServiceId, businessStage);
  const relatedServices = recommendations
    .map(rec => getServiceById(rec.serviceId))
    .filter((service): service is Service => service !== undefined);

  // Get conversion optimization content
  const testimonial = getServiceTestimonial(currentServiceId);
  const urgencyMessage = getUrgencyMessage(currentServiceId);
  const bundleOffer = getBundleOffer(currentServiceId);

  if (relatedServices.length === 0) {
    return null;
  }

  const handleBundleSelect = (bundleId: string) => {
    setSelectedBundle(bundleId);
    // TODO: Implement bundle selection logic
    console.log('Bundle selected:', bundleId);
  };

  const renderUrgencyBanner = () => {
    if (!urgencyMessage) return null;

    return (
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mb-8">
        <div className="flex items-center gap-3">
          <ClockIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-800 font-medium">{urgencyMessage}</p>
        </div>
      </div>
    );
  };

  const renderTestimonial = () => {
    if (!testimonial) return null;

    return (
      <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarSolidIcon key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
          </div>
          <div>
            <blockquote className="text-slate-700 italic mb-3">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-sm">
              <div className="font-medium text-slate-800">{testimonial.author}</div>
              {testimonial.company && (
                <div className="text-slate-600">{testimonial.company}</div>
              )}
              {testimonial.results && (
                <div className="text-primary-600 font-medium mt-1">
                  {testimonial.results}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderBundleOffer = () => {
    if (!bundleOffer) return null;

    return (
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <SparklesIcon className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Special Bundle Offer</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{bundleOffer.title}</h3>
          <p className="text-primary-100 mb-4">{bundleOffer.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TagIcon className="w-5 h-5" />
              <span className="text-2xl font-bold">{bundleOffer.discount}% OFF</span>
            </div>
            <button
              onClick={() => handleBundleSelect(bundleOffer.title)}
              className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200"
            >
              Get Bundle
            </button>
          </div>
        </div>
      </div>
    );
  };

  const getUrgencyBadge = (urgency?: 'low' | 'medium' | 'high') => {
    if (!urgency || urgency === 'low') return null;

    const styles = {
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };

    const labels = {
      medium: 'Recommended',
      high: 'High Priority'
    };

    return (
      <span className={cn(
        'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
        styles[urgency]
      )}>
        {labels[urgency]}
      </span>
    );
  };

  const getRelationshipIcon = (type: string) => {
    switch (type) {
      case 'complementary':
        return '🤝';
      case 'sequential':
        return '➡️';
      case 'prerequisite':
        return '🔗';
      case 'upgrade':
        return '⬆️';
      default:
        return '✨';
    }
  };

  return (
    <section className={cn('py-16 lg:py-24 bg-neutral-50', className)}>
      <Container size="2xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Recommended for Your Business
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Based on your business stage and service needs, here are our intelligent recommendations 
              to help you achieve your goals more effectively.
            </p>
          </div>

          {/* Urgency Banner */}
          {renderUrgencyBanner()}

          {/* Bundle Offer */}
          {renderBundleOffer()}

          {/* Testimonial */}
          {renderTestimonial()}

          {/* Smart Recommendations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {relatedServices.map((service, index) => {
              const recommendation = recommendations[index];
              const ServiceIcon = service.icon;
              
              return (
                <div key={service.id} className="group relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300 h-full">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn(
                        'inline-flex items-center justify-center w-12 h-12 rounded-lg',
                        service.bgColor
                      )}>
                        <ServiceIcon className={cn('w-6 h-6', service.color)} />
                      </div>
                      
                      <div className="flex flex-col gap-2 items-end">
                        {getUrgencyBadge(recommendation.urgency)}
                        {recommendation.bundleDiscount && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {recommendation.bundleDiscount}% bundle discount
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {service.title}
                      </h3>
                      
                      {/* Relationship Indicator */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">{getRelationshipIcon(recommendation.type)}</span>
                        <span className="text-sm text-slate-500 capitalize">
                          {recommendation.type.replace('-', ' ')} service
                        </span>
                      </div>

                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {service.shortDescription || service.description}
                      </p>

                      {/* Recommendation Reason */}
                      <div className="bg-primary-50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-primary-800 font-medium">
                          💡 {recommendation.reason}
                        </p>
                      </div>

                      {/* Key Benefits */}
                      {service.benefits && service.benefits.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-slate-700 mb-2">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-neutral-100">
                      <a
                        href={service.href}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </a>
                      
                      {recommendation.bundleDiscount && (
                        <button
                          onClick={() => handleBundleSelect(`${currentServiceId}-${service.id}`)}
                          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200"
                        >
                          <TagIcon className="w-4 h-4 mr-2" />
                          Bundle & Save {recommendation.bundleDiscount}%
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                Our integrated approach ensures all your business needs work together seamlessly. 
                Let's discuss how these services can accelerate your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Schedule Free Consultation
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-600 bg-white hover:bg-primary-50 border border-primary-600 rounded-lg transition-colors duration-200">
                  Download Service Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SmartCrossSellingSection; 