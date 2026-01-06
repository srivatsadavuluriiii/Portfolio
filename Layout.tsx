import { ReactNode } from 'react';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import { PageTransition } from './Components/ui/PageTransition';

interface LayoutProps {
  children: ReactNode;
  currentPageName: string;
}

export default function Layout({ children, currentPageName }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        :root {
          --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        body {
          font-family: var(--font-sans);
          font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
        }
        
        ::selection {
          background-color: #18181b;
          color: #ffffff;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #fafafa;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #d4d4d8;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1aa;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
      
      <Header />
      
      <PageTransition key={currentPageName}>
        {children}
      </PageTransition>
      
      <Footer />
    </div>
  );
}

