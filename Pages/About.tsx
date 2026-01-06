import { motion } from 'framer-motion';
import { Section } from '@/Components/ui/Section';
import { FadeIn } from '@/Components/ui/AnimatedText';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/Components/ui/accordion';

const experience = [
  {
    role: 'Senior Software Engineering Intern - iOS Development',
    company: 'Chamberly AB',
    period: 'Dec 2023 — Sep 2024',
    description: 'Optimized app performance and navigation flow, reducing user steps by 27% and latency by 12%. Structured backend systems for reliable Apple Push Notifications, increasing user retention by 22%. Integrated feature updates in an Agile environment, contributing to a 19% increase in Monthly Active Users (MAU).'
  },
  {
    role: 'Summer Research Assistant',
    company: 'VIT Wireless and Communication Lab',
    period: 'May 2025 — July 2025',
    description: 'Validated fundamental Wireless and Mobile Communication (WMC) concepts through lab experiments, focusing on signal propagation models and modulation techniques. Spearheaded research synthesis for optical communication studies with international research teams to align simulation frameworks and validate results.'
  }
];

const skills = [
  { category: 'RF & Simulation Tools', items: ['Cadence Virtuoso', 'Cadence AWR', 'LTSpice', 'ModelSim', 'NI Multisim', 'NetSim', 'Optiwave', 'MATLAB'] },
  { category: 'Languages', items: ['Python', 'Java', 'R', 'MATLAB', 'Embedded C', 'C++', 'Verilog HDL', 'Swift', 'UIKit', 'Assembly'] },
  { category: 'Core Domains', items: ['Free Space Optical Communications (FSO)', '5G-beyond Networks', 'Signal Processing', 'Machine Learning', 'AI', 'Deep Learning'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'Git', 'CI/CD', 'Jenkins', 'AWS', 'GCP'] }
];

const principles = [
  {
    number: '01',
    title: 'Physics-informed approaches',
    description: 'Every simulation and model respects the underlying principles of electromagnetic propagation. I prioritize accuracy and physical realism over computational convenience.'
  },
  {
    number: '02',
    title: 'Simulation-to-reality bridge',
    description: 'Research should translate to practical applications. I focus on reducing the gap between theoretical models and real-world deployment in wireless systems.'
  },
  {
    number: '03',
    title: 'AI-assisted signal processing',
    description: 'Combining deep learning with classical signal processing techniques to solve complex problems in optical and wireless communications.'
  }
];

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <Section size="large" background="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
              <img 
                src="/portrait.png"
                alt="Srivatsa Davuluri"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <div className="lg:col-span-7">
            <motion.p
              className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.p>
            
            <motion.h1
              className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.2] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Final-year Electronics and Communication Engineering student researching Free Space Optical communications and beyond 5G networks.
            </motion.h1>
            
            <motion.div
              className="space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>
                I'm pursuing proficiency in <strong>Free Space Optical (FSO)</strong> communications and <strong>Telecommunication Networks</strong>, currently exploring opportunities in MATLAB/Python-based simulation frameworks using AI-assisted signal processing for OAM-enabled beyond 5G wireless development.
              </p>
              <p>
                My research focuses on physics-informed machine learning approaches that bridge simulation and reality. I develop deep learning models for signal recovery, reinforcement learning frameworks for network optimization, and comprehensive datasets that advance the field of optical and wireless communications.
              </p>
              <p>
                Currently studying at <strong>Vellore Institute of Technology</strong>, expected to graduate in August 2026. I'm eager to learn from industry experts and contribute to solving real-world problems in telecommunications and optical communications.
              </p>
            </motion.div>
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
      
      {/* Experience */}
      <Section size="large" background="light">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">
            Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
            Where I've worked
          </h2>
        </FadeIn>
        
        <div className="space-y-0">
          {experience.map((job, index) => (
            <FadeIn key={job.company} delay={index * 0.1}>
              <div className="py-8 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{job.role}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500 md:text-right">{job.period}</p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl">{job.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
      
      {/* Skills */}
      <Section size="large" background="white">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">
            Skills
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
            What I do
          </h2>
        </FadeIn>
        
        <Accordion type="single" collapsible className="w-full">
          {skills.map((skill, index) => (
            <FadeIn key={skill.category} delay={index * 0.1}>
              <AccordionItem value={skill.category} className="border-zinc-200 dark:border-zinc-800">
                <AccordionTrigger className="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:no-underline py-6">
                  {skill.category}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item) => (
                      <span 
                        key={item}
                        className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </FadeIn>
          ))}
        </Accordion>
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
      
      {/* Principles */}
      <Section size="large" background="light">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">
            Philosophy
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
            How I work
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((principle, index) => (
            <FadeIn key={principle.number} delay={index * 0.15}>
              <motion.div 
                className="space-y-4"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">{principle.number}</span>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{principle.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{principle.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}