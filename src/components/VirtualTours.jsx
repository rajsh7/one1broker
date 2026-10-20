import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';
import { curatedCollections } from '../data/properties';

export default function VirtualTours({ onOpenSchedule, onOpenDetails }) {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight">
              Top Rated Stays with 360° Virtual Tours
            </h2>
            <p className="text-[#6E6E73] text-sm sm:text-base mt-2 max-w-xl">
              Inspect rooms, study lounges, and mess dining areas virtually before scheduling your physical walkthrough.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => {
                const el = document.getElementById("listings");
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#0066FF] hover:text-[#0052CC] flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Explore All Verified Suites</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curatedCollections.map((item) => (
            <div 
              key={item.id}
              className="group bg-[#FAFAFC] rounded-3xl overflow-hidden shadow-apple-md border border-black/8 hover:shadow-apple-float hover:border-black/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* 360 Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0066FF] text-white text-[11px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>360° Virtual Tour</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300 block mb-0.5">
                    {item.propertiesCount}
                  </span>
                  <h3 className="font-sans font-bold text-lg leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#6E6E73] leading-relaxed mb-5">
                  {item.subtitle}
                </p>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <button 
                    onClick={() => onOpenSchedule({ name: item.title })}
                    className="text-xs font-semibold text-[#1D1D1F] group-hover:text-[#0066FF] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Launch 3D Walkthrough</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0066FF]" />
                  </button>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Live Booking
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
