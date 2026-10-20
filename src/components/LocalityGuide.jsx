import React from 'react';
import { Compass } from 'lucide-react';

export default function LocalityGuide() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFD] text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-4">
            Student &amp; Working Life in Varanasi
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about settling in, finding the right neighborhood, and thriving in the timeless spiritual and academic capital of India.
          </p>
        </div>

        {/* Editorial Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-apple-lg border border-black/8 space-y-6 text-sm sm:text-base text-[#424245] leading-relaxed font-sans">
          <p className="first-letter:text-5xl first-letter:font-sans first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#0066FF]">
            Varanasi has always stood at the crossroads of ancient wisdom and modern ambition. Today, with premier institutions like Banaras Hindu University (BHU), IIT BHU, and the Institute of Medical Sciences (IMS), Kashi draws over 65,000 ambitious undergraduate, doctoral, and competitive aspirants each year from every corner of India.
          </p>

          <p>
            For decades, arriving students had to navigate aggressive brokers, exorbitant cash security deposits, and dingy traditional PGs lacking hygienic food or power backup during the sweltering Purvanchal summers. Modern co-living has fundamentally altered this landscape. By blending hotel-standard housekeeping with vibrant student community spaces, young scholars can now access air-conditioned private rooms with uninterrupted 100% DG power backup and high-speed fiber internet.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 p-5 rounded-2xl bg-[#F5F5F7] border border-black/5">
            <div className="text-center p-2">
              <span className="block text-3xl font-bold text-[#1D1D1F] font-sans">65,000+</span>
              <span className="text-xs text-[#86868B] font-semibold">Active University Students</span>
            </div>
            <div className="text-center p-2 border-y sm:border-y-0 sm:border-x border-black/5">
              <span className="block text-3xl font-bold text-[#1D1D1F] font-sans">84+</span>
              <span className="text-xs text-[#86868B] font-semibold">Historic Ghats &amp; Serene Walks</span>
            </div>
            <div className="text-center p-2">
              <span className="block text-3xl font-bold text-[#1D1D1F] font-sans">15 Mins</span>
              <span className="text-xs text-[#86868B] font-semibold">Avg Commute Across Hubs</span>
            </div>
          </div>

          <p>
            Whether your day involves intensive 10-hour library sessions at Durgakund, lecture series at IIT BHU Lanka Gate, or remote engineering sprints from a quiet rooftop cafe overlooking Assi Ghat, living in a managed ONLY1BROKER verified property guarantees you come home to wholesome home-style food, quiet study rooms, and responsive maintenance at your fingertips.
          </p>

          <div className="pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#86868B]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Updated for 2026 Academic Session</span>
            </div>
            <span className="text-[#0F172A] font-semibold">Curated by ONLY1BROKER Local Advisors</span>
          </div>
        </div>

      </div>
    </section>
  );
}
