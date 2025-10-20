/**
 * Testimonial data structure
 */
export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  company?: string;
  avatar?: string;
  content: string;
  rating: number; // 1-5 stars
  service: string;
  date: string;
  verified?: boolean;
  featured?: boolean;
  location?: string;
}

/**
 * Star rating component props
 */
export interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  showValue?: boolean;
  precision?: number; // 0.5 for half stars, 1 for whole stars
  emptyColor?: string;
  fillColor?: string;
  onChange?: (rating: number) => void;
  className?: string;
}