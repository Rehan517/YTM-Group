import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleAnalyticsProps {
  trackingId: string;
  enableDevelopmentTracking?: boolean;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  trackingId,
  enableDevelopmentTracking = false
}) => {
  // Don't load GA in development unless explicitly enabled
  const isDevelopment = import.meta.env.DEV;
  
  if (isDevelopment && !enableDevelopmentTracking) {
    return null;
  }

  return (
    <Helmet>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}', {
            page_title: document.title,
            page_location: window.location.href
          });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;

// Utility functions for Google Analytics tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID || '', {
      page_title: title || document.title,
      page_location: url
    });
  }
};

export const trackConversion = (conversionId: string, value?: number, currency = 'AUD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, serviceType?: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    service_type: serviceType
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    click_location: location
  });
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName
  });
};

// Track phone calls (when user clicks phone number)
export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent('phone_call', {
    phone_number: phoneNumber
  });
};

// Extended Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 