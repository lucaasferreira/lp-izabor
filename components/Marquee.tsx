import React from 'react';

export const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#586248] via-[#7a8563] to-[#586248] py-4 overflow-hidden whitespace-nowrap border-y border-[#3d4533]">
      <div className="inline-block animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-[#0d140f] font-serif font-medium text-sm tracking-[0.25em] mx-12">
            IZABOR CRUZ
          </span>
        ))}
      </div>
    </div>
  );
};