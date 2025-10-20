import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { PAGE_TRANSITION_VARIANTS, ANIMATION_DURATION, EASING } from '@/config/animations';
import { useReducedMotion } from '@/hooks/useAnimations';

interface PageTransitionProps {
  children: React.ReactNode;
  routeName?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, routeName }) => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  // Enhanced variants with better transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : ANIMATION_DURATION.NORMAL,
        ease: EASING.DECELERATE,
        when: "beforeChildren",
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
    out: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -10,
      scale: prefersReducedMotion ? 1 : 0.98,
      transition: {
        duration: prefersReducedMotion ? 0.01 : ANIMATION_DURATION.FAST,
        ease: EASING.ACCELERATE,
      },
    },
  };

  if (prefersReducedMotion) {
    return <div key={location.pathname}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        style={{
          width: '100%',
          minHeight: '100vh',
          willChange: 'transform, opacity',
        }}
        data-route={routeName || location.pathname}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 