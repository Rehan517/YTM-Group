import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/utils';

interface TrustIndicatorProps {
  id: string;
  type: 'stat' | 'certification' | 'award';
  value?: string | number;
  label: string;
  icon?: string;
  description?: string;
  className?: string;
  isDark?: boolean;
  animated?: boolean;
}

// Counter animation hook
const useCountAnimation = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start]);
  
  return count;
};

// Intersection Observer hook for triggering animations
const useIntersectionObserver = (ref: React.RefObject<HTMLDivElement | null>, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.3, ...options });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
};

// Extract numeric value from string (e.g., "15+" -> 15, "$2M+" -> 2000000)
const extractNumericValue = (value: string | number): number => {
  if (typeof value === 'number') return value;
  
  const cleanValue = value.toString().replace(/[^\d.]/g, '');
  const num = parseFloat(cleanValue) || 0;
  
  // Handle special cases like "M" for millions, "K" for thousands
  if (value.includes('M')) return num * 1000000;
  if (value.includes('K')) return num * 1000;
  
  return num;
};

// Format the animated number back to original format
const formatAnimatedValue = (originalValue: string | number, animatedValue: number): string => {
  if (typeof originalValue === 'number') return animatedValue.toString();
  
  const originalStr = originalValue.toString();
  
  // Handle millions
  if (originalStr.includes('M')) {
    const millions = animatedValue / 1000000;
    return `$${millions.toFixed(millions < 10 ? 1 : 0)}M+`;
  }
  
  // Handle thousands
  if (originalStr.includes('K')) {
    const thousands = animatedValue / 1000;
    return `${thousands}K+`;
  }
  
  // Handle regular numbers with suffix
  if (originalStr.includes('+')) {
    return `${animatedValue}+`;
  }
  
  return animatedValue.toString();
};

const TrustIndicator: React.FC<TrustIndicatorProps> = ({
  id,
  type,
  value,
  label,
  icon,
  description,
  className,
  isDark = false,
  animated = true
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { once: true });
  
  // Animation logic for statistics
  const numericValue = value ? extractNumericValue(value) : 0;
  const animatedCount = useCountAnimation(numericValue, 2000, isInView && type === 'stat');
  const displayValue = animated && type === 'stat' && value
    ? formatAnimatedValue(value, animatedCount)
    : value;

  return (
    <div
      ref={ref}
      className={cn(
        'text-center group cursor-default',
        'opacity-0 translate-y-4 transition-all duration-700 ease-out',
        isInView && 'opacity-100 translate-y-0',
        className
      )}
      role="group"
      aria-label={`Trust indicator: ${label}`}
    >
      {/* Icon or Badge */}
      {icon && (
        <div className="mb-3 flex justify-center">
          {type === 'certification' || type === 'award' ? (
            <div className={cn(
              'w-16 h-16 rounded-full flex items-center justify-center',
              'border-2 shadow-lg group-hover:shadow-xl transition-all duration-300',
              'transform group-hover:scale-105',
              isDark 
                ? 'bg-white/10 border-white/20 backdrop-blur-sm' 
                : 'bg-primary-50 border-primary-200'
            )}>
              <img
                src={icon}
                alt={`${label} badge`}
                className="w-10 h-10 object-contain"
              />
            </div>
          ) : (
            <div className={cn(
              'w-12 h-12 rounded-full flex items-center justify-center',
              'group-hover:scale-110 transition-transform duration-300',
              isDark 
                ? 'bg-primary-400' 
                : 'bg-primary-500'
            )}>
              <img
                src={icon}
                alt={`${label} icon`}
                className="w-6 h-6 object-contain filter brightness-0 invert"
              />
            </div>
          )}
        </div>
      )}

      {/* Value */}
      {type === 'stat' && displayValue && (
        <div 
          className={cn(
            'text-2xl md:text-3xl lg:text-4xl font-bold mb-2',
            'group-hover:scale-105 transition-transform duration-300',
            isDark ? 'text-white' : 'text-primary-600'
          )}
          style={{
            animationDelay: isInView ? '0.3s' : '0',
            animationFillMode: 'both'
          }}
        >
          {displayValue}
        </div>
      )}

      {/* Label */}
      <div 
        className={cn(
          'text-sm md:text-base font-semibold mb-1',
          'group-hover:text-primary-500 transition-colors duration-300',
          isDark 
            ? 'text-neutral-200' 
            : 'text-neutral-700'
        )}
      >
        {label}
      </div>

      {/* Description */}
      {description && (
        <div 
          className={cn(
            'text-xs leading-relaxed',
            isDark 
              ? 'text-neutral-300' 
              : 'text-neutral-500'
          )}
        >
          {description}
        </div>
      )}

      {/* Certification/Award Additional Info */}
      {(type === 'certification' || type === 'award') && (
        <div
          className={cn(
            'mt-2 transition-all duration-500',
            isInView ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0'
          )}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className={cn(
            'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
            type === 'certification' 
              ? (isDark ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-800')
              : (isDark ? 'bg-yellow-500/20 text-yellow-200' : 'bg-yellow-100 text-yellow-800')
          )}>
            {type === 'certification' ? 'Certified' : 'Award Winner'}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrustIndicator; 