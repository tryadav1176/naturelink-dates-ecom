import React, { useState } from 'react';
import { ShoppingCart, Check, MapPin } from 'lucide-react';
import { ProductImage } from './ProductImage.jsx';
import { formatINR } from '../utils/formatters.js';
import { useCart } from '../hooks/useCart.js';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(250);
  const [isAdded, setIsAdded] = useState(false);

  const currentPrice = product.prices[selectedWeight] || product.prices[250];

  const handleAdd = () => {
    addToCart(product, selectedWeight);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  const weights = [250, 500, 1000];

  return (
    <div className="bg-white rounded-2xl border border-salt-dark/80 overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Header & Image */}
        <div className="relative">
          <ProductImage
            src={product.image}
            alt={product.name}
            name={product.name}
            category={product.category}
            aspect="aspect-[4/3]"
          />

          {/* Optional Tag Badge */}
          {product.tag && (
            <div className="absolute top-3 left-3 bg-date-brown/90 backdrop-blur-md text-honey-gold font-bold text-xs px-2.5 py-1 rounded-full border border-honey-gold/30 shadow-sm">
              {product.tag}
            </div>
          )}

          {/* Category Chip */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-palm-green font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-palm-green/20">
            {product.category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          {/* Origin */}
          <div className="flex items-center text-xs font-medium text-palm-green space-x-1">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{product.origin}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-date-brown group-hover:text-palm-green transition-colors leading-tight">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-date-brown/75 line-clamp-2 leading-relaxed h-9">
            {product.description}
          </p>

          {/* Weight Selector */}
          <div className="pt-2">
            <label className="block text-[11px] font-semibold text-date-brown/80 mb-1.5 uppercase tracking-wider">
              Select Pack Size:
            </label>
            <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label={`Select weight for ${product.name}`}>
              {weights.map((weight) => {
                const label = weight >= 1000 ? '1 kg' : `${weight} g`;
                const isSelected = selectedWeight === weight;
                return (
                  <button
                    key={weight}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedWeight(weight)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                      isSelected
                        ? 'bg-palm-green text-salt border-palm-green shadow-xs'
                        : 'bg-salt/40 text-date-brown/80 border-salt-dark hover:bg-salt hover:border-palm-green/40'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Price & Add to Cart */}
      <div className="p-5 pt-0 border-t border-salt/60 mt-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-date-brown/60 block">
            Price ({selectedWeight >= 1000 ? '1 kg' : `${selectedWeight}g`})
          </span>
          <span className="font-serif text-2xl font-bold text-date-brown">
            {formatINR(currentPrice)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all focus-visible:ring-2 focus-visible:ring-honey-gold ${
            isAdded
              ? 'bg-palm-green-dark text-honey-gold'
              : 'bg-honey-gold hover:bg-honey-gold-light text-date-brown shadow-sm hover:shadow-gold'
          }`}
          aria-label={`Add ${product.name} ${selectedWeight}g to cart for ${formatINR(currentPrice)}`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
