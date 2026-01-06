import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/Components/ui/ThemeToggle';
import { ResumeSelector } from '@/Components/ui/ResumeSelector';

const navLinks = [
  { name: 'Work', path: 'Work' },
  { name: 'About', path: 'About' },
  { name: 'Contact', path: 'Contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo & Resume Selector */}
            <div className="flex items-center gap-4">
              <Link to={createPageUrl('Home')} className="relative group">
                <span className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                  Srivatsa Davuluri
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 dark:bg-zinc-100 group-hover:w-full transition-all duration-300" />
              </Link>
              <div className="hidden md:block">
                <ResumeSelector />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={createPageUrl(link.path)}
                  className="relative group text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
                >
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-px bg-zinc-900 dark:bg-zinc-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </Link>
              ))}
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <ResumeSelector />
              <ThemeToggle />
              <button 
                className="p-2 -mr-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                ) : (
                  <Menu className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-zinc-950 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link 
                    to={createPageUrl(link.path)}
                    className="text-2xl font-medium text-zinc-900 dark:text-zinc-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
