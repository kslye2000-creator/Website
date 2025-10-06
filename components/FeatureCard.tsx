import React from 'react';

interface FeatureCardProps {
  // FIX: Changed icon type from React.ReactNode to React.ReactElement as React.cloneElement requires an element,
  // and the original broader type was causing a TypeScript error.
  icon: React.ReactElement;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200">
      <div className="flex justify-center items-center mb-6 h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto">
        {/* FIX: Removed the type assertion 'as React.ReactElement' as it's no longer necessary with the corrected prop type. */}
        {React.cloneElement(icon, { className: 'h-7 w-7' })}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-7">{description}</p>
    </div>
  );
};
