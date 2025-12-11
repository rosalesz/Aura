import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product, SectionId } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'CTG-001',
    name: 'Getsemaní Neon',
    price: 120000,
    currency: 'COP',
    image: 'https://picsum.photos/400/500?random=10',
    tag: 'MÁS VENDIDO',
    features: ['Resistente al Agua', 'Reflectivo']
  },
  {
    id: 'CTG-002',
    name: 'Walled City Noir',
    price: 145000,
    currency: 'COP',
    image: 'https://picsum.photos/400/500?random=11',
    tag: 'NUEVO DROP',
    features: ['Gamuza Premium', 'Ajustable']
  },
  {
    id: 'CTG-003',
    name: 'Rosario Azure',
    price: 110000,
    currency: 'COP',
    image: 'https://picsum.photos/400/500?random=12',
    tag: 'LIMITADO',
    features: ['Transpirable', 'Ligera']
  },
  {
    id: 'CTG-004',
    name: 'Bocagrande Sun',
    price: 135000,
    currency: 'COP',
    image: 'https://picsum.photos/400/500?random=13',
    tag: 'CLÁSICO',
    features: ['Protección UV', 'Secado Rápido']
  }
];

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('TODO');
  const categories = ['TODO', 'NOVEDADES', 'FIRMA', 'LIMITADO'];

  return (
    <section id={SectionId.COLLECTION} className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">LA COLECCIÓN</h2>
            <p className="text-slate-400 font-mono text-sm">DISEÑADO EN CARTAGENA. USADO EN EL MUNDO.</p>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono font-bold px-4 py-2 border transition-all ${
                  activeCategory === cat 
                    ? 'bg-cyan-400 text-black border-cyan-400' 
                    : 'text-slate-400 border-slate-700 hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;