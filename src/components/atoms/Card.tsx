import React from 'react';
import { cn } from '@/utils';
import type { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  padding = 'md',
  shadow = 'md',
  border = true,
  interactive = false,
  className,
  id,
  'data-testid': testId,
  ...props
}) => {
  const paddingClasses = {
    xs: 'p-3',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const hoverShadowClasses = {
    none: '',
    sm: hover ? 'hover:shadow-md' : '',
    md: hover ? 'hover:shadow-lg' : '',
    lg: hover ? 'hover:shadow-xl' : '',
    xl: hover ? 'hover:shadow-2xl' : '',
  };

  const cardClasses = cn(
    // Base styles
    'bg-white rounded-lg transition-all duration-200',
    // Padding
    paddingClasses[padding],
    // Shadow
    shadowClasses[shadow],
    hoverShadowClasses[shadow],
    // Border
    border && 'border border-neutral-200',
    // Interactive states
    interactive && 'cursor-pointer',
    interactive && 'hover:scale-[1.02]',
    interactive && 'focus:outline-none',
    interactive && 'focus:ring-2',
    interactive && 'focus:ring-primary-500',
    interactive && 'focus:ring-offset-2',
    // Hover transform
    hover && !interactive && 'hover:translate-y-[-2px]',
    className
  );

  const Component = interactive ? 'button' : 'div';

  return (
    <Component
      className={cardClasses}
      id={id}
      data-testid={testId}
      {...(interactive && { tabIndex: 0 })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;

// Card Header component for consistent card titles
interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  className,
}) => {
  return (
    <div className={cn('flex items-start justify-between mb-4', className)}>
      <div>
        <h3 className="text-lg font-semibold text-primary-900">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm text-neutral-600">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className="ml-4 flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};

// Card Footer component for consistent card actions
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right' | 'between';
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  align = 'right',
}) => {
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between',
  };

  return (
    <div className={cn(
      'flex items-center mt-4 pt-4 border-t border-neutral-200',
      alignClasses[align],
      className
    )}>
      {children}
    </div>
  );
};

// Card Content component for consistent spacing
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('text-neutral-700', className)}>
      {children}
    </div>
  );
}; 