import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'normal' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'normal', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white disabled:pointer-events-none disabled:opacity-50';

  const variantStyles = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
    secondary: 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-300',
    ghost: 'text-slate-800 hover:bg-slate-100',
  };

  const sizeStyles = {
    normal: 'h-11 px-6 text-sm',
    large: 'h-12 px-8 text-base',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};