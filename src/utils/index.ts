import type { ValidationRule, ValidationRules } from '../types';

// Class name utility for conditional CSS classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Form validation utilities
export function validateField(value: any, rule: ValidationRule): string | null {
  if (rule.required && (!value || value.toString().trim() === '')) {
    return 'This field is required';
  }

  if (value && rule.minLength && value.toString().length < rule.minLength) {
    return `Minimum length is ${rule.minLength} characters`;
  }

  if (value && rule.maxLength && value.toString().length > rule.maxLength) {
    return `Maximum length is ${rule.maxLength} characters`;
  }

  if (value && rule.pattern && !rule.pattern.test(value.toString())) {
    return 'Please enter a valid format';
  }

  if (value && rule.custom) {
    const result = rule.custom(value);
    if (typeof result === 'string') {
      return result;
    }
    if (result === false) {
      return 'Invalid value';
    }
  }

  return null;
}

export function validateForm<T extends Record<string, any>>(
  data: T,
  rules: ValidationRules<T>
): { isValid: boolean; errors: Partial<Record<keyof T, string>> } {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const field in rules) {
    const rule = rules[field];
    if (rule) {
      const error = validateField(data[field], rule);
      if (error) {
        errors[field] = error;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone number validation (Australian format)
export function isValidPhone(phone: string): boolean {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Australian phone numbers: 10 digits starting with 0, or 9 digits without leading 0
  return /^(0[2-478]|04)[0-9]{8}$/.test(cleaned) || /^[2-478][0-9]{8}$/.test(cleaned);
}

// Format phone number for display
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10 && cleaned.startsWith('0')) {
    // Format: 0X XXXX XXXX
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`;
  } else if (cleaned.length === 9) {
    // Format: X XXXX XXXX
    return `${cleaned.slice(0, 1)} ${cleaned.slice(1, 5)} ${cleaned.slice(5)}`;
  }
  
  return phone; // Return as-is if doesn't match expected format
}

// Currency formatting
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount);
}

// Date formatting
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

// String utilities
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return `${str.slice(0, length).trim()}...`;
}

// URL utilities
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Local storage utilities with error handling
export function getStorageItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function setStorageItem(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

export function removeStorageItem(key: string): boolean {
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

// Debounce utility for search/input
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait) as unknown as number;
  };
}

// Array utilities
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const group = String(item[key]);
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

// SEO utilities
export function generateMetaTitle(pageTitle: string, siteName = 'YTM Group'): string {
  return `${pageTitle} | ${siteName}`;
}

export function generateMetaDescription(content: string, maxLength = 160): string {
  return truncate(content.replace(/\s+/g, ' ').trim(), maxLength);
} 