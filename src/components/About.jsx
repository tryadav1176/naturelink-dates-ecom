import React, { useEffect, useRef, useState } from 'react';

export const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed motion-reduce:bg-scroll"
        style={{
          backgroundImage: `url('/images/about-farm.jpg')`,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay gradient – falls back to solid gradient if image is missing */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(42,21,25,0.85) 0%, rgba(46,74,59,0.75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="block text-xs uppercase tracking-widest font-bold text-honey-gold mb-3">
          About us
        </span>

        <h2
          id="about-heading"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
        >
          Good food, traceably grown.
        </h2>

        <div className="space-y-5 text-white/90 text-base sm:text-lg leading-relaxed font-sans">
          <p>
            Naturelink began with a simple belief: dates should taste the way
            nature intended, and you should know exactly where they come from.
            Naturelink Organics Pvt Ltd is a Pune-based food company that
            brings carefully selected dates from trusted groves to homes
            across India.
          </p>

          <p>
            We work with growers who harvest at the right ripeness, because
            flavour and softness are decided long before a date reaches the
            pouch. Every batch is sorted by hand to remove damaged or dry
            fruit, then tested for moisture, aflatoxin and pesticide residue
            before it is packed.
          </p>

          <p>
            We pack in small lots in resealable pouches and print a batch code
            on every pack. Scan or enter that code on this page and you can
            read the report for your batch. We believe honest information
            builds more trust than big promises.
          </p>

          <p>
            Our range runs from soft Medjool and prized Ajwa to everyday
            Khalas and Sukkari, along with date syrup and paste made from
            nothing but dates. There is no added sugar, no preservatives, and
            no complicated ingredient list.
          </p>

          <p>
            Whether you are choosing a snack for your family, a gift for a
            festival, or a natural sweetener for your kitchen, our promise
            stays the same: quality you can trace, freshness you can taste,
            and fair prices all year round.
          </p>

          <p className="font-serif text-honey-gold text-lg sm:text-xl font-semibold pt-2">
            Naturelink Organics. Good food, traceably grown.
          </p>
        </div>
      </div>
    </section>
  );
};
