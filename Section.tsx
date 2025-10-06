import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {subtitle && <p className="text-base font-semibold leading-7 text-emerald-600">{subtitle}</p>}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};