import React from 'react';
import { ServicePage } from '@/components';
import { getServiceById } from '@/config/services.config';
import { LendingImage } from '@/assets';

const LendingPage: React.FC = () => {
  // Get the lending service data
  const lendingService = getServiceById('lending');

  if (!lendingService) {
    return <div>Service not found</div>;
  }

  // Define service options for lending
  const serviceOptions = [
    {
      title: 'Home Loans',
      description: 'Tailored lending for first-home buyers, refinancers, and investors — with sharp rates and strategic structure.',
      tags: ['First Home / Refinance', 'Investment strategies', 'Pre-approval support']
    },
    {
      title: 'Business Loans',
      description: 'Fuel growth with capital aligned to cash flow — overdrafts, term loans, and flexible repayments.',
      tags: ['Working capital', 'Expansion & fit-outs', 'Cash-flow aligned']
    },
    {
      title: 'Commercial Loans',
      description: 'There are so many different reasons a business needs finance, and there\'s often a different product for every single one. Allow our Advisers to guide you through them helping you find the appropriate solution.',
      tags: ['Property acquisition', 'Business expansion', 'Commercial refinance']
    },
    {
      title: 'Asset Finance',
      description: 'Acquire vehicles, tech, and equipment while preserving cash — chattel, lease, or hire-purchase.',
      tags: ['Cars & fleets', 'Tech & machinery', 'Tax-efficient options']
    },
    {
      title: 'SMSF Lending',
      description: 'Borrow inside your SMSF with compliant structures and lender-ready documentation.',
      tags: ['LRBA guidance', 'Residential & commercial', 'End-to-end process']
    },
    {
      title: 'Working Capital Finance',
      description: 'Smooth day-to-day costs with lines of credit, invoice finance, or short-term facilities.',
      tags: ['Lines of credit', 'Invoice finance', 'Seasonal cover']
    },
    {
      title: 'Asset & Equipment Finance',
      description: 'Scale operations with structured equipment lending built around usage and depreciation.',
      tags: ['Heavy equipment', 'Fit-outs', 'Fleet upgrades']
    }
  ];

  return (
    <ServicePage
      service={lendingService}
      serviceOptions={serviceOptions}
      heroImage={LendingImage}
    />
  );
};

export default LendingPage; 