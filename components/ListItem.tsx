import React from 'react';

interface ListItemProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  number?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ title, description, icon, number }) => {
  return (
    <div className="relative flex items-start">
      {icon && <span className="absolute left-0 top-1 h-6 w-6 text-emerald-500">{icon}</span>}
      {number && <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 text-emerald-600 font-bold text-lg mr-6">{number}</span>}
      <div className={icon ? 'pl-9' : ''}>
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        {description && <p className="mt-1 text-slate-600">{description}</p>}
      </div>
    </div>
  );
};