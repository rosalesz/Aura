import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <ProductGrid />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default App;