import { createContext, useContext, useState, ReactNode, useCallback, useRef, startTransition } from 'react';

export type ResumeType = 'wireless' | 'ai-ml';

interface ResumeContextType {
  resumeType: ResumeType;
  setResumeType: (type: ResumeType) => void;
  isTransitioning: boolean;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeType, setResumeType] = useState<ResumeType>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('resumeType');
      if (stored === 'wireless' || stored === 'ai-ml') {
        return stored as ResumeType;
      }
    }
    return 'wireless'; // Default to wireless
  });
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef<number | null>(null);

  const handleSetResumeType = useCallback((type: ResumeType) => {
    // Prevent rapid successive changes
    if (type === resumeType) return;
    
    // Cancel any pending transition
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    setIsTransitioning(true);
    
    // Use startTransition to mark this as non-urgent, allowing React to batch updates
    startTransition(() => {
      setResumeType(type);
      if (typeof window !== 'undefined') {
        localStorage.setItem('resumeType', type);
      }
    });
    
    // Clear transitioning state after a short delay
    transitionTimeoutRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
      transitionTimeoutRef.current = null;
    }, 300);
  }, [resumeType]);

  return (
    <ResumeContext.Provider value={{ resumeType, setResumeType: handleSetResumeType, isTransitioning }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}

