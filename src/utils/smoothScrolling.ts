// Smooth scrolling utilities with accessibility support

interface ScrollToOptions {
  offset?: number;
  duration?: number;
  behavior?: 'smooth' | 'auto';
  focus?: boolean;
}

// Get the height of the fixed header for offset calculations
export const getHeaderHeight = (): number => {
  const header = document.querySelector('header') || document.querySelector('[data-header="true"]');
  return header ? header.offsetHeight : 80; // Default to 80px if no header found
};

// Smooth scroll to a specific element with offset
export const scrollToElement = (
  target: string | Element,
  options: ScrollToOptions = {}
): Promise<void> => {
  return new Promise((resolve) => {
    const {
      offset = getHeaderHeight() + 20, // Add 20px buffer
      duration = 800,
      behavior = 'smooth',
      focus = true
    } = options;

    let element: Element | null;

    if (typeof target === 'string') {
      // Handle both ID selectors and regular selectors
      element = target.startsWith('#') 
        ? document.getElementById(target.slice(1))
        : document.querySelector(target);
    } else {
      element = target;
    }

    if (!element) {
      console.warn(`Element not found: ${target}`);
      resolve();
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = prefersReducedMotion ? 'auto' : behavior;

    // Calculate the scroll position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    // Use native smooth scrolling if supported and not reduced motion
    if ('scrollBehavior' in document.documentElement.style && !prefersReducedMotion) {
      window.scrollTo({
        top: offsetPosition,
        behavior: scrollBehavior
      });

      // Estimate completion time for smooth scrolling
      setTimeout(() => {
        if (focus && element) {
          focusElement(element);
        }
        resolve();
      }, scrollBehavior === 'smooth' ? duration : 0);
    } else {
      // Fallback for browsers without smooth scroll or reduced motion
      if (prefersReducedMotion) {
        window.scrollTo(0, offsetPosition);
        if (focus && element) {
          focusElement(element);
        }
        resolve();
        return;
      }

      // Custom smooth scroll implementation
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition + (distance * ease);

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          if (focus && element) {
            focusElement(element);
          }
          resolve();
        }
      };

      requestAnimationFrame(animateScroll);
    }
  });
};

// Focus an element with proper accessibility handling
const focusElement = (element: Element): void => {
  const focusableElement = element as HTMLElement;
  
  // Make the element focusable if it's not already
  if (!focusableElement.hasAttribute('tabindex')) {
    focusableElement.setAttribute('tabindex', '-1');
  }
  
  // Focus the element
  focusableElement.focus();
  
  // Optionally remove the tabindex after focusing
  setTimeout(() => {
    if (focusableElement.getAttribute('tabindex') === '-1') {
      focusableElement.removeAttribute('tabindex');
    }
  }, 100);
};

// Smooth scroll to top of page
export const scrollToTop = (options: Omit<ScrollToOptions, 'focus'> = {}): Promise<void> => {
  return new Promise((resolve) => {
    const { duration = 600, behavior = 'smooth' } = options;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      resolve();
      return;
    }

    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior
      });
      setTimeout(resolve, behavior === 'smooth' ? duration : 0);
    } else {
      // Custom smooth scroll to top
      const startPosition = window.scrollY;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition * (1 - ease);

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(animateScroll);
    }
  });
};

// Hook for smooth scroll navigation
export const useSmoothScroll = () => {
  const handleScrollTo = (target: string | Element, options?: ScrollToOptions) => {
    return scrollToElement(target, options);
  };

  const handleScrollToTop = (options?: Omit<ScrollToOptions, 'focus'>) => {
    return scrollToTop(options);
  };

  return {
    scrollTo: handleScrollTo,
    scrollToTop: handleScrollToTop,
    scrollToElement,
  };
};

// Utility to create smooth scroll navigation links
export const createSmoothScrollHandler = (
  target: string,
  options?: ScrollToOptions
) => {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToElement(target, options);
    
    // Update URL hash without jumping
    if (target.startsWith('#')) {
      const newUrl = new URL(window.location.href);
      newUrl.hash = target;
      window.history.pushState({}, '', newUrl.toString());
    }
  };
};

// Initialize smooth scrolling for all anchor links on the page
export const initializeSmoothScrolling = (): void => {
  // Handle all anchor links with hash
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (link && link.getAttribute('href')?.startsWith('#')) {
      const hash = link.getAttribute('href')!;
      const element = document.querySelector(hash);
      
      if (element) {
        event.preventDefault();
        scrollToElement(hash);
        
        // Update URL
        const newUrl = new URL(window.location.href);
        newUrl.hash = hash;
        window.history.pushState({}, '', newUrl.toString());
      }
    }
  });

  // Handle browser back/forward with hashes
  window.addEventListener('popstate', () => {
    if (window.location.hash) {
      setTimeout(() => {
        scrollToElement(window.location.hash);
      }, 100);
    }
  });

  // Handle initial hash on page load
  if (window.location.hash) {
    setTimeout(() => {
      scrollToElement(window.location.hash);
    }, 500); // Delay to ensure page is loaded
  }
}; 