import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * whenever the route changes. This ensures a consistent user experience
 * where each new page starts at the top rather than maintaining the
 * previous page's scroll position.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Optional: adds smooth scrolling animation
    });
  }, [pathname]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop; 