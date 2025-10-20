import type { TeamMember } from '@/types';
import { AkbarPhoto, AlmoPhoto, RooheePhoto , SuganPhoto, TeamPhoto} from '@/assets';

export const sampleTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Akbar Nathani',
    position: 'Mortgage Advisor',
    department: 'Financial Planning',
    email: 'sarah.johnson@ytmgroup.com.au',
    phone: '+61 3 7046 9786',
    shortBio: 'Certified Financial Planner with 12+ years of experience helping Australian families achieve their financial goals.',
    fullBio: 'Akbar is a Mortgage Advisor helping Australian families and investors achieve their property ownership goals. He structures tailored lending solutions, navigates complex financing scenarios, secures competitive interest rates, and streamlines application processes. This leads to successful property acquisitions and refinancing outcomes, delivered with personalised guidance and industry expertise.',
    photoUrl: AkbarPhoto,
    specializations: ['Retirement Planning', 'Investment Strategy', 'Tax Optimization', 'Estate Planning'],
    linkedInUrl: 'https://linkedin.com/in/sarah-johnson-cfp',
    isActive: true
  },
  {
    id: '2',
    name: 'Almo Dhamani',
    position: 'Mortgage Advisor',
    department: 'Lending Solutions',
    email: 'michael.chen@ytmgroup.com.au',
    phone: '+61 3 7046 9786',
    shortBio: 'Mortgage broker and lending specialist with extensive experience in residential and commercial lending.',
    fullBio: 'Almo is a Mortgage Advisor helping businesses and property investors access comprehensive lending solutions. He evaluates complex loan structures, negotiates with multiple lender panels, facilitates commercial transactions, and secures SMSF lending approvals. This leads to optimised financing outcomes and successful property investments, delivered with strategic insight and industry connections.',
    photoUrl: AlmoPhoto,
    specializations: ['Residential Mortgages', 'Commercial Lending', 'SMSF Lending', 'Asset Finance'],
    linkedInUrl: 'https://linkedin.com/in/michael-chen-lending',
    isActive: true
  },
  {
    id: '3',
    name: 'Roohee Rahman',
    position: 'Mortgage Advisor',
    department: 'Legal Services',
    email: 'emma.williams@ytmgroup.com.au',
    phone: '+61 3 7046 9786',
    shortBio: 'Qualified solicitor specializing in commercial law, property transactions, and business advisory.',
    fullBio: 'Roohee is a Legal Practitioner helping businesses and individuals navigate complex legal matters with confidence. She drafts comprehensive contracts, conducts property due diligence, manages regulatory compliance, and structures business acquisitions. This leads to legally sound transactions and protected business interests, delivered with meticulous attention to detail and practical commercial advice.',
    photoUrl: RooheePhoto,
    specializations: ['Commercial Law', 'Property Law', 'Employment Law', 'Business Acquisitions'],
    linkedInUrl: 'https://linkedin.com/in/emma-williams-lawyer',
    isActive: true
  },
  {
    id: '4',
    name: 'Sugan Kumar Kumanan',
    position: 'Financial Adviser',
    department: 'Business Insurance',
    email: 'james.mitchell@ytmgroup.com.au',
    phone: '+61 3 7046 9786',
    shortBio: 'Experienced insurance broker specializing in comprehensive business protection and risk management.',
    fullBio: 'Sugan is a Financial Adviser helping businesses and individuals secure comprehensive insurance protection and financial security. They analyze risk exposures, design tailored coverage strategies, negotiate premium structures, and manage claims processes. This leads to optimal risk protection and financial peace of mind, delivered with thorough market knowledge and personalized service.',
    photoUrl: SuganPhoto,
    specializations: ['Business Insurance', 'Professional Indemnity', 'Public Liability', 'Cyber Insurance'],
    linkedInUrl: 'https://linkedin.com/in/james-mitchell-insurance',
    isActive: true
  },
  {
    id: '5',
    name: 'Niroshan Murrgiah',
    position: 'Compliance Manager',
    department: 'Property Services',
    email: 'lisa.thompson@ytmgroup.com.au',
    phone: '+61 3 7046 9786',
    shortBio: 'Property investment expert with extensive knowledge of commercial and residential real estate markets.',
    fullBio: 'Niroshan is a Compliance Manager helping property investors and businesses maintain regulatory excellence and risk mitigation. He monitors compliance frameworks, conducts risk assessments, implements governance protocols, and ensure regulatory adherence across all operations. This leads to protected business operations and maintained industry standards, delivered with systematic precision and proactive oversight.',
    photoUrl: TeamPhoto,
    specializations: ['Investment Properties', 'Commercial Real Estate', 'Property Development', 'Market Analysis'],
    linkedInUrl: 'https://linkedin.com/in/lisa-thompson-property',
    isActive: true
  },
  {
    id: '6',
    name: 'Tash Amarasekera',
    position: 'Client Service Consultant',
    department: 'Business Advisory',
    email: 'david.rodriguez@ytmgroup.com.au',
    phone: '+61 3 7046 9786',
    shortBio: 'Strategic business consultant with expertise in operational efficiency and growth planning.',
    fullBio: 'Tash is a Client Service Consultant helping businesses and individuals receive exceptional support throughout their financial journey. He coordinates multi-service solutions, manages client communications, streamlines service delivery, and ensure seamless experiences across all touchpoints. This leads to enhanced client satisfaction and successful outcomes, delivered with proactive attention and personalized care.',
    photoUrl: TeamPhoto,
    specializations: ['Strategic Planning', 'Operational Efficiency', 'Growth Strategy', 'Performance Management'],
    linkedInUrl: 'https://linkedin.com/in/david-rodriguez-strategy',
    isActive: true
  },
  {
    id: '7',
    name: 'Amit Chaudhary',
    position: 'Business Insurance Adviser',
    department: 'Client Services',
    email: 'rachel.park@ytmgroup.com.au',
    phone: '+61 3 7046 9786',
    shortBio: 'Dedicated client services professional ensuring exceptional customer experience and satisfaction.',
    fullBio: 'Amit is a Business Insurance Adviser helping companies and entrepreneurs protect their assets and operations against unforeseen risks. They assess business vulnerabilities, recommend comprehensive coverage solutions, coordinate policy implementations, and provide ongoing risk management support. This leads to robust business protection and operational continuity, delivered with industry expertise and responsive client service.',
    photoUrl: TeamPhoto,
    specializations: ['Client Relations', 'Service Excellence', 'Process Optimization', 'Team Leadership'],
    linkedInUrl: 'https://linkedin.com/in/rachel-park-services',
    isActive: true
  },
  {
    id: '8',
    name: 'Dinesh Loganathan',
    position: 'Legal Practitioner',
    department: 'Executive Leadership',
    email: 'anthony.walsh@ytmgroup.com.au',
    phone: '+61 3 7046 9786',
    shortBio: 'Founding partner and managing director with over 20 years of experience in financial services leadership.',
    fullBio: 'Dinesh is a Legal Practitioner helping businesses and individuals navigate complex legal frameworks while driving strategic organizational growth. They provide executive legal counsel, oversee regulatory compliance, manage corporate governance, and facilitate strategic business decisions. This leads to legally sound business operations and sustainable organizational success, delivered with visionary leadership and comprehensive legal expertise.',
    photoUrl: TeamPhoto,
    specializations: ['Strategic Leadership', 'Business Development', 'Financial Services', 'Team Management'],
    linkedInUrl: 'https://linkedin.com/in/anthony-walsh-ytm',
    isActive: true
  }
];

export const getTeamMembersByDepartment = (department: string): TeamMember[] => {
  return sampleTeamMembers.filter(member => member.department === department);
};

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return sampleTeamMembers.find(member => member.id === id);
};

export const getAllDepartments = (): string[] => {
  const departments = sampleTeamMembers.map(member => member.department).filter(Boolean);
  return [...new Set(departments)] as string[];
}; 