import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product, SectionId } from '../types';
import api from '../api/client';

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('TODO');
  const categories = ['TODO', 'NOVEDADES', 'FIRMA', 'LIMITADO'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        // Adapt API response to Frontend Product type if needed
        const mappedProducts = response.data.items.map((p: any) => ({
          id: p.id,
          name: p.name,
          price: p.price,
          currency: 'COP',
          image: p.image_url || 'https://via.placeholder.com/600',
          tag: p.category ? p.category.toUpperCase() : null,
          features: [] // API doesn't have features yet
        }));
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Failed to fetch products", error);
        // Fallback or empty state
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
                className={`text-xs font-mono font-bold px-4 py-2 border transition-all ${activeCategory === cat
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
        {loading ? (
          <div className="text-center text-white font-mono py-12">Cargando colección...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;