import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/Components/ui/Section';
import { ProjectCard, ProjectListItem } from '@/Components/ui/ProjectCard';
import { FadeIn } from '@/Components/ui/AnimatedText';
import { LayoutGrid, List } from 'lucide-react';

const projects = [
  {
    title: 'BeamLabs: Optical Light Beam Modeling Suite',
    description: 'Designed an Object-Oriented MATLAB library to model 14 optical beam types for ongoing and future research in Quantum Optics and RF communication systems.',
    role: 'Research Developer',
    year: 'Dec 2024 — Mar 2025',
    outcome: 'Improved eigen-mode analysis speeds by 30%',
    slug: 'beamlabs',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'OAM-Multiplexed Beam Recovery via Turbulent Channel using Deep Learning',
    description: 'Developed a ResNet-18 CNN receiver to recover QPSK symbols from intensity-only optical images, aiming to eliminate the need for wavefront sensors, lowering link complexity by 40%.',
    role: 'Research Engineer',
    year: 'Jan 2025 — Aug 2025',
    outcome: 'Reduced Bit Error Rate (BER) by 20%',
    slug: 'oam-beam-recovery',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Python-informed Mode Switching RL Framework for 5G-beyond Network Targets',
    description: 'Developed a physics-aware RL framework complying with 5G-beyond KPI targets, optimally switching OAM modes to current environment and signal conditions, achieving sub-0.1 ms latency.',
    role: 'Research Engineer',
    year: 'Oct 2025 — Present',
    outcome: '80+% prediction accuracy across scenarios',
    slug: 'rl-5g-framework',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: '6G OAM-THz Channel Dataset: ITU-R IMT-2030 Compliant',
    description: 'Published the first physics-based dataset with 250k+ realistic samples for OAM beam communications at sub-Terahertz/mmWave frequencies (300-600 GHz).',
    role: 'Research Contributor',
    year: 'Aug 2025',
    outcome: 'Published on IEEE Dataport',
    slug: '6g-dataset',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80'
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
            Research projects advancing optical and wireless communications.
          </motion.h1>
          
          <motion.p
            className="mt-6 text-lg text-zinc-500 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Each project represents a commitment to advancing wireless communications through physics-informed research and AI-assisted signal processing.
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
                href="mailto:connect.davuluri@gmail.com"
                className="border-b border-zinc-300 hover:border-zinc-900 transition-colors duration-300"
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