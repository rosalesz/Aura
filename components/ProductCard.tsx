import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2 py-1 bg-black/70 text-[10px] font-mono text-white border border-white/10">
            {product.tag}
          </span>
        </div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        {/* Quick Add Overlay */}
        <button className="absolute bottom-0 right-0 p-4 bg-white text-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 font-mono text-xs font-bold">
          AGREGAR <Plus size={14} />
        </button>
      </div>

      {/* Details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">{product.name}</h3>
          <ArrowUpRight className="text-slate-500 group-hover:text-cyan-400 transition-colors" size={20} />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="text-[10px] text-slate-400 font-mono border border-slate-700 px-1 rounded">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-end border-t border-slate-800 pt-4 mt-2">
          <div>
            <p className="text-[10px] text-slate-500 font-mono mb-1">PRECIO</p>
            <p className="text-cyan-400 font-mono text-sm tracking-wider">
              {product.price.toLocaleString()} {product.currency}
            </p>
          </div>
          <p className="text-[10px] text-slate-600 font-mono">
            SKU: {product.id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;