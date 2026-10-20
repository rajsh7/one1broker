import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  MapPin, 
  Star, 
  Wifi, 
  UtensilsCrossed, 
  Wind, 
  Zap, 
  ShieldCheck, 
  Check, 
  ChevronRight, 
  Filter, 
  SlidersHorizontal,
  Eye,
  CalendarCheck,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { propertiesData } from '../data/properties';

export default function PropertyListings({ 
  onOpenDetails, 
  onOpenSchedule, 
  activeFilter = "All", 
  setActiveFilter,
  searchParams 
}) {
  const [maxPrice, setMaxPrice] = useState(15000);
  const [wishlist, setWishlist] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const filterPills = [
    "All Stays",
    "Boys PG",
    "Girls PG",
    "Co-ed",
    "Single Room",
    "Double Sharing",
    "Under ₹6,000",
    "₹6,000 - ₹10,000",
    "₹10,000+",
    "AC Included",
    "Food Included",
    "Near BHU",
    "Near Sigra"
  ];

  const isPillActive = (pill) => {
    if (pill === "All Stays") {
      return !activeFilter || activeFilter === "All" || activeFilter === "All Stays";
    }
    return activeFilter === pill;
  };

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredProperties = useMemo(() => {
    return propertiesData.filter(item => {
      // Price slider
      if (item.price > maxPrice) return false;

      // Filter Pill
      const isAll = !activeFilter || activeFilter === "All" || activeFilter === "All Stays";
      if (!isAll) {
        if (activeFilter === "Boys PG" && item.genderType !== "boys") return false;
        if (activeFilter === "Girls PG" && item.genderType !== "girls") return false;
        if (activeFilter === "Co-ed" && item.genderType !== "coed") return false;
        if (activeFilter === "Single Room" && !item.roomTypes.some(r => r.includes("Single"))) return false;
        if (activeFilter === "Double Sharing" && !item.roomTypes.some(r => r.includes("Double"))) return false;
        if (activeFilter === "Under ₹6,000" && item.price >= 6000) return false;
        if (activeFilter === "₹6,000 - ₹10,000" && (item.price < 6000 || item.price > 10000)) return false;
        if (activeFilter === "₹10,000+" && item.price <= 10000) return false;
        if (activeFilter === "AC Included" && !item.amenities.some(a => a.toLowerCase().includes("ac"))) return false;
        if (activeFilter === "Food Included" && !item.amenities.some(a => a.toLowerCase().includes("meal") || a.toLowerCase().includes("food") || a.toLowerCase().includes("mess"))) return false;
        if (activeFilter === "Near BHU" && !item.locality.toLowerCase().includes("lanka") && !item.distance.toLowerCase().includes("bhu")) return false;
        if (activeFilter === "Near Sigra" && !item.locality.toLowerCase().includes("sigra")) return false;
        if (activeFilter.startsWith("Near ") && !item.locality.toLowerCase().includes(activeFilter.replace("Near ", "").toLowerCase())) return false;
      }

      // External search params if provided
      if (searchParams) {
        if (searchParams.category && searchParams.category !== 'All' && item.genderType !== searchParams.category) return false;
        if (searchParams.locality && searchParams.locality !== 'All' && !item.locality.toLowerCase().includes(searchParams.locality.toLowerCase())) return false;
        if (searchParams.sharing && searchParams.sharing !== 'All' && !item.roomTypes.some(r => r.toLowerCase().includes(searchParams.sharing.toLowerCase()))) return false;
        if (searchParams.budget === 'low' && item.price >= 6000) return false;
        if (searchParams.budget === 'mid' && (item.price < 6000 || item.price > 9000)) return false;
        if (searchParams.budget === 'high' && (item.price < 9000 || item.price > 14000)) return false;
        if (searchParams.budget === 'luxury' && item.price <= 14000) return false;
      }

      return true;
    });
  }, [activeFilter, maxPrice, searchParams]);

  const displayedList = filteredProperties.slice(0, visibleCount);

  const minPrice = 4500;
  const maxPriceLimit = 15000;
  const sliderPercentage = Math.min(100, Math.max(0, Math.round(((maxPrice - minPrice) / (maxPriceLimit - minPrice)) * 100)));

  return (
    <section id="listings" className="py-20 sm:py-28 bg-[#FBFBFD] text-[#1D1D1F] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-3">
            Popular PGs &amp; Hostels in Varanasi
          </h2>
          <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Zero brokerage verified accommodations near BHU, Lanka, Sigra, Kashi Vidyapith &amp; Assi Ghat with all-inclusive pricing.
          </p>
        </div>

        {/* Filter Pills Bar with Prominent 'All Stays' Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 pt-1">
            {filterPills.map((pill) => {
              const active = isPillActive(pill);
              return (
                <button
                  key={pill}
                  onClick={() => setActiveFilter(pill === "All Stays" ? "All" : pill)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#0F172A] text-white shadow-apple-md scale-[1.02]'
                      : 'bg-white text-[#424245] border border-black/10 hover:bg-[#F5F5F7] hover:text-[#0F172A] shadow-apple-sm'
                  }`}
                >
                  {pill === "All Stays" && <Sparkles className={`w-3.5 h-3.5 ${active ? 'text-amber-300' : 'text-[#0066FF]'}`} />}
                  <span>{pill === "All Stays" ? `All Stays (${propertiesData.length})` : pill}</span>
                </button>
              );
            })}

            {/* Custom active filter pill if filtered by a locality not in standard list */}
            {activeFilter && !filterPills.includes(activeFilter) && activeFilter !== "All" && activeFilter !== "All Stays" && (
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-semibold whitespace-nowrap">
                <span>Active: {activeFilter}</span>
                <button 
                  onClick={() => setActiveFilter("All")}
                  className="hover:text-black font-bold ml-1 cursor-pointer"
                  title="Clear filter"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Price Slider with Live Color Fill & Results Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-apple-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <SlidersHorizontal className="w-5 h-5 text-[#0066FF]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-semibold text-[#1D1D1F] mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#475569]">Max Budget:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066FF] font-bold text-xs border border-blue-200">
                    ₹{maxPrice.toLocaleString('en-IN')}/month
                  </span>
                </div>
                <span className="text-emerald-600 text-sm font-bold font-sans">
                  ₹{maxPrice.toLocaleString('en-IN')}/mo
                </span>
              </div>
              
              {/* Vibrant Colored Range Slider */}
              <input 
                type="range"
                min={minPrice}
                max={maxPriceLimit}
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, #0066FF 0%, #0066FF ${sliderPercentage}%, #E2E8F0 ${sliderPercentage}%, #E2E8F0 100%)`
                }}
                className="w-full h-3 rounded-lg appearance-none cursor-pointer custom-range-slider shadow-inner"
              />
              
              <div className="flex justify-between text-[11px] text-[#64748B] font-semibold mt-1.5">
                <span>₹4,500</span>
                <span>₹9,500</span>
                <span>₹15,000+</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
            <span className="text-xs font-semibold text-[#64748B]">
              Showing <strong className="text-[#0F172A] text-sm">{filteredProperties.length}</strong> verified stays
            </span>
            {(!isPillActive("All Stays") || maxPrice < 15000) && (
              <button 
                onClick={() => {
                  setActiveFilter("All");
                  setMaxPrice(15000);
                }}
                className="flex items-center gap-1 text-xs font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Property Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedList.map((property) => {
            const currentImgIndex = activeImageIndex[property.id] || 0;
            const isWishlisted = !!wishlist[property.id];

            return (
              <div 
                key={property.id}
                className="gsap-reveal group bg-white rounded-3xl overflow-hidden border border-black/8 shadow-apple-card hover:shadow-apple-float transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header with Carousel Indicators */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={property.images[currentImgIndex]} 
                    alt={property.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-1.5">
                      {property.isVerified && (
                        <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0F172A] text-[11px] font-semibold flex items-center gap-1 shadow-apple-sm border border-black/5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>100% Verified</span>
                        </span>
                      )}
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                        property.genderType === 'boys' 
                          ? 'bg-blue-600/90 text-white' 
                          : property.genderType === 'girls'
                          ? 'bg-purple-600/90 text-white'
                          : 'bg-emerald-600/90 text-white'
                      }`}>
                        {property.genderType}
                      </span>
                    </div>

                    <button 
                      onClick={(e) => toggleWishlist(property.id, e)}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1D1D1F] hover:text-black shadow-apple-sm hover:scale-110 transition-transform pointer-events-auto cursor-pointer"
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-black text-black' : ''}`} />
                    </button>
                  </div>

                  {/* Rating Pill */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-amber-300 text-xs font-semibold flex items-center gap-1 border border-white/20">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>{property.rating}</span>
                    <span className="text-gray-400 text-[10px]">({property.reviewsCount})</span>
                  </div>

                  {/* Image Dots */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    {property.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(prev => ({ ...prev, [property.id]: idx }));
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentImgIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                        }`}
                        aria-label={`Show slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-medium mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span className="truncate">{property.distance}</span>
                    </div>

                    <h3 className="text-lg font-sans font-bold text-[#0F172A] tracking-tight group-hover:text-[#0066FF] transition-colors line-clamp-1 mb-2">
                      {property.name}
                    </h3>

                    {/* Room Type Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {property.roomTypes.map((room, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569] text-[11px] font-medium">
                          {room}
                        </span>
                      ))}
                    </div>

                    {/* Amenities Checklist */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#334155] font-normal mb-5 pt-3 border-t border-gray-100">
                      {property.amenities.slice(0, 4).map((amenity, i) => (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Row (Price in Emerald Green) */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-[#64748B] font-semibold uppercase tracking-wider">Starting at</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-emerald-600 font-sans tracking-tight">
                          ₹{property.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[#64748B] font-medium">/mo</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => onOpenDetails(property)}
                        className="p-2.5 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] transition-colors cursor-pointer"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => onOpenSchedule(property)}
                        className="px-4 py-2.5 rounded-full bg-[#0F172A] hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer active:scale-95"
                      >
                        <CalendarCheck className="w-3.5 h-3.5" />
                        <span>Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProperties.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] text-sm font-semibold tracking-tight border border-slate-300 shadow-apple-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              Show More Verified Stays ({filteredProperties.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
