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

const selectedProjects = [
  {
    title: 'BeamLabs: Optical Beam Modeling Suite',
    description: 'Object-Oriented MATLAB library to model 14 optical beam types for Quantum Optics and RF communication systems research.',
    role: 'Research Developer',
    year: '2024-2025',
    slug: 'beamlabs',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'OAM-Multiplexed Beam Recovery via Deep Learning',
    description: 'ResNet-18 CNN receiver to recover QPSK symbols from intensity-only optical images, reducing link complexity by 40%.',
    role: 'Research Engineer',
    year: '2025',
    slug: 'oam-beam-recovery',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'RL Framework for 5G-beyond Networks',
    description: 'Physics-informed DQN agent with 52-dimensional action space for optimal OAM mode switching, achieving sub-0.1ms latency.',
    role: 'Research Engineer',
    year: '2025-Present',
    slug: 'rl-5g-framework',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: '6G OAM-THz Channel Dataset',
    description: 'Published first physics-based dataset with 250k+ samples for OAM beam communications at sub-Terahertz frequencies.',
    role: 'Research Contributor',
    year: '2025',
    slug: '6g-dataset',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80'
  }
];

export default function Home() {
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
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Research Engineer & Developer
            </p>
          </motion.div>
          
          <InevitableText />
          
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
            className="mt-6 text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Exploring Free Space Optical communications and 5G-beyond networks through AI-assisted signal processing and simulation frameworks.
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
                className="group h-12 px-6 rounded-none border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300"
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
          className="h-px bg-zinc-200"
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
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">
                Selected Work
              </p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">
                Recent Projects
              </h2>
            </div>
            <Link 
              to={createPageUrl('Work')}
              className="mt-4 md:mt-0 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300 group flex items-center"
            >
              View all projects
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.slug} {...project} index={index} />
          ))}
        </div>
      </Section>
      
      {/* Philosophy Section */}
      <Section size="large" background="white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Philosophy
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-900 leading-[1.3]">
              Research that bridges simulation and reality. Every algorithm, every model, every dataset serves to advance wireless communications.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              I believe in physics-informed approaches that respect the underlying principles of electromagnetic propagation. Every simulation, every neural network, every optimization serves to solve real-world problems in optical and wireless communications.
            </p>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div 
          className="h-px bg-zinc-200"
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
              Let's advance wireless communications together.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
              Open to research collaborations, internships, and opportunities in FSO communications and 5G-beyond networks.
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