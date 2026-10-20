import React, { useState } from 'react';
import { PhoneCall, CheckCircle2, ShieldCheck, Send } from 'lucide-react';

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locality: 'Lanka (Near BHU)',
    budget: '₹6,000 - ₹9,000'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#FBFBFD] border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-apple-float border border-black/8 p-8 sm:p-12 relative overflow-hidden">
          
          {submitted ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#1D1D1F] mb-2">
                Thank You, {formData.name || 'Friend'}!
              </h3>
              <p className="text-[#6E6E73] text-sm max-w-md mx-auto mb-6">
                Our ONLY1BROKER accommodation advisor is reviewing verified vacancies in {formData.locality} and will call you on {formData.phone || 'your number'} within 10 minutes.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#0066FF] hover:underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0066FF] text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>FREE ASSISTANCE IN 10 MINS</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-sans font-bold text-[#1D1D1F] tracking-tight mb-3">
                  Need Help Finding the Right PG?
                </h3>
                <p className="text-[#6E6E73] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Tell us your budget and preferred college or hub. Our on-ground ONLY1BROKER verified team will curate the best vacancies for you with zero middlemen fees.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Privacy Protected • No Spam Policy</span>
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase text-[#86868B] mb-1.5">
                        Your Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Aryan Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-black/5 text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase text-[#86868B] mb-1.5">
                        WhatsApp Number
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 95304 04364"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-black/5 text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase text-[#86868B] mb-1.5">
                        Preferred Locality
                      </label>
                      <select 
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-black/5 text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all font-medium cursor-pointer"
                      >
                        <option>Lanka (Near BHU)</option>
                        <option>Sigra (Coaching Hub)</option>
                        <option>Durgakund (Libraries)</option>
                        <option>Assi Ghat / Nagwa</option>
                        <option>Cantonment / Station</option>
                        <option>Kabir Nagar / Bhelupur</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase text-[#86868B] mb-1.5">
                        Target Monthly Budget
                      </label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-black/5 text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all font-medium cursor-pointer"
                      >
                        <option>Under ₹6,000 / mo</option>
                        <option>₹6,000 - ₹9,000 / mo</option>
                        <option>₹9,000 - ₹14,000 / mo</option>
                        <option>₹14,000+ Luxury Suites</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#0F172A] hover:bg-black text-white font-semibold text-sm tracking-tight shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Request Free Callback (Get Matched in 10 Mins)</span>
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
