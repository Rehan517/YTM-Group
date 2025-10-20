import type { BaseComponentProps } from './common';

/**
 * Team member information
 */
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department?: string;
  email?: string;
  phone?: string;
  shortBio: string;
  fullBio: string;
  photoUrl?: string;
  specializations?: string[];
  linkedInUrl?: string;
  isActive: boolean;
}

/**
 * Team member component props
 */
export interface TeamMemberProps extends BaseComponentProps {
  teamMember: TeamMember;
  variant?: 'card' | 'compact' | 'detailed';
  showCredentials?: boolean;
  showContact?: boolean;
  showFullBio?: boolean;
  showLinkedIn?: boolean;
  onExpand?: (member: TeamMember) => void;
  onContact?: (member: TeamMember) => void;
  loading?: boolean;
}

/**
 * Team grid component props
 */
export interface TeamGridProps extends BaseComponentProps {
  teamMembers: TeamMember[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  showModal?: boolean;
  loading?: boolean;
}