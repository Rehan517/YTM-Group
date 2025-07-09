import React from 'react';
import { ServicePage, ServiceContactForm } from '@/components';
import { getServiceById } from '@/config/services.config';
import { 
  MagnifyingGlassIcon, 
  DocumentDuplicateIcon, 
  KeyIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

const PropertyServicesPage: React.FC = () => {
  // Get the property services data
  const propertyService = getServiceById('property-services');

  if (!propertyService) {
    return <div>Service not found</div>;
  }

  // Define the process steps for property services
  const processSteps = [
    {
      id: 'consultation',
      title: 'Property Consultation & Needs Analysis',
      description: 'We begin with a detailed consultation to understand your property goals, investment criteria, and specific requirements.',
      icon: <MagnifyingGlassIcon className="w-8 h-8 text-emerald-600" />
    },
    {
      id: 'research',
      title: 'Market Research & Property Search',
      description: 'Our team conducts comprehensive market analysis and property searches to identify opportunities that match your criteria.',
      icon: <DocumentDuplicateIcon className="w-8 h-8 text-emerald-600" />
    },
    {
      id: 'transaction',
      title: 'Transaction Management & Negotiation',
      description: 'We manage the entire transaction process, including negotiations, due diligence, and all legal and financial requirements.',
      icon: <KeyIcon className="w-8 h-8 text-emerald-600" />
    },
    {
      id: 'management',
      title: 'Ongoing Property Management',
      description: 'Comprehensive property management services including tenant relations, maintenance, and investment performance monitoring.',
      icon: <BuildingStorefrontIcon className="w-8 h-8 text-emerald-600" />
    }
  ];

  // Additional content for property services
  const additionalContent = {
    overview: `Navigate the property market with confidence through our comprehensive property services designed for investors, businesses, and property owners. Our experienced property professionals provide end-to-end solutions covering commercial real estate, residential investments, property management, and strategic property advice. Whether you're acquiring your first investment property or managing a diverse portfolio, we deliver the expertise and personal service you need for success.`,
    whyChooseUs: [
      'Extensive local market knowledge across all property sectors',
      'Licensed property professionals with 20+ years combined experience',
      'Full-service approach from acquisition to ongoing management',
      'Strong network of trusted industry professionals and contractors',
      'Technology-driven property management and reporting systems',
      'Proven track record in property investment and capital growth',
      'Transparent fee structure with no hidden costs or surprises',
      'Personalized service with dedicated property relationship managers'
    ],
    specializations: [
      {
        title: 'Commercial Real Estate Services',
        description: 'Complete commercial property solutions including office, retail, industrial, and mixed-use property acquisition, leasing, and management.'
      },
      {
        title: 'Residential Investment Properties',
        description: 'Residential investment property services covering acquisition, rental management, tenant screening, and portfolio optimization.'
      },
      {
        title: 'Property Management & Maintenance',
        description: 'Comprehensive property management including tenant relations, maintenance coordination, rent collection, and compliance management.'
      },
      {
        title: 'Property Valuation & Advisory',
        description: 'Professional property valuations, market analysis, investment advice, and strategic property portfolio planning services.'
      },
      {
        title: 'Property Development & Consulting',
        description: 'Development project management, feasibility studies, planning approvals, and project delivery for property development initiatives.'
      },
      {
        title: 'Property Finance & Investment Strategy',
        description: 'Property finance solutions, investment strategy development, and portfolio structuring for optimal returns and tax efficiency.'
      }
    ]
  };

  // Get related services (excluding current service)
  const relatedServices = [
    getServiceById('financial-planning'),
    getServiceById('business-advisory'),
    getServiceById('legal-services')
  ].filter((service): service is NonNullable<typeof service> => service !== undefined);

  // Handle form submission
  const handleFormSubmit = async (data: any) => {
    console.log('Property Services form submission:', data);
    // TODO: Implement actual form submission logic
    alert('Thank you for your property inquiry! One of our property specialists will contact you within 24 hours to discuss your property needs.');
  };

  // Create the contact form component
  const contactForm = (
    <ServiceContactForm
      serviceId="property-services"
      serviceName="Property Services"
      onSubmit={handleFormSubmit}
    />
  );

  return (
    <ServicePage
      service={propertyService}
      processSteps={processSteps}
      additionalContent={additionalContent}
      contactForm={contactForm}
      relatedServices={relatedServices}
    />
  );
};

export default PropertyServicesPage; 