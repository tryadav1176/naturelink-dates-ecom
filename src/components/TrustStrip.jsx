import React from 'react';
import { Truck, HandHeart, Sparkles, PackageCheck } from 'lucide-react';

export const TrustStrip = () => {
  const trustItems = [
    {
      icon: Truck,
      title: 'Free Express Shipping',
      desc: 'On all orders over ₹999',
    },
    {
      icon: HandHeart,
      title: 'Hand-Sorted Batches',
      desc: 'Top 5% size & quality selection',
    },
    {
      icon: Sparkles,
      title: 'No Added Sugar',
      desc: '100% natural fruit sweetness',
    },
    {
      icon: PackageCheck,
      title: 'Resealable Pouches',
      desc: 'Airtight nitrogen-flushed packs',
    },
  ];

  return (
    <section className="bg-salt-light border-b border-salt-dark py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-palm-green/10 text-palm-green flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-palm-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-date-brown">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-date-brown/70 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
