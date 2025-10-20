import type { ReactNode } from 'react';

/**
 * Base props that all components should extend
 */
export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  'data-testid'?: string;
}

/**
 * Button Component Types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'premium' | 'outline' | 'ghost';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * Card Component Types
 */
export type CardPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CardShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends BaseComponentProps {
  padding?: CardPadding;
  shadow?: CardShadow;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  border?: boolean;
  interactive?: boolean;
}

/**
 * Validation Types for Utils
 */
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

export type ValidationRules<T> = Partial<Record<keyof T, ValidationRule>>; 