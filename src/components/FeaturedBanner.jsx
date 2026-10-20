import React from 'react';
import { Sparkles, MapPin, CheckCircle, ArrowRight, Star, ShieldCheck } from 'lucide-react';

export default function FeaturedBanner({ onOpenDetails, onOpenSchedule, isInsideScrollContainer = false }) {
  const featuredItem = {
    id: 1,
    name: "The Kashi Royal Suites & Coliving",
    locality: "Lanka, Varanasi",
    distance: "250m from BHU Main Gate",
    price: 7499,
    originalPrice: 9200,
    rating: 4.9,
    reviewsCount: 142
  };

  const cardContent = (
    <div className={`bg-white rounded-2xl md:rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 ${isInsideScrollContainer ? 'h-full border-0' : 'shadow-apple-float border border-slate-200/80 hover:shadow-2xl transition-all duration-300'}`}>
      {/* Left Image with tags */}
      <div className="md:col-span-5 lg:col-span-6 relative min-h-[260px] md:min-h-full">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80" 
          alt="The Kashi Royal Suites & Coliving" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#0066FF] text-white text-[11px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Verified Stay
          </span>
          <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-amber-300 text-[11px] font-semibold flex items-center gap-1 border border-white/20">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            4.9 (142 reviews)
          </span>
        </div>
        <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/5 text-[#0F172A] text-xs font-semibold flex items-center gap-2 shadow-apple-sm">
          <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
          <span>Opposite BHU Gate 1, Lanka</span>
        </div>
      </div>

      {/* Right Info Box */}
      <div className="md:col-span-7 lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-[#0F172A] bg-[#F8FAFC]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0066FF] uppercase tracking-widest mb-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Physically Verified Stay</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-[#0F172A] mb-3">
            The Kashi Royal Suites &amp; Coliving
          </h3>
          
          <p className="text-[#64748B] text-sm leading-relaxed mb-6 font-normal">
            Luxury air-conditioned suites designed for students and working professionals. Includes soundproof study lounge, rooftop cafeteria with Ganga sunset view, and 100% DG power backup.
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs text-[#334155] font-medium mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Chef-prepared 4 Meals/day</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>300 Mbps Fiber WiFi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Biometric Smart Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Brokerage Guarantee</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="block text-[11px] text-[#64748B] uppercase tracking-wider font-semibold">All-Inclusive Rent</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-emerald-600 font-sans">₹7,499</span>
              <span className="text-xs text-[#64748B] font-medium">/ month</span>
              <span className="text-xs text-gray-400 line-through">₹9,200</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => onOpenDetails(featuredItem)}
              className="px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] text-xs font-semibold tracking-tight transition-colors cursor-pointer border border-slate-300 shadow-apple-sm"
            >
              View Details
            </button>
            <button 
              onClick={() => onOpenSchedule(featuredItem)}
              className="px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-xs flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
            >
              <span>Book Free Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (isInsideScrollContainer) {
    return cardContent;
  }

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title without 'of the month' */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0F172A] tracking-tight">
            The Kashi Royal Suites &amp; Coliving
          </h2>
          <p className="text-slate-500 text-sm mt-1">100% Physically Verified • Lanka, Varanasi</p>
        </div>

        {cardContent}

      </div>
    </section>
  );
}
