import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'LinkedIn', url: '#' },
  { name: 'GitHub', url: '#' },
  { name: 'Twitter', url: '#' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left - Name & Copyright */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-zinc-900">Portfolio</p>
            <p className="text-xs text-zinc-400">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          {/* Right - Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Bottom Divider Animation */}
        <motion.div 
          className="mt-12 h-px bg-zinc-100"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Minimal tagline */}
        <p className="mt-8 text-xs text-zinc-300 text-center">
          Crafted with intention.
        </p>
      </div>
    </footer>
  );
}
