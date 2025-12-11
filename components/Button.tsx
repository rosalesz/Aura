import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-6 py-3 font-mono text-sm font-bold tracking-wider transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";
  
  const variants = {
    primary: "bg-white text-black hover:bg-cyan-400 hover:text-black",
    secondary: "bg-slate-800 text-white border border-slate-700 hover:border-cyan-400 hover:text-cyan-400",
    outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Glitch/Hover Effect Layer */}
      <div className="absolute inset-0 z-0 bg-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
};

export default Button;