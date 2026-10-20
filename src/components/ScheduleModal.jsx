import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ScheduleModal({ isOpen, onClose, property }) {
  const [step, setStep] = useState('form');
  const [visitType, setVisitType] = useState('physical');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM - 1:00 PM');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    sharing: 'Double Sharing'
  });

  if (!isOpen) return null;

  const propertyName = property?.name || "The Kashi Royal Suites & Coliving";
  const propertyLocality = property?.locality || "Lanka, Varanasi (Near BHU)";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#18181c] text-white w-full max-w-lg rounded-3xl border border-white/15 shadow-2xl overflow-hidden relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'confirmed' ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="font-sans text-2xl font-bold text-white">
              Visit Scheduled Successfully!
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto font-normal">
              We have reserved your free tour of <strong className="text-white">{propertyName}</strong> on <strong className="text-white">{selectedDate}</strong> at <strong className="text-white">{selectedSlot}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Visitor:</span>
                <span className="font-semibold text-white">{formData.name || 'Student / Guest'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Contact:</span>
                <span className="font-semibold text-white">{formData.phone || '+91 95304 04364'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Visit Mode:</span>
                <span className="font-semibold text-emerald-400 uppercase text-[10px]">
                  {visitType === 'physical' ? 'Physical Property Tour' : 'Guided 360° Video Call'}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 font-normal">
              Our ONLY1BROKER accommodation manager will send property directions and Google Maps link to your WhatsApp number.
            </p>

            <button 
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm tracking-wide shadow-md transition-all cursor-pointer"
            >
              Done &amp; Return to Listings
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-500/30">
              <Calendar className="w-3.5 h-3.5" />
              <span>Zero Cost • Free Scheduled Visit</span>
            </div>

            <h3 className="font-sans text-2xl font-bold text-white mb-1">
              Schedule Your Free Visit
            </h3>

            <p className="text-xs text-gray-400 mb-6 flex items-center gap-1 font-normal">
              <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{propertyName} • {propertyLocality}</span>
            </p>

            {/* Visit Mode Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5 border border-white/10 mb-5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setVisitType('physical')}
                className={`py-2 px-3 rounded-lg transition-all cursor-pointer ${
                  visitType === 'physical' ? 'bg-[#0066FF] text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                In-Person Walkthrough
              </button>
              <button
                type="button"
                onClick={() => setVisitType('virtual')}
                className={`py-2 px-3 rounded-lg transition-all cursor-pointer ${
                  visitType === 'virtual' ? 'bg-[#0066FF] text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Live Guided Video Tour
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase font-semibold text-gray-400 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Aryan Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#0066FF] font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-semibold text-gray-400 mb-1">
                  WhatsApp / Contact Number
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 95304 04364"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#0066FF] font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase font-semibold text-gray-400 mb-1">
                    Preferred Day
                  </label>
                  <select 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#222228] border border-white/15 text-white text-xs focus:outline-none focus:border-[#0066FF] cursor-pointer"
                  >
                    <option>Today Afternoon</option>
                    <option>Tomorrow</option>
                    <option>This Weekend</option>
                    <option>Next Monday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-semibold text-gray-400 mb-1">
                    Preferred Time Slot
                  </label>
                  <select 
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#222228] border border-white/15 text-white text-xs focus:outline-none focus:border-[#0066FF] cursor-pointer"
                  >
                    <option>10:00 AM - 12:00 PM</option>
                    <option>12:00 PM - 2:00 PM</option>
                    <option>2:00 PM - 5:00 PM</option>
                    <option>5:00 PM - 7:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm tracking-wide shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Free Property Visit</span>
                </button>
              </div>

              <div className="text-center text-[10px] text-gray-400 flex items-center justify-center gap-1.5 font-normal">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligations • Instant confirmation over WhatsApp</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
