import React from 'react';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Steps } from './components/Steps';
import { Audience } from './components/Audience';
import { Explanation } from './components/Explanation';
import { UrgencyBanner } from './components/UrgencyBanner';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-iza-dark font-sans text-white overflow-x-hidden selection:bg-iza-gold selection:text-iza-dark">
      <Hero />
      <Marquee />
      <Steps />
      <Audience />
      <Explanation />
      <UrgencyBanner />
      <About />
      <Marquee />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;