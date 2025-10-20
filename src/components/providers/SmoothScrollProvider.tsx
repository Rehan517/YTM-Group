import React, { useEffect } from 'react';
import { initializeSmoothScrolling } from '@/utils/smoothScrolling';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize smooth scrolling when the component mounts
    initializeSmoothScrolling();

    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup function
    return () => {
      // Remove event listeners if needed (though initializeSmoothScrolling uses passive listeners)
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider; 