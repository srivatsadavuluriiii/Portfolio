import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark';
  size?: 'small' | 'default' | 'large';
}

export function Section({ 
  children, 
  className = '',
  background = 'white',
  size = 'default'
}: SectionProps) {
  const backgrounds: Record<'white' | 'light' | 'dark', string> = {
    white: 'bg-white dark:bg-zinc-950',
    light: 'bg-zinc-50 dark:bg-zinc-900',
    dark: 'bg-zinc-950 text-white'
  };
  
  const sizes: Record<'small' | 'default' | 'large', string> = {
    small: 'py-16 md:py-20',
    default: 'py-20 md:py-28',
    large: 'py-24 md:py-36'
  };
  
  return (
    <section className={cn(backgrounds[background], sizes[size], className)}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle,
  align = 'left',
  className = ''
}: SectionHeaderProps) {
  const alignments: Record<'left' | 'center' | 'right', string> = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right'
  };
  
  return (
    <div className={cn('mb-12 md:mb-16 max-w-2xl', alignments[align], className)}>
      {subtitle && (
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
    </div>
  );
}