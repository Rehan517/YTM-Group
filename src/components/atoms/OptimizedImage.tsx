import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  webpSrc?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  srcSet?: string;
  placeholder?: string;
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  webpSrc,
  width,
  height,
  className,
  priority = false,
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center',
  onLoad,
  onError,
  sizes = '100vw',
  srcSet,
  placeholder,
  blurDataURL
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageSource, setImageSource] = useState<string>('');

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

  // WebP support detection and source selection
  useEffect(() => {
    if (!isInView) return;

    const checkWebPSupport = async () => {
      if (!webpSrc) {
        setImageSource(src);
        return;
      }

      try {
        // Create a small WebP test image
        const webpTestSrc = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        
        const img = new Image();
        img.onload = () => {
          setImageSource(webpSrc);
        };
        img.onerror = () => {
          setImageSource(src);
        };
        img.src = webpTestSrc;
      } catch {
        setImageSource(src);
      }
    };

    checkWebPSupport();
  }, [isInView, src, webpSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original src if WebP fails
    if (imageSource === webpSrc && src !== webpSrc) {
      setImageSource(src);
      setHasError(false);
    } else {
      onError?.();
    }
  };

  // Generate responsive srcSet if not provided
  const generateSrcSet = (baseSrc: string) => {
    if (srcSet) return srcSet;
    
    const ext = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${ext}`, '');
    
    return [
      `${baseName}-400w.${ext} 400w`,
      `${baseName}-800w.${ext} 800w`,
      `${baseName}-1200w.${ext} 1200w`,
      `${baseName}-1600w.${ext} 1600w`,
      `${baseName}-2000w.${ext} 2000w`
    ].join(', ');
  };

  return (
    <div 
      ref={imgRef}
      className={cn(
        'relative overflow-hidden',
        className
      )}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%'
      }}
    >
      {/* Placeholder/Blur background */}
      {(placeholder || blurDataURL) && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${placeholder || blurDataURL})`,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !placeholder && !blurDataURL && (
        <div className={cn(
          'absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200',
          'animate-pulse'
        )} />
      )}

      {/* Main image */}
      {isInView && imageSource && !hasError && (
        <img
          src={imageSource}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          sizes={sizes}
          srcSet={generateSrcSet(imageSource)}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            objectFit === 'cover' && 'object-cover',
            objectFit === 'contain' && 'object-contain',
            objectFit === 'fill' && 'object-fill',
            objectFit === 'none' && 'object-none',
            objectFit === 'scale-down' && 'object-scale-down'
          )}
          style={{
            objectPosition
          }}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className={cn(
          'absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300',
          'flex items-center justify-center text-neutral-500'
        )}>
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Loading indicator for priority images */}
      {priority && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 