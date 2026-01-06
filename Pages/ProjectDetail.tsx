import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Section } from '@/Components/ui/Section';
import { FadeIn } from '@/Components/ui/AnimatedText';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useResume } from '@/contexts/ResumeContext';
import { getResumeData } from '@/data/resumeData';

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

type ProjectSlug = 'beamlabs' | 'oam-beam-recovery' | 'rl-5g-framework' | '6g-dataset';

const projectsData: Record<ProjectSlug, ProjectData> = {
  'beamlabs': {
    title: 'BeamLabs: Optical Light Beam Modeling Suite',
    role: 'Research Developer',
    year: '2024-2025',
    client: 'Research Project',
    duration: 'Dec 2024 — Mar 2025',
    heroImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80',
    overview: {
      problem: 'Existing optical beam modeling tools lacked comprehensive coverage of beam types needed for Quantum Optics and RF communication systems research, with slow eigen-mode analysis.',
      solution: 'Designed an Object-Oriented MATLAB library to model 14 optical beam types. Implemented custom numerical solvers for Mathieu functions and Pearcey integrals, incorporating literature-accurate physical modeling for Gouy phase and M² beam quality factors.',
      impact: 'Improved eigen-mode analysis speeds by 30%, enabling faster research iterations. Accurate simulation of aperture-loss and timing-jitter for ongoing and future research projects.'
    },
    process: [
      {
        title: 'Literature Review & Requirements',
        description: 'Analyzed existing beam modeling approaches and identified 14 critical beam types needed for Quantum Optics and RF communication research.'
      },
      {
        title: 'Numerical Solver Development',
        description: 'Implemented custom numerical solvers for Mathieu functions and Pearcey integrals, optimizing computational efficiency.'
      },
      {
        title: 'Physical Modeling',
        description: 'Incorporated literature-accurate physical modeling for Gouy phase and M² beam quality factors to simulate aperture-loss and timing-jitter accurately.'
      },
      {
        title: 'Optimization & Validation',
        description: 'Benchmarked performance improvements and validated accuracy against published research results.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80'
    ],
    reflection: 'This project reinforced the importance of building reusable research tools. The Object-Oriented approach not only improved performance but also made the library extensible for future beam types and research applications.'
  },
  'oam-beam-recovery': {
    title: 'OAM-Multiplexed Beam Recovery via Turbulent Channel using Deep Learning',
    role: 'Research Engineer',
    year: '2025',
    client: 'Research Project',
    duration: 'Jan 2025 — Aug 2025',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    overview: {
      problem: 'Traditional OAM beam recovery systems require expensive wavefront sensors, increasing link complexity and cost. Strong atmospheric turbulence causes significant phase distortion, degrading Bit Error Rate (BER) performance.',
      solution: 'Developed a ResNet-18 CNN receiver to recover QPSK symbols from intensity-only optical images. Simulated literature-accurate turbulence layers using Split-Step Fourier Method for Laguerre-Gaussian beam propagation through turbulence-strength parameter sweep.',
      impact: 'Eliminated need for wavefront sensors, lowering link complexity by 40%. Achieved 20% reduction in Bit Error Rate (BER) through phase distortion compensation in strong turbulence conditions.'
    },
    process: [
      {
        title: 'Turbulence Simulation',
        description: 'Simulated literature-accurate turbulence layers using Split-Step Fourier Method for Laguerre-Gaussian beam propagation, sweeping turbulence-strength parameter from Cn² ≈ 10⁻¹⁸ to 10⁻¹³.'
      },
      {
        title: 'Dataset Generation',
        description: 'Generated comprehensive training datasets with various turbulence conditions, SNR levels, and modal crosstalk scenarios.'
      },
      {
        title: 'Deep Learning Architecture',
        description: 'Designed and trained ResNet-18 CNN architecture optimized for intensity-only image input to recover QPSK symbols.'
      },
      {
        title: 'Benchmarking & Analysis',
        description: 'Benchmarked against classical MMSE equalizers in strong turbulence, analyzing BER performance and robustness against modal crosstalk and SNR variations.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80'
    ],
    reflection: 'This project demonstrated the power of combining physics-informed simulation with deep learning. The key insight was that intensity-only detection could be sufficient when paired with the right neural architecture, opening new possibilities for simplified FSO link designs.'
  },
  'rl-5g-framework': {
    title: 'Python-informed Mode Switching RL Framework for 5G-beyond Network Targets',
    role: 'Research Engineer',
    year: '2025-Present',
    client: 'Research Project',
    duration: 'Oct 2025 — Present',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    overview: {
      problem: '5G-beyond networks require dynamic optimization of OAM modes based on environment and signal conditions, but traditional approaches struggle to meet KPI targets for latency and throughput efficiency.',
      solution: 'Developed a physics-aware RL framework complying with KPI targets, optimally switching OAM modes to current environment and signal conditions. Investigated Physics-Informed DQN agent with 52-dimensional action space, integrating ITU-R/IEEE standards for THz propagation (26.5-300 GHz) and channel capacity.',
      impact: 'Achieved sub-0.1 ms latency while maximizing throughput efficiency. Currently achieving 80+% prediction accuracy across indoor and outdoor propagation scenarios. Exploring transfer learning to reduce training complexity by 60% for lossless compliance.'
    },
    process: [
      {
        title: 'Environment Design',
        description: 'Designed a Gymnasium-compatible RL environment for real-time KPI target monitoring, incorporating ITU-R/IEEE standards for THz propagation and channel capacity modeling.'
      },
      {
        title: 'Physics-Informed DQN',
        description: 'Developed Physics-Informed DQN agent with 52-dimensional action space, integrating physical constraints and propagation models into the learning process.'
      },
      {
        title: 'Training & Optimization',
        description: 'Trained agent across diverse indoor and outdoor propagation scenarios, optimizing for sub-0.1 ms latency and maximum throughput efficiency.'
      },
      {
        title: 'Transfer Learning Exploration',
        description: 'Investigating transfer learning approaches to bridge simulation-to-reality gaps, reducing training complexity by 60% while maintaining lossless compliance.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80'
    ],
    reflection: 'This ongoing project represents the intersection of reinforcement learning and wireless communications. The challenge isn\'t just achieving good performance—it\'s ensuring the learned policies respect physical constraints and can generalize from simulation to real-world deployment.'
  },
  '6g-dataset': {
    title: '6G OAM-THz Channel Dataset: ITU-R IMT-2030 Compliant',
    role: 'Research Contributor',
    year: '2025',
    client: 'IEEE Dataport Publication',
    duration: 'Aug 2025',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    overview: {
      problem: 'Lack of comprehensive, physics-based datasets for OAM beam communications at sub-Terahertz/mmWave frequencies (300-600 GHz) that meet beyond 5G specifications and support Deep Reinforcement Learning research.',
      solution: 'Published the first physics-based dataset with 250k+ realistic samples for OAM beam communications. Simulated 33 physics parameters including atmospheric turbulence and hardware impairments to meet specifications and ITU-R IMT-2030 compliance.',
      impact: 'Dataset published on IEEE Dataport (DOI: 10.21227/ej85-xp25) and TechRxiv. Validated on machine learning tasks achieving sub-80% prediction accuracy for throughput, latency, and energy efficiency. Established benchmark for Deep Reinforcement Learning algorithms in dynamic environments.'
    },
    process: [
      {
        title: 'Physics Simulation Framework',
        description: 'Developed comprehensive simulation framework incorporating 33 physics parameters including atmospheric turbulence, hardware impairments, and propagation characteristics.'
      },
      {
        title: 'Dataset Generation',
        description: 'Generated 250k+ realistic samples covering diverse scenarios at sub-Terahertz/mmWave frequencies (300-600 GHz), ensuring ITU-R IMT-2030 compliance.'
      },
      {
        title: 'Validation & Benchmarking',
        description: 'Validated dataset on machine learning tasks for predicting throughput, latency, and energy efficiency, achieving sub-80% prediction accuracy.'
      },
      {
        title: 'Publication & Documentation',
        description: 'Published dataset on IEEE Dataport and TechRxiv with comprehensive documentation, establishing benchmark for Deep Reinforcement Learning research in wireless networks.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80'
    ],
    reflection: 'Creating this dataset required balancing physical accuracy with computational feasibility. The result is a resource that enables reproducible research in beyond 5G communications while respecting the underlying physics of electromagnetic propagation.'
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
  const { resumeType } = useResume();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug') || 'default';
  
  // Get resume data and find project - use useMemo to recalculate when resumeType or slug changes
  const project: ProjectData = useMemo(() => {
    const resumeData = getResumeData(resumeType);
    const resumeProject = resumeData.projects.find(p => p.slug === slug);
    
    if (resumeProject && resumeProject.overview) {
      return {
        title: resumeProject.title,
        role: resumeProject.role,
        year: resumeProject.year,
        client: resumeProject.client || 'Project',
        duration: resumeProject.duration || resumeProject.year,
        heroImage: resumeProject.heroImage || resumeProject.image || 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&auto=format&fit=crop&q=80',
        overview: resumeProject.overview,
        process: resumeProject.process || [],
        images: resumeProject.images || [],
        reflection: resumeProject.reflection || 'This project represents a significant contribution to the field.',
      };
    }
    
    // Fallback to legacy projectsData (for backward compatibility)
    if (slug in projectsData) {
      return projectsData[slug as ProjectSlug];
    }
    
    return defaultProject;
  }, [resumeType, slug]);
  
  return (
    <div className="pt-16 md:pt-20">
      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6">
        <Link 
          to={createPageUrl('Work')}
          className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Work
        </Link>
      </div>
      
      {/* Hero */}
      <Section size="default" background="white">
        <motion.div
          key={`${resumeType}-${slug}-hero`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
            {project.title}
          </h1>
          
          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 mb-1">Role</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-100">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 mb-1">Organization</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-100">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 mb-1">Duration</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-100">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 mb-1">Year</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-100">{project.year}</p>
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
        <div className="aspect-[16/9] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
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
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">
              Overview
            </p>
          </FadeIn>
          
          <div className="space-y-12">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">The Problem</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.overview.problem}
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">The Solution</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.overview.solution}
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">The Impact</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
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
          className="h-px bg-zinc-200 dark:bg-zinc-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      {/* Process */}
      <Section size="large" background="light">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">
            Process
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
            How we got there
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {project.process.map((step: ProjectProcess, index: number) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {step.title}
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed pl-8">
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
                <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
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
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">
              Reflection
            </p>
            <blockquote className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light italic">
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
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
          >
            ← All Projects
          </Link>
          <Link 
            to={createPageUrl('Contact')}
            className="text-sm text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-300 flex items-center gap-1"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
}