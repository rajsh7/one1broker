import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Star, 
  Compass
} from 'lucide-react';

export default function NeighborhoodMap({ onOpenSchedule, onSelectFilter }) {
  const [selectedHub, setSelectedHub] = useState('lanka');

  const hubs = {
    lanka: {
      id: 'lanka',
      name: "Lanka & BHU Campus Hub",
      distance: "Walking distance to BHU Gate 1 & 2",
      propertiesCount: "45+ Verified Stays",
      avgRent: "₹6,500 - ₹8,500/mo",
      rating: 4.9,
      tags: ["BHU Main Campus", "IIT BHU", "IMS Hospital", "Lanka Market"],
      description: "Varanasi's premier academic hub. Ideal for university students, research scholars, and medical residents seeking proximity to faculty departments.",
      x: "42%",
      y: "65%",
      type: "university"
    },
    sigra: {
      id: 'sigra',
      name: "Sigra & Coaching Corridor",
      distance: "Near IP Sigra Mall & Coaching Hubs",
      propertiesCount: "32+ Verified Stays",
      avgRent: "₹7,000 - ₹9,500/mo",
      rating: 4.8,
      tags: ["Allen Career", "Aakash Institute", "Physics Wallah", "Kashi Vidyapeeth"],
      description: "Center for competitive exams (NEET, JEE, Foundation). Well-lit streets, libraries, book markets, and quick metro/auto connectivity.",
      x: "52%",
      y: "35%",
      type: "coaching"
    },
    durgakund: {
      id: 'durgakund',
      name: "Durgakund Library & Student Zone",
      distance: "Central Student District",
      propertiesCount: "28+ Verified Stays",
      avgRent: "₹5,800 - ₹7,800/mo",
      rating: 4.8,
      tags: ["Self-Study Libraries", "Mess Street", "Durgakund Temple"],
      description: "Lively, budget-friendly zone packed with 24x7 study halls, stationery hubs, and affordable wholesome thali messes.",
      x: "45%",
      y: "50%",
      type: "coaching"
    },
    assi: {
      id: 'assi',
      name: "Assi Ghat & Riverside Quarter",
      distance: "100m to Morning Aarti & Cafes",
      propertiesCount: "14+ Verified Stays",
      avgRent: "₹7,500 - ₹12,000/mo",
      rating: 4.9,
      tags: ["Subah-e-Banaras", "Artisan Cafes", "Co-working Nooks", "Yoga Centers"],
      description: "Peaceful cultural haven for remote engineers, creative writers, and arts students. Vibrant rooftop cafes and scenic riverfront sunrises.",
      x: "48%",
      y: "75%",
      type: "riverside"
    },
    cantt: {
      id: 'cantt',
      name: "Cantonment & Transit District",
      distance: "3 mins to Varanasi Cantt Railway Station",
      propertiesCount: "20+ Verified Stays",
      avgRent: "₹8,000 - ₹14,000/mo",
      rating: 4.7,
      tags: ["Railway Station", "Mall Road", "Corporate Offices", "Airport Highway"],
      description: "Prime connectivity zone for corporate executives, visiting professors, and working professionals with rapid transit options.",
      x: "58%",
      y: "22%",
      type: "transit"
    }
  };

  const current = hubs[selectedHub] || hubs.lanka;

  return (
    <section id="map-section" className="py-20 sm:py-28 bg-[#FBFBFD] text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-4">
            Explore Varanasi by Student &amp; Tech Hubs
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed">
            Click on any campus or commercial hub to discover walking distances, average monthly rents, and verified co-living clusters.
          </p>
        </div>

        {/* Interactive Map Visual Mock */}
        <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-apple-float bg-[#EBE5DB] min-h-[520px] flex flex-col justify-between">
          
          {/* Simulated Stylized Map Canvas Background */}
          <div className="absolute inset-0 bg-[#F4EFE6] opacity-95">
            <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D3C9BA" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Ganga River Curve */}
              <path 
                d="M 680 -50 C 620 180, 580 320, 640 480 C 690 600, 720 750, 680 900" 
                fill="none" 
                stroke="#60A5FA" 
                strokeWidth="70" 
                strokeLinecap="round"
                className="opacity-50"
              />
              <path 
                d="M 680 -50 C 620 180, 580 320, 640 480 C 690 600, 720 750, 680 900" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="3" 
                strokeDasharray="6 6"
              />
              {/* Major Roads */}
              <line x1="50" y1="280" x2="850" y2="420" stroke="#CBD5E1" strokeWidth="12" />
              <line x1="420" y1="50" x2="480" y2="650" stroke="#CBD5E1" strokeWidth="10" />
              <line x1="200" y1="120" x2="700" y2="580" stroke="#E2E8F0" strokeWidth="8" />
            </svg>
          </div>

          {/* Interactive Map Pins */}
          {Object.values(hubs).map((hub) => {
            const isSelected = selectedHub === hub.id;
            return (
              <button
                key={hub.id}
                onClick={() => setSelectedHub(hub.id)}
                style={{ top: hub.y, left: hub.x }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-all duration-300 cursor-pointer ${
                  isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                }`}
              >
                <div className="relative flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-apple-md transition-all ${
                    isSelected 
                      ? 'bg-[#0066FF] text-white ring-4 ring-blue-200' 
                      : 'bg-[#1D1D1F] text-white border-2 border-white'
                  }`}>
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  
                  <div className={`mt-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-tight whitespace-nowrap shadow-apple-sm transition-all ${
                    isSelected 
                      ? 'bg-[#1D1D1F] text-white' 
                      : 'bg-white/95 text-[#1D1D1F] border border-black/10'
                  }`}>
                    {hub.name.split('&')[0]}
                  </div>
                </div>
              </button>
            );
          })}

          {/* Floating Selected Card Overlay on Top Left */}
          <div className="relative z-30 p-4 sm:p-6 max-w-sm">
            <div className="bg-white/95 backdrop-blur-2xl text-[#1D1D1F] p-6 rounded-3xl shadow-apple-float border border-black/10 animate-fade-in">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-[10px] font-semibold uppercase tracking-wider border border-blue-200">
                  {current.propertiesCount}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{current.rating}</span>
                </div>
              </div>

              <h3 className="font-sans font-bold text-xl text-[#1D1D1F] mb-1">
                {current.name}
              </h3>
              
              <p className="text-xs text-[#86868B] mb-3 flex items-center gap-1 font-medium">
                <Navigation className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                <span>{current.distance}</span>
              </p>

              <p className="text-xs text-[#6E6E73] leading-relaxed mb-4">
                {current.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {current.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-[10px] font-medium text-[#424245]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#86868B] block font-semibold">Typical Rent</span>
                  <span className="text-sm font-bold text-emerald-600 font-sans">{current.avgRent}</span>
                </div>
                <button 
                  onClick={() => {
                    if (onSelectFilter) onSelectFilter("Near " + current.name.split(' ')[0]);
                    const el = document.getElementById("listings");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-full bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold transition-all cursor-pointer shadow-apple-sm"
                >
                  View Stays →
                </button>
              </div>
            </div>
          </div>

          {/* Floating Category Filter Dock at bottom */}
          <div className="relative z-30 p-4 sm:p-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-t from-black/40 via-black/15 to-transparent">
            {/* Locality Selector Pills */}
            <div className="bg-white/90 backdrop-blur-xl p-1.5 rounded-full border border-black/10 shadow-apple-md flex flex-wrap items-center gap-1.5 text-xs">
              <button 
                onClick={() => setSelectedHub('lanka')}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  selectedHub === 'lanka' ? 'bg-[#1D1D1F] text-white shadow-apple-sm' : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                🎓 BHU Lanka
              </button>
              <button 
                onClick={() => setSelectedHub('sigra')}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  selectedHub === 'sigra' ? 'bg-[#1D1D1F] text-white shadow-apple-sm' : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                📚 Sigra Coachings
              </button>
              <button 
                onClick={() => setSelectedHub('durgakund')}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  selectedHub === 'durgakund' ? 'bg-[#1D1D1F] text-white shadow-apple-sm' : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                📖 Durgakund
              </button>
              <button 
                onClick={() => setSelectedHub('assi')}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  selectedHub === 'assi' ? 'bg-[#1D1D1F] text-white shadow-apple-sm' : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                🌅 Assi Ghat
              </button>
              <button 
                onClick={() => setSelectedHub('cantt')}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  selectedHub === 'cantt' ? 'bg-[#1D1D1F] text-white shadow-apple-sm' : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                🚆 Cantt Station
              </button>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-2.5">
              <button 
                onClick={() => {
                  const el = document.getElementById("listings");
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-full bg-white text-[#1D1D1F] text-xs font-bold shadow-apple-md hover:bg-gray-50 transition-all cursor-pointer border border-black/10"
              >
                Explore on Map
              </button>
              <button 
                onClick={() => onOpenSchedule({ name: current.name })}
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-apple-md transition-all cursor-pointer"
              >
                Schedule Free Locality Tour
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
