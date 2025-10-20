import React from 'react';
import { ServicePage } from '@/components';
import { getServiceById } from '@/config/services.config';
import { BusinessInsuranceImage } from '@/assets';

const BusinessInsurancePage: React.FC = () => {
  // Get the business insurance service data
  const businessInsuranceService = getServiceById('business-insurance');

  if (!businessInsuranceService) {
    return <div>Service not found</div>;
  }

  // Define service options for business insurance (8 options based on screenshot)
  const serviceOptions = [
    {
      title: 'Public Liability Insurance',
      description: 'Public Liability Insurance provides essential protection in such scenarios, covering legal costs, compensation claims, and other expenses arising from third-party bodily injury or property damage caused by your business operations or premises.',
      tags: ['Third-party protection', 'Legal costs', 'Property damage']
    },
    {
      title: 'Professional Indemnity',
      description: 'Professional Indemnity insurance shields professionals from financial repercussions stemming from claims of negligence, errors, or omissions in their services. Tailored policies from our insurance advisers provide comprehensive protection, covering legal expenses, settlements, and damages. Ensure your reputation and livelihood are safeguarded.',
      tags: ['Professional errors', 'Legal expenses', 'Reputation protection']
    },
    {
      title: 'Commercial Fleet Insurance',
      description: 'Our insurance advisers guide you through comprehensive coverage for businesses with multiple vehicles, safeguarding against accidents, theft, and liabilities. With tailored policies designed to meet your specific needs, including fleet management support and claims assistance, you can protect your vehicles, drivers, and business operations with confidence.',
      tags: ['Fleet protection', 'Vehicle coverage', 'Driver safety']
    },
    {
      title: 'Food & Beverage/Retail Industry Related Insurances',
      description: 'By carefully assessing the unique risks faced by Food & Beverage/Retail businesses and securing appropriate insurance coverage, owners and operators can protect their assets, finances, and reputation in an industry known for its challenges and vulnerabilities.',
      tags: ['Industry-specific', 'Asset protection', 'Risk assessment']
    },
    {
      title: 'Business Interruption Insurance',
      description: 'Mitigate financial losses due to interruptions in business operations caused by covered events.',
      tags: ['Income protection', 'Business continuity', 'Financial security']
    },
    {
      title: 'Asset Protection',
      description: 'Safeguard your business assets with strategic asset protection insurance. We will help tailor a coverage solution to protect you from financial loss caused by the theft or damage of your valuable equipment, property, and other assets.',
      tags: ['Equipment protection', 'Property coverage', 'Financial security']
    },
    {
      title: 'Cyber Insurance',
      description: 'Stay ahead of digital threats with a comprehensive cyber insurance solution. We will help you choose a policy to protect your business against data breaches, cyberattacks and other online risks, ensuring resilience in the face of evolving cybersecurity challenges.',
      tags: ['Digital protection', 'Data security', 'Cyber threats']
    },
    {
      title: 'Worker Protection Insurance',
      description: 'Make sure your business is compliant and your team is protected in the event of a worst case scenario.',
      tags: ['Employee protection', 'Compliance', 'Workplace safety']
    }
  ];

  return (
    <ServicePage
      service={businessInsuranceService}
      serviceOptions={serviceOptions}
      heroImage={BusinessInsuranceImage}
    />
  );
};

export default BusinessInsurancePage; 