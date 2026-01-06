import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'Physics-informed AI for wireless systems',
  'Simulation frameworks for 5G research',
  'OAM multiplexing in turbulent channels',
  'Deep learning for signal recovery',
  'Reinforcement learning for network optimization',
  'Free space optical communications'
];

interface CrypticTextProps {
  className?: string;
}

export function CrypticText({ className = '' }: CrypticTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  // Respect prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  if (prefersReducedMotion) {
    return (
      <p className={`text-sm text-zinc-400 dark:text-zinc-500 max-w-md ${className}`}>
        {phrases[0]}
      </p>
    );
  }
  
  return (
    <div 
      className={`relative h-6 overflow-hidden max-w-md ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute inset-0 text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 transition-colors duration-500"
        >
          <TextReveal text={phrases[currentIndex]} isPaused={isPaused} />
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

interface TextRevealProps {
  text: string;
  isPaused: boolean;
}

function TextReveal({ text }: TextRevealProps) {
  const words = text.split(' ');
  
  return (
    <span className="inline-flex flex-wrap gap-x-1.5">
      {words.map((word: string, wordIndex: number) => (
        <span key={wordIndex} className="inline-flex">
          {word.split('').map((char: string, charIndex: number) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: (wordIndex * 0.08) + (charIndex * 0.03),
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export default CrypticText;