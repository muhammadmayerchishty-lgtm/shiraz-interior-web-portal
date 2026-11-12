import React from 'react';
import { MapPin, Navigation, Clock, Phone, Car, Compass, Calendar, ExternalLink } from 'lucide-react';
import { GOOGLE_STATS } from '../data/reviews';

interface LocationShowroomProps {
  onOpenBooking: () => void;
}

export const LocationShowroom: React.FC<LocationShowroomProps> = ({ onOpenBooking }) => {
  const googleMapsUrl =
    'https://maps.google.com/?q=Decent+Plaza+KU+Circular+Rd+Zoramin+Residency+Mosamiyat+Karachi';

  return (
    <section id="showroom" className="py-20 bg-[#07090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Karachi Design Studio & Showroom</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
                Visit Our Studio in Mosamiyat, Karachi
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-2 font-light">
                Conveniently located at Decent Plaza on KU Circular Road, directly facing Zoramin Residency in Mosamiyat. Step in to touch actual material textures, test motorized blind motors, and inspect full-height WPC louver wall mockups.
              </p>
            </div>

            {/* Address & Timings card */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Full Physical Address</div>
                  <div className="text-xs sm:text-sm text-stone-300 mt-0.5">
                    Decent Plaza, KU Circular Road, Opposite Zoramin Residency, Mosamiyat, Karachi, Pakistan
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    *Near Karachi University / Scheme 33 intersection
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Showroom Visiting Hours</div>
                  <div className="text-xs sm:text-sm text-stone-300 mt-0.5">
                    <strong>Monday – Saturday:</strong> 11:00 AM – 10:00 PM
                  </div>
                  <div className="text-xs sm:text-sm text-stone-300">
                    <strong>Sunday:</strong> 3:00 PM – 9:00 PM (By Appointment & Walk-in)
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Direct Phone & WhatsApp</div>
                  <div className="text-xs sm:text-sm text-stone-300 mt-0.5 flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${GOOGLE_STATS.rawPhone}`}
                      className="font-mono text-[#E5C365] hover:underline"
                    >
                      {GOOGLE_STATS.phone}
                    </a>
                    <span className="text-stone-600">·</span>
                    <span className="text-stone-400">Shiraz Bhai & Technical Team</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#090C0E] bg-gradient-to-r from-[#DFBF77] to-[#C5A059] hover:from-[#EAD598] hover:to-[#D4AF53] rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-[#C5A059]/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-3 text-xs sm:text-sm font-medium text-stone-200 hover:text-white bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-[#C5A059]/40 rounded-lg transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Can't Visit? Book Free At-Home Measurement</span>
              </button>
            </div>
          </div>

          {/* Right Visual Map Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl bg-stone-950">
              {/* Styled Interactive Map Representation with live pin */}
              <div className="h-80 sm:h-96 relative bg-[#090D11] p-6 flex flex-col justify-between overflow-hidden">
                {/* Visual grid pattern representing map streets */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 50% 50%, rgba(197, 160, 89, 0.15) 0%, transparent 60%),
                      linear-gradient(to right, #1f2937 1px, transparent 1px),
                      linear-gradient(to bottom, #1f2937 1px, transparent 1px)
                    `,
                    backgroundSize: '100% 100%, 32px 32px, 32px 32px',
                  }}
                />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-lg bg-[#090C0E]/90 border border-[#C5A059]/30 text-xs text-white font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>Open Today until 10:00 PM</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-stone-900/90 border border-stone-800 text-xs text-stone-300">
                    Mosamiyat, Karachi
                  </div>
                </div>

                {/* Center Pin Marker */}
                <div className="relative z-10 my-auto text-center space-y-2">
                  <div className="relative inline-block">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] flex items-center justify-center text-[#F3E5AB] mx-auto shadow-2xl shadow-[#C5A059]/40 animate-bounce">
                      <MapPin className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="bg-[#090C0E]/95 border border-[#C5A059]/40 rounded-xl p-3 max-w-xs mx-auto shadow-xl">
                    <div className="text-sm font-display font-bold text-white">Shiraz Interior Studio</div>
                    <div className="text-xs text-[#E5C365]">Decent Plaza · KU Circular Rd</div>
                    <div className="text-[11px] text-stone-400">Facing Zoramin Residency</div>
                  </div>
                </div>

                {/* Bottom Route Summary */}
                <div className="relative z-10 p-3.5 rounded-xl bg-[#090C0E]/90 backdrop-blur-md border border-stone-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-stone-300">
                    <Car className="w-4 h-4 text-[#C5A059]" />
                    <span>Free Dedicated Client Parking Available</span>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5A059] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
