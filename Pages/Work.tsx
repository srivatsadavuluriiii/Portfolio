import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/Components/ui/Section';
import { ProjectCard, ProjectListItem } from '@/Components/ui/ProjectCard';
import { FadeIn } from '@/Components/ui/AnimatedText';
import { LayoutGrid, List } from 'lucide-react';
import { useResume } from '@/contexts/ResumeContext';
import { getResumeData } from '@/data/resumeData';

export default function Work() {
  const [viewMode, setViewMode] = useState('grid');
  const { resumeType } = useResume();
  const resumeData = getResumeData(resumeType);
  const projects = resumeData.projects;
  
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <Section size="default" background="white">
        <div className="max-w-3xl">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Work
          </motion.p>
          
          <motion.h1
            key={`${resumeType}-work-title`}
            className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {resumeType === 'wireless'
              ? 'Research projects advancing optical and wireless communications.'
              : 'Projects building intelligent systems and scalable solutions.'}
          </motion.h1>
          
          <motion.p
            key={`${resumeType}-work-description`}
            className="mt-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {resumeType === 'wireless'
              ? 'Each project represents a commitment to advancing wireless communications through physics-informed research and AI-assisted signal processing.'
              : 'Each project represents a commitment to building intelligent systems through machine learning, software engineering, and innovative technology solutions.'}
          </motion.p>
        </div>
      </Section>
      
      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div 
          className="h-px bg-zinc-200 dark:bg-zinc-800"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      {/* Projects */}
      <Section size="large" background="light">
        {/* View Toggle */}
        <FadeIn>
          <div className="flex items-center justify-end mb-10 gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors duration-200 ${
                viewMode === 'grid' ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors duration-200 ${
                viewMode === 'list' ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>
        
        {/* Grid View */}
        {viewMode === 'grid' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={`${resumeType}-${project.slug}`} {...project} index={index} />
            ))}
          </motion.div>
        )}
        
        {/* List View */}
        {viewMode === 'list' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {projects.map((project, index) => (
              <ProjectListItem key={`${resumeType}-${project.slug}`} {...project} index={index} />
            ))}
          </motion.div>
        )}
      </Section>
      
      {/* More Work CTA */}
      <Section size="default" background="white">
        <div className="text-center">
          <FadeIn>
            <p className="text-zinc-500 dark:text-zinc-400 mb-4">
              Looking for something specific?
            </p>
            <p className="text-lg text-zinc-900 dark:text-zinc-100">
              <a 
                href="mailto:connect.davuluri@gmail.com"
                className="border-b border-zinc-300 dark:border-zinc-600 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors duration-300"
              >
                Get in touch
              </a>
              {' '}to discuss research opportunities or collaborations.
            </p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}