import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Users, 
  IndianRupee, 
  Calendar
} from 'lucide-react';
import ImageStreamHero from './ImageStreamHero';
import DropdownMenu from './DropdownMenu';

const streamImages = [
  { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80", alt: "Modern Student Room" },
  { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80", alt: "Warm Furnished Suite" },
  { src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80", alt: "Minimalist Study Space" },
  { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80", alt: "Assi Ghat Studio" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80", alt: "Modern Coliving Interior" },
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80", alt: "Luxury Building Facade" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80", alt: "Executive Residency Suite" },
  { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80", alt: "Aesthetic Study Desk" },
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80", alt: "Comfortable Bedroom" }
];

const localityOptions = [
  { label: "All Varanasi", value: "All" },
  { label: "Lanka (Near BHU)", value: "Lanka" },
  { label: "Sigra (Coachings)", value: "Sigra" },
  { label: "Durgakund (Libraries)", value: "Durgakund" },
  { label: "Assi Ghat / Nagwa", value: "Assi" },
  { label: "Bhelupur Hub", value: "Bhelupur" },
  { label: "Kabir Nagar", value: "Kabir Nagar" },
  { label: "Mahmoorganj", value: "Mahmoorganj" }
];

const sharingOptions = [
  { label: "Any Occupancy", value: "All" },
  { label: "Single Private Room", value: "Single" },
  { label: "Double Sharing", value: "Double" },
  { label: "Triple Sharing", value: "Triple" }
];

const budgetOptions = [
  { label: "All Budgets", value: "All" },
  { label: "Under ₹6,000/mo", value: "low" },
  { label: "₹6,000 - ₹9,000/mo", value: "mid" },
  { label: "₹9,000 - ₹14,000/mo", value: "high" },
  { label: "₹14,000+ Luxury", value: "luxury" }
];

const moveInOptions = [
  { label: "Immediate Move-in", value: "immediate" },
  { label: "Within 15 Days", value: "15days" },
  { label: "Next Month", value: "nextmonth" }
];

export default function Hero({ onSearch, activeCategory, setActiveCategory }) {
  const [selectedLocality, setSelectedLocality] = useState('All');
  const [selectedSharing, setSelectedSharing] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const [selectedMoveIn, setSelectedMoveIn] = useState('immediate');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({
      locality: selectedLocality,
      sharing: selectedSharing,
      budget: selectedBudget,
      moveIn: selectedMoveIn,
      category: activeCategory
    });
    const el = document.getElementById('listings');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getLocalityLabel = () => localityOptions.find(o => o.value === selectedLocality)?.label || "All Varanasi";
  const getSharingLabel = () => sharingOptions.find(o => o.value === selectedSharing)?.label || "Any Occupancy";
  const getBudgetLabel = () => budgetOptions.find(o => o.value === selectedBudget)?.label || "All Budgets";
  const getMoveInLabel = () => moveInOptions.find(o => o.value === selectedMoveIn)?.label || "Immediate Move-in";

  return (
    <section className="relative bg-white text-[#1D1D1F] overflow-hidden border-b border-black/5 min-h-[100dvh] w-full flex items-center justify-center pt-14 sm:pt-16 pb-12 sm:pb-16">
      
      {/* 3D Perspective Moving Property Corridor (Positioned at Center of Hero) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <ImageStreamHero
          images={streamImages}
          cards={10}
          speed={22}
          axis={50}
          className="h-full w-full opacity-65 sm:opacity-85"
        />

        {/* Soft edge radial and vertical gradients for seamless text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/35 to-white pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-white/50 to-white/90 pointer-events-none"></div>
      </div>

      {/* Floating Center Hero Content: Headline with Decreased Top Margin, Tagline, Categories, Full Glass Filter */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 text-center">
        
        {/* Main Brand Title & Tagline in Cinzel (Decreased top margin) */}
        <h1 className="gsap-reveal text-5xl sm:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-[#0F172A] leading-tight mt-0 mb-2 sm:mb-2.5 drop-shadow-sm">
          Only1Broker
        </h1>

        <p className="gsap-reveal text-base sm:text-lg lg:text-xl text-[#1E293B] max-w-xl mx-auto font-medium leading-relaxed mb-4 sm:mb-5">
          Zero Brokerage. 100% Physically Verified Stays in Varanasi.
        </p>

        {/* Glassmorphic Category Selector Tabs */}
        <div className="gsap-reveal flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer shadow-sm ${
              activeCategory === 'All'
                ? 'bg-[#0F172A]/95 text-white backdrop-blur-2xl border border-white/40 shadow-apple-md scale-105'
                : 'bg-white/30 hover:bg-white/50 text-[#1E293B] backdrop-blur-2xl border border-white/70'
            }`}
          >
            All Stays
          </button>
          <button
            onClick={() => setActiveCategory('boys')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer shadow-sm ${
              activeCategory === 'boys'
                ? 'bg-[#0F172A]/95 text-white backdrop-blur-2xl border border-white/40 shadow-apple-md scale-105'
                : 'bg-white/30 hover:bg-white/50 text-[#1E293B] backdrop-blur-2xl border border-white/70'
            }`}
          >
            👦 Boys PG
          </button>
          <button
            onClick={() => setActiveCategory('girls')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer shadow-sm ${
              activeCategory === 'girls'
                ? 'bg-[#0F172A]/95 text-white backdrop-blur-2xl border border-white/40 shadow-apple-md scale-105'
                : 'bg-white/30 hover:bg-white/50 text-[#1E293B] backdrop-blur-2xl border border-white/70'
            }`}
          >
            👧 Girls PG
          </button>
          <button
            onClick={() => setActiveCategory('coed')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer shadow-sm ${
              activeCategory === 'coed'
                ? 'bg-[#0F172A]/95 text-white backdrop-blur-2xl border border-white/40 shadow-apple-md scale-105'
                : 'bg-white/30 hover:bg-white/50 text-[#1E293B] backdrop-blur-2xl border border-white/70'
            }`}
          >
            🤝 Coliving / Unisex
          </button>
        </div>

        {/* Full-Glass Glassmorphic Search Filter Dock with Custom Animated DropdownMenu */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="gsap-reveal p-4 sm:p-5 rounded-[32px] bg-white/25 hover:bg-white/30 backdrop-blur-3xl border border-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.14),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(255,255,255,0.3)] space-y-3.5 transition-all duration-300 relative z-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {/* Locality Dropdown */}
            <DropdownMenu
              label="Locality / Hub"
              value={selectedLocality}
              displayValue={getLocalityLabel()}
              options={localityOptions}
              onChange={(val) => setSelectedLocality(val)}
              Icon={<MapPin className="w-4 h-4" />}
            />

            {/* Sharing Type Dropdown */}
            <DropdownMenu
              label="Room Sharing"
              value={selectedSharing}
              displayValue={getSharingLabel()}
              options={sharingOptions}
              onChange={(val) => setSelectedSharing(val)}
              Icon={<Users className="w-4 h-4" />}
            />

            {/* Target Budget Dropdown */}
            <DropdownMenu
              label="Target Budget"
              value={selectedBudget}
              displayValue={getBudgetLabel()}
              options={budgetOptions}
              onChange={(val) => setSelectedBudget(val)}
              Icon={<IndianRupee className="w-4 h-4" />}
            />

            {/* Move-in Period Dropdown */}
            <DropdownMenu
              label="Move-In Period"
              value={selectedMoveIn}
              displayValue={getMoveInLabel()}
              options={moveInOptions}
              onChange={(val) => setSelectedMoveIn(val)}
              Icon={<Calendar className="w-4 h-4" />}
            />
          </div>

          {/* Search Button */}
          <button 
            type="submit" 
            className="w-full py-4 px-6 rounded-2xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,102,255,0.4)] border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-98"
          >
            <Search className="w-4 h-4" />
            <span>Search Verified PGs &amp; Hostels on only1broker</span>
          </button>
        </form>

      </div>

    </section>
  );
}
