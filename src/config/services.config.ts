import { LendingSolutionsIcon, FinancialPlanningIcon, LegalServicesIcon, BusinessInsuranceIcon, BusinessAdvisoryIcon, PropertyServicesIcon } from '@/assets';

import type { Service, ServiceCategory } from '@/types/services';

/**
 * YTM Group Services Configuration
 * Six core services with comprehensive details and Heroicons 2.0+ icons
 */

export const SERVICES: Service[] = [
  {
    id: 'lending',
    title: 'Lending Solutions',
    description: 'Comprehensive lending services including residential, commercial, and investment property loans with competitive rates and personalised service.',
    shortDescription: 'Residential, commercial, and investment property loans with competitive rates.',
    icon: LendingSolutionsIcon,
    iconLabel: '3D lending solutions icon representing comprehensive lending and financial services',
    href: '/services/lending',
    color: 'text-primary-700',
    bgColor: 'bg-primary-100',
    category: 'financial',
    features: [
      'Residential home loans',
      'Commercial property financing',
      'Investment property loans',
      'Refinancing solutions',
      'Construction loans'
    ],
    benefits: [
      'Competitive interest rates',
      'Fast approval process',
      'Personalised service',
      'Flexible repayment terms'
    ]
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description: 'Expert financial planning services to help you build wealth, plan for retirement, and secure your financial future with tailored strategies.',
    shortDescription: 'Expert wealth building and retirement planning with tailored strategies.',
    icon: FinancialPlanningIcon,
    iconLabel: '3D financial planning icon representing wealth building and financial growth',
    href: '/services/financial-planning',
    color: 'text-primary-700',
    bgColor: 'bg-primary-100',
    category: 'financial',
    features: [
      'Retirement planning',
      'Investment strategies',
      'Tax optimization',
      'Estate planning',
      'Insurance planning'
    ],
    benefits: [
      'Personalized financial roadmap',
      'Ongoing portfolio monitoring',
      'Tax-efficient strategies',
      'Retirement income security'
    ]
  },
  {
    id: 'legal-services',
    title: 'Legal Services',
    description: 'Professional legal services covering business law, property transactions, estate planning, and litigation support with experienced attorneys.',
    shortDescription: 'Business law, property transactions, and estate planning services.',
    icon: LegalServicesIcon,
    iconLabel: '3D legal services icon representing legal services and justice',
    href: '/services/legal',
    color: 'text-primary-700',
    bgColor: 'bg-primary-100',
    category: 'legal',
    features: [
      'Business law',
      'Property transactions',
      'Estate planning',
      'Contract drafting',
      'Litigation support'
    ],
    benefits: [
      'Expert legal guidance',
      'Risk mitigation',
      'Compliance assurance',
      'Dispute resolution'
    ]
  },
  {
    id: 'business-insurance',
    title: 'Business Insurance',
    description: 'Comprehensive business insurance solutions to protect your company, employees, and assets with customised coverage options.',
    shortDescription: 'Comprehensive business insurance to protect your company and assets.',
    icon: BusinessInsuranceIcon,
    iconLabel: '3D Shield check icon representing business insurance and protection',
    href: '/services/business-insurance',
    color: 'text-primary-700',
    bgColor: 'bg-primary-100',
    category: 'business',
    features: [
      'General liability insurance',
      'Professional indemnity',
      'Workers compensation',
      'Commercial property',
      'Business interruption'
    ],
    benefits: [
      'Comprehensive coverage',
      'Risk assessment',
      'Claims support',
      'Competitive premiums'
    ]
  },
  {
    id: 'business-advisory',
    title: 'Business Advisory',
    description: 'Strategic business advisory services to help grow your business, improve operations, and achieve sustainable success.',
    shortDescription: 'Strategic advisory services to grow your business and improve operations.',
    icon: BusinessAdvisoryIcon,
    iconLabel: '3D business advisory icon representing business advisory and strategic insights',
    href: '/services/business-advisory',
    color: 'text-primary-700',
    bgColor: 'bg-primary-100',
    category: 'business',
    features: [
      'Strategic planning',
      'Business growth strategies',
      'Operational efficiency',
      'Financial analysis',
      'Market expansion'
    ],
    benefits: [
      'Expert business insights',
      'Growth acceleration',
      'Operational optimization',
      'Strategic direction'
    ]
  },
  {
    id: 'property',
    title: 'Property Services',
    description: 'End-to-end property services including investment advice, property management, and real estate transactions.',
    shortDescription: 'Investment advice, property management, and real estate transactions.',
    icon: PropertyServicesIcon,
    iconLabel: '3D Home icon representing property services and real estate',
    href: '/services/property',
    color: 'text-primary-700',
    bgColor: 'bg-primary-100',
    category: 'property',
    features: [
      'Property investment advice',
      'Property management',
      'Real estate transactions',
      'Market analysis',
      'Portfolio optimization'
    ],
    benefits: [
      'Expert market knowledge',
      'Investment optimization',
      'Property management',
      'Transaction support'
    ]
  }
];

/**
 * Service categories for organized display
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'financial',
    name: 'Financial Services',
    description: 'Comprehensive financial solutions for individuals and businesses',
    services: SERVICES.filter(service => service.category === 'financial')
  },
  {
    id: 'legal',
    name: 'Legal Services',
    description: 'Professional legal support for all your business and personal needs',
    services: SERVICES.filter(service => service.category === 'legal')
  },
  {
    id: 'business',
    name: 'Business Services',
    description: 'Strategic business solutions to protect and grow your enterprise',
    services: SERVICES.filter(service => service.category === 'business')
  },
  {
    id: 'property',
    name: 'Property Services',
    description: 'End-to-end property solutions for investment and management',
    services: SERVICES.filter(service => service.category === 'property')
  }
];

/**
 * Default grid configuration for responsive layout
 */
export const DEFAULT_GRID_CONFIG = {
  mobile: 1,
  tablet: 2,
  desktop: 3
};

/**
 * Service utility functions
 */
export const getServiceById = (id: string): Service | undefined => {
  return SERVICES.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return SERVICES.filter(service => service.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(SERVICES.map(service => service.category))];
}; 