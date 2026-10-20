import React from 'react';
import { MapPin, ArrowRight, Building } from 'lucide-react';
import { localitiesDirectory } from '../data/properties';

export default function LocalityDirectory({ onSelectLocality }) {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-4">
            Browse PGs by Popular Localities in Varanasi
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
            Find the closest verified accommodation to your university department, hospital ward, or coaching institute.
          </p>
        </div>

        {/* 3-Column / 9-Item Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localitiesDirectory.map((loc, idx) => (
            <div 
              key={idx}
              onClick={() => {
                if (onSelectLocality) onSelectLocality(loc.name.split(' ')[0]);
                const el = document.getElementById("listings");
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-[#FAFAFC] p-7 rounded-3xl shadow-apple-sm hover:shadow-apple-float border border-black/6 hover:border-black/15 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white text-[#1D1D1F] text-[10px] font-semibold uppercase tracking-wider border border-black/8 shadow-apple-sm">
                    {loc.tag}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 font-sans">
                    {loc.startRent}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 group-hover:scale-110 transition-transform" />
                  <h3 className="font-sans font-bold text-lg text-[#1D1D1F] group-hover:text-[#0066FF] transition-colors">
                    {loc.name}
                  </h3>
                </div>

                <p className="text-xs text-[#86868B] mb-5 line-clamp-1 font-medium">
                  {loc.highlight}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#6E6E73]">
                  {loc.count}
                </span>
                <span className="font-semibold text-[#0066FF] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>View Stays</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
