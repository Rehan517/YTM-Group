import React from 'react';
import { ServicePage } from '@/components';
import { getServiceById } from '@/config/services.config';
import { FinancialImage } from '@/assets';

const FinancialPlanningPage: React.FC = () => {
  // Get the financial planning service data
  const financialPlanningService = getServiceById('financial-planning');

  if (!financialPlanningService) {
    return <div>Service not found</div>;
  }

  // Define service options for financial planning
  const serviceOptions = [
    {
      title: 'Superannuation and Investments',
      description: 'Secure your financial future with us! Our team at YTM specializes in superannuation and investment services tailored to your goals and needs. Let us guide you through the intricacies of this area.',
      tags: ['Super optimization', 'Investment strategies', 'Portfolio management']
    },
    {
      title: 'Insurances',
      description: 'Hold your peace and lifestyle with our comprehensive risk management strategies. We\'ve got you covered. Let us help you build a stable financial foundation.',
      tags: ['Life insurance', 'Income protection', 'Risk management']
    },
    {
      title: 'Estate Planning',
      description: 'Ensure your legacy continues with our estate planning services. We specialize in crafting personalised strategies to protect your assets and secure your family\'s future. Let us guide you through the complexities of estate planning with clarity and confidence.',
      tags: ['Wills & trusts', 'Asset protection', 'Legacy planning']
    },
    {
      title: 'Retirement Planning',
      description: 'Enjoy your golden years with our tailored retirement strategies. Whether you\'re nearing retirement or stepping out your financial future, our advisers will craft a roadmap to ensure financial security.',
      tags: ['Retirement income', 'Pension planning', 'Post-work strategies']
    },
    {
      title: 'Tax Optimisation',
      description: 'Efficient tax planning can significantly enhance your wealth. We analyse your tax situation and implement strategies to minimize tax liabilities while maximising investment returns.',
      tags: ['Tax efficiency', 'Deduction strategies', 'Wealth maximisation']
    }
  ];

  return (
    <ServicePage
      service={financialPlanningService}
      serviceOptions={serviceOptions}
      heroImage={FinancialImage}
    />
  );
};

export default FinancialPlanningPage; 