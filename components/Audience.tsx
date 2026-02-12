import React from 'react';
import { ArrowDown } from 'lucide-react';

const cards = [
  {
    title: 'Você vive no',
    highlight: 'piloto automático',
    desc: 'Acorda cansada, dorme exausta. Trabalho, filhos, casa, casamento... tudo é prioridade, menos você. Você corre o dia inteiro mas sente que não sai do lugar.',
    footer: 'Quer desacelerar sem culpa e finalmente respirar, mas não sabe por onde começar.'
  },
  {
    title: 'Começa empolgada,',
    highlight: 'mas sempre desiste',
    desc: 'Você já tentou mudar. Comprou cursos, baixou apps, prometeu pra si mesma que "dessa vez vai ser diferente".',
    footer: 'Mas a vida acelera, você se perde no meio do caminho e aquela voz na sua cabeça diz: "você nunca termina nada".'
  },
  {
    title: 'Não sobra tempo',
    highlight: 'nem pra respirar',
    desc: '15 minutos com você? Parece impossível. Todo mundo precisa de você agora: os filhos, o marido, a casa. Você é a última da fila.',
    footer: 'Mas no fundo, você sabe que essa exaustão tem nome: você está se abandonando. E você não quer mais viver assim.'
  },
  {
    title: 'Sua fé está',
    highlight: 'distante',
    desc: 'Você perdeu a conexão com Deus. A oração virou obrigação mecânica ou simplesmente parou. Você sente um vazio espiritual, mas está ocupada demais pra parar e buscar.',
    footer: 'Você quer 2026 diferente: com intimidade real. Você sabe que precisa desse reencontro — com Deus e com você mesma.'
  }
];

export const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-iza-dark relative border-y border-[#1c4a3a]">
      {/* Decorative center icon - Down Arrow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
         <div className="bg-iza-gold rounded-full p-2 border-[6px] border-iza-dark flex items-center justify-center shadow-lg">
            <ArrowDown className="text-iza-dark w-6 h-6" strokeWidth={3} />
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-center text-3xl md:text-5xl text-gray-200 mb-16 font-medium tracking-tight">
          O Desafio de 21 Dias <span className="text-iza-gold font-bold opacity-80">“é para você se...”</span>
        </h2>

        {/* Grid Container matching the screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="h-full"
            >
              <div className="border border-iza-gold/20 rounded-lg p-8 h-full flex flex-col justify-between hover:border-iza-gold/50 transition-colors duration-300 bg-[#020d0a]/50 backdrop-blur-sm">
                
                {/* Header */}
                <div className="mb-6 text-center">
                  <h3 className="text-gray-200 text-xl leading-tight font-medium">
                    {card.title} <br/>
                    <span className="text-iza-gold-text font-bold text-2xl">{card.highlight}</span>
                  </h3>
                </div>

                {/* Body */}
                <div className="flex-grow">
                  <p className="text-gray-400 text-sm italic leading-relaxed text-center mb-8">
                    {card.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-iza-gold/10">
                  <p className="text-gray-300 text-sm font-light text-center">
                    {card.footer}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};