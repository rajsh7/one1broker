import React from 'react';
import { Users, Building, ShieldCheck, Star, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Residents",
      desc: "Scholars & professionals housed across Varanasi"
    },
    {
      icon: Building,
      value: "120+",
      label: "Verified Stays",
      desc: "Across Lanka, Sigra, Durgakund & Cantt"
    },
    {
      icon: ShieldCheck,
      value: "₹0",
      label: "Zero Brokerage",
      desc: "Direct transparent rates with zero hidden charges"
    },
    {
      icon: Star,
      value: "4.9 ★",
      label: "Google Rating",
      desc: "Based on 3,400+ verified tenant reviews"
    }
  ];

  return (
    <section className="bg-[#0F172A] text-white py-20 sm:py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Top */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight mb-5">
            Hassle-free living designed for you.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            ONLY1BROKER reimagined student and youth accommodation from the ground up — replacing unverified agents, subpar food, and hidden deposits with technology, hospitality, and transparency.
          </p>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-[#1E293B] p-8 rounded-3xl border border-white/10 hover:border-[#0066FF]/40 transition-all duration-300 group shadow-apple-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-[#0066FF]/20 group-hover:text-[#38BDF8] transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white font-sans tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed font-normal">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
