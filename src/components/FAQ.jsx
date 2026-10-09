import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: 'How fresh are Naturelink dates?',
      answer:
        'All our dates are single-origin harvests packed directly at our oasis facility. We nitrogen-flush each resealable pouch to maintain optimal moisture levels without artificial chemical fumigants.',
    },
    {
      question: 'Are any sugars or preservatives added?',
      answer:
        'Never. Our dates are 100% natural raw fruit with zero added glucose, syrups, or preservatives. All sweetness comes naturally from natural fructose and sucrose developed on the palm.',
    },
    {
      question: 'What pack sizes do you offer?',
      answer:
        'We offer three versatile pouch options for every variety: 250 g (ideal for sampling), 500 g (family pantry size), and 1 kg bulk packs (best value for date enthusiasts and bakers).',
    },
    {
      question: 'How should I store my dates after opening?',
      answer:
        'Keep them sealed in our airtight pouch. Soft varieties like Medjool and Sukkari taste best when kept refrigerated (lasts up to 12 months), while semi-dry varieties like Ajwa and Safawi can be kept in a cool, dark pantry for 6+ months.',
    },
    {
      question: 'What are your shipping policies and costs?',
      answer:
        'We offer FREE express delivery across India on all orders over ₹999. For orders below ₹999, a flat shipping fee of ₹60 applies. Orders ship within 24 hours of placement.',
    },
    {
      question: 'Why do prices vary across different date varieties?',
      answer:
        'Prices reflect rarity, growing conditions, and harvesting intensity. Varieties like Medjool Jumbo require hand-thinning and individual sorting, while Ajwa dates carry high demand due to historical heritage and limited harvest yield.',
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-salt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-palm-green/10 text-palm-green text-xs font-bold px-3 py-1 rounded-full mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-date-brown">
            Frequently Asked Questions
          </h2>
          <p className="text-date-brown/70 text-sm sm:text-base mt-2">
            Everything you need to know about our sourcing, storage, and order delivery.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-salt-dark shadow-xs overflow-hidden transition-colors"
              >
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif text-base sm:text-lg font-bold text-date-brown hover:text-palm-green transition-colors focus-visible:ring-2 focus-visible:ring-honey-gold"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-palm-green transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-5 pt-0 text-xs sm:text-sm text-date-brown/80 leading-relaxed border-t border-salt/50 animate-fade-in"
                  >
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
