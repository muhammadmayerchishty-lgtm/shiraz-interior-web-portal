import React from 'react';
import { Star, ShieldCheck, MapPin, ArrowRight, Ruler, CheckCircle2, PhoneCall } from 'lucide-react';
import { GOOGLE_STATS } from '../data/reviews';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting and subtle gradient */}
      <div className="absolute inset-0 bg-[#090C0E] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C5A059]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker - clean unboxed metadata with separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-400 font-medium">
              <span className="flex items-center gap-1.5 text-[#E6CA85]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Mosamiyat, Karachi</span>
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="flex items-center gap-1 text-[#F3E5AB]">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                <span className="font-semibold text-white">4.9</span> Google Rating
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-400">Decent Plaza, KU Circular Rd</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-display font-bold text-white tracking-tight leading-[1.18] [text-wrap:balance]">
              Shiraz Interior <span className="font-light text-stone-400">—</span> Premium Wallpapers,{' '}
              <span className="text-gold-gradient">PVC Panels & Turnkey Solutions</span> in Karachi
            </h1>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-light">
              Elevate your home, villa, or executive office with Karachi’s finest architectural finishes.
              Explore heavy 3D textured wallpapers, coastal-grade acoustic WPC louvers, luxury waterproof SPC herringbone flooring, and precision motorized blinds.
            </p>

            {/* Key Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Free site visit & measurement anywhere in Karachi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Physical swatch albums delivered to your doorstep</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>100% termite, moisture & humidity-proof materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Master artisan installation with neat edge joints</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#090C0E] bg-gradient-to-r from-[#E5C365] via-[#C5A059] to-[#9E7835] hover:from-[#F0D588] hover:to-[#B48D45] rounded-lg shadow-lg shadow-[#C5A059]/25 hover:shadow-xl hover:shadow-[#C5A059]/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 font-body"
              >
                <Ruler className="w-4 h-4" />
                <span>Book Free Site Visit</span>
              </button>

              <a
                href="#catalog"
                className="px-5 py-3.5 text-sm sm:text-base font-medium text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-800/90 border border-stone-800 hover:border-[#C5A059]/40 rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </a>

              <a
                href={GOOGLE_STATS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/40 hover:border-emerald-700/60 rounded-lg transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp:</span> +92 345 2769981
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/25 shadow-2xl shadow-black/80 group">
              <img
                src="/images/hero.jpg"
                alt="Shiraz Interior Karachi luxury living room with WPC wall panels and designer wallpaper"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash')) {
                    target.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-[#090C0E]/30 to-transparent" />

              {/* In-photo Architectural Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A0D10]/85 backdrop-blur-md border border-[#C5A059]/20 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#C5A059] font-medium">Featured Karachi Project</div>
                  <div className="text-sm font-semibold text-white">Acoustic WPC Slats & 3D Wallpaper</div>
                  <div className="text-xs text-stone-400">KU Circular Rd, Zoramin Residency</div>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-stone-800/90 hover:bg-[#C5A059] hover:text-[#090C0E] transition-colors rounded-md border border-stone-700 hover:border-transparent shrink-0"
                >
                  Get Same Look
                </button>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0F1418]/95 backdrop-blur-md border border-[#C5A059]/30 shadow-xl shadow-black/60">
              <div className="w-9 h-9 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>Karachi-Wide Service</span>
                </div>
                <div className="text-[11px] text-stone-400">Zero Charge Measurement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric trust strip placed adjacent below the hero */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-stone-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-stone-900/30 border border-stone-800/60">
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#E5C365] tabular-nums">4.9 / 5.0 ⭐</div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">Google Maps (26+ Verified Reviews)</div>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/30 border border-stone-800/60">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">100% Free</div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">Site Measurement across Karachi</div>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/30 border border-stone-800/60">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">800+ Swatches</div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">Wallpapers, Louvers & Flooring</div>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/30 border border-stone-800/60">
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#10B981] tabular-nums">1-Day Setup</div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">Quick Professional Installation</div>
          </div>
        </div>
      </div>
    </section>
  );
};
