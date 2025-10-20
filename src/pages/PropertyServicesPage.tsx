import React from 'react';
import { ServicePage } from '@/components';
import { getServiceById } from '@/config/services.config';
import { PropertyServicesImage } from '@/assets';

const PropertyServicesPage: React.FC = () => {
  // Get the property services data
  const propertyService = getServiceById('property');

  if (!propertyService) {
    return <div>Service not found</div>;
  }


  // Define service options for property services
  const serviceOptions = [
    {
      title: 'Property Investment Advisory',
      description: 'Expert guidance on property investment strategies, market analysis, and portfolio optimisation. Our advisors help identify high-growth opportunities, assess risk factors, and develop tailored investment plans that align with your financial goals and risk tolerance.',
      tags: ['Investment Strategy', 'Market Analysis', 'Portfolio Growth', 'Risk Assessment']
    },
    {
      title: 'Portfolio Health Check',
      description: 'Comprehensive review and analysis of your existing property portfolio performance. We evaluate rental yields, capital growth potential, maintenance costs, and overall portfolio balance to identify optimisation opportunities and underperforming assets.',
      tags: ['Performance Review', 'Yield Analysis', 'Portfolio Optimisation', 'Asset Assessment']
    },
    {
      title: 'Finance & Structure Liaison',
      description: 'Strategic financing solutions and optimal ownership structures for property investments. We work with lenders, accountants, and legal professionals to secure competitive financing and establish tax-effective structures for your property portfolio.',
      tags: ['Property Finance', 'Tax Structures', 'Lending Solutions', 'Professional Network']
    },
    {
      title: 'Asset Maintenance Planning',
      description: 'Proactive maintenance strategies and capital expenditure planning to protect and enhance your property investments. Includes preventive maintenance schedules, renovation planning, and budget forecasting for ongoing property care.',
      tags: ['Maintenance Strategy', 'Capital Planning', 'Property Care', 'Budget Forecasting']
    }
  ];

  return (
    <ServicePage
      service={propertyService}
      serviceOptions={serviceOptions}
      heroImage={PropertyServicesImage}
    />
  );
};

export default PropertyServicesPage; 