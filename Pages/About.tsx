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
    role: 'Senior Product Designer',
    company: 'Tech Company',
    period: '2022 — Present',
    description: 'Leading design for core product experiences, managing a design system, and mentoring junior designers.'
  },
  {
    role: 'Product Designer',
    company: 'Design Agency',
    period: '2019 — 2022',
    description: 'Worked with clients across fintech, healthcare, and e-commerce to deliver end-to-end product design solutions.'
  },
  {
    role: 'UX Designer',
    company: 'Startup',
    period: '2017 — 2019',
    description: 'First design hire. Built design processes from scratch and shipped multiple product launches.'
  }
];

const skills = [
  { category: 'Design', items: ['Product Design', 'Design Systems', 'Brand Identity', 'Visual Design'] },
  { category: 'Research', items: ['User Interviews', 'Usability Testing', 'Data Analysis', 'Competitive Analysis'] },
  { category: 'Tools', items: ['Figma', 'Framer', 'Principle', 'Adobe Suite'] },
  { category: 'Development', items: ['HTML/CSS', 'React', 'Tailwind', 'Git'] }
];

const principles = [
  {
    number: '01',
    title: 'Clarity over cleverness',
    description: 'The best design solutions are often the simplest. I prioritize clear communication over showing off.'
  },
  {
    number: '02',
    title: 'Systems thinking',
    description: 'Every design decision ripples outward. I consider how individual elements work within the larger ecosystem.'
  },
  {
    number: '03',
    title: 'Evidence-based design',
    description: 'Intuition informed by data. I combine user research with design instinct to make confident decisions.'
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
            <div className="aspect-[4/5] bg-zinc-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80"
                alt="Portrait"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <div className="lg:col-span-7">
            <motion.p
              className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.p>
            
            <motion.h1
              className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 leading-[1.2] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              I'm a designer who believes great products come from understanding people first and pixels second.
            </motion.h1>
            
            <motion.div
              className="space-y-6 text-zinc-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>
                With over seven years of experience in product design, I've worked with startups, agencies, and enterprise companies to create digital experiences that are both beautiful and functional.
              </p>
              <p>
                My approach combines strategic thinking with craft. I believe design should solve real problems, not just look good in a portfolio. Every project starts with understanding the 'why' before moving to the 'how'.
              </p>
              <p>
                When I'm not designing, you'll find me reading about behavioral psychology, experimenting with generative art, or exploring hiking trails in the Pacific Northwest.
              </p>
            </motion.div>
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
      
      {/* Experience */}
      <Section size="large" background="light">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">
            Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-12">
            Where I've worked
          </h2>
        </FadeIn>
        
        <div className="space-y-0">
          {experience.map((job, index) => (
            <FadeIn key={job.company} delay={index * 0.1}>
              <div className="py-8 border-b border-zinc-200 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-zinc-900">{job.role}</h3>
                    <p className="text-zinc-500">{job.company}</p>
                  </div>
                  <p className="text-sm text-zinc-400 md:text-right">{job.period}</p>
                </div>
                <p className="text-zinc-600 max-w-2xl">{job.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
      
      {/* Skills */}
      <Section size="large" background="white">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">
            Skills
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-12">
            What I do
          </h2>
        </FadeIn>
        
        <Accordion type="single" collapsible className="w-full">
          {skills.map((skill, index) => (
            <FadeIn key={skill.category} delay={index * 0.1}>
              <AccordionItem value={skill.category} className="border-zinc-200">
                <AccordionTrigger className="text-lg font-medium text-zinc-900 hover:no-underline py-6">
                  {skill.category}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item) => (
                      <span 
                        key={item}
                        className="px-4 py-2 text-sm text-zinc-600 border border-zinc-200 rounded-full"
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
          className="h-px bg-zinc-200"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      {/* Principles */}
      <Section size="large" background="light">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">
            Philosophy
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-12">
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
                <span className="text-xs text-zinc-400 font-mono">{principle.number}</span>
                <h3 className="text-lg font-medium text-zinc-900">{principle.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}