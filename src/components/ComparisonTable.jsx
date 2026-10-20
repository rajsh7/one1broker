import React from 'react';
import { X, Check, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';
import { comparisonPoints } from '../data/properties';

export default function ComparisonTable({ onOpenSchedule }) {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-[#FBFBFD] text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-4">
            Random Brokers vs. ONLY1BROKER
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
            Don't get stuck with multiple unverified agents, hidden brokerage charges, and endless excuses. Experience single-window trust with ONLY1BROKER.
          </p>
        </div>

        {/* 2-Column Comparison Matrix Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-apple-float border border-black/8 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/5">
          
          {/* Left Column: Traditional PG / Random Brokers */}
          <div className="p-8 sm:p-10 bg-[#FAFAFC]">
            <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-8">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#86868B] tracking-wider block mb-1">Unverified Market</span>
                <h3 className="font-sans text-2xl font-bold text-[#1D1D1F]">
                  Multiple Random Brokers
                </h3>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center font-bold">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-6">
              {comparisonPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wide block mb-1">
                      {item.feature}
                    </span>
                    <p className="text-sm font-medium text-[#424245] leading-snug">
                      {item.traditional}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-black/5 text-center">
              <span className="text-xs text-[#86868B] font-medium italic">
                Heavy commissions, fake photos &amp; zero tenant protection
              </span>
            </div>
          </div>

          {/* Right Column: ONLY1BROKER */}
          <div className="p-8 sm:p-10 bg-[#0F172A] text-white relative">
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-8">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#38BDF8] tracking-wider block mb-1">Single Verified Gateway</span>
                <h3 className="font-sans text-2xl font-bold text-white flex items-center gap-2">
                  <span>ONLY1BROKER</span>
                  <span className="text-xs font-sans font-semibold bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Recommended
                  </span>
                </h3>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-6">
              {comparisonPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-gray-950 flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-emerald-500/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wide block mb-1">
                      {item.feature}
                    </span>
                    <p className="text-sm font-medium text-slate-200 leading-snug">
                      {item.coliving}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <button 
                onClick={() => onOpenSchedule()}
                className="w-full py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                Experience the Difference — Schedule Free Visit
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
