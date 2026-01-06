import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Character pool for scrambling
const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const defaultLines = [
  'Interested in optical',
  'communications and',
  'beyond 5G networks.'
];

interface InevitableTextProps {
  lines?: string[];
  className?: string;
  speed?: number;
  maxIterations?: number;
}

export function InevitableText({ 
  lines = defaultLines,
  className = '', 
  speed = 30,
  maxIterations = 8,
  ...props 
}: InevitableTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  // Remove 'once: true' to allow re-animation when lines change
  const isInView = useInView(ref, { margin: '-10%', once: false });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Create a stable key based on lines content to force re-render when lines change
  const linesKey = lines.join('|');

  // Reduced motion: simple display
  if (prefersReducedMotion) {
    return (
      <h1 
        ref={ref} 
        key={linesKey}
        className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1] ${className}`}
        {...props}
      >
        {lines.map((line, i) => (
          <span key={`${linesKey}-${i}`} className="block">
            {line}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <h1 
      ref={ref}
      key={linesKey}
      className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1] ${className}`}
    >
      {lines.map((line, lineIndex) => (
        <span key={`${linesKey}-line-${lineIndex}`} className="block whitespace-pre">
          {line.split('').map((char, charIndex) => (
            <CharReveal
              key={`${linesKey}-${lineIndex}-${charIndex}-${char}`}
              char={char}
              delay={charIndex * 0.03 + (lineIndex * 0.15)}
              isInView={isInView}
              speed={speed}
              maxIterations={maxIterations}
            />
          ))}
        </span>
      ))}
    </h1>
  );
}

interface CharRevealProps {
  char: string;
  delay: number;
  isInView: boolean;
  speed: number;
  maxIterations: number;
}

function CharReveal({ 
  char, 
  delay, 
  isInView, 
  speed, 
  maxIterations
}: CharRevealProps) {
  const [displayChar, setDisplayChar] = useState<string>(char);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const hasCompletedRef = useRef<boolean>(false);
  const prevCharRef = useRef<string>(char);

  useEffect(() => {
    // Reset if character changed (for resume switching)
    if (prevCharRef.current !== char) {
      hasCompletedRef.current = false;
      setDisplayChar(char);
      setIsScrambling(false);
      prevCharRef.current = char;
    }

    if (!isInView || hasCompletedRef.current) return;

    // Initial scramble animation
    setIsScrambling(true);
    let iteration = 0;
    let timeoutId: number;

    const scramble = () => {
      if (char === ' ') {
        setDisplayChar(' ');
        setIsScrambling(false);
        hasCompletedRef.current = true;
        return;
      }

      if (iteration < maxIterations) {
        // Scramble with random characters
        const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        setDisplayChar(randomChar);
        iteration++;
        timeoutId = window.setTimeout(scramble, speed);
      } else {
        // Reveal the actual character
        setDisplayChar(char);
        setIsScrambling(false);
        hasCompletedRef.current = true;
      }
    };

    // Start animation after delay
    timeoutId = window.setTimeout(scramble, delay * 1000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, char, delay, speed, maxIterations]);

  return (
    <motion.span
      className={char === ' ' ? 'inline-block w-2' : 'inline-block'}
      initial={{ opacity: 0, y: 8 }}
      animate={{ 
        opacity: isScrambling ? [0.4, 0.8, 0.4] : 1,
        y: 0
      }}
      transition={{
        opacity: {
          duration: speed / 1000,
          repeat: isScrambling ? Infinity : 0,
          ease: 'easeInOut'
        },
        y: {
          duration: 0.4,
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
    >
      {displayChar}
    </motion.span>
  );
}

export default InevitableText;
