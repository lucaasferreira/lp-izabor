import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-iza-dark py-10 text-center border-t border-[#043325]">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        
        {/* Simple centered text */}
        <div className="text-gray-400 text-sm font-light tracking-wide">
          <span>Copyright © Izabor Cruz</span>
          <span className="mx-2">|</span>
          <span className="hover:text-iza-gold cursor-pointer transition-colors">Política de Privacidade</span>
        </div>

      </div>
    </footer>
  );
};