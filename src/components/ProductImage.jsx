import React, { useState } from 'react';

/**
 * Reusable image component with built-in error handling.
 * Displays a beautiful styled placeholder panel with product name if image fails to load.
 */
export const ProductImage = ({ src, alt, name, category, className = '', aspect = 'aspect-square' }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full ${aspect} bg-gradient-to-br from-palm-green/90 to-date-brown flex flex-col items-center justify-center p-4 text-center rounded-lg relative overflow-hidden select-none ${className}`}
        aria-label={`${name} placeholder`}
      >
        {/* Subtle decorative background palm motif */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg className="w-32 h-32 text-salt" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
          </svg>
        </div>
        <span className="text-xs uppercase tracking-widest text-honey-gold font-semibold mb-1 z-10">
          {category || 'Naturelink'}
        </span>
        <h4 className="font-serif text-lg font-bold text-salt z-10 leading-tight">
          {name}
        </h4>
        <span className="text-[10px] text-salt/70 mt-2 italic z-10">
          Single Origin Premium Date
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspect} ${className} bg-salt-dark/40`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-salt-dark/50 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading image...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt || name}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
