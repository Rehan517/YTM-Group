import React from 'react';
import { ServicePage, ServiceContactForm } from '@/components';
import { getServiceById } from '@/config/services.config';
import { DocumentTextIcon, CalculatorIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const LendingPage: React.FC = () => {
  // Get the lending service data
  const lendingService = getServiceById('lending');

  if (!lendingService) {
    return <div>Service not found</div>;
  }

  // Define the process steps for lending
  const processSteps = [
    {
      id: 'consultation',
      title: 'Initial Consultation',
      description: 'We discuss your financial goals, current situation, and loan requirements to understand your specific needs.',
      icon: <DocumentTextIcon className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'pre-approval',
      title: 'Pre-Approval Assessment',
      description: 'Our experts conduct a comprehensive financial assessment to determine your borrowing capacity and loan options.',
      icon: <CalculatorIcon className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'application',
      title: 'Loan Application',
      description: 'We guide you through the application process, ensuring all documentation is complete and accurate for faster processing.',
      icon: <ClockIcon className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'approval',
      title: 'Approval & Settlement',
      description: 'Once approved, we coordinate with all parties to ensure a smooth settlement process and loan disbursement.',
      icon: <CheckCircleIcon className="w-8 h-8 text-blue-600" />
    }
  ];

  // Additional content for the lending service
  const additionalContent = {
    overview: `Our lending solutions are designed to help you achieve your property and investment goals with competitive rates and flexible terms. Whether you're a first-time homebuyer, seasoned investor, or business owner looking for commercial financing, our experienced team provides personalized service throughout the entire loan process. We work with a wide network of lenders to find the best rates and terms that match your specific financial situation and objectives.`,
    whyChooseUs: [
      'Access to exclusive rates through our extensive lender network',
      'Dedicated loan specialists with 15+ years of experience',
      'Streamlined application process with faster approvals',
      'Ongoing support from application to settlement and beyond',
      'Transparent fee structure with no hidden costs',
      'Specialist knowledge in complex lending scenarios'
    ]
  };

  // Get related services (excluding current service)
  const relatedServices = [
    getServiceById('financial-planning'),
    getServiceById('business-insurance'),
    getServiceById('property')
  ].filter((service): service is NonNullable<typeof service> => service !== undefined);

  // Handle form submission
  const handleFormSubmit = async (data: any) => {
    console.log('Lending form submission:', data);
    // TODO: Implement actual form submission logic
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  // Create the contact form component
  const contactForm = (
    <ServiceContactForm
      serviceId="lending"
      serviceName="Lending Solutions"
      onSubmit={handleFormSubmit}
    />
  );

  return (
    <ServicePage
      service={lendingService}
      processSteps={processSteps}
      additionalContent={additionalContent}
      contactForm={contactForm}
      relatedServices={relatedServices}
    />
  );
};

export default LendingPage; 