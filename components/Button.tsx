import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-r from-iza-cta to-iza-cta-to hover:from-iza-cta-hover hover:to-iza-cta
        text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-green-900/30
        transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2
        uppercase tracking-widest text-xs md:text-sm border border-white/10
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {text}
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};