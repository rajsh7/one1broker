import React from 'react';
import { Star, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { testimonials } from '../data/properties';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FBFBFD] text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-4">
            What our residents are saying
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
            Over 5,000+ students and professionals across Banaras Hindu University, coaching hubs, and remote startups trust ONLY1BROKER.
          </p>
        </div>

        {/* 6 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-3xl shadow-apple-md hover:shadow-apple-float border border-black/8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Stay
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#424245] leading-relaxed italic mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-200 shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="font-sans font-bold text-sm text-[#1D1D1F] truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-medium text-[#0066FF] truncate">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-[#86868B] truncate font-medium">
                    {item.stay}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
