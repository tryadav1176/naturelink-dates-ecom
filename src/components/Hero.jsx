import React from 'react';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { ProductImage } from './ProductImage.jsx';

export const Hero = () => {
  return (
    <section className="bg-date-brown text-salt relative overflow-hidden py-12 md:py-20 border-b border-honey-gold/20">
      {/* Subtle organic gradient glow background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-honey-gold/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-palm-green/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-honey-gold/15 border border-honey-gold/30 rounded-full px-3.5 py-1.5 text-xs text-honey-gold font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>100% Single-Origin & Organic Certified</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-salt tracking-tight">
              Dates the way they <span className="text-honey-gold italic font-serif">should taste.</span>
            </h1>

            <p className="text-base sm:text-lg text-salt/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Organic, single-origin dates hand-selected at peak ripeness. Lab-tested for purity, zero added sugar, shipped fresh from desert palm groves directly to your doorstep.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#shop"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-honey-gold hover:bg-honey-gold-light text-date-brown font-bold text-base px-7 py-3.5 rounded-xl shadow-gold transition-all duration-200 group transform hover:-translate-y-0.5"
              >
                <span>Shop dates</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#process"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-salt/10 hover:bg-salt/20 text-salt border border-salt/20 font-semibold text-base px-6 py-3.5 rounded-xl transition-colors"
              >
                Why Naturelink
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-honey-gold">100%</div>
                <div className="text-xs text-salt/70 mt-0.5">Raw & Unprocessed</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-honey-gold">0%</div>
                <div className="text-xs text-salt/70 mt-0.5">Added Sugars</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-honey-gold">4.9★</div>
                <div className="text-xs text-salt/70 mt-0.5">5,000+ Happy Foodies</div>
              </div>
            </div>
          </div>

          {/* Right Product Banner Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-honey-gold/30 via-palm-green/40 to-transparent blur-lg opacity-70"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-honey-gold/30 shadow-2xl bg-date-brown-dark">
                <ProductImage
                  src="/images/hero.jpg"
                  alt="Harvested Fresh Naturelink Medjool Dates"
                  name="Naturelink Harvest"
                  category="Single Origin"
                  aspect="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-date-brown/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-honey-gold" />
                    <div>
                      <div className="text-xs font-semibold text-salt">Harvest Batch #NL-2026</div>
                      <div className="text-[10px] text-salt/70">Lab Verified • Hand Sorted</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-honey-gold bg-honey-gold/10 px-2.5 py-1 rounded-md">
                    Grade A+
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
