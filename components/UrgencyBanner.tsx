import React from 'react';

export const UrgencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-iza-red to-red-900 py-6 text-center shadow-inner border-y border-red-950">
      <div className="container mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider drop-shadow-md">
          <span className="text-yellow-400">VAGAS LIMITADAS:</span> APENAS PARA 50 MULHERES
        </h3>
      </div>
    </div>
  );
};