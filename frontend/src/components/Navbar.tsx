import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  const navLinks = [
    { label: 'COLECCIÓN', id: SectionId.COLLECTION },
    { label: 'MANIFIESTO', id: SectionId.ABOUT },
    { label: 'UBICACIÓN', id: SectionId.LOCATION },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-md border-slate-800 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollTo(SectionId.HERO)}
          className="cursor-pointer group"
        >
          <h1 className="text-2xl font-bold tracking-tighter text-white">
            AURA <span className="text-cyan-400">///</span> CTG
          </h1>
          <p className="text-[10px] font-mono text-slate-400 tracking-[0.2em] group-hover:text-cyan-400 transition-colors">
            EST. 2024
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-mono text-slate-300 hover:text-white transition-colors tracking-widest"
            >
              {link.label}
            </button>
          ))}
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 text-xs font-bold font-mono hover:bg-cyan-400 transition-colors">
            <ShoppingBag size={14} />
            CARRITO (0)
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6 md:hidden animate-fade-in-down">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg font-mono text-slate-300 hover:text-cyan-400 tracking-widest"
            >
              {link.label}
            </button>
          ))}
          <button className="w-full flex justify-center items-center gap-2 bg-white text-black px-4 py-3 text-sm font-bold font-mono">
            <ShoppingBag size={16} />
            VER CARRITO
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;