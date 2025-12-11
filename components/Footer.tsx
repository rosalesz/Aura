import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tighter text-white">
            AURA <span className="text-cyan-400">///</span> CTG
          </h2>
          <p className="text-[10px] text-slate-500 font-mono mt-1">© 2024 TODOS LOS DERECHOS RESERVADOS</p>
        </div>

        <div className="flex gap-6">
          {['TÉRMINOS', 'PRIVACIDAD', 'ENVÍOS', 'DEVOLUCIONES'].map(link => (
            <a key={link} href="#" className="text-[10px] text-slate-500 hover:text-white font-mono transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;