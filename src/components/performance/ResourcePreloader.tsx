import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroPNG, YTMLogo } from '@/assets';

interface ResourcePreloaderProps {
  criticalImages?: string[];
  prefetchRoutes?: string[];
  enableAnalytics?: boolean;
}

interface PreloadConfig {
  href: string;
  as: 'image' | 'script' | 'style' | 'font' | 'prefetch';
  crossOrigin?: 'anonymous' | 'use-credentials';
  media?: string;
  type?: string;
}

const ResourcePreloader: React.FC<ResourcePreloaderProps> = ({
  criticalImages = [],
  prefetchRoutes = [],
  enableAnalytics = true,
}) => {
  const location = useLocation();

  // Critical resources that should be preloaded immediately
  const criticalResources: PreloadConfig[] = [
    // Critical hero image - using proper asset import
    { href: HeroPNG, as: 'image' },
    // Critical logo - using proper asset import  
    { href: YTMLogo, as: 'image' },
    
    // Critical fonts (if any)
    // { href: '/fonts/custom-font.woff2', as: 'font', crossOrigin: 'anonymous' },
  ];

  // Route-based prefetching map - Updated with correct routes from AppRouter.tsx
  const routePrefetchMap: Record<string, string[]> = {
    '/': ['/about', '/contact', '/services/financial-planning', '/testimonials'], // From homepage
    '/about': ['/contact', '/services/financial-planning', '/services/lending', '/testimonials'], // From about
    '/contact': ['/services/financial-planning', '/', '/about'], // From contact
    '/testimonials': ['/about', '/contact', '/services/financial-planning'], // From testimonials
    
    // Service pages with correct routes
    '/services/financial-planning': ['/services/lending', '/contact', '/', '/about'], // From financial planning
    '/services/lending': ['/services/financial-planning', '/contact', '/about'], // From lending
    '/services/legal': ['/services/property', '/contact', '/about'], // Fixed route
    '/services/property': ['/services/legal', '/contact', '/about'], // Fixed route  
    '/services/business-advisory': ['/services/business-insurance', '/contact', '/about'], // From business advisory
    '/services/business-insurance': ['/services/business-advisory', '/contact', '/about'], // From business insurance
    
    // Legal pages
    '/privacy-policy': ['/terms-and-conditions', '/contact'], // From privacy policy
    '/terms-and-conditions': ['/privacy-policy', '/contact'], // From terms and conditions
  };

  /**
   * Create and append a preload link to the document head
   */
  const createPreloadLink = (config: PreloadConfig): HTMLLinkElement => {
    const link = document.createElement('link');
    link.rel = config.as === 'prefetch' ? 'prefetch' : 'preload';
    link.href = config.href;
    
    if (config.as !== 'prefetch') {
      link.as = config.as;
    }
    
    if (config.crossOrigin) {
      link.crossOrigin = config.crossOrigin;
    }
    
    if (config.media) {
      link.media = config.media;
    }
    
    if (config.type) {
      link.type = config.type;
    }

    // Add performance tracking
    if (enableAnalytics) {
      link.onload = () => {
        if (import.meta.env.DEV) {
          console.log(`🚀 Preloaded: ${config.href} (${config.as})`);
        }
      };
      
      link.onerror = () => {
        if (import.meta.env.DEV) {
          console.warn(`❌ Failed to preload: ${config.href}`);
        }
      };
    }

    return link;
  };

  /**
   * Preload critical resources immediately
   */
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    // Preload critical resources
    [...criticalResources, ...criticalImages.map(href => ({ href, as: 'image' as const }))].forEach(config => {
      const link = createPreloadLink(config);
      document.head.appendChild(link);
      links.push(link);
    });

    // Cleanup function
    return () => {
      links.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [criticalImages, enableAnalytics]);

  /**
   * Prefetch likely next pages based on current route
   */
  useEffect(() => {
    const prefetchLinks: HTMLLinkElement[] = [];
    
    // Get routes to prefetch based on current location
    const routesToPrefetch = [
      ...(routePrefetchMap[location.pathname] || []),
      ...prefetchRoutes,
    ];

    // Add a delay before prefetching to not interfere with critical resources
    const prefetchTimeout = setTimeout(() => {
      routesToPrefetch.forEach(route => {
        const link = createPreloadLink({ href: route, as: 'prefetch' });
        document.head.appendChild(link);
        prefetchLinks.push(link);
      });
    }, 2000); // Wait 2 seconds after route change

    return () => {
      clearTimeout(prefetchTimeout);
      prefetchLinks.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [location.pathname, prefetchRoutes, enableAnalytics]);

  /**
   * Prefetch external resources based on user behavior
   */
  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const href = new URL(link.href).pathname;
        
        // Only prefetch if not already prefetched
        if (!document.querySelector(`link[href="${href}"][rel="prefetch"]`)) {
          const prefetchLink = createPreloadLink({ href, as: 'prefetch' });
          document.head.appendChild(prefetchLink);
          
          if (import.meta.env.DEV) {
            console.log(`🔮 Hover prefetch: ${href}`);
          }
        }
      }
    };

    // Add hover prefetching for better UX
    document.addEventListener('mouseenter', handleMouseEnter, true);
    
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
    };
  }, [enableAnalytics]);

  // This component doesn't render anything visible
  return null;
};

export default ResourcePreloader; 