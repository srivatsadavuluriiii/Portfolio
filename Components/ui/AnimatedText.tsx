import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

export function AnimatedText({ 
  children, 
  className = '', 
  delay = 0,
  as = 'p'
}: AnimatedTextProps) {
  const Component = (as === 'p' ? motion.p : 
                     as === 'h1' ? motion.h1 :
                     as === 'h2' ? motion.h2 :
                     as === 'h3' ? motion.h3 :
                     as === 'h4' ? motion.h4 :
                     as === 'h5' ? motion.h5 :
                     as === 'h6' ? motion.h6 :
                     as === 'span' ? motion.span :
                     motion.div);
  
  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface AnimatedTextStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
}

export function AnimatedTextStagger({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  baseDelay = 0
}: AnimatedTextStaggerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: baseDelay + (index * staggerDelay),
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealText({ children, className = '', delay = 0 }: RevealTextProps) {
  return (
    <span className="overflow-hidden inline-block">
      <motion.span
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeIn({ children, className = '', delay = 0, direction = 'up' }: FadeInProps) {
  const directions: Record<'up' | 'down' | 'left' | 'right', { y: number; x: number }> = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}