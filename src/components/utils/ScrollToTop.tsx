import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  smooth?: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ smooth = true }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    if (smooth) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, smooth]);

  return null;
};

export default ScrollToTop; 