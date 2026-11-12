import React, { useState } from 'react';
import { Ruler, Calendar, Clock, MapPin, Send, CheckCircle2, ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { KARACHI_AREAS } from '../data/products';
import { GOOGLE_STATS } from '../data/reviews';

export const InlineBookingForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedArea, setSelectedArea] = useState('mosamiyat');
  const [addressDetails, setAddressDetails] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['PVC & WPC Wall Panelling']);
  const [appointmentDate, setAppointmentDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('Afternoon (2:00 PM – 6:00 PM)');
  const [notes, setNotes] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const availableServices = [
    'Luxury 3D Wallpapers',
    'PVC & WPC Wall Panelling',
    'Wooden & Vinyl Flooring',
    'Modern Window Blinds',
    'Full Home/Office Renovation',
    'UV Marble Accent Sheets'
  ];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const currentAreaObj = KARACHI_AREAS.find((a) => a.id === selectedArea) || KARACHI_AREAS[0];

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);

    const message = `*Free Site Visit & Consultation Request — Shiraz Interior Web App*
👤 *Client Name:* ${fullName || 'Client'}
📞 *Phone / WhatsApp:* ${phone}
📍 *Karachi Area:* ${currentAreaObj.name} (${currentAreaObj.zone})
🏠 *Specific Address:* ${addressDetails || 'Will send Google Maps pin'}
🛠️ *Services Required:* ${selectedServices.join(', ')}
📅 *Preferred Date:* ${appointmentDate}
⏰ *Time Window:* ${timeSlot}
📝 *Client Notes:* ${notes || 'Please bring physical swatches & laser meter.'}`;

    const waLink = `https://wa.me/923452769981?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book-visit" className="py-20 bg-[#090C0E] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium flex items-center justify-center gap-1.5">
            <Ruler className="w-3.5 h-3.5" />
            <span>Complimentary On-Site Inspection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
            Book Your Free Measurement & Consultation Visit
          </h2>
          <p className="text-sm text-stone-400">
            No obligation. Our supervisor arrives at your Karachi premises with precision laser measurement tools and full physical swatch albums.
          </p>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8">
          {[
            { num: 1, title: 'Services & Area' },
            { num: 2, title: 'Contact Details' },
            { num: 3, title: 'Schedule & Confirm' }
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === item.num
                    ? 'bg-[#C5A059] text-[#090C0E] ring-4 ring-[#C5A059]/20 font-display'
                    : step > item.num
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-800 text-stone-400'
                }`}
              >
                {step > item.num ? '✓' : item.num}
              </div>
              <span
                className={`text-xs font-medium hidden sm:inline ${
                  step === item.num ? 'text-white' : 'text-stone-500'
                }`}
              >
                {item.title}
              </span>
              {item.num < 3 && <div className="w-6 sm:w-12 h-px bg-stone-800" />}
            </div>
          ))}
        </div>

        {/* Multi-step Form Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#C5A059]/30 shadow-2xl bg-gradient-to-b from-[#0D1217] to-[#0A0D10]">
          {isCompleted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Site Visit Request Dispatched!
              </h3>
              <p className="text-sm text-stone-300 max-w-lg mx-auto leading-relaxed">
                Thank you <strong className="text-white">{fullName || 'Valued Client'}</strong>! Your appointment request for{' '}
                <strong className="text-[#C5A059]">{currentAreaObj.name}</strong> on <strong className="text-white">{appointmentDate}</strong> ({timeSlot}) has been sent directly to Shiraz Interior’s WhatsApp operations coordinator.
              </p>
              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 max-w-md mx-auto text-xs text-stone-300 text-left space-y-1.5">
                <div><span className="text-stone-400">Services:</span> <strong className="text-white">{selectedServices.join(', ')}</strong></div>
                <div><span className="text-stone-400">Phone:</span> <strong className="font-mono text-white">{phone}</strong></div>
                <div><span className="text-stone-400">Visit Fee:</span> <strong className="text-emerald-400">100% FREE (Rs. 0)</strong></div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsCompleted(false);
                    setStep(1);
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-[#090C0E] bg-[#C5A059] hover:bg-[#D4AF53] rounded-lg transition-colors"
                >
                  Book Another Visit
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              {/* STEP 1: Services & Area */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="text-sm font-semibold text-white block mb-2">
                      Select Services You Are Interested In:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {availableServices.map((srv) => (
                        <div
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all text-xs flex items-center gap-2.5 ${
                            selectedServices.includes(srv)
                              ? 'bg-[#C5A059]/15 border-[#C5A059] text-white font-medium'
                              : 'bg-stone-900/40 border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800/40'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                              selectedServices.includes(srv)
                                ? 'bg-[#C5A059] border-[#C5A059]'
                                : 'border-stone-600'
                            }`}
                          >
                            {selectedServices.includes(srv) && <CheckCircle2 className="w-3.5 h-3.5 text-[#090C0E]" />}
                          </span>
                          <span className="truncate">{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-white block mb-2 flex items-center justify-between">
                      <span>Select Your Karachi Neighborhood:</span>
                      <span className="text-xs text-[#C5A059] font-normal">
                        Transit from Mosamiyat: {currentAreaObj.estimatedTransit}
                      </span>
                    </label>
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full px-4 py-3 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059]"
                    >
                      {KARACHI_AREAS.map((a) => (
                        <option key={a.id} value={a.id} className="bg-stone-900 text-white">
                          {a.name} ({a.zone})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4AF53] text-[#090C0E] font-bold text-xs sm:text-sm rounded-xl transition-colors"
                    >
                      Continue to Contact Details →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Contact Info */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1">
                        Your Full Name <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Asad Siddiqui"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1">
                        WhatsApp / Phone Number <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0345 2769981"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059] font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-300 block mb-1">
                      Street Address / Apartment / Project Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bungalow 42/B, Block 5, or Flat No."
                      value={addressDetails}
                      onChange={(e) => setAddressDetails(e.target.value)}
                      className="w-full px-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-300 block mb-1">
                      Room Types / Scope Details (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1 TV Lounge feature wall and 2 bedrooms for SPC flooring"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 text-xs text-stone-400 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!fullName.trim() || !phone.trim()) {
                          alert('Please enter your Name and Phone Number');
                          return;
                        }
                        setStep(3);
                      }}
                      className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4AF53] text-[#090C0E] font-bold text-xs sm:text-sm rounded-xl transition-colors"
                    >
                      Continue to Schedule →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Date, Time & Final Confirm */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Preferred Visit Date</span>
                      </label>
                      <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full px-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Preferred Time Slot</span>
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-4 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="Morning (11:00 AM – 2:00 PM)">Morning (11:00 AM – 2:00 PM)</option>
                        <option value="Afternoon (2:00 PM – 6:00 PM)">Afternoon (2:00 PM – 6:00 PM)</option>
                        <option value="Evening (6:00 PM – 9:00 PM)">Evening (6:00 PM – 9:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-xs text-stone-300 space-y-2">
                    <div className="text-xs font-semibold text-white uppercase tracking-wider">
                      Appointment Summary:
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Client:</span>
                      <span className="text-white font-medium">{fullName} ({phone})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Karachi Area:</span>
                      <span className="text-[#E5C365] font-medium">{currentAreaObj.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Services:</span>
                      <span className="text-white font-medium">{selectedServices.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Schedule:</span>
                      <span className="text-white font-medium">{appointmentDate} · {timeSlot}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-stone-800">
                      <span className="text-stone-400">Measurement Cost:</span>
                      <span className="text-emerald-400 font-bold">100% FREE (Rs. 0)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 text-xs text-stone-400 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-gradient-to-r from-[#DFBF77] via-[#C5A059] to-[#AA813F] hover:from-[#EBD39C] hover:to-[#B68D45] text-[#090C0E] font-bold text-sm rounded-xl transition-all shadow-xl shadow-[#C5A059]/25 flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Confirm & Send to WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
