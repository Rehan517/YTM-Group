import React from 'react';
import { ReviewSchema } from '@/components/seo';
import Container from '@/components/layout/Container';
import { sampleTestimonials, getAverageRating, getTotalReviews } from '@/data/testimonials';
import { ReviewsSection, StrategyCTA } from '@/components';

const TestimonialsPage: React.FC = () => {
  // Business information for schema markup
  const businessInfo = {
    name: 'YTM Group',
    description: 'Professional Financial & Legal Services providing comprehensive lending, financial planning, legal services, and business advisory solutions across Australia.',
    url: 'https://ytmgroup.com.au',
    telephone: '1800 123 456',
    address: {
      streetAddress: '123 Business District',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      postalCode: '2000',
      addressCountry: 'AU',
    },
    sameAs: [
      'https://www.linkedin.com/company/ytm-group',
      'https://www.facebook.com/ytmgroup',
      'https://twitter.com/ytmgroup',
    ],
  };

  // Aggregate rating for schema markup
  const aggregateRating = {
    ratingValue: getAverageRating(),
    reviewCount: getTotalReviews(),
    bestRating: 5,
    worstRating: 1,
  };

  return (
    <main className="min-h-screen">
      {/* Schema Markup for SEO */}
      <ReviewSchema
        testimonials={sampleTestimonials}
        businessInfo={businessInfo}
        aggregateRating={aggregateRating}
        includeOrganizationSchema={true}
      />

      {/* Hero Section */}
      <section className="bg-primary-100 py-16 lg:py-20">
        <Container size="xl" padding="md">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl lg:text-6xl xl:text-6xl font-bold text-black leading-tight mb-6">
              Client Success Stories
            </h1>
            <p className="font-body text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover how YTM Group has helped hundreds of clients achieve their financial 
              and business goals through our comprehensive services and expert guidance.
            </p>
          </div>
        </Container>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <Container size="xl" padding="md">
          
          
          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Video Testimonial 1 - TikTok */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Video Container */}
              <div className="aspect-[4/5] bg-gray-200 relative group cursor-pointer">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Placeholder - Replace with actual video */}
                <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Platform Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  
                  <span className="text-sm text-gray-500">@user</span>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-800 font-medium">
                  YTM helped us refinance and cut our repayments by 18%.
                </p>
              </div>
            </div>

            {/* Video Testimonial 2 - Instagram */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Video Container */}
              <div className="aspect-[4/5] bg-gray-200 relative group cursor-pointer">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Placeholder - Replace with actual video */}
                <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Platform Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                 
                  <span className="text-sm text-gray-500">@jessicahorneart</span>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-800 font-medium">
                  Seamless process, clear advice — highly recommend.
                </p>
              </div>
            </div>

            {/* Video Testimonial 3 - Mp4 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Video Container with Controls */}
              <div className="aspect-[4/5] bg-gray-200 relative">
                {/* Video Background */}
                <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-300"></div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                      <span className="text-sm font-medium">0:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 hover:text-gray-300">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v10zm2-10l5 5-5 5V7z"/>
                        </svg>
                      </button>
                      <button className="w-6 h-6 hover:text-gray-300">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Platform Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                 
                  <span className="text-sm text-gray-500">@smallbizeats</span>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-800 font-medium">
                  Their ongoing rate reviews keep saving us money.
                </p>
              </div>
            </div>
          </div>

        </Container>
      </section>

            {/* Reviews Section */}
            <ReviewsSection />

{/* Strategy CTA Section */}
<StrategyCTA />

      
    </main>
  );
};

export default TestimonialsPage; 