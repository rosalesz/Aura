import React from 'react';
import { ArrowDown, Globe } from 'lucide-react';
import Button from './Button';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToCollection = () => {
    document.getElementById(SectionId.COLLECTION)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            CARTAGENA // COLOMBIA
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter text-white">
            HEADWEAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              FUTURISTA
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed border-l-2 border-slate-700 pl-6">
            Redefiniendo el streetwear en el Caribe. Materiales premium, estética digital y un ajuste diseñado para el trópico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={scrollToCollection}>
              EXPLORAR DROPS
            </Button>
            <Button variant="outline">
              <Globe size={16} />
              VISITAR TIENDA
            </Button>
          </div>
        </div>

        {/* Visual Element / Product Highlight */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
            <img 
              src="https://picsum.photos/800/800?random=1" 
              alt="Hero Cap" 
              className="w-full h-full object-cover mix-blend-overlay opacity-80 hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay UI Elements */}
            <div className="absolute top-6 right-6 text-right">
              <p className="text-xs font-mono text-cyan-400">EDICIÓN LIMITADA</p>
              <p className="text-2xl font-bold text-white tracking-tighter">GÉNESIS.01</p>
            </div>

            <div className="absolute bottom-6 left-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <p className="text-[10px] text-slate-400 font-mono mb-1">OFERTA ACTUAL</p>
              <p className="text-lg font-mono text-white">120.000 COP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;