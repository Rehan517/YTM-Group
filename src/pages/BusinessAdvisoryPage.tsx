import React from 'react';
import { ServicePage } from '@/components';
import { getServiceById } from '@/config/services.config';
import { BusinessAdvisoryImage } from '@/assets';

const BusinessAdvisoryPage: React.FC = () => {
  // Get the business advisory service data
  const businessAdvisoryService = getServiceById('business-advisory');

  if (!businessAdvisoryService) {
    return <div>Service not found</div>;
  }

  // Define service options for business advisory (4 options based on screenshot)
  const serviceOptions = [
    {
      title: 'Strategic Planning',
      description: 'Unlock your business\'s potential with our strategic planning expertise. We specialize in crafting personalized strategies to maximize profitability and achieve long-term growth goals. Let us guide your business toward financial success with clarity and confidence. Start strategically planning for your company\'s future today.',
      tags: ['Growth strategy', 'Business planning', 'Long-term goals']
    },
    {
      title: 'Financial Analysis',
      description: 'Achieve clarity and confidence in your business\'s financial strategy through our comprehensive analysis. Let us collaborate to optimize your financial performance.',
      tags: ['Financial strategy', 'Performance optimization', 'Data analysis']
    },
    {
      title: 'Risk Management',
      description: 'Partner with us to develop a proactive strategy tailored to safeguard your assets and ensure stability. Leverage our expertise to confidently navigate future challenges, securing your business\'s peace of mind today.',
      tags: ['Asset protection', 'Business stability', 'Risk mitigation']
    },
    {
      title: 'Operational Improvement',
      description: 'Unlock your business\'s full potential with our operational improvement expertise. We specialise in optimising processes and enhancing efficiency to drive growth and profitability. Partner with us for a brighter financial future.',
      tags: ['Process optimization', 'Efficiency enhancement', 'Growth acceleration']
    }
  ];

  return (
    <ServicePage
      service={businessAdvisoryService}
      serviceOptions={serviceOptions}
      heroImage={BusinessAdvisoryImage}
    />
  );
};

export default BusinessAdvisoryPage; 