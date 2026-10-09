import React from 'react';
import { Sun, Hand, ShieldCheck, Lock, Award, CheckCircle } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Sun,
      title: 'Picked Ripe',
      desc: 'Tree-ripened under desert sun to ensure natural caramel sugars fully develop before harvesting.',
    },
    {
      number: '02',
      icon: Hand,
      title: 'Sorted by Hand',
      desc: 'Master sorters visually inspect every single date, selecting only the top 5% uniform size & quality.',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Lab Tested',
      desc: 'Screened for zero pesticides, heavy metals, and added glucose to guarantee pure raw quality.',
    },
    {
      number: '04',
      icon: Lock,
      title: 'Sealed Fresh',
      desc: 'Packed immediately in airtight, nitrogen-flushed resealable pouches to lock in natural moisture.',
    },
  ];

  const certifications = [
    { name: 'FSSAI Certified', sub: 'Standard Compliance' },
    { name: '100% Organic', sub: 'No Chemical Sprays' },
    { name: 'Non-GMO Verified', sub: 'Pure Heritage Palms' },
    { name: 'ISO 22000 Certified', sub: 'Food Safety System' },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-date-brown text-salt relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-honey-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-honey-gold font-bold">
            The Naturelink Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-salt mt-1">
            From Oasis Palm to Your Table
          </h2>
          <p className="text-salt/70 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            We follow strict artisanal standards to ensure every date delivers unmatched flavor and peak nutritional integrity.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-salt/5 rounded-2xl p-6 border border-white/10 relative hover:border-honey-gold/40 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-honey-gold/80">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-honey-gold/15 text-honey-gold flex items-center justify-center group-hover:bg-honey-gold group-hover:text-date-brown transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-salt mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-salt/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certification Badges Row (Marked as Placeholders) */}
        <div className="bg-salt/5 rounded-3xl p-6 sm:p-8 border border-white/15">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold text-honey-gold tracking-widest flex items-center justify-center space-x-1.5">
              <Award className="w-4 h-4" />
              <span>Quality Standards & Certifications</span>
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-date-brown-dark/80 rounded-xl p-4 text-center border border-white/10 relative overflow-hidden"
              >
                {/* Placeholder ribbon badge */}
                <div className="absolute top-2 right-2 text-[9px] font-bold text-honey-gold/60 uppercase tracking-widest bg-white/5 px-1.5 py-0.5 rounded">
                  Sample
                </div>
                <CheckCircle className="w-5 h-5 text-honey-gold mx-auto mb-2" />
                <h4 className="font-bold text-sm text-salt">{cert.name}</h4>
                <p className="text-[11px] text-salt/60 mt-0.5">{cert.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
