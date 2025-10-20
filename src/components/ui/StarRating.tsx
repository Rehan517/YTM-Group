import React, { useState, useCallback } from 'react';
import { cn } from '@/utils';
import type { StarRatingProps } from '@/types';

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  interactive = false,
  showValue = false,
  precision = 1,
  emptyColor = 'text-gray-300',
  fillColor = 'text-yellow-400',
  onChange,
  className = '',
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const currentRating = hoverRating ?? rating;

  const handleStarClick = useCallback((starValue: number) => {
    if (!interactive || !onChange) return;
    
    const newRating = precision === 0.5 
      ? Math.round(starValue * 2) / 2 
      : Math.round(starValue);
    
    onChange(newRating);
  }, [interactive, onChange, precision]);

  const handleStarHover = useCallback((starValue: number) => {
    if (!interactive) return;
    setHoverRating(starValue);
  }, [interactive]);

  const handleMouseLeave = useCallback(() => {
    if (!interactive) return;
    setHoverRating(null);
  }, [interactive]);

  const getStarFillPercentage = (starIndex: number): number => {
    const starValue = starIndex + 1;
    
    if (currentRating >= starValue) {
      return 100; // Full star
    } else if (currentRating > starIndex) {
      return (currentRating - starIndex) * 100; // Partial star
    }
    return 0; // Empty star
  };

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const fillPercentage = getStarFillPercentage(index);
    const uniqueId = `star-gradient-${index}-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        key={index}
        className={cn(
          'relative',
          interactive && 'cursor-pointer',
          className
        )}
        onClick={() => handleStarClick(starValue)}
        onMouseEnter={() => handleStarHover(starValue)}
        onMouseMove={(e) => {
          if (!interactive || precision !== 0.5) return;
          
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const width = rect.width;
          const percentage = x / width;
          
          const newValue = index + (percentage > 0.5 ? 1 : 0.5);
          handleStarHover(newValue);
        }}
        role={interactive ? 'button' : 'img'}
        aria-label={`${starValue} ${starValue === 1 ? 'star' : 'stars'}`}
        tabIndex={interactive ? 0 : -1}
        onKeyDown={(e) => {
          if (!interactive) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleStarClick(starValue);
          }
        }}
      >
        <svg
          className={cn(sizeClasses[size], emptyColor)}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={`${fillPercentage}%`} stopColor="currentColor" className={fillColor} />
              <stop offset={`${fillPercentage}%`} stopColor="currentColor" className={emptyColor} />
            </linearGradient>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={`url(#${uniqueId})`}
            className={fillPercentage > 0 ? fillColor : emptyColor}
          />
        </svg>
      </div>
    );
  };

  return (
    <div 
      className={cn(
        'flex items-center gap-1',
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
    >
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
      </div>
      
      {showValue && (
        <span className="ml-2 text-sm font-medium text-gray-600">
          {rating.toFixed(precision === 0.5 ? 1 : 0)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default StarRating; 