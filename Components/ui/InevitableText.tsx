import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const lines = [
  'I craft digital',
  'experiences that',
  'feel inevitable.'
];

// Character pool for brief scrambling
const scrambleChars = 'abcdefghijklmnopqrstuvwxyz';

interface InevitableTextProps {
  className?: string;
}

export function InevitableText({ className = '' }: InevitableTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-10%' });
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  useEffect(() => {
    // STATE 1: First view - clean entrance
    if (isInView && !hasBeenViewed) {
      setHasBeenViewed(true);
      return;
    }
    
    // STATE 3: Re-entry - trigger cryptic reveal
    if (isInView && hasBeenViewed && !prefersReducedMotion) {
      setIsScrambling(true);
      
      // Fast scramble duration: 280ms
      const timer = setTimeout(() => {
        setIsScrambling(false);
      }, 280);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, hasBeenViewed, prefersReducedMotion]);
  
  // Reduced motion: simple fade
  if (prefersReducedMotion) {
    return (
      <h1 ref={ref} className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.1] ${className}`}>
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h1>
    );
  }
  
  return (
    <h1 
      ref={ref}
      className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.1] ${className}`}
    >
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          <span className="inline-block">
            {line.split('').map((char, charIndex) => (
              <LineChar
                key={`${lineIndex}-${charIndex}`}
                char={char}
                isScrambling={isScrambling}
                hasBeenViewed={hasBeenViewed}
                delay={charIndex * 0.02}
                lineIndex={lineIndex}
              />
            ))}
          </span>
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h1>
  );
}

interface LineCharProps {
  char: string;
  isScrambling: boolean;
  hasBeenViewed: boolean;
  delay: number;
  lineIndex: number;
}

function LineChar({ char, isScrambling, hasBeenViewed, delay, lineIndex }: LineCharProps) {
  const [displayChar, setDisplayChar] = useState(char);
  
  useEffect(() => {
    if (!isScrambling) {
      setDisplayChar(char);
      return;
    }
    
    // Fast character scramble cycle
    let iterations = 0;
    const maxIterations = 3; // Brief scramble
    
    const interval = setInterval(() => {
      if (iterations >= maxIterations) {
        setDisplayChar(char);
        clearInterval(interval);
        return;
      }
      
      // Scramble: use similar char or random nearby
      if (char !== ' ') {
        const random = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        setDisplayChar(random);
      }
      
      iterations++;
    }, 35); // Fast tick: 35ms per frame
    
    return () => clearInterval(interval);
  }, [isScrambling, char]);
  
  // Initial load animation (STATE 1)
  if (!hasBeenViewed) {
    return (
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: delay + (lineIndex * 0.1),
          ease: [0.22, 1, 0.36, 1]
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    );
  }
  
  // Cryptic re-entry animation (STATE 3)
  if (isScrambling) {
    return (
      <motion.span
        animate={{
          opacity: [1, 0.92, 0.96, 1],
          x: [0, Math.random() * 2 - 1, Math.random() * 2 - 1, 0],
          y: [0, Math.random() * 1.5 - 0.75, Math.random() * 1.5 - 0.75, 0]
        }}
        transition={{
          duration: 0.28,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 0.3, 0.7, 1]
        }}
        className="inline-block text-zinc-400"
      >
        {displayChar}
      </motion.span>
    );
  }
  
  // Stable state
  return (
    <motion.span
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block text-zinc-900"
    >
      {displayChar}
    </motion.span>
  );
}

export default InevitableText;