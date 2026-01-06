import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  year: string;
  slug: string;
  image?: string;
  index?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  role, 
  year, 
  slug,
  image,
  index = 0 
}: ProjectCardProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <motion.div
      key={`${slug}-${title}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Link to={createPageUrl(`ProjectDetail?slug=${slug}`)}>
        <motion.article 
          className="group cursor-pointer"
          whileHover={!isMobile && !prefersReducedMotion ? { y: -2 } : {}}
          whileTap={isMobile && !prefersReducedMotion ? { scale: 0.98 } : {}}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Image Container */}
          <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 mb-5 overflow-hidden">
            {image ? (
              <motion.img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
                whileHover={!isMobile && !prefersReducedMotion ? { scale: 1.02 } : {}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : (
              <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                <span className="text-zinc-300 dark:text-zinc-600 text-sm tracking-wide">Project Visual</span>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300">
                {title}
              </h3>
              <motion.div
                className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-3 text-xs text-zinc-400 dark:text-zinc-500 pt-1">
              <span>{role}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span>{year}</span>
            </div>
          </div>
          
          {/* Underline Animation */}
          <div className="mt-4 h-px bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

interface ProjectListItemProps {
  title: string;
  role: string;
  year: string;
  outcome?: string;
  slug: string;
  index?: number;
}

export function ProjectListItem({ 
  title, 
  role, 
  year, 
  outcome,
  slug,
  index = 0 
}: ProjectListItemProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <motion.div
      key={`${slug}-${title}-list`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-30px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Link to={createPageUrl(`ProjectDetail?slug=${slug}`)}>
        <motion.article 
          className="group py-6 border-b border-zinc-200 dark:border-zinc-800 cursor-pointer"
          whileHover={!isMobile && !prefersReducedMotion ? { x: 4 } : {}}
          whileTap={isMobile && !prefersReducedMotion ? { scale: 0.98 } : {}}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300">
                {title}
              </h3>
              {outcome && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{outcome}</p>
              )}
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-400 dark:text-zinc-500">
              <span>{role}</span>
              <span>{year}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}