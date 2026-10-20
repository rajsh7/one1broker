import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContainerScroll, { SectionScroll } from './components/ContainerScroll';
import FeaturedBanner from './components/FeaturedBanner';
import PropertyListings from './components/PropertyListings';
import VirtualTours from './components/VirtualTours';
import WhyChooseUs from './components/WhyChooseUs';
import NeighborhoodMap from './components/NeighborhoodMap';
import Guarantees from './components/Guarantees';
import ComparisonTable from './components/ComparisonTable';
import AmenitiesGrid from './components/AmenitiesGrid';
import LocalityGuide from './components/LocalityGuide';
import FaqSection from './components/FaqSection';
import Testimonials from './components/Testimonials';
import LocalityDirectory from './components/LocalityDirectory';
import ContactWithGlobe from './components/ContactWithGlobe';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import PropertyDetailsModal from './components/PropertyDetailsModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useGsapAnimation } from './hooks/useGsapAnimation';
import { Sparkles } from 'lucide-react';

export default function App() {
  // Initialize GSAP scroll-up text animation & scrollTrigger
  useGsapAnimation();

  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedPropertyForSchedule, setSelectedPropertyForSchedule] = useState(null);

  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedPropertyForDetails, setSelectedPropertyForDetails] = useState(null);

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchParams, setSearchParams] = useState(null);

  const handleOpenSchedule = (property = null) => {
    setSelectedPropertyForSchedule(property);
    setScheduleModalOpen(true);
  };

  const handleOpenDetails = (property) => {
    setSelectedPropertyForDetails(property);
    setDetailsModalOpen(true);
  };

  const handleSearch = (params) => {
    setSearchParams(params);
    if (params.category && params.category !== 'All') {
      if (params.category === 'boys') setActiveFilter('Boys PG');
      else if (params.category === 'girls') setActiveFilter('Girls PG');
      else if (params.category === 'coed') setActiveFilter('Co-ed');
    }
  };

  const handleSelectFilterFromNav = (filterName) => {
    setActiveFilter(filterName);
    if (filterName === 'Boys PG') setActiveCategory('boys');
    else if (filterName === 'Girls PG') setActiveCategory('girls');
    else if (filterName === 'Co-ed') setActiveCategory('coed');
  };

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] flex flex-col font-sans selection:bg-[#0066FF] selection:text-white relative">
      {/* 1. Top Navbar (Official only1broker logo, un-congested single-line links) */}
      <Navbar 
        onOpenSchedule={handleOpenSchedule} 
        onSelectFilter={handleSelectFilterFromNav}
      />

      {/* 2. Hero Section with 3D Perspective Corridor */}
      <Hero 
        onSearch={handleSearch}
        activeCategory={activeCategory}
        setActiveCategory={(cat) => {
          setActiveCategory(cat);
          if (cat === 'boys') setActiveFilter('Boys PG');
          else if (cat === 'girls') setActiveFilter('Girls PG');
          else if (cat === 'coed') setActiveFilter('Co-ed');
          else setActiveFilter('All');
        }}
      />

      {/* 3. Second Section: ContainerScroll (Aceternity 3D Perspective Tilt Card Showcase) */}
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#0F172A] tracking-tight">
              The Kashi Royal Suites &amp; Coliving
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-xl font-normal">
              100% Physically Verified Coliving • 250m from BHU Main Gate, Lanka
            </p>
          </div>
        }
      >
        <FeaturedBanner 
          onOpenDetails={handleOpenDetails}
          onOpenSchedule={handleOpenSchedule}
          isInsideScrollContainer={true}
        />
      </ContainerScroll>

      {/* 4. Main Listings Grid with Filters & Price Slider */}
      <SectionScroll>
        <PropertyListings 
          onOpenDetails={handleOpenDetails}
          onOpenSchedule={handleOpenSchedule}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchParams={searchParams}
        />
      </SectionScroll>

      {/* 5. Curated Collections with 360° Virtual Tours */}
      <SectionScroll>
        <VirtualTours 
          onOpenSchedule={handleOpenSchedule}
          onOpenDetails={handleOpenDetails}
        />
      </SectionScroll>

      {/* 6. Why Choose only1broker (Apple Pro Dark Contrast Section) */}
      <SectionScroll>
        <WhyChooseUs />
      </SectionScroll>

      {/* 7. Interactive Neighborhood Explorer & Campus Map */}
      <SectionScroll>
        <NeighborhoodMap 
          onOpenSchedule={handleOpenSchedule}
          onSelectFilter={handleSelectFilterFromNav}
        />
      </SectionScroll>

      {/* 8. Trust Guarantees & 3-Step Move-In Ribbon */}
      <SectionScroll>
        <Guarantees 
          onOpenSchedule={handleOpenSchedule}
        />
      </SectionScroll>

      {/* 9. Comparison Matrix: Random Brokers vs only1broker */}
      <SectionScroll>
        <ComparisonTable 
          onOpenSchedule={handleOpenSchedule}
        />
      </SectionScroll>

      {/* 10. Comprehensive Amenities Grid */}
      <SectionScroll>
        <AmenitiesGrid 
          onOpenSchedule={handleOpenSchedule}
        />
      </SectionScroll>

      {/* 11. Locality & Academic Life Editorial Guide */}
      <SectionScroll>
        <LocalityGuide />
      </SectionScroll>

      {/* 12. Interactive Frequently Asked Questions */}
      <SectionScroll>
        <FaqSection />
      </SectionScroll>

      {/* 13. Verified Resident Reviews & Testimonials */}
      <SectionScroll>
        <div id="reviews">
          <Testimonials />
        </div>
      </SectionScroll>

      {/* 14. Locality Directory of Varanasi Hubs */}
      <SectionScroll>
        <LocalityDirectory 
          onSelectLocality={(localityName) => {
            setActiveFilter("Near " + localityName);
          }}
        />
      </SectionScroll>

      {/* 15. Contact Us Section with 3D Interactive Rotating Wireframe Globe */}
      <SectionScroll>
        <ContactWithGlobe />
      </SectionScroll>

      {/* 16. Mega Footer */}
      <Footer 
        onSelectFilter={handleSelectFilterFromNav}
      />

      {/* Floating 24/7 WhatsApp Assistance */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <ScheduleModal 
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        property={selectedPropertyForSchedule}
      />

      <PropertyDetailsModal 
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        property={selectedPropertyForDetails}
        onOpenSchedule={handleOpenSchedule}
      />
    </div>
  );
}
