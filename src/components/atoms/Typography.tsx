import React from 'react';
import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

// Heading Component
interface HeadingProps extends BaseComponentProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'neutral' | 'white';
  align?: 'left' | 'center' | 'right';
  balance?: boolean; // Use text-balance for better typography
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  as = 'h2',
  size,
  weight = 'semibold',
  color = 'primary',
  align = 'left',
  balance = false,
  className,
  id,
  'data-testid': testId,
  ...props
}) => {
  const Component = as;

  // Default sizes based on heading level if size not specified
  const defaultSizes = {
    h1: '4xl',
    h2: '3xl',
    h3: '2xl',
    h4: 'xl',
    h5: 'lg',
    h6: 'base',
  } as const;

  const actualSize = size || defaultSizes[as] || 'md';

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl md:text-5xl lg:text-6xl',
    '5xl': 'text-5xl md:text-6xl lg:text-7xl',
    '6xl': 'text-6xl md:text-7xl lg:text-8xl',
    base: 'text-base',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    primary: 'text-primary-900',
    neutral: 'text-neutral-700',
    white: 'text-white',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const headingClasses = cn(
    sizeClasses[actualSize],
    weightClasses[weight],
    colorClasses[color],
    alignClasses[align],
    'leading-tight',
    balance && 'text-balance',
    className
  );

  return (
    <Component
      className={headingClasses}
      id={id}
      data-testid={testId}
      {...props}
    >
      {children}
    </Component>
  );
};

// Paragraph Component
interface ParagraphProps extends BaseComponentProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  color?: 'primary' | 'neutral' | 'muted' | 'white';
  align?: 'left' | 'center' | 'right' | 'justify';
  leading?: 'tight' | 'normal' | 'relaxed' | 'loose';
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'base',
  color = 'neutral',
  align = 'left',
  leading = 'relaxed',
  className,
  id,
  'data-testid': testId,
  ...props
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const colorClasses = {
    primary: 'text-primary-900',
    neutral: 'text-neutral-700',
    muted: 'text-neutral-500',
    white: 'text-white',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const leadingClasses = {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  };

  const paragraphClasses = cn(
    sizeClasses[size],
    colorClasses[color],
    alignClasses[align],
    leadingClasses[leading],
    className
  );

  return (
    <p
      className={paragraphClasses}
      id={id}
      data-testid={testId}
      {...props}
    >
      {children}
    </p>
  );
};

// Link Component
interface LinkProps extends BaseComponentProps {
  href?: string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'muted' | 'white';
  underline?: 'none' | 'hover' | 'always';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  onClick?: (event: React.MouseEvent) => void;
}

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  external = false,
  variant = 'primary',
  underline = 'hover',
  size = 'base',
  onClick,
  className,
  id,
  'data-testid': testId,
  ...props
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const variantClasses = {
    primary: 'text-primary-600 hover:text-primary-700',
    secondary: 'text-neutral-600 hover:text-neutral-700',
    muted: 'text-neutral-500 hover:text-neutral-600',
    white: 'text-white hover:text-neutral-100',
  };

  const underlineClasses = {
    none: 'no-underline',
    hover: 'no-underline hover:underline',
    always: 'underline',
  };

  const linkClasses = cn(
    sizeClasses[size],
    variantClasses[variant],
    underlineClasses[underline],
    'transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-sm',
    className
  );

  const linkProps = {
    className: linkClasses,
    id,
    'data-testid': testId,
    onClick,
    ...(external && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
    ...props,
  };

  if (href) {
    return (
      <a href={href} {...linkProps}>
        {children}
        {external && (
          <span className="sr-only"> (opens in new tab)</span>
        )}
      </a>
    );
  }

  return (
    <button type="button" {...linkProps}>
      {children}
    </button>
  );
};

// Text component for inline text with styling
interface TextProps extends BaseComponentProps {
  as?: 'span' | 'strong' | 'em' | 'small' | 'mark';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  color?: 'primary' | 'neutral' | 'muted' | 'white' | 'success' | 'warning' | 'error';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Text: React.FC<TextProps> = ({
  children,
  as = 'span',
  size = 'base',
  color = 'neutral',
  weight = 'normal',
  className,
  id,
  'data-testid': testId,
  ...props
}) => {
  const Component = as;

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const colorClasses = {
    primary: 'text-primary-900',
    neutral: 'text-neutral-700',
    muted: 'text-neutral-500',
    white: 'text-white',
    success: 'text-finance-600',
    warning: 'text-premium-600',
    error: 'text-red-600',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const textClasses = cn(
    sizeClasses[size],
    colorClasses[color],
    weightClasses[weight],
    className
  );

  return (
    <Component
      className={textClasses}
      id={id}
      data-testid={testId}
      {...props}
    >
      {children}
    </Component>
  );
}; 