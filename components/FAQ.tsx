import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: "Quando será a abertura da próxima turma?", answer: "As inscrições abrem em breve. Fique atenta ao seu e-mail e grupo VIP para garantir sua vaga com condição especial." },
  { question: "Por quanto tempo terei acesso?", answer: "Você terá acesso ao conteúdo gravado por 1 ano, permitindo que você revisite as aulas e práticas sempre que sentir necessidade de se reconectar." },
  { question: "Como funciona no dia a dia?", answer: "O método é desenhado para mulheres ocupadas. Todos os dias você recebe uma pílula de conteúdo (áudio ou vídeo curto) e uma micro-tarefa prática que leva menos de 15 minutos." },
  { question: "Onde acontece o desafio?", answer: "Todo o conteúdo é entregue em uma área de membros exclusiva e intuitiva, e a interação da comunidade acontece em um grupo fechado e monitorado no WhatsApp." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-iza-dark relative">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Accordion List */}
        <div className="w-full">
          <h2 className="font-sans font-bold text-3xl text-gray-100 mb-12 tracking-tight">
            Perguntas Frequentes:
          </h2>
          
          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-iza-gold/20 first:border-t">
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center text-left py-6 group transition-all"
                >
                  <span className="text-gray-200 text-lg font-light group-hover:text-iza-gold transition-colors pr-8">
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-300 text-iza-gold/70 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown strokeWidth={1.5} size={24} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 font-light leading-relaxed text-base pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Badge Box */}
        <div className="w-full flex justify-center lg:justify-end">
           <div className="w-full max-w-[400px] aspect-square border border-iza-gold/20 rounded-lg flex items-center justify-center bg-[#020d0a] relative">
              
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                 {/* Top text */}
                 <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-sans mb-1">
                    A ARTE DE
                 </p>
                 
                 {/* Middle Text - Solid Gold */}
                 <h3 className="font-serif text-4xl md:text-5xl text-iza-gold leading-none">
                    SER OUVIDA
                 </h3>

                 {/* Bottom Text - Mixed styles */}
                 <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-iza-gold/50 border-b border-iza-gold/30 text-sm pb-1 tracking-widest">EM</span>
                    <span 
                      className="font-serif text-4xl md:text-5xl text-transparent leading-none"
                      style={{
                        WebkitTextStroke: '1px #a3966a', // Gold outline
                      }}
                    >
                      9 MINUTOS
                    </span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};