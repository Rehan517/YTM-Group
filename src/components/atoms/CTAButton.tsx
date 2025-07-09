import React from 'react';
import { cn } from '@/utils';
import * as HeroIcons from '@heroicons/react/24/outline';
import { 
  getUrgencyClasses, 
  getVariantClasses,
  type CTAConfig 
} from '@/config/service-ctas.config';

interface CTAButtonProps {
  cta: CTAConfig;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  trackingData?: Record<string, any>;
}

/**
 * Dynamic CTA Button Component with conversion optimization
 * Supports various CTA types, urgency levels, and actions
 */
const CTAButton: React.FC<CTAButtonProps> = ({
  cta,
  size = 'md',
  fullWidth = false,
  className,
  onClick,
  trackingData = {}
}) => {
  // Get icon component dynamically
  const IconComponent = cta.icon ? HeroIcons[cta.icon as keyof typeof HeroIcons] : null;

  // Handle CTA action
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', cta.analyticsEvent, {
        event_category: 'CTA',
        event_label: cta.id,
        value: cta.conversionValue || 0,
        service_id: cta.id.split('-')[0],
        cta_type: cta.type,
        urgency: cta.urgency,
        ...trackingData
      });
    }

    // Execute action
    switch (cta.action) {
      case 'form':
        // Scroll to form or open modal
        const formElement = document.querySelector(cta.actionValue);
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 'phone':
        window.location.href = cta.actionValue;
        break;
      case 'email':
        window.location.href = `mailto:${cta.actionValue}`;
        break;
      case 'link':
        // For internal links, scroll to element
        if (cta.actionValue.startsWith('#')) {
          const element = document.querySelector(cta.actionValue);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          // External link
          window.open(cta.actionValue, '_blank', 'noopener,noreferrer');
        }
        break;
    }

    // Call custom onClick handler
    onClick?.(event);
  };

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  // Icon size classes
  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-medium rounded-lg border transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50',
        
        // Size styles
        sizeClasses[size],
        
        // Variant styles
        getVariantClasses(cta.variant),
        
        // Urgency styles
        getUrgencyClasses(cta.urgency),
        
        // Full width
        fullWidth ? 'w-full' : '',
        
        // Custom classes
        className
      )}
      data-cta-id={cta.id}
      data-cta-type={cta.type}
      data-analytics-event={cta.analyticsEvent}
    >
      {/* Main content container */}
      <div className="flex items-center gap-2">
        {/* Icon */}
        {IconComponent && (
          <IconComponent 
            className={cn(iconSizeClasses[size], 'flex-shrink-0')} 
            aria-hidden="true"
          />
        )}
        
        {/* Text content */}
        <div className="flex flex-col items-start">
          <span className="font-semibold leading-tight">
            {cta.text}
          </span>
          {cta.subtext && size !== 'sm' && (
            <span className="text-xs opacity-90 font-normal leading-tight mt-0.5">
              {cta.subtext}
            </span>
          )}
        </div>
      </div>
      
      {/* Urgency indicator for high urgency CTAs */}
      {cta.urgency === 'high' && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      )}
    </button>
  );
};

// Specialized CTA button variants for common use cases
export const PrimaryCTAButton: React.FC<Omit<CTAButtonProps, 'cta'> & { cta: CTAConfig }> = (props) => (
  <CTAButton {...props} size="lg" />
);

export const SecondaryCTAButton: React.FC<Omit<CTAButtonProps, 'cta'> & { cta: CTAConfig }> = (props) => (
  <CTAButton {...props} size="md" />
);

export const HeroCTAButton: React.FC<Omit<CTAButtonProps, 'cta'> & { cta: CTAConfig }> = (props) => (
  <CTAButton {...props} size="xl" className="shadow-lg hover:shadow-xl" />
);

export default CTAButton; 