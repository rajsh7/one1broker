import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MessageSquare, 
  PlusCircle, 
  PhoneCall,
  Search,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function Navbar({ onOpenSchedule, onSelectFilter }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 w-[98%] sm:w-[99%] max-w-[1840px] mx-auto px-2 sm:px-3 pointer-events-none">
      <header className="pointer-events-auto bg-white/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-full px-5 sm:px-8 lg:px-10 h-20 sm:h-22 flex items-center justify-between gap-3 2xl:gap-8 transition-all duration-200 w-full">
        
        {/* Official only1broker Logo */}
        <a href="#" className="flex items-center shrink-0 group">
          <img 
            src="/logo.png" 
            alt="only1broker" 
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Single-Line Navigation */}
        <nav className="hidden xl:flex items-center gap-4.5 2xl:gap-6 text-[14px] 2xl:text-[15px] font-semibold text-[#334155] whitespace-nowrap shrink-0">
          <a href="#listings" className="hover:text-[#0066FF] transition-colors">
            Explore Stays
          </a>
          <button 
            onClick={() => {
              if (onSelectFilter) onSelectFilter("Boys PG");
              const el = document.getElementById("listings");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="hover:text-[#0066FF] transition-colors cursor-pointer"
          >
            Boys PG
          </button>
          <button 
            onClick={() => {
              if (onSelectFilter) onSelectFilter("Girls PG");
              const el = document.getElementById("listings");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="hover:text-[#0066FF] transition-colors cursor-pointer"
          >
            Girls PG
          </button>
          <button 
            onClick={() => {
              if (onSelectFilter) onSelectFilter("Co-ed");
              const el = document.getElementById("listings");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="hover:text-[#0066FF] transition-colors cursor-pointer"
          >
            Coliving
          </button>
          <a href="#map-section" className="hover:text-[#0066FF] transition-colors">
            Campus Map
          </a>
          <a href="#comparison" className="hover:text-[#0066FF] transition-colors">
            Why Us
          </a>
          <a href="#amenities" className="hover:text-[#0066FF] transition-colors">
            Amenities
          </a>
          <a href="#reviews" className="hover:text-[#0066FF] transition-colors">
            Reviews
          </a>
          <a href="#faqs" className="hover:text-[#0066FF] transition-colors">
            FAQs
          </a>
          <a href="#contact" className="hover:text-[#0066FF] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Single-Line Actions */}
        <div className="hidden lg:flex items-center gap-2.5 2xl:gap-4 shrink-0 whitespace-nowrap">
          <button 
            onClick={() => alert("only1broker Host Portal: Opening property submission manager...")}
            className="flex items-center gap-1.5 px-3.5 2xl:px-4 py-2.5 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] text-xs 2xl:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-[#0066FF]" />
            <span>Post Property FREE</span>
          </button>

          <a 
            href="https://wa.me/919530404364?text=Hello%20only1broker,%20I%20am%20looking%20for%20a%20verified%20stay" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 2xl:px-4 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs 2xl:text-sm font-semibold tracking-tight transition-all duration-200 shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <MessageSquare className="w-4 h-4" />
            <span>Quick Help</span>
          </a>

          {/* Schedule Free Visit Button: Prominent, Expanded Width */}
          <button 
            onClick={() => onOpenSchedule()}
            className="flex items-center justify-center gap-2.5 px-7 2xl:px-8 py-3 rounded-full bg-[#0F172A] hover:bg-black text-white text-xs 2xl:text-sm font-bold tracking-tight shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 shrink-0 whitespace-nowrap min-w-[200px]"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>Schedule Free Visit</span>
          </button>
        </div>

        {/* Mobile / Tablet menu trigger */}
        <div className="flex xl:hidden items-center gap-2">
          <button 
            onClick={() => onOpenSchedule()}
            className="hidden sm:flex lg:hidden items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold tracking-tight shrink-0 min-w-[140px]"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Schedule Visit</span>
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 bg-white/98 backdrop-blur-2xl rounded-3xl p-5 space-y-3 animate-fade-in shadow-2xl border border-black/5">
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-gray-100">
            <button 
              onClick={() => {
                if (onSelectFilter) onSelectFilter("Boys PG");
                setMobileMenuOpen(false);
                const el = document.getElementById("listings");
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="py-2.5 px-3 rounded-2xl bg-[#F8FAFC] text-xs font-semibold text-center text-[#0F172A] hover:bg-blue-50 hover:text-[#0066FF]"
            >
              👦 Boys PG
            </button>
            <button 
              onClick={() => {
                if (onSelectFilter) onSelectFilter("Girls PG");
                setMobileMenuOpen(false);
                const el = document.getElementById("listings");
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="py-2.5 px-3 rounded-2xl bg-[#F8FAFC] text-xs font-semibold text-center text-[#0F172A] hover:bg-blue-50 hover:text-[#0066FF]"
            >
              👧 Girls PG
            </button>
            <button 
              onClick={() => {
                if (onSelectFilter) onSelectFilter("Co-ed");
                setMobileMenuOpen(false);
                const el = document.getElementById("listings");
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="py-2.5 px-3 rounded-2xl bg-[#F8FAFC] text-xs font-semibold text-center text-[#0F172A] hover:bg-blue-50 hover:text-[#0066FF]"
            >
              🤝 Coliving
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#475569] py-2">
            <a 
              href="#listings" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gray-50 flex items-center gap-2"
            >
              <Search className="w-4 h-4 text-[#0066FF]" />
              <span>Explore Stays</span>
            </a>
            <a 
              href="#map-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gray-50 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#0066FF]" />
              <span>Campus Map</span>
            </a>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gray-50 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#0066FF]" />
              <span>Why Us</span>
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gray-50 flex items-center gap-2"
            >
              <span>Verified Reviews</span>
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gray-50 flex items-center gap-2"
            >
              <span>FAQs</span>
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-gray-50 flex items-center gap-2"
            >
              <span>Contact Us</span>
            </a>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full py-3.5 rounded-full bg-[#0F172A] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule Free Visit</span>
            </button>
            <a 
              href="https://wa.me/919530404364" 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-2.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center justify-center gap-2 border border-emerald-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat with Varanasi Advisor</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
