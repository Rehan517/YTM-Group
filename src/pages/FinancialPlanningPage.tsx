import React from 'react';
import { ServicePage, ServiceContactForm } from '@/components';
import { getServiceById } from '@/config/services.config';
import { 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  ChartPieIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const FinancialPlanningPage: React.FC = () => {
  // Get the financial planning service data
  const financialPlanningService = getServiceById('financial-planning');

  if (!financialPlanningService) {
    return <div>Service not found</div>;
  }

  // Define the process steps for financial planning
  const processSteps = [
    {
      id: 'discovery',
      title: 'Financial Discovery',
      description: 'We conduct a comprehensive review of your current financial situation, goals, risk tolerance, and timeline to create your personalized strategy.',
      icon: <DocumentTextIcon className="w-8 h-8 text-green-600" />
    },
    {
      id: 'analysis',
      title: 'Strategy Development',
      description: 'Our certified planners analyze your data and develop a customized financial plan including investment, retirement, and tax optimization strategies.',
      icon: <ChartPieIcon className="w-8 h-8 text-green-600" />
    },
    {
      id: 'implementation',
      title: 'Plan Implementation',
      description: 'We help you implement your financial plan, setting up investment accounts, insurance policies, and other recommended financial products.',
      icon: <CurrencyDollarIcon className="w-8 h-8 text-green-600" />
    },
    {
      id: 'monitoring',
      title: 'Ongoing Monitoring',
      description: 'Regular portfolio reviews and strategy adjustments ensure your financial plan stays on track as your life and market conditions change.',
      icon: <TrophyIcon className="w-8 h-8 text-green-600" />
    }
  ];

  // Additional content for the financial planning service
  const additionalContent = {
    overview: `Our comprehensive financial planning services are designed to help you build lasting wealth and achieve financial independence. Whether you're planning for retirement, saving for your children's education, or building an investment portfolio, our certified financial planners provide expert guidance tailored to your unique situation. We take a holistic approach, considering all aspects of your financial life including investments, insurance, tax planning, and estate planning to create a roadmap for your financial success.`,
    whyChooseUs: [
      'Certified Financial Planners (CFP) with 15+ years of experience',
      'Comprehensive financial planning approach covering all aspects of wealth building',
      'Tax-efficient investment strategies to maximize your returns',
      'Regular portfolio reviews and rebalancing to maintain optimal allocation',
      'Estate planning integration to protect your legacy',
      'Transparent fee structure with ongoing support and advice',
      'Access to institutional-grade investment platforms and products',
      'Personalized retirement income strategies for financial security'
    ],
    specializations: [
      {
        title: 'Retirement Planning',
        description: 'Comprehensive retirement strategies including superannuation optimization, pension planning, and income stream management to ensure comfortable retirement.'
      },
      {
        title: 'Investment Management',
        description: 'Professional portfolio management with diversified investment strategies tailored to your risk profile and financial objectives.'
      },
      {
        title: 'Tax Optimization',
        description: 'Strategic tax planning to minimize your tax burden while maximizing your wealth accumulation through legal tax-efficient structures.'
      },
      {
        title: 'Estate Planning',
        description: 'Comprehensive estate planning to protect your wealth and ensure smooth transfer to future generations while minimizing estate taxes.'
      }
    ]
  };

  // Handle form submission
  const handleFormSubmit = async (data: any) => {
    console.log('Financial Planning form submission:', data);
    // TODO: Implement actual form submission logic
    alert('Thank you for your inquiry! Our certified financial planner will contact you within 24 hours to discuss your financial goals.');
  };

  // Create the contact form component
  const contactForm = (
    <ServiceContactForm
      serviceId="financial-planning"
      serviceName="Financial Planning"
      onSubmit={handleFormSubmit}
    />
  );

  return (
    <ServicePage
      service={financialPlanningService}
      processSteps={processSteps}
      additionalContent={additionalContent}
      contactForm={contactForm}
      businessStage="established" // Financial planning is typically for established businesses/individuals
    />
  );
};

export default FinancialPlanningPage; 