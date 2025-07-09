import React from 'react';
import { cn } from '@/utils';
import { ServiceCard } from '@/components';
import { SERVICES } from '@/config/services.config';
import type { ServicesGridProps } from '@/types/services';

const ServicesGrid: React.FC<ServicesGridProps> = ({
  services = SERVICES,
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
  showCategory = false,
  className
}) => {
  // Generate responsive grid classes based on column configuration
  const getGridClasses = () => {
    // Use explicit class names that Tailwind can detect
    let mobileClass = 'grid-cols-1';
    let tabletClass = 'md:grid-cols-2';
    let desktopClass = 'lg:grid-cols-3';
    
    // Override with specific configurations if provided
    if (columns.mobile === 2) mobileClass = 'grid-cols-2';
    if (columns.mobile === 3) mobileClass = 'grid-cols-3';
    
    if (columns.tablet === 1) tabletClass = 'md:grid-cols-1';
    if (columns.tablet === 3) tabletClass = 'md:grid-cols-3';
    if (columns.tablet === 4) tabletClass = 'md:grid-cols-4';
    
    if (columns.desktop === 1) desktopClass = 'lg:grid-cols-1';
    if (columns.desktop === 2) desktopClass = 'lg:grid-cols-2';
    if (columns.desktop === 4) desktopClass = 'lg:grid-cols-4';
    if (columns.desktop === 5) desktopClass = 'lg:grid-cols-5';
    if (columns.desktop === 6) desktopClass = 'lg:grid-cols-6';
    
    return cn(
      'grid gap-6 md:gap-8',
      mobileClass,
      tabletClass,
      desktopClass
    );
  };

  // If no services provided, show empty state
  if (!services || services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 text-lg">No services available at this time.</p>
      </div>
    );
  }

  return (
    <section
      className={cn(
        'w-full',
        className
      )}
      aria-label="Services Overview"
    >
      {/* Optional Category Header */}
      {showCategory && (
        <div className="mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-neutral-600 text-lg lg:text-xl max-w-3xl">
            Comprehensive financial and legal services designed to help you build and protect your wealth for generations.
          </p>
        </div>
      )}

      {/* Services Grid */}
      <div
        className={getGridClasses()}
        role="list"
        aria-label="Available services"
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            role="listitem"
            className={cn(
              // Animation delays for staggered loading effect
              'animate-fade-in-up',
              // Stagger animation delays based on index
              index === 0 && 'animation-delay-0',
              index === 1 && 'animation-delay-100',
              index === 2 && 'animation-delay-200',
              index === 3 && 'animation-delay-300',
              index === 4 && 'animation-delay-400',
              index === 5 && 'animation-delay-500'
            )}
          >
            <ServiceCard
              service={service}
              priority={index < 3 ? 'high' : 'medium'}
              showFullDescription={false}
              className={cn(
                'h-full',
                // Special styling for featured services
                index === 0 && 'lg:col-span-1',
                // Ensure all cards have equal height
                'flex flex-col'
              )}
            />
          </div>
        ))}
      </div>

      {/* Grid Statistics for Screen Readers */}
      <div className="sr-only">
        <p>
          Showing {services.length} services in a responsive grid layout.
          Grid displays {columns.mobile} column on mobile,
          {columns.tablet} columns on tablet,
          and {columns.desktop} columns on desktop.
        </p>
      </div>
    </section>
  );
};

export default ServicesGrid; 