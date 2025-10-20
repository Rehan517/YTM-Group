import React from 'react';
import { motion } from 'framer-motion';
import type { Variants, Target, VariantLabels } from 'framer-motion';
import { 
  FADE_VARIANTS, 
  SLIDE_UP_VARIANTS, 
  SLIDE_LEFT_VARIANTS, 
  SCALE_VARIANTS,
  STAGGER_CONTAINER,
  STAGGER_ITEM
} from '@/config/animations';
import { useReducedMotion } from '@/hooks/useAnimations';

type AnimationType = 'fade' | 'slideUp' | 'slideLeft' | 'scale' | 'staggerContainer' | 'staggerItem';
type ElementType = 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'aside';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: AnimationType;
  customVariants?: Variants;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
  className?: string;
  as?: ElementType;
  initial?: Target | VariantLabels;
  animate?: Target | VariantLabels;
  exit?: Target | VariantLabels;
  whileHover?: Target | VariantLabels;
  whileTap?: Target | VariantLabels;
  style?: React.CSSProperties;
  onAnimationComplete?: () => void;
}

const animationVariants: Record<AnimationType, Variants> = {
  fade: FADE_VARIANTS,
  slideUp: SLIDE_UP_VARIANTS,
  slideLeft: SLIDE_LEFT_VARIANTS,
  scale: SCALE_VARIANTS,
  staggerContainer: STAGGER_CONTAINER,
  staggerItem: STAGGER_ITEM,
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade',
  customVariants,
  delay = 0,
  duration,
  triggerOnce = true,
  threshold = 0.1,
  className = '',
  as = 'div',
  initial = 'hidden',
  animate,
  exit,
  whileHover,
  whileTap,
  style,
  onAnimationComplete,
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Get the appropriate variants
  const variants = customVariants || animationVariants[animation];

  // Create viewport configuration for scroll-triggered animations
  const viewport = {
    once: triggerOnce,
    amount: threshold,
  };

  // Build transition object safely
  const transition = {
    delay,
    ...(duration && { duration }),
  };

  // If reduced motion is preferred, show content immediately without animation
  if (prefersReducedMotion) {
    switch (as) {
      case 'section':
        return <section className={className} style={style}>{children}</section>;
      case 'article':
        return <article className={className} style={style}>{children}</article>;
      case 'header':
        return <header className={className} style={style}>{children}</header>;
      case 'footer':
        return <footer className={className} style={style}>{children}</footer>;
      case 'main':
        return <main className={className} style={style}>{children}</main>;
      case 'aside':
        return <aside className={className} style={style}>{children}</aside>;
      default:
        return <div className={className} style={style}>{children}</div>;
    }
  }

  // Use specific motion components based on the 'as' prop
  const getMotionComponent = () => {
    switch (as) {
      case 'section': return motion.section;
      case 'article': return motion.article;
      case 'header': return motion.header;
      case 'footer': return motion.footer;
      case 'main': return motion.main;
      case 'aside': return motion.aside;
      default: return motion.div;
    }
  };

  const MotionComponent = getMotionComponent();

  const motionProps = {
    className,
    style,
    variants,
    initial,
    animate,
    exit,
    whileHover,
    whileTap,
    whileInView: "visible" as const,
    viewport,
    transition,
    onAnimationComplete,
  };

  return (
    <MotionComponent {...motionProps}>
      {children}
    </MotionComponent>
  );
};

export default AnimatedElement; 