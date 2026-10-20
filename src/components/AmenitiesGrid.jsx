import React from 'react';
import { 
  Wifi, 
  UtensilsCrossed, 
  Sparkles, 
  ShieldCheck, 
  BedDouble, 
  Zap, 
  Shirt, 
  Gamepad2, 
  ArrowRight,
  Headphones
} from 'lucide-react';
import { amenitiesList } from '../data/properties';

const iconMap = {
  Wifi: Wifi,
  UtensilsCrossed: UtensilsCrossed,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  BedDouble: BedDouble,
  Zap: Zap,
  Shirt: Shirt,
  Gamepad2: Gamepad2
};

export default function AmenitiesGrid({ onOpenSchedule }) {
  return (
    <section id="amenities" className="py-20 sm:py-28 bg-white text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-4">
            Everything you need under one roof
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            All our properties in Varanasi are loaded with modern conveniences so you never have to worry about chores, cooking, or electricity cuts.
          </p>
        </div>

        {/* 8 Amenity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div 
                key={item.id}
                className="bg-[#FAFAFC] p-7 rounded-3xl shadow-apple-sm hover:shadow-apple-float border border-black/5 hover:border-black/15 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 text-[#0066FF] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-200 shadow-apple-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-[#1D1D1F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6E6E73] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-4 mt-6 border-t border-black/5 flex items-center text-[11px] font-semibold text-emerald-600">
                  <span>Included in Rent</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Concierge Callout Strip */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F5F5F7] border border-black/5 shadow-apple-sm text-xs sm:text-sm text-[#1D1D1F]">
            <Headphones className="w-4 h-4 text-[#0066FF]" />
            <span>Need tailored executive suites or corporate hostel bookings in Varanasi?</span>
            <button 
              onClick={() => onOpenSchedule({ name: "Custom Executive Suites" })}
              className="font-semibold text-[#0066FF] hover:text-[#0052CC] underline flex items-center gap-1 cursor-pointer ml-1"
            >
              <span>Talk to our student housing concierge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
