import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Send, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';
import { KARACHI_AREAS } from '../data/products';
import { GOOGLE_STATS } from '../data/reviews';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('mosamiyat');
  const [customAddress, setCustomAddress] = useState('');
  const [services, setServices] = useState<string[]>(['WPC Wall Panels']);
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('Afternoon (2:00 PM – 6:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (serviceName: string) => {
    setServices((prev) =>
      prev.includes(serviceName) ? prev.filter((s) => s !== serviceName) : [...prev, serviceName]
    );
  };

  const selectedAreaObj = KARACHI_AREAS.find((a) => a.id === area) || KARACHI_AREAS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Format WhatsApp message to send directly to Shiraz Interior
    const whatsappText = `*New Free Site Visit Request — Shiraz Interior Website*
👤 *Name:* ${fullName || 'Valued Client'}
📞 *Phone:* ${phone}
📍 *Karachi Area:* ${selectedAreaObj.name}
🏠 *Address / Landmark:* ${customAddress || 'Will share location pin'}
🛠️ *Services Needed:* ${services.join(', ') || 'Interior Consultation'}
📅 *Preferred Date:* ${preferredDate}
⏰ *Time Slot:* ${timeSlot}
📝 *Notes:* ${notes || 'Please bring swatch catalogs.'}`;

    const waUrl = `https://wa.me/923452769981?text=${encodeURIComponent(whatsappText)}`;
    
    // Also trigger opening in new tab so user gets instant confirmation
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-xl bg-[#0E1217] border border-[#C5A059]/35 rounded-2xl shadow-2xl shadow-black overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#090C0E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Shiraz Interior Free Site Visit
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Measurement Visit Requested!
            </h3>
            <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{fullName || 'Valued Client'}</strong>. Our field measurement supervisor in Mosamiyat is reviewing your appointment for{' '}
              <strong className="text-[#C5A059]">{selectedAreaObj.name}</strong> on <strong className="text-white">{preferredDate}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-xs text-stone-300 text-left space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-stone-400">Services Requested:</span>
                <span className="font-medium text-white">{services.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Assigned Time Slot:</span>
                <span className="font-mono text-[#E5C365]">{timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Karachi Visit Fee:</span>
                <span className="font-bold text-[#10B981]">FREE (Rs. 0)</span>
              </div>
            </div>

            <p className="text-xs text-stone-400">
              We have synced your request to WhatsApp for instant supervisor dispatch. You can also call us directly at{' '}
              <a href={`tel:${GOOGLE_STATS.rawPhone}`} className="text-[#C5A059] font-mono underline">
                {GOOGLE_STATS.phone}
              </a>
              .
            </p>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 text-xs font-semibold text-[#090C0E] bg-[#C5A059] hover:bg-[#D4AF53] rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            <div>
              <h3 className="text-xl font-display font-bold text-white tracking-tight">
                Schedule Free Site Measurement
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Zero visit fee across Karachi. Our technician visits with laser distance meters and complete physical swatch catalogs for wallpapers, WPC louvers, and flooring.
              </p>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  Full Name <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asad Khan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  WhatsApp / Phone Number <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0345 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059] font-mono"
                />
              </div>
            </div>

            {/* Karachi Area & Address */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1 flex items-center justify-between">
                  <span>Karachi Neighborhood / Area</span>
                  <span className="text-[11px] text-[#C5A059]">Estimated arrival: {selectedAreaObj.estimatedTransit}</span>
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059]"
                >
                  {KARACHI_AREAS.map((a) => (
                    <option key={a.id} value={a.id} className="bg-stone-900 text-white">
                      {a.name} ({a.zone})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  Street Address / Apartment / Landmark
                </label>
                <input
                  type="text"
                  placeholder="e.g. Flat B-402, Zoramin Residency, KU Circular Rd"
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            {/* Services of Interest */}
            <div>
              <label className="text-xs font-medium text-stone-300 block mb-2">
                Services Needed (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  'Luxury 3D Wallpapers',
                  'PVC & WPC Louvers',
                  'SPC Waterproof Flooring',
                  'Motorized Window Blinds',
                  'UV Marble Accent Sheets',
                  'Full Room Styling Makeover'
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => toggleService(item)}
                    className={`p-2.5 rounded-lg border text-left transition-all flex items-center gap-2 ${
                      services.includes(item)
                        ? 'bg-[#C5A059]/15 border-[#C5A059] text-white font-medium'
                        : 'bg-stone-900/40 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                        services.includes(item) ? 'bg-[#C5A059] border-[#C5A059]' : 'border-stone-600'
                      }`}
                    >
                      {services.includes(item) && <CheckCircle2 className="w-3.5 h-3.5 text-[#090C0E]" />}
                    </span>
                    <span className="truncate">{item}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Time Slot</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="Morning (11:00 AM – 2:00 PM)">Morning (11:00 AM – 2:00 PM)</option>
                  <option value="Afternoon (2:00 PM – 6:00 PM)">Afternoon (2:00 PM – 6:00 PM)</option>
                  <option value="Evening (6:00 PM – 9:00 PM)">Evening (6:00 PM – 9:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="text-xs font-medium text-stone-300 block mb-1">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please bring dark oak louvers and metallic damask sample books..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 bg-stone-900 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 border-t border-stone-800">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#DFBF77] via-[#C5A059] to-[#AA813F] hover:from-[#EBD39C] hover:to-[#B68D45] text-[#090C0E] font-bold text-sm rounded-xl transition-all shadow-lg shadow-[#C5A059]/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Send to Shiraz Interior WhatsApp</span>
              </button>
              <p className="text-[11px] text-stone-400 text-center mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>100% Free Measurement with No Obligation to Purchase</span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
