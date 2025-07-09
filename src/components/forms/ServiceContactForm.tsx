import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/utils';
import { Button } from '@/components';

// Base form schema that can be extended for specific services
const baseContactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Please provide more details about your inquiry'),
  serviceType: z.string(),
  preferredContact: z.enum(['email', 'phone', 'any']).default('any'),
  urgency: z.enum(['low', 'medium', 'high']).default('medium'),
});

// Service-specific field configurations
interface ConditionalField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio';
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  validation?: z.ZodTypeAny;
  condition?: (serviceType: string) => boolean;
}

export interface ServiceContactFormProps {
  serviceId: string;
  serviceName: string;
  conditionalFields?: ConditionalField[];
  onSubmit: (data: any) => void | Promise<void>;
  isLoading?: boolean;
  className?: string;
}

// Define service-specific conditional fields
const getServiceConditionalFields = (serviceId: string): ConditionalField[] => {
  const fieldMap: Record<string, ConditionalField[]> = {
    'lending': [
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        required: true,
        placeholder: '500000',
        validation: z.number().min(1000, 'Minimum loan amount is $1,000'),
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        required: true,
        options: [
          { value: 'residential', label: 'Residential' },
          { value: 'commercial', label: 'Commercial' },
          { value: 'investment', label: 'Investment Property' },
          { value: 'land', label: 'Land' },
        ],
      },
      {
        name: 'creditScore',
        label: 'Credit Score Range',
        type: 'select',
        options: [
          { value: 'excellent', label: 'Excellent (750+)' },
          { value: 'good', label: 'Good (650-749)' },
          { value: 'fair', label: 'Fair (550-649)' },
          { value: 'poor', label: 'Poor (Below 550)' },
          { value: 'unknown', label: 'Not Sure' },
        ],
      },
    ],
    'financial-planning': [
      {
        name: 'currentAssets',
        label: 'Current Assets Range',
        type: 'select',
        options: [
          { value: 'under-50k', label: 'Under $50,000' },
          { value: '50k-250k', label: '$50,000 - $250,000' },
          { value: '250k-1m', label: '$250,000 - $1,000,000' },
          { value: 'over-1m', label: 'Over $1,000,000' },
        ],
      },
      {
        name: 'planningGoals',
        label: 'Primary Financial Goals',
        type: 'checkbox',
        options: [
          { value: 'retirement', label: 'Retirement Planning' },
          { value: 'investment', label: 'Investment Strategy' },
          { value: 'tax', label: 'Tax Optimization' },
          { value: 'estate', label: 'Estate Planning' },
          { value: 'education', label: 'Education Funding' },
        ],
      },
      {
        name: 'timeHorizon',
        label: 'Investment Time Horizon',
        type: 'select',
        options: [
          { value: 'short', label: 'Short-term (1-3 years)' },
          { value: 'medium', label: 'Medium-term (3-10 years)' },
          { value: 'long', label: 'Long-term (10+ years)' },
        ],
      },
    ],
    'legal-services': [
      {
        name: 'legalMatter',
        label: 'Type of Legal Matter',
        type: 'select',
        required: true,
        options: [
          { value: 'business-formation', label: 'Business Formation' },
          { value: 'contracts', label: 'Contract Review/Drafting' },
          { value: 'compliance', label: 'Regulatory Compliance' },
          { value: 'litigation', label: 'Business Litigation' },
          { value: 'intellectual-property', label: 'Intellectual Property' },
          { value: 'employment', label: 'Employment Law' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        name: 'urgencyLevel',
        label: 'How urgent is this matter?',
        type: 'select',
        required: true,
        options: [
          { value: 'immediate', label: 'Immediate (within 24 hours)' },
          { value: 'urgent', label: 'Urgent (within 1 week)' },
          { value: 'normal', label: 'Normal (within 2-4 weeks)' },
          { value: 'planning', label: 'Planning ahead' },
        ],
      },
    ],
    'business-insurance': [
      {
        name: 'businessType',
        label: 'Type of Business',
        type: 'text',
        required: true,
        placeholder: 'e.g., Restaurant, Construction, Consulting',
      },
      {
        name: 'employeeCount',
        label: 'Number of Employees',
        type: 'select',
        required: true,
        options: [
          { value: '1', label: 'Just me (1)' },
          { value: '2-10', label: '2-10 employees' },
          { value: '11-50', label: '11-50 employees' },
          { value: '51-100', label: '51-100 employees' },
          { value: '100+', label: 'Over 100 employees' },
        ],
      },
      {
        name: 'coverageTypes',
        label: 'Types of Coverage Needed',
        type: 'checkbox',
        options: [
          { value: 'general-liability', label: 'General Liability' },
          { value: 'professional-liability', label: 'Professional Liability' },
          { value: 'property', label: 'Property Insurance' },
          { value: 'workers-comp', label: 'Workers Compensation' },
          { value: 'cyber', label: 'Cyber Liability' },
          { value: 'directors-officers', label: 'Directors & Officers' },
        ],
      },
    ],
    'business-advisory': [
      {
        name: 'businessStage',
        label: 'Business Stage',
        type: 'select',
        required: true,
        options: [
          { value: 'startup', label: 'Startup/Pre-launch' },
          { value: 'early-stage', label: 'Early Stage (0-2 years)' },
          { value: 'growth', label: 'Growth Stage (2-5 years)' },
          { value: 'established', label: 'Established (5+ years)' },
        ],
      },
      {
        name: 'advisoryNeeds',
        label: 'Advisory Services Needed',
        type: 'checkbox',
        options: [
          { value: 'strategic-planning', label: 'Strategic Planning' },
          { value: 'operational-efficiency', label: 'Operational Efficiency' },
          { value: 'market-analysis', label: 'Market Analysis' },
          { value: 'financial-modeling', label: 'Financial Modeling' },
          { value: 'growth-consulting', label: 'Growth Consulting' },
          { value: 'exit-planning', label: 'Exit Planning' },
        ],
      },
      {
        name: 'annualRevenue',
        label: 'Annual Revenue Range',
        type: 'select',
        options: [
          { value: 'under-100k', label: 'Under $100,000' },
          { value: '100k-500k', label: '$100,000 - $500,000' },
          { value: '500k-2m', label: '$500,000 - $2,000,000' },
          { value: '2m-10m', label: '$2,000,000 - $10,000,000' },
          { value: 'over-10m', label: 'Over $10,000,000' },
        ],
      },
    ],
    'property': [
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        required: true,
        options: [
          { value: 'commercial-office', label: 'Commercial Office' },
          { value: 'retail', label: 'Retail Space' },
          { value: 'industrial', label: 'Industrial/Warehouse' },
          { value: 'residential-investment', label: 'Residential Investment' },
          { value: 'land', label: 'Land/Development' },
          { value: 'mixed-use', label: 'Mixed Use' },
        ],
      },
      {
        name: 'transactionType',
        label: 'Transaction Type',
        type: 'select',
        required: true,
        options: [
          { value: 'buying', label: 'Looking to Buy' },
          { value: 'selling', label: 'Looking to Sell' },
          { value: 'leasing', label: 'Leasing' },
          { value: 'management', label: 'Property Management' },
          { value: 'valuation', label: 'Property Valuation' },
          { value: 'consultation', label: 'Investment Consultation' },
        ],
      },
      {
        name: 'propertyValue',
        label: 'Property Value Range',
        type: 'select',
        options: [
          { value: 'under-500k', label: 'Under $500,000' },
          { value: '500k-1m', label: '$500,000 - $1,000,000' },
          { value: '1m-5m', label: '$1,000,000 - $5,000,000' },
          { value: '5m-10m', label: '$5,000,000 - $10,000,000' },
          { value: 'over-10m', label: 'Over $10,000,000' },
        ],
      },
    ],
  };

  return fieldMap[serviceId] || [];
};

const ServiceContactForm: React.FC<ServiceContactFormProps> = ({
  serviceId,
  serviceName,
  conditionalFields,
  onSubmit,
  isLoading = false,
  className
}) => {
  // Get service-specific fields
  const serviceFields = conditionalFields || getServiceConditionalFields(serviceId);
  
  // Build dynamic schema based on service fields
  const buildFormSchema = () => {
    let schemaFields: Record<string, z.ZodTypeAny> = { ...baseContactSchema.shape };
    
    serviceFields.forEach(field => {
      if (field.validation) {
        schemaFields[field.name] = field.required 
          ? field.validation 
          : field.validation.optional();
      } else {
        // Default validation based on field type
        switch (field.type) {
          case 'number':
            schemaFields[field.name] = field.required 
              ? z.number().min(0) 
              : z.number().min(0).optional();
            break;
          case 'checkbox':
            schemaFields[field.name] = z.array(z.string()).optional();
            break;
          default:
            schemaFields[field.name] = field.required 
              ? z.string().min(1, `${field.label} is required`) 
              : z.string().optional();
        }
      }
    });
    
    return z.object(schemaFields);
  };

  const formSchema = buildFormSchema();
  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: serviceId,
      preferredContact: 'any',
      urgency: 'medium',
    }
  });

  const serviceType = watch('serviceType');

  const handleFormSubmit = async (data: FormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  // Helper function to get error message
  const getErrorMessage = (fieldName: string): string | undefined => {
    const error = errors[fieldName as keyof typeof errors];
    return error?.message as string | undefined;
  };

  const renderField = (field: ConditionalField) => {
    // Check if field should be shown based on condition
    if (field.condition && !field.condition(serviceType)) {
      return null;
    }

    const errorMessage = getErrorMessage(field.name);

    const commonClasses = cn(
      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
      errorMessage 
        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
        : 'border-neutral-300'
    );

    switch (field.type) {
      case 'select':
        return (
          <div key={field.name} className="space-y-2">
            <label htmlFor={field.name} className="block text-sm font-medium text-slate-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <select
              id={field.name}
              {...register(field.name)}
              className={commonClasses}
            >
              <option value="">Select {field.label}</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div key={field.name} className="space-y-2">
            <label htmlFor={field.name} className="block text-sm font-medium text-slate-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              id={field.name}
              rows={4}
              {...register(field.name)}
              placeholder={field.placeholder}
              className={cn(commonClasses, 'resize-none')}
            />
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
        );

      case 'checkbox':
        return (
          <div key={field.name} className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="space-y-2">
              {field.options?.map(option => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    value={option.value}
                    {...register(field.name)}
                    className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-sm text-slate-700">{option.label}</span>
                </label>
              ))}
            </div>
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
        );

      case 'number':
        return (
          <div key={field.name} className="space-y-2">
            <label htmlFor={field.name} className="block text-sm font-medium text-slate-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="number"
              id={field.name}
              {...register(field.name, { valueAsNumber: true })}
              placeholder={field.placeholder}
              className={commonClasses}
            />
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
        );

      default:
        return (
          <div key={field.name} className="space-y-2">
            <label htmlFor={field.name} className="block text-sm font-medium text-slate-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id={field.name}
              {...register(field.name)}
              placeholder={field.placeholder}
              className={commonClasses}
            />
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={cn('space-y-6', className)}>
      <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Get Started with {serviceName}
          </h3>
          <p className="text-slate-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName')}
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
                errors.firstName ? 'border-red-300' : 'border-neutral-300'
              )}
            />
            {errors.firstName?.message && (
              <p className="text-sm text-red-600">{String(errors.firstName.message)}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName')}
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
                errors.lastName ? 'border-red-300' : 'border-neutral-300'
              )}
            />
            {errors.lastName?.message && (
              <p className="text-sm text-red-600">{String(errors.lastName.message)}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
                errors.email ? 'border-red-300' : 'border-neutral-300'
              )}
            />
            {errors.email?.message && (
              <p className="text-sm text-red-600">{String(errors.email.message)}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              placeholder="(555) 123-4567"
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
                errors.phone ? 'border-red-300' : 'border-neutral-300'
              )}
            />
            {errors.phone?.message && (
              <p className="text-sm text-red-600">{String(errors.phone.message)}</p>
            )}
          </div>
        </div>

        {/* Service-specific fields */}
        {serviceFields.length > 0 && (
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-6">
              Service-Specific Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceFields.map(renderField)}
            </div>
          </div>
        )}

        {/* Preferred Contact Method */}
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="preferredContact" className="block text-sm font-medium text-slate-700">
                Preferred Contact Method
              </label>
              <select
                id="preferredContact"
                {...register('preferredContact')}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="any">Any</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="urgency" className="block text-sm font-medium text-slate-700">
                Urgency Level
              </label>
              <select
                id="urgency"
                {...register('urgency')}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="low">Low - Planning ahead</option>
                <option value="medium">Medium - Within 2-4 weeks</option>
                <option value="high">High - ASAP</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">
            Additional Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            placeholder="Please tell us more about your specific needs..."
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none',
              errors.message ? 'border-red-300' : 'border-neutral-300'
            )}
          />
          {errors.message?.message && (
            <p className="text-sm text-red-600">{String(errors.message.message)}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || isLoading}
            className="w-full"
          >
            {isSubmitting || isLoading ? 'Sending...' : 'Send Inquiry'}
          </Button>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-primary-600 hover:text-primary-700">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-primary-600 hover:text-primary-700">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </form>
  );
};

export default ServiceContactForm; 