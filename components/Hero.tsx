import React, { useState } from 'react';
import { Button } from './Button';
import { Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-[#020d0a] overflow-hidden flex flex-col lg:flex-row">
      
      {/* Background Texture & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}></div>
        
        {/* Soft Ambient Glow (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0d3329] opacity-20 blur-[120px] rounded-full"></div>
      </div>

      {/* Left Content */}
      <div className="w-full lg:w-[55%] relative z-10 px-6 md:pl-20 md:pr-12 py-12 lg:py-0 flex flex-col justify-center min-h-screen">
        
        {/* Logo Lockup */}
        <div className="mb-12 select-none relative">
           {/* DESAFIO */}
           <h1 className="font-serif text-[#a3966a] text-[4rem] md:text-[5.5rem] leading-[0.85] tracking-tight">
             DESAFIO
           </h1>
           
           <div className="flex items-center gap-4 mt-1 md:mt-2">
             {/* Line */}
             <div className="h-[1px] w-8 md:w-14 bg-gray-500/40 mt-2"></div>
             
             {/* DE */}
             <div className="flex flex-col justify-center pt-2">
                 <span className="text-[#6b7280] text-sm md:text-base font-sans tracking-[0.2em] uppercase font-light">
                   DE
                 </span>
                 {/* Optional: Add a small line under DE to match some luxury styles if needed, but keeping simple for now */}
             </div>

             {/* 21 DIAS */}
             <h1 className="font-serif text-[#a3966a] text-[4rem] md:text-[5.5rem] leading-[0.85] tracking-tight ml-1">
               21 DIAS
             </h1>
           </div>

           {/* Subtitle */}
           <p className="text-[#52525b] text-[0.65rem] md:text-xs tracking-[0.4em] uppercase mt-5 ml-1 font-medium pl-1">
             COM IZABOR CRUZ
           </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex text-[#a3966a]">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
          </div>
          <p className="text-gray-400 text-xs tracking-wide font-medium">
            Avaliado com 4,9 estrelas por + de 4.200 pessoas.
          </p>
        </div>

        {/* Headline */}
        <h2 className="font-sans text-4xl md:text-[3.2rem] leading-[1.1] text-gray-100 font-bold mb-6 max-w-2xl tracking-tight">
          A vida está passando e você <br />
          <span className="text-[#7d7554]">está apenas sobrevivendo <br /> a ela?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg font-light leading-relaxed max-w-lg mb-10">
          Descubra o Método PAUSA: 21 dias para sair do piloto automático e voltar a VIVER com propósito.
        </p>

        {/* Form */}
        <div className="w-full max-w-[440px]">
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Seu nome" 
              className="w-full bg-transparent border border-[#23332e] rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:border-[#a3966a]/50 focus:bg-[#061410] focus:outline-none transition-all text-sm font-light"
            />
            <input 
              type="email" 
              placeholder="Melhor e-mail" 
              className="w-full bg-transparent border border-[#23332e] rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:border-[#a3966a]/50 focus:bg-[#061410] focus:outline-none transition-all text-sm font-light"
            />
            <input 
              type="tel" 
              placeholder="WhatsApp+DDD" 
              className="w-full bg-transparent border border-[#23332e] rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:border-[#a3966a]/50 focus:bg-[#061410] focus:outline-none transition-all text-sm font-light"
            />
            <div className="pt-3">
              <Button 
                text="QUERO DESACELERAR AGORA" 
                fullWidth 
                className="!bg-gradient-to-r !from-[#046e46] !to-[#046e46] !hover:brightness-110 !border-none !shadow-none !rounded-full !py-4 !text-[0.8rem] !font-bold !tracking-widest"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="w-full lg:w-[45%] relative h-[500px] lg:h-auto bg-[#0d211a] border-l border-[#1a2e26] overflow-hidden">
         
         {/* Background Pattern (Existing geometric pattern) */}
         <div className="absolute inset-0 opacity-[0.07]" style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm-40-8c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM20 20c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40-8c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
         }}></div>

         {/* Image */}
         <div className="absolute bottom-0 left-0 right-0 top-10 flex items-end justify-center">
             <img 
               src={imgError ? "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=688&auto=format&fit=crop" : "https://drive.google.com/uc?export=view&id=14vDzxZtqJ6lR1Dlt1xXq_nM9YBDu28HE"}
               onError={() => setImgError(true)}
               alt="Izabor Cruz" 
               className="h-full w-full object-cover object-top filter brightness-[0.9] contrast-[1.05]"
               style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
               }}
             />
         </div>

         {/* Badge - Positioned on right side of image area */}
         <div className="absolute top-[35%] right-6 lg:-right-6 lg:left-auto lg:translate-x-[-50%] z-20">
             <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full border border-[#a3966a]/40 bg-[#0d211a]/80 backdrop-blur-sm flex items-center justify-center p-2 shadow-2xl">
                 <div className="w-full h-full rounded-full border border-[#a3966a]/60 flex flex-col items-center justify-center text-center">
                    <p className="text-[0.55rem] lg:text-[0.65rem] uppercase tracking-[0.2em] text-[#a3966a] mb-1 font-sans opacity-80">A ARTE DE</p>
                    <p className="font-serif text-[#a3966a] text-xl lg:text-2xl leading-none tracking-wide">SER OUVIDA</p>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-[0.5rem] lg:text-[0.6rem] text-[#a3966a] uppercase tracking-wider border-b border-[#a3966a]/30 pb-0.5">EM</span>
                        <span className="font-serif text-transparent text-xl lg:text-3xl leading-none" style={{ WebkitTextStroke: '1px #a3966a'}}>9 MINUTOS</span>
                    </div>
                 </div>
             </div>
         </div>
      </div>
    </section>
  );
};