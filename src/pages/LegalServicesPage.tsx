import React from 'react';
import { ServicePage, ServiceContactForm } from '@/components';
import { getServiceById } from '@/config/services.config';
import { 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const LegalServicesPage: React.FC = () => {
  // Get the legal services data
  const legalService = getServiceById('legal-services');

  if (!legalService) {
    return <div>Service not found</div>;
  }

  // Define the process steps for legal services
  const processSteps = [
    {
      id: 'consultation',
      title: 'Initial Legal Consultation',
      description: 'We conduct a comprehensive review of your legal requirements, assess potential risks, and provide initial guidance on the best legal approach.',
      icon: <DocumentTextIcon className="w-8 h-8 text-purple-600" />
    },
    {
      id: 'strategy',
      title: 'Legal Strategy Development',
      description: 'Our experienced attorneys develop a tailored legal strategy addressing your specific needs, timeline, and budget considerations.',
      icon: <BuildingOfficeIcon className="w-8 h-8 text-purple-600" />
    },
    {
      id: 'implementation',
      title: 'Legal Implementation',
      description: 'We execute the legal strategy, handling documentation, negotiations, compliance matters, and representation as required.',
      icon: <ShieldCheckIcon className="w-8 h-8 text-purple-600" />
    },
    {
      id: 'compliance',
      title: 'Ongoing Compliance',
      description: 'Continuous legal support and compliance monitoring to ensure your business operations remain legally protected and compliant.',
      icon: <CheckCircleIcon className="w-8 h-8 text-purple-600" />
    }
  ];

  // Additional content for the legal services
  const additionalContent = {
    overview: `Our comprehensive legal services provide expert guidance and representation across all aspects of business and personal law. With experienced attorneys specializing in various areas of law, we deliver practical solutions that protect your interests while helping you achieve your objectives. From contract drafting and review to complex litigation support, our team ensures your legal matters are handled with the highest level of professionalism and expertise.`,
    whyChooseUs: [
      'Experienced attorneys with specialized expertise in business law',
      'Proactive legal strategies to prevent issues before they arise',
      'Transparent fee structure with no surprise costs',
      'Quick response times for urgent legal matters',
      'Comprehensive compliance support and risk management',
      'Personal attention with dedicated attorney relationships',
      'Strong track record in negotiation and dispute resolution',
      'Local knowledge of Australian legal landscape and regulations'
    ],
    specializations: [
      {
        title: 'Business Law & Corporate Governance',
        description: 'Complete business legal services including entity formation, corporate governance, mergers & acquisitions, and commercial transactions.'
      },
      {
        title: 'Contract Law & Negotiations',
        description: 'Expert contract drafting, review, and negotiation services to protect your interests in all business relationships and transactions.'
      },
      {
        title: 'Employment & Workplace Law',
        description: 'Comprehensive employment law guidance including workplace policies, employment contracts, and dispute resolution.'
      },
      {
        title: 'Property & Real Estate Law',
        description: 'Full-service property law including commercial and residential transactions, leasing, development, and property disputes.'
      },
      {
        title: 'Litigation & Dispute Resolution',
        description: 'Experienced litigation support and alternative dispute resolution to protect your interests when conflicts arise.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Ongoing compliance support to ensure your business operations meet all relevant legal and regulatory requirements.'
      }
    ]
  };

  // Handle form submission
  const handleFormSubmit = async (data: any) => {
    console.log('Legal Services form submission:', data);
    // TODO: Implement actual form submission logic
    alert('Thank you for your legal inquiry! One of our attorneys will contact you within 24 hours to discuss your matter.');
  };

  // Create the contact form component
  const contactForm = (
    <ServiceContactForm
      serviceId="legal-services"
      serviceName="Legal Services"
      onSubmit={handleFormSubmit}
    />
  );

  return (
    <ServicePage
      service={legalService}
      processSteps={processSteps}
      additionalContent={additionalContent}
      contactForm={contactForm}
      businessStage="startup" // Legal services are often needed for new businesses
    />
  );
};

export default LegalServicesPage; 