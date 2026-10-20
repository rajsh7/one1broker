import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Heart,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onSelectFilter }) {
  return (
    <div className="w-[96%] sm:w-[98%] max-w-[1720px] mx-auto px-2 sm:px-4 lg:px-6 pb-8 pt-6">
      <footer className="bg-[#0F172A] text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 shadow-2xl border border-slate-800/80">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white px-3.5 py-2 rounded-2xl shadow-sm">
                <img 
                  src="/logo.png" 
                  alt="only1broker" 
                  className="h-7 sm:h-8 w-auto object-contain" 
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              ONLY1BROKER is India's dedicated single verified rental network. Say goodbye to dealing with multiple random brokers — get direct, physically verified, and transparent student stays with zero brokerage and zero fake promises.
            </p>

            {/* Social SVGs */}
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Top Localities */}
          <div>
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-4 text-[#0066FF]">
              Top Localities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    if (onSelectFilter) onSelectFilter("Near BHU");
                    const el = document.getElementById("listings");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  PG in Lanka (Near BHU)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectFilter) onSelectFilter("Near Sigra");
                    const el = document.getElementById("listings");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  PG in Sigra &amp; Vidyapeeth
                </button>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">
                  PG in Durgakund (Libraries)
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">
                  PG in Kabir Nagar / Bhelupur
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">
                  Coliving in Assi Ghat &amp; Nagwa
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">
                  Executive Stays in Cantt Station
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Categories */}
          <div>
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-4 text-[#0066FF]">
              Popular Searches
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    if (onSelectFilter) onSelectFilter("Boys PG");
                    const el = document.getElementById("listings");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Boys PG in Varanasi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectFilter) onSelectFilter("Girls PG");
                    const el = document.getElementById("listings");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Girls PG in Varanasi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectFilter) onSelectFilter("Single Room");
                    const el = document.getElementById("listings");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Single Room PGs (Private)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectFilter) onSelectFilter("AC Included");
                    const el = document.getElementById("listings");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  AC PG with 4-Time Meals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectFilter) onSelectFilter("Co-ed");
                    const el = document.getElementById("listings");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Unisex Luxury Coliving Suites
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-4 text-[#0066FF]">
              24/7 Helpdesk
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Direct Helpline</span>
                  <a href="tel:+919530404364" className="font-semibold text-white hover:text-[#38BDF8]">
                    +91 95304 04364
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Support Email</span>
                  <a href="mailto:support@only1broker.com" className="font-semibold text-white hover:text-[#38BDF8]">
                    support@only1broker.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Varanasi Hub Office</span>
                  <span className="text-slate-400">Opposite BHU Gate 2, Lanka, Varanasi, UP 221005</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Trust Badges */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 ONLY1BROKER Technologies Pvt. Ltd. All rights reserved. India's Single Verified Rental Network.
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Stay</a>
            <a href="#" className="hover:text-white transition-colors">Tenant Security Charter</a>
            <a href="#" className="hover:text-white transition-colors">List Your Property</a>
          </div>
        </div>

      </footer>
    </div>
  );
}
