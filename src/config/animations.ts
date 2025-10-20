import type { Variants, Transition } from 'framer-motion';

// Animation durations (in seconds)
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
  EXTRA_SLOW: 0.8,
} as const;

// Animation delays
export const ANIMATION_DELAY = {
  NONE: 0,
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.3,
  STAGGER: 0.05, // For staggered animations
} as const;

// Easing curves for consistent animations
export const EASING = {
  // Standard Material Design curves
  STANDARD: [0.4, 0.0, 0.2, 1],
  DECELERATE: [0.0, 0.0, 0.2, 1],
  ACCELERATE: [0.4, 0.0, 1, 1],
  SHARP: [0.4, 0.0, 0.6, 1],
  
  // Custom easing for specific use cases
  BOUNCE: [0.68, -0.55, 0.265, 1.55],
  SMOOTH: [0.25, 0.46, 0.45, 0.94],
  GENTLE: [0.25, 0.1, 0.25, 1],
} as const;

// Performance-optimized transition defaults
export const DEFAULT_TRANSITION: Transition = {
  duration: ANIMATION_DURATION.NORMAL,
  ease: EASING.STANDARD,
};

// Accessibility-aware animation configuration
export const getReducedMotionConfig = () => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return {
    prefersReducedMotion,
    // Reduced motion variants
    duration: prefersReducedMotion ? 0.01 : ANIMATION_DURATION.NORMAL,
    transition: prefersReducedMotion 
      ? { duration: 0.01 } 
      : DEFAULT_TRANSITION,
  };
};

// Common animation variants for reuse across components
export const FADE_VARIANTS: Variants = {
  hidden: { 
    opacity: 0,
    transition: { duration: ANIMATION_DURATION.FAST }
  },
  visible: { 
    opacity: 1,
    transition: { duration: ANIMATION_DURATION.NORMAL, ease: EASING.DECELERATE }
  },
  exit: { 
    opacity: 0,
    transition: { duration: ANIMATION_DURATION.FAST, ease: EASING.ACCELERATE }
  }
};

export const SLIDE_UP_VARIANTS: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: ANIMATION_DURATION.FAST }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: ANIMATION_DURATION.NORMAL, 
      ease: EASING.DECELERATE 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: ANIMATION_DURATION.FAST, 
      ease: EASING.ACCELERATE 
    }
  }
};

export const SLIDE_LEFT_VARIANTS: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30,
    transition: { duration: ANIMATION_DURATION.FAST }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: ANIMATION_DURATION.NORMAL, 
      ease: EASING.SMOOTH 
    }
  },
  exit: { 
    opacity: 0, 
    x: -30,
    transition: { 
      duration: ANIMATION_DURATION.FAST, 
      ease: EASING.SHARP 
    }
  }
};

export const SCALE_VARIANTS: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: ANIMATION_DURATION.FAST }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: ANIMATION_DURATION.NORMAL, 
      ease: EASING.GENTLE 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { 
      duration: ANIMATION_DURATION.FAST, 
      ease: EASING.SHARP 
    }
  }
};

// Hover and interaction variants
export const HOVER_SCALE_VARIANTS: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: ANIMATION_DURATION.FAST, 
      ease: EASING.STANDARD 
    }
  },
  tap: { 
    scale: 0.98,
    transition: { 
      duration: ANIMATION_DURATION.FAST, 
      ease: EASING.SHARP 
    }
  }
};

export const HOVER_LIFT_VARIANTS: Variants = {
  initial: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.12)' },
  hover: { 
    y: -2,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: { 
      duration: ANIMATION_DURATION.FAST, 
      ease: EASING.STANDARD 
    }
  }
};

// Page transition variants
export const PAGE_TRANSITION_VARIANTS: Variants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

// Stagger animation configuration
export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_DELAY.STAGGER,
      delayChildren: ANIMATION_DELAY.SHORT,
    }
  }
};

export const STAGGER_ITEM: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: EASING.DECELERATE
    }
  }
};

// Performance optimization settings
export const PERFORMANCE_CONFIG = {
  // Use CSS transforms for better performance
  transformTemplate: ({ x, y, scale }: any) => 
    `translate3d(${x}, ${y}, 0) scale(${scale})`,
  
  // Layout animation configuration
  layout: true,
  layoutId: undefined, // Set per component
  
  // Will-change optimization
  willChange: 'transform, opacity',
  
  // Reduce motion for accessibility
  reduce: getReducedMotionConfig().prefersReducedMotion,
};

// Loading skeleton variants
export const SKELETON_VARIANTS: Variants = {
  loading: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  loaded: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.NORMAL
    }
  }
};

// Counter animation variants
export const COUNTER_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: EASING.BOUNCE
    }
  }
};

// Export utility function for creating custom variants
export const createCustomVariants = (
  hiddenState: any, 
  visibleState: any, 
  transition?: Transition
): Variants => ({
  hidden: { ...hiddenState },
  visible: { 
    ...visibleState,
    transition: transition || DEFAULT_TRANSITION
  }
});

// Scroll-based animation thresholds
export const SCROLL_ANIMATION = {
  THRESHOLD: 0.1, // Trigger when 10% visible
  THRESHOLD_ONCE: true, // Only trigger once
  ROOT_MARGIN: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
} as const; 