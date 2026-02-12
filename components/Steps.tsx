import React from 'react';
import { Button } from './Button';

const steps = [
  {
    num: '1.',
    title: 'Desacelerar',
    highlight: 'sem culpa',
    desc: 'Um espaço onde você se desconecta do caos externo para conectar com você mesma. É aqui que o piloto automático é desligado. Onde você entende que cuidar de você não é egoísmo.'
  },
  {
    num: '2.',
    title: 'Consciência sobre',
    highlight: 'sua vida',
    desc: 'Você traz consciência sobre todas as áreas que você deixou de lado: saúde, relacionamentos, família, fé, você mesma. No Desafio de 21 Dias, você não precisa performar.'
  },
  {
    num: '3.',
    title: 'Tarefas práticas que',
    highlight: 'transformam',
    desc: 'Você não vai passar horas ouvindo teoria. São vídeos curtos com tarefas simples mas que você não faz porque está acelerada demais. Porque transformação acontece na prática!'
  }
];

export const Steps: React.FC = () => {
  return (
    <section className="py-24 bg-iza-dark text-center relative overflow-hidden">
      {/* Subtle bottom glow to match reference */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-iza-cta/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-iza-gold mb-2 font-medium opacity-90">Como funciona o método</h2>
        <h3 className="font-bold text-2xl md:text-3xl text-gray-200 mb-20">
          <span className="text-iza-gold">C.L.A.R.E</span> <span className="text-blue-100">em apenas 3 etapas</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center relative group">
              {/* Connector Lines between numbers (Desktop only) - Shortened */}
              {idx < steps.length - 1 && (
                 <div className="hidden md:block absolute top-[2.5rem] -right-[16%] w-1/3 h-[1px] bg-iza-gold/30"></div>
              )}
              
              <div className="text-7xl font-serif text-iza-gold font-bold mb-6 tracking-tighter opacity-90 group-hover:scale-110 transition-transform duration-500">{step.num}</div>
              
              <h4 className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
                {step.title} <span className="text-iza-gold font-normal block md:inline">{step.highlight}</span>
              </h4>
              
              <p className="text-gray-400 text-sm leading-7 max-w-xs mx-auto font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button text="QUERO DESACELERAR AGORA" />
        </div>
      </div>
    </section>
  );
};