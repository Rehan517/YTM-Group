import React from 'react';
import { InlineWidget } from 'react-calendly';
import Container from '@/components/layout/Container';
import { SEOHead } from '@/components';
import { getSEOData, generateBreadcrumbs } from '@/config/seo.config';
import { PhoneIcon, MailIcon, LocationIcon, EfficiencyIcon } from '@/assets';

const ContactPage: React.FC = () => {
  const seoData = getSEOData('contact');
  const breadcrumbs = generateBreadcrumbs('/contact');

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
        ogType={seoData.ogType}
        twitterCard={seoData.twitterCard}
        structuredData={breadcrumbs}
      />

      {/* Header Section */}
      <section className="bg-primary-100 to-white py-12 sm:py-16 lg:py-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800 mb-4 sm:mb-6">
              Book Your Free Strategy Call
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed">
            15–20 min consultation · No obligation · Get expert advice
            </p>
          </div>
        </Container>
      </section>

      {/* Calendly Widget Section */}
      <section className="bg-white py-8 sm:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="calendly-widget-container max-w-7xl mx-auto">
            <InlineWidget
              url="https://calendly.com/ytm-group"
              styles={{
                height: '750px',
                width: '100%',
                minWidth: '320px'
              }}
              pageSettings={{
                hideEventTypeDetails: true,
                hideGdprBanner: true,
                backgroundColor: 'ffffff',
                textColor: '4d5055',
                primaryColor: '00a2ff'
              }}
              prefill={{
                // You can prefill form data if needed
                // name: 'John Doe',
                // email: 'john@example.com'
              }}
              utm={{
                // UTM parameters for tracking
                utmSource: 'website',
                utmMedium: 'contact-page',
                utmCampaign: 'strategy-call'
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Can't find a suitable time? Feel free to reach out to us directly through any of the methods below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Phone */}
            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <img 
                  src={PhoneIcon} 
                  alt="Phone" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-800 mb-2">Phone</h3>
              <a 
                href="tel:+61370469786" 
                className="text-sm sm:text-base text-primary-600 hover:text-primary-700 transition-colors font-medium"
              >
                (03) 7046 9786
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <img 
                  src={MailIcon} 
                  alt="Email" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-800 mb-2">Email</h3>
              <a 
                href="mailto:info@ytmgroup.com.au" 
                className="text-sm sm:text-base text-primary-600 hover:text-primary-700 transition-colors font-medium break-all"
              >
                info@ytmgroup.com.au
              </a>
            </div>

            {/* Office */}
            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <img 
                  src={LocationIcon} 
                  alt="Location" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-800 mb-2">Office</h3>
              <p className="text-sm sm:text-base text-neutral-600">
                1 Princess St<br />
                Kew VIC 3101<br />
                Australia
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <img 
                  src={EfficiencyIcon} 
                  alt="Business Hours" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-800 mb-2">Business Hours</h3>
              <div className="text-xs sm:text-sm text-neutral-600 space-y-1">
                <div>
                  <span className="font-medium">Mon-Fri:</span><br />
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div>
                  <span className="font-medium">Weekends:</span><br />
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
