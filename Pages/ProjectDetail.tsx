import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section } from '@/Components/ui/Section';
import { FadeIn } from '@/Components/ui/AnimatedText';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface ProjectProcess {
  title: string;
  description: string;
}

interface ProjectOverview {
  problem: string;
  solution: string;
  impact: string;
}

interface ProjectData {
  title: string;
  role: string;
  year: string;
  client: string;
  duration: string;
  heroImage: string;
  overview: ProjectOverview;
  process: ProjectProcess[];
  images: string[];
  reflection: string;
}

type ProjectSlug = 'meridian-design-system' | 'luminary-dashboard';

const projectsData: Record<ProjectSlug, ProjectData> = {
  'meridian-design-system': {
    title: 'Meridian Design System',
    role: 'Lead Designer',
    year: '2024',
    client: 'Enterprise SaaS Company',
    duration: '8 months',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    overview: {
      problem: 'The client had 12 different products with inconsistent UI patterns, causing user confusion and slowing down development cycles.',
      solution: 'Created a unified design system with 200+ components, comprehensive documentation, and a Figma library synced with the development codebase.',
      impact: 'Reduced design-to-development handoff time by 60% and improved user satisfaction scores by 35%.'
    },
    process: [
      {
        title: 'Discovery & Audit',
        description: 'Conducted a comprehensive audit of all 12 products, cataloging 847 unique UI patterns and identifying opportunities for consolidation.'
      },
      {
        title: 'Foundation',
        description: 'Established core design tokens for color, typography, spacing, and elevation. Built a flexible grid system that works across all product contexts.'
      },
      {
        title: 'Component Library',
        description: 'Designed and documented 200+ components with multiple variants, states, and accessibility considerations built-in.'
      },
      {
        title: 'Governance',
        description: 'Created contribution guidelines, review processes, and training materials to ensure the system scales with the organization.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80'
    ],
    reflection: 'This project reinforced my belief that design systems are as much about people as they are about pixels. The technical implementation was straightforward—the real challenge was building consensus across teams and creating a culture of contribution.'
  },
  'luminary-dashboard': {
    title: 'Luminary Dashboard',
    role: 'Product Designer',
    year: '2024',
    client: 'Analytics Startup',
    duration: '4 months',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    overview: {
      problem: 'Users were spending an average of 12 minutes to complete basic reporting tasks due to a cluttered, confusing interface.',
      solution: 'Redesigned the dashboard with a focus on task-based workflows, progressive disclosure, and intelligent defaults.',
      impact: '40% improvement in task completion rates and 60% reduction in support tickets related to UI confusion.'
    },
    process: [
      {
        title: 'User Research',
        description: 'Conducted 24 user interviews and analyzed session recordings to identify pain points and workflow patterns.'
      },
      {
        title: 'Information Architecture',
        description: 'Restructured the navigation and data hierarchy based on actual usage patterns rather than organizational silos.'
      },
      {
        title: 'Prototyping',
        description: 'Created high-fidelity prototypes and tested with users through 3 iteration cycles before development.'
      },
      {
        title: 'Implementation',
        description: 'Worked closely with engineering to ensure the design vision was maintained through development.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop&q=80'
    ],
    reflection: 'Data visualization is about storytelling, not decoration. The most impactful change was removing 70% of the original interface elements—what remained was exactly what users needed.'
  }
};

// Default project for slugs not in database
const defaultProject = {
  title: 'Project Case Study',
  role: 'Designer',
  year: '2024',
  client: 'Various',
  duration: '3-6 months',
  heroImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&auto=format&fit=crop&q=80',
  overview: {
    problem: 'Client needed a comprehensive solution to improve their digital presence and user experience.',
    solution: 'Developed a strategic approach combining research, design, and implementation.',
    impact: 'Achieved measurable improvements in user satisfaction and business metrics.'
  },
  process: [
    { title: 'Research', description: 'Deep dive into user needs, market analysis, and competitive landscape.' },
    { title: 'Strategy', description: 'Defined clear objectives and success metrics aligned with business goals.' },
    { title: 'Design', description: 'Iterative design process with continuous user feedback integration.' },
    { title: 'Delivery', description: 'Comprehensive handoff and support through implementation.' }
  ],
  images: [],
  reflection: 'Every project teaches something new. This one reinforced the importance of starting with clear problem definition.'
};

export default function ProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug') || 'default';
  const project: ProjectData = (slug in projectsData ? projectsData[slug as ProjectSlug] : defaultProject);
  
  return (
    <div className="pt-16 md:pt-20">
      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6">
        <Link 
          to={createPageUrl('Work')}
          className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Work
        </Link>
      </div>
      
      {/* Hero */}
      <Section size="default" background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 mb-8">
            {project.title}
          </h1>
          
          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 mb-1">Role</p>
              <p className="text-sm text-zinc-900">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 mb-1">Client</p>
              <p className="text-sm text-zinc-900">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 mb-1">Duration</p>
              <p className="text-sm text-zinc-900">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 mb-1">Year</p>
              <p className="text-sm text-zinc-900">{project.year}</p>
            </div>
          </div>
        </motion.div>
      </Section>
      
      {/* Hero Image */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="aspect-[16/9] bg-zinc-100 overflow-hidden">
          <img 
            src={project.heroImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      {/* Overview */}
      <Section size="large" background="white">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Overview
            </p>
          </FadeIn>
          
          <div className="space-y-12">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 mb-3">The Problem</h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {project.overview.problem}
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 mb-3">The Solution</h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {project.overview.solution}
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 mb-3">The Impact</h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {project.overview.impact}
                </p>
              </div>
            </FadeIn>
          </div>
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
      
      {/* Process */}
      <Section size="large" background="light">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">
            Process
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-12">
            How we got there
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {project.process.map((step: ProjectProcess, index: number) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-400 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-medium text-zinc-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-zinc-600 leading-relaxed pl-8">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
      
      {/* Images */}
      {project.images.length > 0 && (
        <Section size="large" background="white">
          <div className="space-y-8">
            {project.images.map((image: string, index: number) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="aspect-[16/10] bg-zinc-100 overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${project.title} visual ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      )}
      
      {/* Reflection */}
      <Section size="large" background="light">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Reflection
            </p>
            <blockquote className="text-xl md:text-2xl text-zinc-700 leading-relaxed font-light italic">
              "{project.reflection}"
            </blockquote>
          </FadeIn>
        </div>
      </Section>
      
      {/* Navigation */}
      <Section size="default" background="white">
        <div className="flex justify-between items-center">
          <Link 
            to={createPageUrl('Work')}
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
          >
            ← All Projects
          </Link>
          <Link 
            to={createPageUrl('Contact')}
            className="text-sm text-zinc-900 hover:text-zinc-600 transition-colors duration-300 flex items-center gap-1"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
}