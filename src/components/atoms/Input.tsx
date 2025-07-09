import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface InputProps extends Omit<BaseComponentProps, 'children'> {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  helper?: string;
  label?: string;
  name?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      disabled = false,
      readOnly = false,
      required = false,
      autoComplete,
      autoFocus = false,
      size = 'md',
      variant = 'default',
      leftIcon,
      rightIcon,
      error,
      helper,
      label,
      name,
      maxLength,
      minLength,
      pattern,
      fullWidth = false,
      className,
      id,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const inputId = id || name;
    const hasError = variant === 'error' || Boolean(error);
    const hasSuccess = variant === 'success';

    const sizeClasses = {
      sm: {
        input: 'px-3 py-2 text-sm',
        icon: 'w-4 h-4',
        iconPadding: leftIcon ? 'pl-9' : rightIcon ? 'pr-9' : '',
      },
      md: {
        input: 'px-4 py-3 text-base',
        icon: 'w-5 h-5',
        iconPadding: leftIcon ? 'pl-11' : rightIcon ? 'pr-11' : '',
      },
      lg: {
        input: 'px-5 py-4 text-lg',
        icon: 'w-6 h-6',
        iconPadding: leftIcon ? 'pl-12' : rightIcon ? 'pr-12' : '',
      },
    };

    const variantClasses = {
      default: {
        input: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
        icon: 'text-neutral-400',
      },
      error: {
        input: 'border-red-300 focus:border-red-500 focus:ring-red-500',
        icon: 'text-red-400',
      },
      success: {
        input: 'border-finance-300 focus:border-finance-500 focus:ring-finance-500',
        icon: 'text-finance-400',
      },
    };

    const currentVariant = hasError ? 'error' : hasSuccess ? 'success' : 'default';
    const currentSize = sizeClasses[size];
    const currentVariantClasses = variantClasses[currentVariant];

    const inputClasses = cn(
      // Base styles
      'block w-full rounded-lg border transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-1',
      'disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed',
      'placeholder:text-neutral-400',
      // Size styles
      currentSize.input,
      currentSize.iconPadding,
      // Variant styles
      currentVariantClasses.input,
      // Width
      fullWidth ? 'w-full' : '',
      className
    );

    const iconClasses = cn(
      'absolute top-1/2 transform -translate-y-1/2 pointer-events-none',
      currentSize.icon,
      currentVariantClasses.icon
    );

    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2',
              hasError ? 'text-red-700' : 'text-neutral-700'
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className={cn(iconClasses, 'left-3')}>
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            id={inputId}
            name={name}
            className={inputClasses}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            data-testid={testId}
            aria-invalid={hasError}
            aria-describedby={
              cn(
                error && `${inputId}-error`,
                helper && `${inputId}-helper`
              ).trim() || undefined
            }
            {...props}
          />

          {rightIcon && (
            <div className={cn(iconClasses, 'right-3')}>
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {helper && !error && (
          <p
            id={`${inputId}-helper`}
            className="mt-2 text-sm text-neutral-500"
          >
            {helper}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Textarea component with similar API
interface TextareaProps extends Omit<BaseComponentProps, 'children'> {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  rows?: number;
  cols?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  variant?: 'default' | 'error' | 'success';
  error?: string;
  helper?: string;
  label?: string;
  name?: string;
  maxLength?: number;
  minLength?: number;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      disabled = false,
      readOnly = false,
      required = false,
      autoFocus = false,
      rows = 4,
      cols,
      resize = 'vertical',
      variant = 'default',
      error,
      helper,
      label,
      name,
      maxLength,
      minLength,
      fullWidth = false,
      className,
      id,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const textareaId = id || name;
    const hasError = variant === 'error' || Boolean(error);
    const hasSuccess = variant === 'success';

    const variantClasses = {
      default: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
      error: 'border-red-300 focus:border-red-500 focus:ring-red-500',
      success: 'border-finance-300 focus:border-finance-500 focus:ring-finance-500',
    };

    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    };

    const currentVariant = hasError ? 'error' : hasSuccess ? 'success' : 'default';

    const textareaClasses = cn(
      // Base styles
      'block w-full rounded-lg border px-4 py-3 text-base transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-1',
      'disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed',
      'placeholder:text-neutral-400',
      // Variant styles
      variantClasses[currentVariant],
      // Resize
      resizeClasses[resize],
      // Width
      fullWidth ? 'w-full' : '',
      className
    );

    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              'block text-sm font-medium mb-2',
              hasError ? 'text-red-700' : 'text-neutral-700'
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          className={textareaClasses}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoFocus={autoFocus}
          rows={rows}
          cols={cols}
          maxLength={maxLength}
          minLength={minLength}
          data-testid={testId}
          aria-invalid={hasError}
          aria-describedby={
            cn(
              error && `${textareaId}-error`,
              helper && `${textareaId}-helper`
            ).trim() || undefined
          }
          {...props}
        />

        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-2 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {helper && !error && (
          <p
            id={`${textareaId}-helper`}
            className="mt-2 text-sm text-neutral-500"
          >
            {helper}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea'; 