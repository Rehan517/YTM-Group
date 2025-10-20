import { type FC } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  icon: FC<React.SVGProps<SVGSVGElement>> | string;
  iconLabel: string;
  href: string;
  color: string;
  bgColor: string;
  category: 'financial' | 'legal' | 'business' | 'property';
  features?: string[];
  benefits?: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface ServicesGridProps {
  services?: Service[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  showCategory?: boolean;
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  className?: string;
  showFullDescription?: boolean;
  priority?: 'high' | 'medium' | 'low';
} 