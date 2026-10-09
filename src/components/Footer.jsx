import React, { useState } from 'react';
import { Send, Heart, Shield } from 'lucide-react';
import { useCart } from '../hooks/useCart.js';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    showToast('Thank you for subscribing to Naturelink Harvest updates!');
    setEmail('');
  };

  return (
    <footer className="bg-date-brown text-salt border-t border-honey-gold/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-honey-gold/15 border border-honey-gold/40 flex items-center justify-center text-honey-gold">
                <span>🌴</span>
              </div>
              <span className="font-serif text-2xl font-bold text-salt">Naturelink</span>
            </div>

            <p className="text-sm text-salt/75 max-w-md leading-relaxed">
              Naturelink is dedicated to bringing you raw, single-origin dates harvested with reverence for desert palm traditions. 100% pure fruit, lab-tested for chemical purity, zero added sugar.
            </p>

            <div className="flex items-center space-x-3 text-xs text-honey-gold font-medium pt-2">
              <span className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Lab Certified Pure</span>
              </span>
              <span>•</span>
              <span>Direct Oasis Sourcing</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-serif font-bold text-sm text-honey-gold uppercase tracking-wider mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-salt/80">
                <li><a href="#shop" className="hover:text-honey-gold transition-colors">Shop Dates</a></li>
                <li><a href="#process" className="hover:text-honey-gold transition-colors">Our Process</a></li>
                <li><a href="#batch-report" className="hover:text-honey-gold transition-colors">Batch Lab Lookup</a></li>
                <li><a href="#faq" className="hover:text-honey-gold transition-colors">FAQ & Storage</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-sm text-honey-gold uppercase tracking-wider mb-3">
                Trust & Care
              </h4>
              <ul className="space-y-2 text-xs text-salt/80">
                <li><a href="#shop" className="hover:text-honey-gold transition-colors">Organic Policy</a></li>
                <li><a href="#faq" className="hover:text-honey-gold transition-colors">Shipping Rates</a></li>
                <li><a href="#faq" className="hover:text-honey-gold transition-colors">Returns & Quality</a></li>
                <li><a href="#faq" className="hover:text-honey-gold transition-colors">Sustainability</a></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter Form */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-honey-gold uppercase tracking-wider">
              Harvest Updates & Offers
            </h4>
            <p className="text-xs text-salt/75">
              Subscribe to get notified on fresh seasonal harvests, limited gift box drops, and exclusive recipes.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center space-x-2 pt-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white/10 focus:bg-white/15 px-3.5 py-2.5 rounded-xl border border-white/20 text-xs text-salt placeholder-salt/50 outline-none flex-1 focus:border-honey-gold"
                aria-label="Email for newsletter subscription"
              />
              <button
                type="submit"
                className="bg-honey-gold hover:bg-honey-gold-light text-date-brown font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-1 shadow-gold transition-colors"
                aria-label="Subscribe to newsletter"
              >
                <span>Join</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Copyright & Disclaimer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-salt/60 gap-4">
          <p>© {new Date().getFullYear()} Naturelink Dates Inc. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-honey-gold fill-honey-gold" />
            <span>for date lovers nationwide.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
