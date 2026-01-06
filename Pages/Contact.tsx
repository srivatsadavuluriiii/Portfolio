import { useState, FormEvent, useCallback, ChangeEvent, memo } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/Components/ui/Section';
import { FadeIn } from '@/Components/ui/AnimatedText';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';

// Memoized input components to prevent unnecessary re-renders
const MemoizedInput = memo(Input);
const MemoizedTextarea = memo(Textarea);

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Individual state handlers - prevents re-render of other fields
  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setName(e.target.value);
  }, []);
  
  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setEmail(e.target.value);
  }, []);
  
  const handleMessageChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    setMessage(e.target.value);
  }, []);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };
  
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <Section size="large" background="white">
        <div className="max-w-3xl">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.p>
          
          <motion.h1
            className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's advance wireless communications research together.
          </motion.h1>
          
          <motion.p
            className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Whether you're interested in research collaboration, have opportunities in FSO communications or 5G-beyond networks, or want to discuss my work—I'd love to connect.
          </motion.p>
          
          {/* Contact Info */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <a 
              href="mailto:connect.davuluri@gmail.com"
              className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 group"
            >
              <Mail className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all duration-300">
                connect.davuluri@gmail.com
              </span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
              <MapPin className="w-5 h-5" />
              <span>Vellore, Tamil Nadu, India</span>
            </div>
          </motion.div>
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
      
      {/* Form Section */}
      <Section size="large" background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <FadeIn>
            <div className="max-w-md">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
                Research & Opportunities
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
                Currently seeking research opportunities, internships, and collaborations in Free Space Optical communications, 5G-beyond networks, and AI-assisted signal processing.
              </p>
              
              <div className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
                <p>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">Response time:</span> Usually within 24-48 hours
                </p>
                <p>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">Status:</span> Final-year undergraduate, graduating Aug 2026
                </p>
                <p>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">Phone:</span> (+91) 9873342537
                </p>
              </div>
            </div>
          </FadeIn>
          
          {/* Right - Form */}
          <FadeIn delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center mb-6">
                  <Send className="w-6 h-6 text-white dark:text-zinc-900" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                  Message sent
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name-input" className="text-sm text-zinc-600 dark:text-zinc-300">Name</label>
                  <MemoizedInput
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className="h-12 rounded-none border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-100 focus:ring-0 transition-colors duration-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-sm text-zinc-600 dark:text-zinc-300">Email</label>
                  <MemoizedInput
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                    className="h-12 rounded-none border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-100 focus:ring-0 transition-colors duration-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message-input" className="text-sm text-zinc-600 dark:text-zinc-300">Message</label>
                  <MemoizedTextarea
                    id="message-input"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Tell me about your research opportunity or collaboration..."
                    required
                    rows={6}
                    className="rounded-none border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-100 focus:ring-0 transition-colors duration-200 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </Section>
      
      {/* Availability Banner */}
      <motion.div 
        className="bg-zinc-900 text-white py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
            Open to research opportunities and collaborations
          </p>
        </div>
      </motion.div>
    </div>
  );
}