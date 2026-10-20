import React from 'react';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export default function Guarantees({ onOpenSchedule }) {
  const guarantees = [
    "Zero Brokerage Always",
    "100% Physically Verified",
    "Flexible 1-Month Lock-in",
    "Instant Deposit Refund Guarantee",
    "24x7 Dedicated Support Concierge",
    "Nutritious 4-Meal Plan Daily"
  ];

  return (
    <section className="bg-white text-[#1D1D1F] py-16 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-[#1D1D1F] tracking-tight">
            Book online in 3 simple steps &amp; move in today
          </h2>
        </div>

        {/* 6 Green Checkmarks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {guarantees.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#F5F5F7] border border-black/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#EBEBEF] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#1D1D1F] leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* 3 Step Flow Line */}
        <div className="mt-10 pt-6 border-t border-black/5 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-[#6E6E73]">
          <span className="flex items-center gap-2 text-[#0F172A]">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center font-bold text-[11px]">1</span>
            Explore &amp; Shortlist Stays
          </span>
          <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
          <span className="flex items-center gap-2 text-[#0F172A]">
            <span className="w-5 h-5 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-[11px]">2</span>
            Schedule Free Physical or 3D Tour
          </span>
          <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
          <span className="flex items-center gap-2 text-emerald-700">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px]">3</span>
            Pay ₹0 Brokerage &amp; Move In
          </span>
        </div>

      </div>
    </section>
  );
}
