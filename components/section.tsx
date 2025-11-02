import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  noSpacing?: boolean;
}

export function Section({ children, className = '', noSpacing = false }: SectionProps) {
  const spacingClasses = noSpacing ? 'py-0' : 'py-8 sm:py-12 md:py-16 lg:py-20';
  
  return (
    <section className={`${spacingClasses} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
