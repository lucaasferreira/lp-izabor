import React from 'react';
import { Button } from './Button';

export const Explanation: React.FC = () => {
  return (
    <section className="py-24 bg-iza-dark text-left relative">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: The Logo Box */}
        <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[450px] aspect-square border border-white/10 rounded-xl bg-[#020d0a] flex items-center justify-center p-8 shadow-2xl relative overflow-hidden group">
                {/* Subtle internal glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-iza-green/20 blur-[100px] rounded-full"></div>
                
                <div className="text-center relative z-10 transform transition-transform duration-700 group-hover:scale-105 select-none">
                    <h3 className="font-serif text-5xl md:text-6xl text-iza-gold opacity-90 tracking-tight leading-none mb-2">
                        DESAFIO
                    </h3>
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-[1px] w-6 bg-iza-gold/30"></span>
                        <p className="font-serif text-2xl md:text-3xl text-iza-gold opacity-80 italic">DE 21 DIAS</p>
                        <span className="h-[1px] w-6 bg-iza-gold/30"></span>
                    </div>
                    <p className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-[0.4em] mt-3 font-medium">
                        COM IZABOR CRUZ
                    </p>
                </div>
            </div>
        </div>

        {/* Right: Text Content */}
        <div className="space-y-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-iza-gold font-medium leading-tight mb-6">
                  Por que o Método PAUSA funciona quando tudo que você já tentou falhou?
              </h2>

              <p className="text-gray-200 text-lg font-light leading-relaxed">
                  Porque pela primeira vez você não está sendo cobrada a performar. Você está sendo convidada a <span className="font-bold text-white">PARAR.</span>
              </p>
            </div>

            <div className="space-y-8">
                <div className="space-y-2">
                    <h4 className="text-iza-gold font-bold text-lg">Não é teoria. É PRÁTICA. <span className="text-gray-300 font-light">Você não vai passar horas assistindo aulas. São vídeos curtos de 5-10 minutos + uma tarefa simples por dia. Coisas que você SABE que precisava fazer, mas estava acelerada demais para executar. Como se desconectar por 15 minutos, escrever sobre você, olhar pra dentro sem julgamento.</span></h4>
                </div>

                <div className="space-y-2">
                    <h4 className="text-iza-gold font-bold text-lg">Você não está sozinha nessa jornada. <span className="text-gray-300 font-light">São apenas 50 mulheres por turma. Você compartilha suas dores, suas vitórias, seus medos. E eu te acompanho TODOS OS DIAS. Não é um grupo abandonado. É uma comunidade real onde você é VISTA, OUVIDA e ACOMPANHADA. Porque transformação acontece quando você se sente apoiada.</span></h4>
                </div>

                <div className="space-y-2">
                    <h4 className="text-iza-gold font-bold text-lg">21 dias que criam um novo padrão. <span className="text-gray-300 font-light">A ciência comprova: 21 dias é o tempo necessário para criar um novo hábito. Mas aqui não é sobre criar mais uma obrigação na sua rotina. É sobre DESAPRENDER a aceleração e REAPRENDER a viver com consciência, propósito e conexão — com você, com Deus, com quem você ama.</span></h4>
                </div>
            </div>

            <div className="pt-4">
                <Button text="QUERO INICIAR MEU RECOMEÇO AGORA" className="md:w-auto w-full" />
            </div>
        </div>
      </div>
    </section>
  );
};