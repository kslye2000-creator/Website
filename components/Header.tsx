import React from 'react';
import { Icons } from './Icons';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <Icons.Logo className="h-8 w-8 text-emerald-600"/>
          <span className="text-xl font-bold text-slate-900">Strategy Co-Pilot</span>
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          <Button variant="ghost">Watch How It Works</Button>
          <Button variant="primary">Get Started</Button>
        </nav>
      </div>
    </header>
  );
};