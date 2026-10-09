import { useState, useMemo } from 'react';

export const useProductFilters = (products) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(800); // 250g price slider upper bound
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Search Query Filter (name, origin, description)
      const query = searchQuery.trim().toLowerCase();
      if (query) {
        const matchName = product.name.toLowerCase().includes(query);
        const matchOrigin = product.origin.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        if (!matchName && !matchOrigin && !matchDesc) return false;
      }

      // 2. Category Filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // 3. Price Filter (by 250g price)
      const price250 = product.prices[250];
      if (price250 > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.prices[250] - b.prices[250];
      }
      if (sortBy === 'price-high') {
        return b.prices[250] - a.prices[250];
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      // 'featured' keeps default array order
      return 0;
    });
  }, [products, searchQuery, selectedCategory, maxPrice, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setMaxPrice(800);
    setSortBy('featured');
  };

  const isFiltered = searchQuery !== '' || selectedCategory !== 'All' || maxPrice < 800 || sortBy !== 'featured';

  return {
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
    totalCount: products.length,
    filteredCount: filteredProducts.length,
  };
};
