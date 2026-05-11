import React from 'react';

const Button = ({ children, variant = 'primary', icon: Icon, className = '' }) => {
  const variants = {
    primary: 'bg-emerald-primary text-white hover:bg-opacity-90 shadow-lg shadow-emerald-primary/20 hover:-translate-y-0.5',
    secondary: 'bg-mint-light text-emerald-primary hover:bg-opacity-80',
    outline: 'border-2 border-emerald-primary text-emerald-primary hover:bg-mint-light/30 hover:-translate-y-0.5',
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={18} className="animate-pulse" />}
      {children}
    </button>
  );
};

export default Button;
