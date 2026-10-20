import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { faqs } from '../data/properties';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-white text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
            Quick, honest answers about rent inclusions, security deposit refund terms, guest policies, and how to schedule your visit.
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-[#FAFAFC] rounded-2xl border border-black/6 shadow-apple-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-sans font-semibold text-base sm:text-lg text-[#1D1D1F] hover:text-[#0066FF] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center shrink-0 transition-transform duration-200 shadow-apple-sm ${isOpen ? 'rotate-180 bg-blue-50 text-[#0066FF] border-blue-200' : 'text-[#86868B]'}`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#6E6E73] leading-relaxed border-t border-black/5 animate-fade-in font-sans font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp direct help callout */}
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/919530404364?text=Hi%20ONLY1BROKER,%20I%20have%20a%20question%20about%20verified%20PG%20accommodation"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#0066FF] transition-colors group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Still have questions? Reach out to our 24/7 student support team on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
