import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Support and Quick Contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Quick Helper Pill Tooltip */}
      <div className="hidden sm:flex items-center gap-2 py-1.5 px-3 rounded-full bg-[#18181c] text-white text-xs font-semibold shadow-2xl border border-white/15 animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>Need a PG within 24 Hours? Chat with Us</span>
      </div>

      {/* Floating Button */}
      <a 
        href="https://wa.me/919530404364?text=Hi%20ONLY1BROKER,%20I%20need%20urgent%20verified%20PG%20accommodation"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-200 group"
        aria-label="Chat on WhatsApp with local student housing concierge"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none group-hover:rotate-12 transition-transform" />
      </a>
    </aside>
  );
}
