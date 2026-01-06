import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/Components/ui/Section';
import { ProjectCard, ProjectListItem } from '@/Components/ui/ProjectCard';
import { FadeIn } from '@/Components/ui/AnimatedText';
import { LayoutGrid, List } from 'lucide-react';

const projects = [
  {
    title: 'Meridian Design System',
    description: 'A comprehensive design system for enterprise applications, focusing on accessibility and scalability.',
    role: 'Lead Designer',
    year: '2024',
    outcome: 'Reduced design-to-development time by 60%',
    slug: 'meridian-design-system',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Luminary Dashboard',
    description: 'Analytics platform redesign resulting in 40% improvement in user task completion rates.',
    role: 'Product Designer',
    year: '2024',
    outcome: '40% improvement in task completion',
    slug: 'luminary-dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Vertex Mobile App',
    description: 'End-to-end mobile experience design for a fintech startup, from concept to launch.',
    role: 'UX Designer',
    year: '2023',
    outcome: '100k+ downloads in first month',
    slug: 'vertex-mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Onyx Brand Identity',
    description: 'Complete brand identity and digital presence for a luxury interior design studio.',
    role: 'Brand Designer',
    year: '2023',
    outcome: 'Featured in Design Week Magazine',
    slug: 'onyx-brand',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Prism Analytics',
    description: 'Data visualization platform helping teams make sense of complex datasets.',
    role: 'UX/UI Designer',
    year: '2023',
    outcome: 'Acquired by larger analytics firm',
    slug: 'prism-analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Horizon E-commerce',
    description: 'Complete redesign of a fashion e-commerce platform focused on conversion optimization.',
    role: 'Product Designer',
    year: '2022',
    outcome: '28% increase in conversion rate',
    slug: 'horizon-ecommerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80'
  }
];

export default function Work() {
  const [viewMode, setViewMode] = useState('grid');
  
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <Section size="default" background="white">
        <div className="max-w-3xl">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Work
          </motion.p>
          
          <motion.h1
            className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected projects showcasing depth over breadth.
          </motion.h1>
          
          <motion.p
            className="mt-6 text-lg text-zinc-500 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Each project represents a commitment to solving real problems through thoughtful design and meticulous execution.
          </motion.p>
        </div>
      </Section>
      
      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div 
          className="h-px bg-zinc-200"
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
                viewMode === 'grid' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors duration-200 ${
                viewMode === 'list' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
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
              <ProjectCard key={project.slug} {...project} index={index} />
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
              <ProjectListItem key={project.slug} {...project} index={index} />
            ))}
          </motion.div>
        )}
      </Section>
      
      {/* More Work CTA */}
      <Section size="default" background="white">
        <div className="text-center">
          <FadeIn>
            <p className="text-zinc-500 mb-4">
              Looking for something specific?
            </p>
            <p className="text-lg text-zinc-900">
              <a 
                href="mailto:hello@portfolio.com"
                className="border-b border-zinc-300 hover:border-zinc-900 transition-colors duration-300"
              >
                Get in touch
              </a>
              {' '}to discuss your project.
            </p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}