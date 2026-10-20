import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Wifi, 
  UtensilsCrossed, 
  Wind, 
  Zap, 
  Check, 
  CalendarCheck, 
  PhoneCall, 
  Sparkles,
  Info
} from 'lucide-react';

export default function PropertyDetailsModal({ isOpen, onClose, property, onOpenSchedule }) {
  const [activeImg, setActiveImg] = useState(0);

  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-[#18181c] text-white w-full max-w-3xl rounded-3xl border border-white/15 shadow-2xl overflow-hidden my-auto relative max-h-[90vh] flex flex-col">
        
        {/* Sticky Header / Close */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#18181c] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md bg-[#0066FF] text-white text-[10px] font-semibold uppercase tracking-wider">
                {property.gender}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Verified Property
              </span>
            </div>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
              {property.name}
            </h3>
            <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5 font-normal">
              <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{property.locality} • {property.distance}</span>
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Main Photo Gallery */}
          <div>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black/50 mb-3 border border-white/10">
              <img 
                src={property.images[activeImg] || property.images[0]} 
                alt={property.name}
                className="w-full h-full object-cover" 
              />
            </div>
            {property.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2.5">
                {property.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImg === idx ? 'border-[#0066FF] scale-[1.02]' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Occupancy Breakdown */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="font-sans font-semibold text-sm text-white uppercase tracking-wider mb-3">
              Room Sharing &amp; Monthly Rent
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-gray-400 block font-medium">Single Private Room</span>
                <span className="text-lg font-bold text-emerald-400 font-sans">
                  ₹{(property.price + 2500).toLocaleString('en-IN')}<span className="text-xs text-gray-400">/mo</span>
                </span>
                <span className="text-[10px] text-emerald-400 block mt-0.5">Attached Bath + Balcony</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <span className="text-[11px] text-blue-300 block font-medium">Double Sharing (Popular)</span>
                <span className="text-lg font-bold text-emerald-400 font-sans">
                  ₹{property.price.toLocaleString('en-IN')}<span className="text-xs text-gray-400">/mo</span>
                </span>
                <span className="text-[10px] text-emerald-400 block mt-0.5">All Bills &amp; Food Included</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-gray-400 block font-medium">Triple Sharing (Economy)</span>
                <span className="text-lg font-bold text-emerald-400 font-sans">
                  ₹{Math.max(4800, property.price - 1200).toLocaleString('en-IN')}<span className="text-xs text-gray-400">/mo</span>
                </span>
                <span className="text-[10px] text-emerald-400 block mt-0.5">Ideal for Aspirants</span>
              </div>
            </div>
          </div>

          {/* Amenities Checklist */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-white uppercase tracking-wider mb-3">
              All-Inclusive Amenities &amp; Services
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-gray-300">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description & House Rules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h5 className="font-semibold text-gray-200 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Property Highlights</span>
              </h5>
              <p className="text-gray-300 leading-relaxed font-normal">
                {property.description} Walking distance to BHU faculties, libraries, grocery hubs, and rickshaw stands.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h5 className="font-semibold text-gray-200 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>House Rules &amp; Freedom</span>
              </h5>
              <ul className="space-y-1.5 text-gray-300 font-normal">
                <li>• Biometric keyless access 24/7</li>
                <li>• Visitor lounge open 9:00 AM - 8:30 PM</li>
                <li>• 100% Non-smoking &amp; alcohol-free premises</li>
                <li>• Quiet study hours after 10:30 PM in corridors</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#141416] shrink-0 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-semibold text-gray-400 block tracking-wider">Starting Monthly Rent</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-400 font-sans">
                ₹{property.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-gray-400 font-normal">/ mo (All-inclusive)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/919530404364?text=Hi%20ONLY1BROKER,%20I%20am%20interested%20in%20${encodeURIComponent(property.name)}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wide border border-white/15 transition-colors"
            >
              Ask on WhatsApp
            </a>
            <button 
              onClick={() => {
                onClose();
                onOpenSchedule(property);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-xs tracking-wide shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule Free Visit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
