import React, { useEffect } from 'react';
import Container from '@/components/layout/Container';

interface ReviewsSectionProps {
  className?: string;
}

/**
 * YTM Google Reviews Section using Elfsight Widget
 * - Uses Elfsight platform to display live Google reviews
 * - Auto-loads and displays real customer feedback
 * - Professional styling with consistent branding
 */
const ReviewsSection: React.FC<ReviewsSectionProps> = ({ className = '' }) => {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup is handled by Elfsight platform
    };
  }, []);

  return (
    <section className={`py-20 sm:py-24 bg-gray-50 ${className}`}>
      <Container size="xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 sm:text-3xl">What clients say</h2>
          <p className="mt-2 text-slate-600 text-base sm:text-lg lg:text-xl">Honest feedback about our financial services and expertise.</p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <div 
            className="elfsight-app-3f00103b-2649-46df-a33f-8b5db1030fc8" 
            data-elfsight-app-lazy
          />
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
