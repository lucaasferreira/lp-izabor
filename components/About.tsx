import React, { useState } from 'react';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-24 bg-iza-dark text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-0 w-1/2 h-full -translate-y-1/2 bg-gradient-to-l from-iza-green/20 to-transparent pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Image with Badge */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          {/* Main Image Container */}
          <div className="relative w-full max-w-[400px]">
             {/* Portrait with gradient mask at bottom to blend into dark background */}
             <div className="relative rounded-t-[100px] rounded-b-lg overflow-hidden md:overflow-visible">
                 <img 
                   src={imgError ? "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=688&auto=format&fit=crop" : "https://drive.google.com/uc?export=view&id=14vDzxZtqJ6lR1Dlt1xXq_nM9YBDu28HE"}
                   onError={() => setImgError(true)}
                   alt="Izabor Cruz" 
                   className="w-full h-auto object-cover filter brightness-[0.95] contrast-[1.05]"
                   style={{
                     maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                   }}
                 />
             </div>
             
             {/* The Badge Overlay */}
             <div className="absolute top-2/3 -left-4 md:-left-12 transform -translate-y-1/2 w-36 h-36 rounded-full border border-iza-gold/30 bg-gradient-to-br from-iza-green/80 to-iza-dark/80 backdrop-blur-sm flex items-center justify-center p-3 shadow-2xl">
                 <div className="w-full h-full rounded-full border-[0.5px] border-iza-gold/50 flex flex-col items-center justify-center text-center">
                    <p className="text-[0.55rem] uppercase tracking-widest text-iza-gold mb-1 opacity-70 font-sans">A arte de</p>
                    <p className="font-serif text-iza-gold text-lg leading-none tracking-wide">SER OUVIDA</p>
                    <p className="font-serif text-iza-gold/80 text-[0.65rem] italic mt-1 tracking-widest uppercase">EM 15 MINUTOS</p>
                 </div>
             </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 space-y-8 text-left relative z-10">
          <div>
            <p className="text-sm font-medium text-blue-200/80 tracking-wide mb-2">Sobre a autora</p>
            
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
              <span className="text-[#586248] font-bold block">Prazer, eu sou a</span>
              <span className="text-iza-gold font-bold">Izabor Cruz.</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed max-w-lg">
            <p>
              Meu propósito é ajudar mulheres a desacelerarem e se reconectarem com elas mesmas.
            </p>

            <p>
              Há anos faço esse desafio porque acredito que a transformação acontece quando você PARA e olha pra dentro.
            </p>

            <p>
              Criei turmas pequenas (máximo 50 mulheres) porque eu quero te acompanhar de verdade. Quero ver você compartilhando seus desafios, suas vitórias, suas dores.
            </p>

            <p>
              E eu vou estar com você nesses 21 dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};