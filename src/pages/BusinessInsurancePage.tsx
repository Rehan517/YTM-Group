import React from 'react';
import { ServicePage, ServiceContactForm } from '@/components';
import { getServiceById } from '@/config/services.config';
import { 
  ShieldCheckIcon, 
  BuildingOfficeIcon, 
  DocumentCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const BusinessInsurancePage: React.FC = () => {
  // Get the business insurance service data
  const businessInsuranceService = getServiceById('business-insurance');

  if (!businessInsuranceService) {
    return <div>Service not found</div>;
  }

  // Define the process steps for business insurance
  const processSteps = [
    {
      id: 'assessment',
      title: 'Risk Assessment & Analysis',
      description: 'We conduct a comprehensive assessment of your business operations, identify potential risks, and evaluate your current insurance coverage gaps.',
      icon: <DocumentCheckIcon className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'customization',
      title: 'Tailored Insurance Strategy',
      description: 'Our experts design a customized insurance portfolio that addresses your specific industry risks, business size, and operational requirements.',
      icon: <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'implementation',
      title: 'Policy Implementation',
      description: 'We handle all policy setup, documentation, and coordinate with leading insurers to ensure seamless coverage activation.',
      icon: <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'management',
      title: 'Ongoing Policy Management',
      description: 'Continuous policy review, claims support, and coverage adjustments to ensure your business remains optimally protected as it grows.',
      icon: <UserGroupIcon className="w-8 h-8 text-blue-600" />
    }
  ];

  // Additional content for business insurance
  const additionalContent = {
    overview: `Protect your business with comprehensive insurance solutions tailored to your industry and risk profile. Our experienced insurance specialists work with leading Australian insurers to provide competitive coverage that safeguards your business assets, employees, and operations. From small businesses to large enterprises, we ensure you have the right protection without paying for unnecessary coverage.`,
    whyChooseUs: [
      'Access to multiple leading insurance providers for competitive rates',
      'Industry-specific expertise across various business sectors',
      'Comprehensive risk assessment and gap analysis',
      'Dedicated claims support and advocacy',
      '24/7 emergency assistance and rapid response',
      'Annual policy reviews to optimize coverage and costs',
      'Flexible payment options and premium financing available',
      'Local Australian knowledge with national insurance network'
    ],
    specializations: [
      {
        title: 'Public & Professional Liability',
        description: 'Comprehensive liability coverage protecting against third-party claims, professional errors, and omissions specific to your industry.'
      },
      {
        title: 'Property & Contents Insurance',
        description: 'Complete protection for business premises, equipment, inventory, and contents against fire, theft, natural disasters, and damage.'
      },
      {
        title: 'Workers Compensation',
        description: 'Mandatory coverage ensuring your employees are protected while meeting all statutory requirements across Australian jurisdictions.'
      },
      {
        title: 'Cyber Liability & Data Protection',
        description: 'Modern coverage for cyber threats, data breaches, system downtime, and digital asset protection in our connected business environment.'
      },
      {
        title: 'Motor Fleet & Commercial Vehicles',
        description: 'Comprehensive vehicle insurance for business fleets, commercial vehicles, and equipment with flexible coverage options.'
      },
      {
        title: 'Business Interruption Insurance',
        description: 'Income protection ensuring business continuity during unexpected events that interrupt normal operations and revenue flow.'
      }
    ]
  };

  // Get related services (excluding current service) - REMOVED: Now handled by GetStartedCTA
  // const relatedServices = [...] - REMOVED

  // Handle form submission - REMOVED: Now handled by GetStartedCTA
  // const handleFormSubmit = async (data: any) => {...} - REMOVED

  // Create the contact form component - REMOVED: Now handled by GetStartedCTA
  // const contactForm = (...) - REMOVED

  return (
    <ServicePage
      service={businessInsuranceService}
      processSteps={processSteps}
      additionalContent={additionalContent}
    />
  );
};

export default BusinessInsurancePage; 