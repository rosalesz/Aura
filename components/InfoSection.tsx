import React from 'react';
import { MapPin, Clock, Instagram, Send, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { SectionId } from '../types';

const FeatureItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 p-6 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/30 transition-all duration-300">
    <div className="text-cyan-400">{icon}</div>
    <div>
      <h4 className="font-bold text-white font-mono mb-1">{title}</h4>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  </div>
);

const InfoSection: React.FC = () => {
  return (
    <>
      {/* Manifesto / About */}
      <section id={SectionId.ABOUT} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 border-2 border-cyan-400 translate-x-4 translate-y-4" />
              <img 
                // Imagen de Cartagena (calles coloridas)
                src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=800&auto=format&fit=crop" 
                alt="Cartagena Street" 
                className="relative z-10 w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-cyan-400 font-mono text-xs tracking-[0.2em] mb-4 block">EL MANIFIESTO</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                MINIMALISMO <br /> TROPICAL
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Nacida en las vibrantes calles de Cartagena, AURA representa la intersección entre la cultura costera y la estética digital.
                No solo vendemos gorras; curamos la identidad del nómada moderno.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Nuestros diseños son depurados, enfocándose en la silueta, el material y los detalles sutiles que separan la calidad del ruido.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureItem 
                  icon={<ShieldCheck />} 
                  title="MATERIALES PREMIUM" 
                  desc="Obtenidos para durar bajo el sol." 
                />
                <FeatureItem 
                  icon={<Truck />} 
                  title="ENVÍOS GLOBALES" 
                  desc="Desde Cartagena para el mundo." 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id={SectionId.LOCATION} className="bg-black py-24 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-slate-800 pb-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">VISITA EL HQ</h2>
              <p className="text-slate-500 font-mono">PRESENCIA FÍSICA // ALMA DIGITAL</p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-4">
               <a href="#" className="p-3 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                  <Instagram size={20} />
               </a>
               <a href="#" className="p-3 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                  <Send size={20} />
               </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-mono">
            {/* Address */}
            <div className="p-6 bg-slate-900 border border-slate-800">
              <MapPin className="text-cyan-400 mb-4" size={24} />
              <h3 className="text-white font-bold mb-2">UBICACIÓN</h3>
              <p className="text-slate-400 text-sm">Calle San Juan de Dios #3-45</p>
              <p className="text-slate-400 text-sm">Centro Histórico</p>
              <p className="text-slate-400 text-sm">Cartagena, Colombia</p>
            </div>

            {/* Hours */}
            <div className="p-6 bg-slate-900 border border-slate-800">
              <Clock className="text-cyan-400 mb-4" size={24} />
              <h3 className="text-white font-bold mb-2">HORARIOS</h3>
              <p className="text-slate-400 text-sm flex justify-between"><span>LUN - SAB</span> <span>10:00 - 20:00</span></p>
              <p className="text-slate-400 text-sm flex justify-between"><span>DOM</span> <span>12:00 - 18:00</span></p>
            </div>

            {/* Contact */}
            <div className="p-6 bg-slate-900 border border-slate-800">
              <RotateCcw className="text-cyan-400 mb-4" size={24} />
              <h3 className="text-white font-bold mb-2">CONTACTO</h3>
              <p className="text-slate-400 text-sm">+57 300 123 4567</p>
              <p className="text-slate-400 text-sm">hello@aura-ctg.com</p>
              <a href="#" className="text-cyan-400 text-xs mt-2 block hover:underline">INICIAR CHAT DE WHATSAPP &rarr;</a>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="mt-8 w-full h-64 bg-slate-800 border border-slate-700 relative overflow-hidden group">
            <img 
              // Imagen generica de mapa/ciudad aerea oscura
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
              alt="Map Location" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-2 font-mono text-sm hover:bg-white/20 transition-colors">
                ABRIR EN GOOGLE MAPS
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default InfoSection;