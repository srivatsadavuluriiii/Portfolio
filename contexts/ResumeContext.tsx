import { createContext, useContext, useState, ReactNode } from 'react';

export type ResumeType = 'wireless' | 'ai-ml';

interface ResumeContextType {
  resumeType: ResumeType;
  setResumeType: (type: ResumeType) => void;
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

  const handleSetResumeType = (type: ResumeType) => {
    setResumeType(type);
    if (typeof window !== 'undefined') {
      localStorage.setItem('resumeType', type);
    }
  };

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

