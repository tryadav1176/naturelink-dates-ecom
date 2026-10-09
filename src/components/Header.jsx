import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../hooks/useCart.js';

export const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Shop Dates', href: '#shop' },
    { label: 'Our Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Batch Report', href: '#batch-report' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-date-brown/95 backdrop-blur-md shadow-md py-3 border-b border-honey-gold/20'
          : 'bg-date-brown py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center space-x-2.5 focus:outline-none"
            aria-label="Naturelink Dates Homepage"
          >
            <div className="w-10 h-10 rounded-full bg-honey-gold/15 border border-honey-gold/40 flex items-center justify-center text-honey-gold group-hover:bg-honey-gold group-hover:text-date-brown transition-colors">
              <span className="text-xl">🌴</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-salt group-hover:text-honey-gold transition-colors">
                Naturelink
              </span>
              <span className="text-[10px] uppercase tracking-widest text-honey-gold/90 font-medium">
                Single-Origin Dates
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-salt/90 hover:text-honey-gold transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-2 bg-palm-green hover:bg-palm-green-light text-salt px-4 py-2 rounded-full font-medium text-sm shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-honey-gold"
              aria-label={`Shopping Cart, ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-honey-gold" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-honey-gold text-date-brown font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-salt/90 hover:text-salt hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-3 border-t border-salt/10 mt-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-salt hover:text-honey-gold transition-colors px-2 py-1.5 rounded-md hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
