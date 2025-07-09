import React from 'react';
import { cn } from '@/utils';
import type { ButtonProps, ButtonVariant, ButtonSize } from '@/types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  id,
  'data-testid': testId,
  ...props
}) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'relative',
  ];

  const variantClasses: Record<ButtonVariant, string[]> = {
    primary: [
      'bg-primary-600',
      'text-white',
      'hover:bg-primary-700',
      'focus:ring-primary-500',
      'shadow-sm',
    ],
    secondary: [
      'bg-white',
      'text-primary-600',
      'border-2',
      'border-primary-600',
      'hover:bg-primary-50',
      'focus:ring-primary-500',
    ],
    premium: [
      'bg-premium-500',
      'text-white',
      'hover:bg-premium-600',
      'focus:ring-premium-400',
      'shadow-sm',
    ],
    outline: [
      'bg-transparent',
      'text-neutral-700',
      'border-2',
      'border-neutral-300',
      'hover:border-neutral-400',
      'hover:bg-neutral-50',
      'focus:ring-neutral-500',
    ],
    ghost: [
      'bg-transparent',
      'text-neutral-700',
      'hover:bg-neutral-100',
      'focus:ring-neutral-500',
    ],
  };

  const sizeClasses: Record<ButtonSize, string[]> = {
    xs: ['px-3', 'py-1.5', 'text-xs', 'gap-1'],
    sm: ['px-4', 'py-2', 'text-sm', 'gap-1.5'],
    md: ['px-6', 'py-3', 'text-base', 'gap-2'],
    lg: ['px-8', 'py-4', 'text-lg', 'gap-2'],
    xl: ['px-10', 'py-5', 'text-xl', 'gap-3'],
  };

  const iconSizeClasses: Record<ButtonSize, string> = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  const widthClasses = fullWidth ? ['w-full'] : [];

  const buttonClasses = cn(
    ...baseClasses,
    ...variantClasses[variant],
    ...sizeClasses[size],
    ...widthClasses,
    className
  );

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const iconSize = iconSizeClasses[size];

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={buttonClasses}
      id={id}
      data-testid={testId}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className={cn('animate-spin', iconSize)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      
      <span className={cn('flex items-center gap-inherit', loading && 'opacity-0')}>
        {leftIcon && <span className={iconSize}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={iconSize}>{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button; 