import React, { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  disabled?: boolean;
}

export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  disabled = false 
}: ScrollRevealProps) {
  const ref = useRef(null);
  // Remove 'once: true' to allow re-animation when content changes
  const isInView = useInView(ref, { once: false, margin: '-50px' });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  if (disabled || prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      ref={ref}
      key={typeof children === 'string' ? children : JSON.stringify(children)}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function ScrollRevealStagger({ 
  children, 
  className = '', 
  staggerDelay = 0.08 
}: ScrollRevealStaggerProps) {
  const ref = useRef(null);
  // Remove 'once: true' to allow re-animation when content changes
  const isInView = useInView(ref, { once: false, margin: '-50px' });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }
  
  // Create a key based on children to force re-render when content changes
  const childrenKey = React.Children.count(children);
  
  return (
    <div ref={ref} key={childrenKey} className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={`${childrenKey}-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export default ScrollReveal;