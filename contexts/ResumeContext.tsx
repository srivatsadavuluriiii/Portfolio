import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type ResumeType = 'wireless' | 'ai-ml';

interface ResumeContextType {
  resumeType: ResumeType;
  setResumeType: (type: ResumeType) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeType] = useState<ResumeType>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('resumeType');
      if (stored === 'wireless' || stored === 'ai-ml') {
        return stored as ResumeType;
      }
    }
    return 'wireless'; // Default to wireless
  });

  const handleSetResumeType = useCallback((type: ResumeType) => {
    // Prevent rapid successive changes
    if (type === resumeType) return;
    
    // Save to localStorage and reload page for clean state
    if (typeof window !== 'undefined') {
      localStorage.setItem('resumeType', type);
      window.location.reload();
    }
  }, [resumeType]);

  return (
    <ResumeContext.Provider value={{ resumeType, setResumeType: handleSetResumeType }}>
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

