import React from 'react';
import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface ContainerProps extends BaseComponentProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  center?: boolean;
  as?: 'div' | 'main' | 'section' | 'article' | 'header' | 'footer';
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  padding = 'md',
  center = true,
  as = 'div',
  className,
  id,
  'data-testid': testId,
  ...props
}) => {
  const Component = as;

  // Max-width classes based on Tailwind's container sizes
  const sizeClasses = {
    xs: 'max-w-xs',      // 320px
    sm: 'max-w-sm',      // 384px  
    md: 'max-w-md',      // 448px
    lg: 'max-w-4xl',     // 896px - Good for text content
    xl: 'max-w-6xl',     // 1152px - Good for general layouts
    '2xl': 'max-w-7xl',  // 1280px - Wide layouts
    full: 'max-w-full',  // 100% - No max-width constraint
  };

  // Responsive padding classes
  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
  };

  const containerClasses = cn(
    'w-full',
    sizeClasses[size],
    paddingClasses[padding],
    center && 'mx-auto',
    className
  );

  return (
    <Component
      className={containerClasses}
      id={id}
      data-testid={testId}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;

// Section Container - for page sections with consistent spacing
interface SectionContainerProps extends ContainerProps {
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'neutral' | 'primary';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  spacing = 'lg',
  background = 'white',
  className,
  ...containerProps
}) => {
  const spacingClasses = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20',
    xl: 'py-20 sm:py-24',
  };

  const backgroundClasses = {
    white: 'bg-white',
    neutral: 'bg-neutral-50',
    primary: 'bg-primary-50',
  };

  return (
    <section className={cn(
      spacingClasses[spacing],
      backgroundClasses[background],
      className
    )}>
      <Container {...containerProps}>
        {children}
      </Container>
    </section>
  );
};

// Content Container - for text-heavy content with optimal reading width
interface ContentContainerProps extends Omit<ContainerProps, 'size'> {
  prose?: boolean; // Apply prose typography styles
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  prose = false,
  className,
  ...containerProps
}) => {
  const contentClasses = cn(
    prose && 'prose prose-lg prose-neutral',
    prose && 'prose-headings:text-primary-900',
    prose && 'prose-links:text-primary-600 prose-links:no-underline hover:prose-links:underline',
    prose && 'prose-strong:text-primary-900',
    prose && 'max-w-none', // Override prose max-width
    className
  );

  return (
    <Container
      size="lg" // Optimal reading width
      className={contentClasses}
      {...containerProps}
    >
      {children}
    </Container>
  );
}; 