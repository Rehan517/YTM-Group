/**
 * Service-specific Call-to-Action (CTA) configuration
 * Defines primary and secondary CTAs for each service with conversion optimization
 */

export type CTAType = 
  | 'quote'
  | 'consultation'
  | 'application'
  | 'assessment'
  | 'call'
  | 'appointment'
  | 'demo'
  | 'download';

export type CTAUrgency = 'low' | 'medium' | 'high';

export type CTAVariant = 'primary' | 'secondary' | 'outline' | 'text';

export interface CTAConfig {
  id: string;
  type: CTAType;
  text: string;
  subtext?: string;
  variant: CTAVariant;
  urgency: CTAUrgency;
  icon?: string; // Heroicon name
  action: 'form' | 'phone' | 'email' | 'link';
  actionValue: string;
  analyticsEvent: string;
  conversionValue?: number; // Expected conversion value for tracking
}

export interface ServiceCTAConfig {
  serviceId: string;
  primaryCTA: CTAConfig;
  secondaryCTA?: CTAConfig;
  heroCTAs: {
    primary: CTAConfig;
    secondary: CTAConfig;
  };
  sectionCTAs?: CTAConfig[]; // CTAs for different sections
  urgencyMessage?: string;
  socialProof?: string;
  valueProposition?: string;
}

/**
 * Service-specific CTA configurations
 */
export const serviceCTAConfigs: Record<string, ServiceCTAConfig> = {
  lending: {
    serviceId: 'lending',
    primaryCTA: {
      id: 'lending-primary',
      type: 'application',
      text: 'Apply for Loan',
      subtext: 'Get pre-approved in 24 hours',
      variant: 'primary',
      urgency: 'high',
      icon: 'DocumentTextIcon',
      action: 'form',
      actionValue: '#loan-application',
      analyticsEvent: 'loan_application_started',
      conversionValue: 5000
    },
    secondaryCTA: {
      id: 'lending-secondary',
      type: 'quote',
      text: 'Get Rate Quote',
      variant: 'outline',
      urgency: 'medium',
      icon: 'CalculatorIcon',
      action: 'form',
      actionValue: '#rate-calculator',
      analyticsEvent: 'rate_quote_requested',
      conversionValue: 1000
    },
    heroCTAs: {
      primary: {
        id: 'lending-hero-primary',
        type: 'application',
        text: 'Start Application',
        subtext: 'Quick 5-minute pre-qualification',
        variant: 'primary',
        urgency: 'high',
        icon: 'ArrowRightIcon',
        action: 'form',
        actionValue: '#application-form',
        analyticsEvent: 'hero_application_clicked',
        conversionValue: 5000
      },
      secondary: {
        id: 'lending-hero-secondary',
        type: 'consultation',
        text: 'Speak to Specialist',
        variant: 'outline',
        urgency: 'medium',
        icon: 'PhoneIcon',
        action: 'phone',
        actionValue: 'tel:1300123456',
        analyticsEvent: 'hero_consultation_clicked',
        conversionValue: 2000
      }
    },
    urgencyMessage: 'Interest rates rising - lock in today\'s rates',
    socialProof: '2,000+ loans approved this year',
    valueProposition: 'Competitive rates from 2.99% with fast approval'
  },

  'financial-planning': {
    serviceId: 'financial-planning',
    primaryCTA: {
      id: 'planning-primary',
      type: 'consultation',
      text: 'Book Free Consultation',
      subtext: 'Complimentary 45-minute session',
      variant: 'primary',
      urgency: 'medium',
      icon: 'CalendarDaysIcon',
      action: 'form',
      actionValue: '#consultation-booking',
      analyticsEvent: 'consultation_booked',
      conversionValue: 3000
    },
    secondaryCTA: {
      id: 'planning-secondary',
      type: 'assessment',
      text: 'Financial Health Check',
      variant: 'outline',
      urgency: 'low',
      icon: 'ChartBarIcon',
      action: 'form',
      actionValue: '#financial-assessment',
      analyticsEvent: 'assessment_started',
      conversionValue: 800
    },
    heroCTAs: {
      primary: {
        id: 'planning-hero-primary',
        type: 'consultation',
        text: 'Get Expert Advice',
        subtext: 'Free consultation with CFP',
        variant: 'primary',
        urgency: 'medium',
        icon: 'UserGroupIcon',
        action: 'form',
        actionValue: '#expert-consultation',
        analyticsEvent: 'hero_expert_advice_clicked',
        conversionValue: 3000
      },
      secondary: {
        id: 'planning-hero-secondary',
        type: 'download',
        text: 'Download Guide',
        variant: 'outline',
        urgency: 'low',
        icon: 'DocumentArrowDownIcon',
        action: 'form',
        actionValue: '#guide-download',
        analyticsEvent: 'hero_guide_downloaded',
        conversionValue: 500
      }
    },
    urgencyMessage: 'Start planning now - your future self will thank you',
    socialProof: '500+ clients achieved their financial goals',
    valueProposition: 'Personalized strategies for wealth building and retirement'
  },

  'legal-services': {
    serviceId: 'legal-services',
    primaryCTA: {
      id: 'legal-primary',
      type: 'consultation',
      text: 'Get Legal Advice',
      subtext: 'Initial consultation available',
      variant: 'primary',
      urgency: 'high',
      icon: 'ScaleIcon',
      action: 'form',
      actionValue: '#legal-consultation',
      analyticsEvent: 'legal_consultation_requested',
      conversionValue: 4000
    },
    secondaryCTA: {
      id: 'legal-secondary',
      type: 'call',
      text: 'Urgent Legal Help',
      variant: 'outline',
      urgency: 'high',
      icon: 'PhoneIcon',
      action: 'phone',
      actionValue: 'tel:1300123456',
      analyticsEvent: 'urgent_legal_call',
      conversionValue: 5000
    },
    heroCTAs: {
      primary: {
        id: 'legal-hero-primary',
        type: 'consultation',
        text: 'Speak to Lawyer',
        subtext: 'Expert legal guidance',
        variant: 'primary',
        urgency: 'high',
        icon: 'ChatBubbleLeftRightIcon',
        action: 'form',
        actionValue: '#lawyer-consultation',
        analyticsEvent: 'hero_lawyer_consultation',
        conversionValue: 4000
      },
      secondary: {
        id: 'legal-hero-secondary',
        type: 'assessment',
        text: 'Legal Risk Check',
        variant: 'outline',
        urgency: 'medium',
        icon: 'ShieldCheckIcon',
        action: 'form',
        actionValue: '#risk-assessment',
        analyticsEvent: 'hero_risk_check',
        conversionValue: 1500
      }
    },
    urgencyMessage: 'Time-sensitive legal matters require immediate attention',
    socialProof: '1,000+ successful legal outcomes',
    valueProposition: 'Expert legal protection for your business and personal needs'
  },

  'business-insurance': {
    serviceId: 'business-insurance',
    primaryCTA: {
      id: 'insurance-primary',
      type: 'quote',
      text: 'Get Insurance Quote',
      subtext: 'Compare policies instantly',
      variant: 'primary',
      urgency: 'medium',
      icon: 'DocumentMagnifyingGlassIcon',
      action: 'form',
      actionValue: '#insurance-quote',
      analyticsEvent: 'insurance_quote_requested',
      conversionValue: 2500
    },
    secondaryCTA: {
      id: 'insurance-secondary',
      type: 'assessment',
      text: 'Risk Assessment',
      variant: 'outline',
      urgency: 'medium',
      icon: 'ExclamationTriangleIcon',
      action: 'form',
      actionValue: '#risk-assessment',
      analyticsEvent: 'risk_assessment_started',
      conversionValue: 1200
    },
    heroCTAs: {
      primary: {
        id: 'insurance-hero-primary',
        type: 'quote',
        text: 'Protect Your Business',
        subtext: 'Instant quotes available',
        variant: 'primary',
        urgency: 'medium',
        icon: 'ShieldExclamationIcon',
        action: 'form',
        actionValue: '#business-protection',
        analyticsEvent: 'hero_protection_clicked',
        conversionValue: 2500
      },
      secondary: {
        id: 'insurance-hero-secondary',
        type: 'consultation',
        text: 'Speak to Expert',
        variant: 'outline',
        urgency: 'low',
        icon: 'UserIcon',
        action: 'phone',
        actionValue: 'tel:1300123456',
        analyticsEvent: 'hero_expert_consultation',
        conversionValue: 1800
      }
    },
    urgencyMessage: 'Don\'t wait for an incident - protect your business today',
    socialProof: '3,000+ businesses protected nationwide',
    valueProposition: 'Comprehensive coverage with competitive premiums'
  },

  'business-advisory': {
    serviceId: 'business-advisory',
    primaryCTA: {
      id: 'advisory-primary',
      type: 'consultation',
      text: 'Strategy Session',
      subtext: 'Discuss your business goals',
      variant: 'primary',
      urgency: 'medium',
      icon: 'PresentationChartLineIcon',
      action: 'form',
      actionValue: '#strategy-session',
      analyticsEvent: 'strategy_session_booked',
      conversionValue: 6000
    },
    secondaryCTA: {
      id: 'advisory-secondary',
      type: 'assessment',
      text: 'Business Health Check',
      variant: 'outline',
      urgency: 'low',
      icon: 'ClipboardDocumentCheckIcon',
      action: 'form',
      actionValue: '#business-assessment',
      analyticsEvent: 'business_assessment_started',
      conversionValue: 2000
    },
    heroCTAs: {
      primary: {
        id: 'advisory-hero-primary',
        type: 'consultation',
        text: 'Transform Your Business',
        subtext: 'Strategic advisory session',
        variant: 'primary',
        urgency: 'medium',
        icon: 'ArrowTrendingUpIcon',
        action: 'form',
        actionValue: '#business-transformation',
        analyticsEvent: 'hero_transformation_clicked',
        conversionValue: 6000
      },
      secondary: {
        id: 'advisory-hero-secondary',
        type: 'demo',
        text: 'See Success Stories',
        variant: 'outline',
        urgency: 'low',
        icon: 'PlayIcon',
        action: 'link',
        actionValue: '#case-studies',
        analyticsEvent: 'hero_success_stories',
        conversionValue: 800
      }
    },
    urgencyMessage: 'Q4 planning season - book your strategy session now',
    socialProof: '200+ businesses transformed with 40% average growth',
    valueProposition: 'Strategic guidance from C-level executives'
  },

  'property-services': {
    serviceId: 'property-services',
    primaryCTA: {
      id: 'property-primary',
      type: 'consultation',
      text: 'Property Consultation',
      subtext: 'Market analysis included',
      variant: 'primary',
      urgency: 'medium',
      icon: 'HomeIcon',
      action: 'form',
      actionValue: '#property-consultation',
      analyticsEvent: 'property_consultation_booked',
      conversionValue: 4500
    },
    secondaryCTA: {
      id: 'property-secondary',
      type: 'assessment',
      text: 'Property Valuation',
      variant: 'outline',
      urgency: 'low',
      icon: 'CurrencyDollarIcon',
      action: 'form',
      actionValue: '#property-valuation',
      analyticsEvent: 'property_valuation_requested',
      conversionValue: 1500
    },
    heroCTAs: {
      primary: {
        id: 'property-hero-primary',
        type: 'consultation',
        text: 'Find Your Investment',
        subtext: 'Expert property guidance',
        variant: 'primary',
        urgency: 'medium',
        icon: 'BuildingOffice2Icon',
        action: 'form',
        actionValue: '#investment-consultation',
        analyticsEvent: 'hero_investment_clicked',
        conversionValue: 4500
      },
      secondary: {
        id: 'property-hero-secondary',
        type: 'call',
        text: 'Speak to Agent',
        variant: 'outline',
        urgency: 'low',
        icon: 'PhoneIcon',
        action: 'phone',
        actionValue: 'tel:1300123456',
        analyticsEvent: 'hero_agent_call',
        conversionValue: 2000
      }
    },
    urgencyMessage: 'Prime properties moving fast in today\'s market',
    socialProof: '$500M+ in property transactions completed',
    valueProposition: 'Expert property services with local market knowledge'
  }
};

/**
 * Get CTA configuration for a specific service
 */
export function getServiceCTAConfig(serviceId: string): ServiceCTAConfig | undefined {
  return serviceCTAConfigs[serviceId];
}

/**
 * Get all available CTA types
 */
export function getCTATypes(): CTAType[] {
  return ['quote', 'consultation', 'application', 'assessment', 'call', 'appointment', 'demo', 'download'];
}

/**
 * Get urgency-based styling classes
 */
export function getUrgencyClasses(urgency: CTAUrgency): string {
  switch (urgency) {
    case 'high':
      return 'animate-pulse ring-2 ring-red-300 ring-opacity-50';
    case 'medium':
      return 'hover:scale-105 transition-transform duration-200';
    case 'low':
    default:
      return 'hover:shadow-lg transition-shadow duration-200';
  }
}

/**
 * Get variant-based styling classes
 */
export function getVariantClasses(variant: CTAVariant): string {
  switch (variant) {
    case 'primary':
      return 'bg-primary-600 hover:bg-primary-700 text-white border-primary-600';
    case 'secondary':
      return 'bg-secondary-600 hover:bg-secondary-700 text-white border-secondary-600';
    case 'outline':
      return 'bg-white hover:bg-primary-50 text-primary-600 border-primary-600';
    case 'text':
    default:
      return 'bg-transparent hover:bg-primary-50 text-primary-600 border-transparent';
  }
} 