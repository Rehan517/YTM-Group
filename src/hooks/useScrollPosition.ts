import { useState, useEffect } from 'react';

interface UseScrollPositionOptions {
  threshold?: number;
  throttle?: number;
}

export const useScrollPosition = (options: UseScrollPositionOptions = {}) => {
  const { threshold = 100, throttle = 16 } = options;
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }

      timeoutId = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setIsScrolled(currentScrollY > threshold);
      });
    };

    // Set initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
    };
  }, [threshold]);

  return {
    scrollY,
    isScrolled,
  };
};

export default useScrollPosition;
