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
    title: 'Meridian Design System',
    description: 'A comprehensive design system for enterprise applications, focusing on accessibility and scalability.',
    role: 'Lead Designer',
    year: '2024',
    slug: 'meridian-design-system',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Luminary Dashboard',
    description: 'Analytics platform redesign resulting in 40% improvement in user task completion rates.',
    role: 'Product Designer',
    year: '2024',
    slug: 'luminary-dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Vertex Mobile App',
    description: 'End-to-end mobile experience design for a fintech startup, from concept to launch.',
    role: 'UX Designer',
    year: '2023',
    slug: 'vertex-mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80'
  },
  {
    title: 'Onyx Brand Identity',
    description: 'Complete brand identity and digital presence for a luxury interior design studio.',
    role: 'Brand Designer',
    year: '2023',
    slug: 'onyx-brand',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop&q=80'
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
              Designer & Developer
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
            Design systems, product interfaces, and brand identities built with precision and purpose.
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
              Good design is invisible. It doesn't demand attention—it earns trust through clarity, consistency, and craft.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              I believe in stripping away the unnecessary until only the essential remains. Every pixel, every interaction, every word serves a purpose. The result is work that feels effortless to use, even when it took tremendous effort to create.
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
              Let's build something meaningful.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
              Currently available for select projects and collaborations.
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