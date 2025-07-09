import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils';
import type { ServiceCardProps } from '@/types/services';

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className,
  showFullDescription = false,
  priority = 'medium'
}) => {
  const {
    icon: Icon,
    title,
    description,
    shortDescription,
    href,
    color,
    bgColor,
    iconLabel,
    features
  } = service;

  // Determine which description to show
  const displayDescription = showFullDescription ? description : (shortDescription || description);

  return (
    <article
      className={cn(
        // Base card styling
        'group relative bg-white rounded-xl overflow-hidden',
        'border border-neutral-200 shadow-sm',
        // Enhanced hover effects with scale and shadow
        'transition-all duration-300 ease-in-out',
        'hover:shadow-xl hover:shadow-neutral-200/50',
        'hover:border-neutral-300 hover:-translate-y-1',
        'hover:scale-[1.02]',
        // Focus states for accessibility
        'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2',
        'focus-within:shadow-lg focus-within:border-primary-300',
        // Touch device considerations
        'active:scale-[0.98] active:shadow-md',
        // Performance optimizations
        'transform-gpu will-change-transform',
        className
      )}
      aria-labelledby={`service-${service.id}-title`}
      aria-describedby={`service-${service.id}-description`}
    >
      {/* Enhanced background gradient on hover */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-transparent to-neutral-50/30',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        )}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative p-6 lg:p-8">
        {/* Icon Section with Enhanced Hover Effects */}
        <div className="flex items-center mb-6">
          <div
            className={cn(
              'flex items-center justify-center w-12 h-12 rounded-lg',
              'transition-all duration-300',
              bgColor,
              // Enhanced icon hover effects
              'group-hover:scale-110 group-hover:shadow-lg',
              'group-hover:rotate-3 group-hover:shadow-primary-200/50',
              'transform-gpu will-change-transform'
            )}
            aria-hidden="true"
          >
            <Icon
              className={cn(
                'w-6 h-6 transition-all duration-300',
                color,
                // Icon color enhancement on hover
                'group-hover:scale-110'
              )}
              aria-label={iconLabel}
            />
          </div>
          {/* Priority indicator for screen readers */}
          <span className="sr-only">
            Priority: {priority}
          </span>
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          {/* Title with Enhanced Hover Effect */}
          <h3
            id={`service-${service.id}-title`}
            className={cn(
              'text-xl lg:text-2xl font-bold text-slate-800',
              'leading-tight transition-all duration-300',
              'group-hover:text-primary-700 group-hover:translate-x-1',
              'transform-gpu will-change-transform'
            )}
          >
            {title}
          </h3>

          {/* Description with Subtle Animation */}
          <p
            id={`service-${service.id}-description`}
            className={cn(
              'text-slate-600 leading-relaxed transition-all duration-300',
              'text-sm lg:text-base',
              'group-hover:text-slate-700'
            )}
          >
            {displayDescription}
          </p>

          {/* Key Features with Enhanced Hover Effects */}
          {features && features.length > 0 && !showFullDescription && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Key Services
              </h4>
              <ul className="space-y-1">
                {features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className={cn(
                      'flex items-start text-sm text-slate-600',
                      'transition-all duration-300 ease-in-out',
                      'group-hover:text-slate-700 group-hover:translate-x-1',
                      'transform-gpu will-change-transform'
                    )}
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    <span 
                      className={cn(
                        'inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2 flex-shrink-0',
                        'transition-all duration-300',
                        'group-hover:bg-primary-600 group-hover:scale-125'
                      )}
                    />
                    {feature}
                  </li>
                ))}
                {features.length > 3 && (
                  <li className="text-sm text-slate-500 font-medium transition-colors duration-300 group-hover:text-slate-600">
                    +{features.length - 3} more services
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Call-to-Action Footer with Enhanced Hover */}
      <div className={cn(
        'relative px-6 py-4 lg:px-8 lg:py-6',
        'bg-neutral-50 border-t border-neutral-100',
        'transition-all duration-300',
        'group-hover:bg-neutral-100 group-hover:border-neutral-200'
      )}>
        <Link
          to={href}
          className={cn(
            'inline-flex items-center justify-between w-full',
            'text-primary-600 hover:text-primary-700',
            'font-semibold text-sm lg:text-base',
            'transition-all duration-300',
            // Enhanced focus states
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
            'focus:bg-primary-50 focus:text-primary-800',
            'rounded-md px-2 py-1 -mx-2 -my-1',
            // Enhanced hover effects
            'group-hover:translate-x-1 group-hover:text-primary-700',
            'transform-gpu will-change-transform'
          )}
          aria-label={`Learn more about ${title} services`}
        >
          <span className="transition-all duration-300 group-hover:font-bold">
            Learn More
          </span>
          <ArrowRightIcon 
            className={cn(
              'w-4 h-4 ml-2 transition-all duration-300',
              'group-hover:translate-x-2 group-hover:scale-110',
              'transform-gpu will-change-transform'
            )}
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Enhanced Decorative Elements */}
      <div
        className={cn(
          'absolute top-0 right-0 w-20 h-20 opacity-5',
          'transform rotate-12 translate-x-6 -translate-y-6',
          'transition-all duration-500 ease-out',
          'group-hover:opacity-10 group-hover:scale-125',
          'group-hover:rotate-45 group-hover:translate-x-4',
          'transform-gpu will-change-transform'
        )}
        aria-hidden="true"
      >
        <Icon className="w-full h-full" />
      </div>

      {/* Hover Border Effect */}
      <div
        className={cn(
          'absolute inset-0 rounded-xl border-2 border-transparent',
          'transition-all duration-300',
          'group-hover:border-primary-200/50',
          'pointer-events-none'
        )}
        aria-hidden="true"
      />
    </article>
  );
};

export default ServiceCard; 