import type { Service } from '@/types/services';

/**
 * Business lifecycle stages for intelligent cross-selling
 */
export type BusinessLifecycleStage = 
  | 'startup'
  | 'growth'
  | 'established'
  | 'expansion'
  | 'mature';

/**
 * Cross-selling relationship types
 */
export type CrossSellingRelationType = 
  | 'complementary'    // Services that work well together
  | 'sequential'       // Services typically needed after this one
  | 'prerequisite'     // Services typically needed before this one
  | 'alternative'      // Alternative services for different needs
  | 'upgrade';         // More comprehensive version of the service

/**
 * Cross-selling relationship configuration
 */
interface CrossSellingRelation {
  serviceId: string;
  type: CrossSellingRelationType;
  priority: number; // 1-10, higher is more important
  stage?: BusinessLifecycleStage[];
  reason: string;
  urgency?: 'low' | 'medium' | 'high';
  bundleDiscount?: number; // percentage discount when bundled
}

/**
 * Service cross-selling configuration
 */
interface ServiceCrossSelling {
  serviceId: string;
  primaryStage: BusinessLifecycleStage[];
  relations: CrossSellingRelation[];
  testimonial?: {
    quote: string;
    author: string;
    company?: string;
    results?: string;
  };
  urgencyMessage?: string;
  bundleOffer?: {
    title: string;
    description: string;
    discount: number;
    includesServices: string[];
  };
}

/**
 * Cross-selling configuration data
 */
export const CROSS_SELLING_CONFIG: ServiceCrossSelling[] = [
  {
    serviceId: 'lending',
    primaryStage: ['startup', 'growth', 'expansion'],
    relations: [
      {
        serviceId: 'property',
        type: 'complementary',
        priority: 9,
        stage: ['startup', 'growth', 'expansion'],
        reason: 'Property investment strategies complement lending solutions',
        urgency: 'high',
        bundleDiscount: 15
      },
      {
        serviceId: 'business-insurance',
        type: 'sequential',
        priority: 8,
        stage: ['startup', 'growth'],
        reason: 'Protect your new property investment with comprehensive insurance',
        urgency: 'high',
        bundleDiscount: 10
      },
      {
        serviceId: 'legal-services',
        type: 'prerequisite',
        priority: 7,
        stage: ['startup', 'growth'],
        reason: 'Legal review ensures your loan agreements are optimized',
        urgency: 'medium'
      },
      {
        serviceId: 'financial-planning',
        type: 'complementary',
        priority: 8,
        stage: ['growth', 'established', 'mature'],
        reason: 'Integrate lending into your overall financial strategy',
        urgency: 'medium',
        bundleDiscount: 12
      }
    ],
    testimonial: {
      quote: "YTM Group's integrated approach helped us secure property financing and set up the perfect investment strategy.",
      author: "Sarah Chen",
      company: "Chen Property Investments",
      results: "Secured $2.5M in property financing with 15% better terms"
    },
    urgencyMessage: "Limited-time: Lock in today's rates before they increase",
    bundleOffer: {
      title: "Complete Property Investment Package",
      description: "Lending + Property Services + Insurance Protection",
      discount: 20,
      includesServices: ['lending', 'property', 'business-insurance']
    }
  },
  {
    serviceId: 'financial-planning',
    primaryStage: ['established', 'mature', 'expansion'],
    relations: [
      {
        serviceId: 'lending',
        type: 'complementary',
        priority: 7,
        stage: ['growth', 'expansion'],
        reason: 'Optimize your borrowing strategy as part of wealth building',
        urgency: 'medium',
        bundleDiscount: 12
      },
      {
        serviceId: 'legal-services',
        type: 'complementary',
        priority: 8,
        stage: ['established', 'mature'],
        reason: 'Estate planning and legal structures optimize your financial plan',
        urgency: 'high',
        bundleDiscount: 15
      },
      {
        serviceId: 'business-advisory',
        type: 'complementary',
        priority: 9,
        stage: ['growth', 'expansion'],
        reason: 'Business growth strategies align with your financial goals',
        urgency: 'high',
        bundleDiscount: 18
      },
      {
        serviceId: 'property',
        type: 'sequential',
        priority: 6,
        stage: ['established', 'mature'],
        reason: 'Property investment is a key component of wealth building',
        urgency: 'medium'
      }
    ],
    testimonial: {
      quote: "The comprehensive financial planning approach transformed our business growth trajectory.",
      author: "Michael Rodriguez",
      company: "Rodriguez Enterprises",
      results: "Increased portfolio value by 35% in 18 months"
    },
    bundleOffer: {
      title: "Wealth Building Accelerator",
      description: "Financial Planning + Business Advisory + Legal Services",
      discount: 25,
      includesServices: ['financial-planning', 'business-advisory', 'legal-services']
    }
  },
  {
    serviceId: 'legal-services',
    primaryStage: ['startup', 'growth', 'established'],
    relations: [
      {
        serviceId: 'business-insurance',
        type: 'sequential',
        priority: 9,
        stage: ['startup', 'growth'],
        reason: 'Insurance protection complements legal risk management',
        urgency: 'high',
        bundleDiscount: 12
      },
      {
        serviceId: 'business-advisory',
        type: 'complementary',
        priority: 8,
        stage: ['growth', 'established'],
        reason: 'Strategic business advice ensures legal compliance in growth',
        urgency: 'medium',
        bundleDiscount: 15
      },
      {
        serviceId: 'financial-planning',
        type: 'complementary',
        priority: 7,
        stage: ['established', 'mature'],
        reason: 'Estate and tax planning requires integrated legal and financial advice',
        urgency: 'high',
        bundleDiscount: 15
      },
      {
        serviceId: 'property',
        type: 'complementary',
        priority: 6,
        stage: ['startup', 'growth', 'expansion'],
        reason: 'Property transactions require expert legal support',
        urgency: 'medium'
      }
    ],
    testimonial: {
      quote: "Their legal expertise saved us from costly compliance issues and streamlined our business operations.",
      author: "Jennifer Walsh",
      company: "Walsh Manufacturing",
      results: "Avoided $500K in potential legal issues"
    },
    urgencyMessage: "Protect your business now - legal issues cost 10x more to fix later",
    bundleOffer: {
      title: "Business Protection Suite",
      description: "Legal Services + Business Insurance + Advisory Support",
      discount: 22,
      includesServices: ['legal-services', 'business-insurance', 'business-advisory']
    }
  },
  {
    serviceId: 'business-insurance',
    primaryStage: ['startup', 'growth', 'established'],
    relations: [
      {
        serviceId: 'legal-services',
        type: 'complementary',
        priority: 8,
        stage: ['startup', 'growth'],
        reason: 'Legal services help structure your business for optimal insurance coverage',
        urgency: 'high',
        bundleDiscount: 12
      },
      {
        serviceId: 'business-advisory',
        type: 'sequential',
        priority: 7,
        stage: ['growth', 'established'],
        reason: 'Business growth requires expanded insurance coverage and risk management',
        urgency: 'medium',
        bundleDiscount: 10
      },
      {
        serviceId: 'property',
        type: 'complementary',
        priority: 6,
        stage: ['startup', 'growth', 'expansion'],
        reason: 'Property investments need specialized insurance protection',
        urgency: 'medium'
      },
      {
        serviceId: 'financial-planning',
        type: 'complementary',
        priority: 5,
        stage: ['established', 'mature'],
        reason: 'Insurance is a critical component of financial risk management',
        urgency: 'low'
      }
    ],
    testimonial: {
      quote: "The comprehensive insurance coverage gave us peace of mind to focus on growing our business.",
      author: "David Kim",
      company: "Kim Technologies",
      results: "Protected against $1.2M in potential claims"
    },
    urgencyMessage: "Don't wait for disaster - 60% of uninsured businesses fail after major incidents"
  },
  {
    serviceId: 'business-advisory',
    primaryStage: ['growth', 'expansion', 'established'],
    relations: [
      {
        serviceId: 'financial-planning',
        type: 'complementary',
        priority: 9,
        stage: ['growth', 'expansion', 'established'],
        reason: 'Financial planning aligns with business growth strategies',
        urgency: 'high',
        bundleDiscount: 18
      },
      {
        serviceId: 'legal-services',
        type: 'sequential',
        priority: 7,
        stage: ['growth', 'expansion'],
        reason: 'Business expansion requires legal structure optimization',
        urgency: 'medium',
        bundleDiscount: 15
      },
      {
        serviceId: 'lending',
        type: 'sequential',
        priority: 6,
        stage: ['expansion'],
        reason: 'Growth strategies often require additional funding solutions',
        urgency: 'medium'
      },
      {
        serviceId: 'business-insurance',
        type: 'prerequisite',
        priority: 5,
        stage: ['growth', 'expansion'],
        reason: 'Proper insurance coverage is essential before business expansion',
        urgency: 'low'
      }
    ],
    testimonial: {
      quote: "Their strategic guidance helped us scale from $2M to $15M revenue in just 3 years.",
      author: "Lisa Thompson",
      company: "Thompson Solutions",
      results: "750% revenue growth with optimized operations"
    },
    bundleOffer: {
      title: "Growth Accelerator Package",
      description: "Business Advisory + Financial Planning + Legal Support",
      discount: 25,
      includesServices: ['business-advisory', 'financial-planning', 'legal-services']
    }
  },
  {
    serviceId: 'property',
    primaryStage: ['startup', 'growth', 'expansion', 'mature'],
    relations: [
      {
        serviceId: 'lending',
        type: 'complementary',
        priority: 9,
        stage: ['startup', 'growth', 'expansion'],
        reason: 'Property investment requires optimal financing solutions',
        urgency: 'high',
        bundleDiscount: 15
      },
      {
        serviceId: 'legal-services',
        type: 'prerequisite',
        priority: 8,
        stage: ['startup', 'growth', 'expansion'],
        reason: 'Property transactions require expert legal review and contracts',
        urgency: 'high'
      },
      {
        serviceId: 'financial-planning',
        type: 'complementary',
        priority: 7,
        stage: ['established', 'mature'],
        reason: 'Property investment should align with your overall financial strategy',
        urgency: 'medium'
      },
      {
        serviceId: 'business-insurance',
        type: 'sequential',
        priority: 6,
        stage: ['startup', 'growth', 'expansion'],
        reason: 'Property investments require specialized insurance coverage',
        urgency: 'medium'
      }
    ],
    testimonial: {
      quote: "Their property expertise helped us build a portfolio worth $8M with optimal financing.",
      author: "Robert Chang",
      company: "Chang Investment Group",
      results: "Built $8M property portfolio with 22% annual returns"
    },
    urgencyMessage: "Property prices rising - secure your investment position before the next surge",
    bundleOffer: {
      title: "Complete Property Investment Solution",
      description: "Property Services + Lending + Legal + Insurance",
      discount: 20,
      includesServices: ['property', 'lending', 'legal-services', 'business-insurance']
    }
  }
];

/**
 * Get intelligent cross-selling recommendations for a service
 */
export function getCrossSellingRecommendations(
  currentServiceId: string,
  stage: BusinessLifecycleStage = 'growth',
  maxRecommendations: number = 3
): CrossSellingRelation[] {
  const serviceConfig = CROSS_SELLING_CONFIG.find(config => config.serviceId === currentServiceId);
  
  if (!serviceConfig) {
    return [];
  }

  // Filter relations based on stage and sort by priority
  const filteredRelations = serviceConfig.relations
    .filter(relation => !relation.stage || relation.stage.includes(stage))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, maxRecommendations);

  return filteredRelations;
}

/**
 * Get service testimonial
 */
export function getServiceTestimonial(serviceId: string) {
  const serviceConfig = CROSS_SELLING_CONFIG.find(config => config.serviceId === serviceId);
  return serviceConfig?.testimonial;
}

/**
 * Get urgency message for a service
 */
export function getUrgencyMessage(serviceId: string): string | undefined {
  const serviceConfig = CROSS_SELLING_CONFIG.find(config => config.serviceId === serviceId);
  return serviceConfig?.urgencyMessage;
}

/**
 * Get bundle offer for a service
 */
export function getBundleOffer(serviceId: string) {
  const serviceConfig = CROSS_SELLING_CONFIG.find(config => config.serviceId === serviceId);
  return serviceConfig?.bundleOffer;
}

/**
 * Calculate potential bundle savings
 */
export function calculateBundleSavings(serviceIds: string[]): number {
  let totalSavings = 0;
  let applicableDiscounts = 0;

  for (const serviceId of serviceIds) {
    const config = CROSS_SELLING_CONFIG.find(c => c.serviceId === serviceId);
    if (config?.bundleOffer && serviceIds.every(id => config.bundleOffer!.includesServices.includes(id))) {
      totalSavings += config.bundleOffer.discount;
      applicableDiscounts++;
    }
  }

  return applicableDiscounts > 0 ? totalSavings / applicableDiscounts : 0;
}

/**
 * Get smart service recommendations based on business type and stage
 */
export function getSmartServiceRecommendations(
  businessType: 'startup' | 'small-business' | 'corporate' | 'individual',
  stage: BusinessLifecycleStage,
  currentServices: string[] = []
): string[] {
  const stageRecommendations: Record<BusinessLifecycleStage, string[]> = {
    startup: ['legal-services', 'business-insurance', 'lending'],
    growth: ['business-advisory', 'financial-planning', 'property'],
    established: ['financial-planning', 'property', 'business-advisory'],
    expansion: ['lending', 'business-advisory', 'legal-services'],
    mature: ['financial-planning', 'property', 'legal-services']
  };

  const recommended = stageRecommendations[stage] || [];
  return recommended.filter(serviceId => !currentServices.includes(serviceId));
} 