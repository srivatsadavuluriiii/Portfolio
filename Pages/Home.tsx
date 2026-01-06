import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/button';
import { Section } from '@/Components/ui/Section';
import { ProjectCard } from '@/Components/ui/ProjectCard';
import { CrypticText } from '@/Components/ui/CrypticText';
import { InevitableText } from '@/Components/ui/InevitableText';
import { ScrollReveal } from '@/Components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useResume } from '@/contexts/ResumeContext';
import { getResumeData } from '@/data/resumeData';

export default function Home() {
  const { resumeType } = useResume();
  // Memoize resumeData to prevent unnecessary recalculations
  const resumeData = useMemo(() => getResumeData(resumeType), [resumeType]);
  const selectedProjects = useMemo(() => resumeData.projects.slice(0, 4), [resumeData.projects]);
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Section size="large" background="white">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">
              {resumeData.hero.tagline}
            </p>
          </motion.div>
          
          <InevitableText lines={resumeData.hero.mainText} />
          
          {/* Cryptic Text - Subtle cognitive hook */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <CrypticText />
          </motion.div>
          
          <motion.p
            key={`${resumeType}-description`}
            className="mt-6 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {resumeData.hero.description}
          </motion.p>
          
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={createPageUrl('Work')}>
              <Button 
                variant="outline" 
                className="group h-12 px-6 rounded-none border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
              >
                View Selected Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
      
      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div 
          className="h-px bg-zinc-200 dark:bg-zinc-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      {/* Selected Work */}
      <Section size="large" background="light">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">
                Selected Work
              </p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                Recent Projects
              </h2>
            </div>
            <Link 
              to={createPageUrl('Work')}
              className="mt-4 md:mt-0 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 group flex items-center"
            >
              View all projects
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={`${resumeType}-${project.slug}`} {...project} index={index} />
          ))}
        </div>
      </Section>
      
      {/* Philosophy Section */}
      <Section size="large" background="white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">
              Philosophy
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.3]">
              {resumeType === 'wireless' 
                ? 'Research that bridges simulation and reality. Every algorithm, every model, every dataset serves to advance wireless communications.'
                : 'Building intelligent systems that solve real-world problems. Every algorithm, every model, every solution serves to advance AI and software engineering.'}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              {resumeType === 'wireless'
                ? 'I believe in physics-informed approaches that respect the underlying principles of electromagnetic propagation. Every simulation, every neural network, every optimization serves to solve real-world problems in optical and wireless communications.'
                : 'I believe in data-driven innovation that combines machine learning with practical applications. Every model, every system, every architecture serves to solve real-world problems through intelligent technology.'}
            </p>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div 
          className="h-px bg-zinc-200 dark:bg-zinc-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      {/* CTA Section */}
      <Section size="large" background="dark">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-6">
              {resumeType === 'wireless'
                ? 'Let\'s advance wireless communications together.'
                : 'Let\'s build intelligent systems together.'}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-zinc-400 dark:text-zinc-500 mb-10 max-w-xl mx-auto">
              {resumeType === 'wireless'
                ? 'Open to research collaborations, internships, and opportunities in FSO communications and 5G-beyond networks.'
                : 'Open to collaborations, internships, and opportunities in Machine Learning, AI, and Software Engineering.'}
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Link to={createPageUrl('Contact')}>
              <Button 
                variant="outline" 
                className="group h-12 px-8 rounded-none border-white text-white hover:bg-white hover:text-zinc-900 transition-all duration-300"
              >
                Start a conversation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}