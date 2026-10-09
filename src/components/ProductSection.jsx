import React from 'react';
import { Search, X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products.js';
import { useProductFilters } from '../hooks/useProductFilters.js';
import { ProductCard } from './ProductCard.jsx';
import { formatINR } from '../utils/formatters.js';

export const ProductSection = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    setMaxPrice,
    sortBy,
    setSortBy,
    filteredProducts,
    clearFilters,
    isFiltered,
    filteredCount,
    totalCount,
  } = useProductFilters(PRODUCTS);

  return (
    <section id="shop" className="py-12 sm:py-16 bg-salt min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-palm-green font-bold">
            Curated Palm Selection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-date-brown mt-1">
            Explore Harvest Varieties
          </h2>
          <p className="text-date-brown/70 text-sm sm:text-base mt-2">
            Hand-harvested, pesticide-free dates imported straight from legendary palm oases.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-warm border border-salt-dark mb-8 space-y-4">
          
          {/* Top Row: Search & Category Chips */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-date-brown/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, origin (e.g. Madinah)..."
                className="w-full bg-salt/60 focus:bg-white pl-10 pr-9 py-2.5 rounded-xl border border-salt-dark focus:border-palm-green text-sm text-date-brown placeholder-date-brown/40 outline-none transition-colors"
                aria-label="Search dates by name, origin, or description"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-date-brown/50 hover:text-date-brown p-1 rounded-md"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Chips */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist" aria-label="Product categories">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-date-brown text-salt shadow-xs'
                        : 'bg-salt/60 text-date-brown/80 hover:bg-salt hover:text-date-brown border border-salt-dark'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Bottom Row: Price Slider, Sort, & Reset */}
          <div className="pt-4 border-t border-salt-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Price Slider */}
            <div className="flex items-center space-x-4 max-w-xs w-full">
              <SlidersHorizontal className="w-4 h-4 text-palm-green flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between text-xs font-medium text-date-brown mb-1">
                  <span>Max 250g Price:</span>
                  <span className="font-bold text-palm-green">{formatINR(maxPrice)}</span>
                </div>
                <input
                  type="range"
                  min="180"
                  max="800"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-palm-green h-1.5 bg-salt-dark rounded-lg cursor-pointer"
                  aria-label="Filter products by 250 gram price slider"
                />
              </div>
            </div>

            {/* Sort & Reset */}
            <div className="flex items-center justify-between sm:justify-end space-x-3 w-full sm:w-auto">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <label htmlFor="sort-select" className="text-xs font-semibold text-date-brown/70 whitespace-nowrap">
                  Sort:
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-salt/60 focus:bg-white text-xs font-semibold text-date-brown border border-salt-dark rounded-xl px-3 py-1.5 outline-none focus:border-palm-green cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>

              {/* Clear Filters Button */}
              {isFiltered && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-palm-green hover:text-palm-green-dark bg-palm-green/10 hover:bg-palm-green/20 px-3 py-1.5 rounded-xl transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-date-brown/80">
            Showing <span className="font-bold text-date-brown">{filteredCount}</span> of {totalCount} date varieties
          </p>
          {selectedCategory !== 'All' && (
            <span className="text-xs font-semibold text-palm-green bg-palm-green/10 px-2.5 py-1 rounded-full">
              Category: {selectedCategory}
            </span>
          )}
        </div>

        {/* Product Grid / Empty State */}
        {filteredCount > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-salt-dark max-w-lg mx-auto space-y-4 my-8 shadow-warm">
            <div className="w-16 h-16 rounded-full bg-salt flex items-center justify-center mx-auto text-date-brown/40">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-date-brown">
              No dates found matching filters
            </h3>
            <p className="text-sm text-date-brown/70">
              Try adjusting your search term, expanding your price range, or clearing category filters.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center space-x-2 bg-date-brown text-salt hover:bg-date-brown-light font-bold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Clear all filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
