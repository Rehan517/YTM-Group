import React from 'react';
import { ServicePage } from '@/components';
import { getServiceById } from '@/config/services.config';
import { LegalImage } from '@/assets';

const LegalServicesPage: React.FC = () => {
  // Get the legal services data
  const legalService = getServiceById('legal-services');

  if (!legalService) {
    return <div>Service not found</div>;
  }

  // Define service options for legal services
  const serviceOptions = [
    {
      title: 'Criminal and Traffic Law',
      description: 'It is our job to help you understand the Court process, your rights and obligations, and advise you on the strengths and weaknesses of your case, particularly whether you have a viable defence or are criminally liable.',
      tags: ['Criminal defence', 'Traffic violations', 'Court representation']
    },
    {
      title: 'Business and Commercial Law',
      description: 'Be it buying or selling a business or needing someone to review and advice on commercial agreements, we are able to provide advice. We understand that for some, it will be buying their first business and to others, it will be selling a business that they have worked hard for. Different businesses have different legal requirements and it is our job to ensure that no stone is left unturned.',
      tags: ['Business transactions', 'Commercial agreements', 'Due diligence']
    },
    {
      title: 'Property Law',
      description: 'Transfers of real estate are a complex area of law. Unfortunately, even a small mistake in the conveyancing process can lead to large problems down the track. The best way to avoid any problems when conducting a real estate transaction is to work with a qualified and experienced property lawyer.',
      tags: ['Property transfers', 'Conveyancing', 'Real estate law']
    },
    {
      title: 'Wills and Estate',
      description: 'We take a holistic view when it comes to respect to planning your estate and will also provide you with advice regarding property that will not be bound by the terms of a Will such as jointly owned property and superannuation funds, so that you can be assured that when the time comes, your estate will be distributed in exactly the way you want. We provide practical advice on Estate law and assistance to executors and administrators of estates.',
      tags: ['Will preparation', 'Estate planning', 'Probate assistance']
    },
    {
      title: 'Litigation and Dispute Resolution',
      description: 'Resolve conflicts efficiently and effectively with our dispute resolution services. Trust us to guide you towards peaceful resolutions with professionalism and expertise. Let\'s overcome obstacles together. Contact us for reliable dispute resolution support.',
      tags: ['Dispute resolution', 'Court proceedings', 'Legal representation']
    }
  ];

  return (
    <ServicePage
      service={legalService}
      serviceOptions={serviceOptions}
      heroImage={LegalImage}
    />
  );
};

export default LegalServicesPage; 