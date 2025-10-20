import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { useReducedMotion } from '@/hooks/useAnimations';
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
  const prefersReducedMotion = useReducedMotion();
  
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'ease-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus-visible:ring-4',
    'focus-visible:ring-opacity-50',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:transform-none',
    'relative',
    'will-change-transform',
    'transform-gpu',
  ];

  const variantClasses: Record<ButtonVariant, string[]> = {
    primary: [
      'bg-primary-800',
      'text-white',
      'hover:bg-primary-900',
      'hover:shadow-lg',
      'active:bg-primary-950',
      'focus:ring-primary-500',
      'focus-visible:ring-primary-400',
      'shadow-sm',
      'hover:shadow-primary-500/25',
    ],
    secondary: [
      'bg-white',
      'text-primary-600',
      'border-2',
      'border-primary-600',
      'hover:bg-primary-50',
      'hover:border-primary-700',
      'hover:shadow-md',
      'active:bg-primary-100',
      'focus:ring-primary-500',
      'focus-visible:ring-primary-400',
      'shadow-sm',
    ],
    premium: [
      'bg-premium-500',
      'text-white',
      'hover:bg-premium-600',
      'hover:shadow-lg',
      'active:bg-premium-700',
      'focus:ring-premium-400',
      'focus-visible:ring-premium-300',
      'shadow-sm',
      'hover:shadow-premium-500/25',
    ],
    outline: [
      'bg-transparent',
      'text-neutral-700',
      'border-2',
      'border-neutral-300',
      'hover:border-neutral-400',
      'hover:bg-neutral-50',
      'hover:shadow-md',
      'active:bg-neutral-100',
      'focus:ring-neutral-500',
      'focus-visible:ring-neutral-400',
    ],
    ghost: [
      'bg-transparent',
      'text-neutral-700',
      'hover:bg-neutral-100',
      'hover:shadow-sm',
      'active:bg-neutral-200',
      'focus:ring-neutral-500',
      'focus-visible:ring-neutral-400',
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

  // Animation variants for different states
  const buttonVariants = {
    initial: { 
      scale: 1,
      y: 0,
    },
    hover: { 
      scale: prefersReducedMotion ? 1 : 1.02,
      y: prefersReducedMotion ? 0 : -1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    tap: { 
      scale: prefersReducedMotion ? 1 : 0.98,
      y: 0,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    disabled: {
      scale: 1,
      y: 0,
    },
  };

  // Loading spinner variants
  const spinnerVariants = {
    loading: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Content fade variants for loading state
  const contentVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  // If reduced motion is preferred, use regular button
  if (prefersReducedMotion) {
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
  }

  // Enhanced animated button
  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={buttonClasses}
      id={id}
      data-testid={testId}
      aria-busy={loading}
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled && !loading ? "hover" : "disabled"}
      whileTap={!disabled && !loading ? "tap" : "disabled"}
      whileFocus={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      {...props}
    >
      {loading && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.svg
            className={iconSize}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            variants={spinnerVariants}
            animate="loading"
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
          </motion.svg>
        </motion.div>
      )}
      
      <motion.span 
        className="flex items-center gap-inherit"
        variants={contentVariants}
        animate={loading ? "hidden" : "visible"}
        transition={{ duration: 0.2 }}
      >
        {leftIcon && (
          <motion.span 
            className={iconSize}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {leftIcon}
          </motion.span>
        )}
        {children}
        {rightIcon && (
          <motion.span 
            className={iconSize}
            whileHover={{ rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            {rightIcon}
          </motion.span>
        )}
      </motion.span>
    </motion.button>
  );
};

export default Button; 