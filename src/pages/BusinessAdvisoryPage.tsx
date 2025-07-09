import React from 'react';
import { ServicePage, ServiceContactForm } from '@/components';
import { getServiceById } from '@/config/services.config';
import { 
  ChartBarIcon, 
  CogIcon, 
  LightBulbIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const BusinessAdvisoryPage: React.FC = () => {
  // Get the business advisory service data
  const businessAdvisoryService = getServiceById('business-advisory');

  if (!businessAdvisoryService) {
    return <div>Service not found</div>;
  }

  // Define the process steps for business advisory
  const processSteps = [
    {
      id: 'assessment',
      title: 'Business Assessment & Analysis',
      description: 'We conduct a comprehensive evaluation of your business operations, financial performance, market position, and growth opportunities.',
      icon: <ChartBarIcon className="w-8 h-8 text-indigo-600" />
    },
    {
      id: 'strategy',
      title: 'Strategic Planning & Development',
      description: 'Our experts develop tailored strategies addressing your specific business challenges, market opportunities, and growth objectives.',
      icon: <LightBulbIcon className="w-8 h-8 text-indigo-600" />
    },
    {
      id: 'implementation',
      title: 'Implementation & Execution',
      description: 'We work alongside your team to implement strategic initiatives, optimize processes, and drive measurable business improvements.',
      icon: <CogIcon className="w-8 h-8 text-indigo-600" />
    },
    {
      id: 'growth',
      title: 'Growth Monitoring & Optimization',
      description: 'Ongoing performance monitoring, strategy refinement, and continuous optimization to ensure sustained business growth and success.',
      icon: <ArrowTrendingUpIcon className="w-8 h-8 text-indigo-600" />
    }
  ];

  // Additional content for business advisory
  const additionalContent = {
    overview: `Transform your business with strategic advisory services designed to accelerate growth and maximize profitability. Our experienced business consultants bring deep industry knowledge and proven methodologies to help you navigate challenges, capitalize on opportunities, and achieve sustainable success. Whether you're a startup seeking rapid growth or an established business looking to optimize operations, we provide the strategic guidance and practical solutions you need.`,
    whyChooseUs: [
      'Proven track record with 200+ successful business transformations',
      'Industry-specific expertise across multiple business sectors',
      'Data-driven approach with measurable ROI and performance metrics',
      'Experienced consultants with C-level executive backgrounds',
      'Flexible engagement models from project-based to ongoing advisory',
      'Strategic partnerships with leading technology and service providers',
      'Comprehensive support from strategy to implementation and beyond',
      'Local market knowledge with global business best practices'
    ],
    specializations: [
      {
        title: 'Strategic Planning & Business Development',
        description: 'Comprehensive business planning, market analysis, competitive positioning, and growth strategy development for sustainable expansion.'
      },
      {
        title: 'Operational Excellence & Process Optimization',
        description: 'Business process improvement, operational efficiency enhancement, workflow optimization, and performance management systems.'
      },
      {
        title: 'Financial Management & Performance Analysis',
        description: 'Financial planning, cash flow optimization, cost management, profitability analysis, and financial performance improvement.'
      },
      {
        title: 'Digital Transformation & Technology Strategy',
        description: 'Technology adoption planning, digital transformation roadmaps, system integration, and automation implementation strategies.'
      },
      {
        title: 'Market Entry & Expansion Strategy',
        description: 'Market research, competitive analysis, market entry strategies, and expansion planning for new markets and opportunities.'
      },
      {
        title: 'Merger & Acquisition Advisory',
        description: 'M&A strategy, due diligence support, valuation analysis, integration planning, and post-merger optimization services.'
      }
    ]
  };

  // Get related services (excluding current service)
  const relatedServices = [
    getServiceById('financial-planning'),
    getServiceById('legal-services'),
    getServiceById('business-insurance')
  ].filter((service): service is NonNullable<typeof service> => service !== undefined);

  // Handle form submission
  const handleFormSubmit = async (data: any) => {
    console.log('Business Advisory form submission:', data);
    // TODO: Implement actual form submission logic
    alert('Thank you for your business advisory inquiry! One of our senior consultants will contact you within 24 hours to discuss your business needs.');
  };

  // Create the contact form component
  const contactForm = (
    <ServiceContactForm
      serviceId="business-advisory"
      serviceName="Business Advisory"
      onSubmit={handleFormSubmit}
    />
  );

  return (
    <ServicePage
      service={businessAdvisoryService}
      processSteps={processSteps}
      additionalContent={additionalContent}
      contactForm={contactForm}
      relatedServices={relatedServices}
    />
  );
};

export default BusinessAdvisoryPage; 