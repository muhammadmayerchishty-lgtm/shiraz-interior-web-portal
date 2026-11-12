import React from 'react';
import { Layers, ShieldCheck, Ruler, Sparkles, Clock, CheckCircle, Home, LayoutTemplate, Palette, Building2 } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const servicesList = [
    {
      num: '01',
      icon: Palette,
      title: 'Luxury 3D Wallpaper Installation',
      tagline: 'European heavy vinyl, metallic damask relief, and natural grasscloth',
      description: 'We supply and paste imported moisture-resistant wallpapers using German anti-fungal adhesives that prevent edge lifting in humid Karachi seasons. Seamless pattern repeat matching guaranteed.',
      perks: ['Zero odor European vinyl', 'Conceals minor plaster fissures', 'Clean sponge-washable surface'],
    },
    {
      num: '02',
      icon: Layers,
      title: 'PVC & WPC Wall Panelling',
      tagline: 'Acoustic fluted slats, TV lounge backdrops, and UV marble sheets',
      description: 'Engineered high-density wood-plastic composite that is 100% termite proof, water resistant, and noise-damping. Fitted with concealed aluminum tongue-and-groove clips for invisible screw heads.',
      perks: ['10-year termite-proof warranty', 'Built-in sound dampening felt', 'Integrated LED cove profile ready'],
    },
    {
      num: '03',
      icon: LayoutTemplate,
      title: 'Wooden & Rigid SPC Vinyl Flooring',
      tagline: 'Herringbone parquet & wide timber planks with acoustic IXPE underlay',
      description: 'Stone Plastic Composite (SPC) flooring delivers the warmth and prestige of genuine European hardwood without swelling or warping from wet mopping or floor washing in Karachi apartments.',
      perks: ['AC4 high-traffic commercial rating', '100% submersion waterproof', 'Soft, quiet step sound underfoot'],
    },
    {
      num: '04',
      icon: Home,
      title: 'Modern Motorized & Manual Window Blinds',
      tagline: 'Precision zebra shades, blackout thermal rollers, and wooden Venetians',
      description: 'Custom-manufactured to the exact millimeter of your Karachi apartment or villa windows. Integrated wireless remote motors, smart home automation, and thermal solar heat reflective backings.',
      perks: ['Cuts direct sunlight heat by up to 5°C', 'Dust-repellent anti-static fabrics', 'Smooth whisper-quiet motors'],
    },
    {
      num: '05',
      icon: Building2,
      title: 'Full Home & Office Turnkey Renovations',
      tagline: 'Complete architectural interior fit-out from concept to keys',
      description: 'End-to-end interior execution for Karachi villas, drawing rooms, corporate executive offices, and retail studios. Color harmonization, cove profile lighting, and turnkey finish delivery on fixed timelines.',
      perks: ['Dedicated project supervisor', 'Fixed budget with zero hidden costs', 'Rapid handover within agreed deadlines'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#090C0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
            Turnkey Craftsmanship & Services Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
            Complete Turnkey Interior Solutions in Karachi
          </h2>
          <p className="text-sm sm:text-base text-stone-400">
            From single feature walls to comprehensive commercial renovations, Shiraz Interior provides end-to-end design, supply, and master fitting.
          </p>
        </div>

        {/* 5-Item Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className={`glass-card rounded-2xl p-7 lg:p-8 flex flex-col justify-between border border-stone-800/80 hover:border-[#C5A059]/40 transition-all duration-300 group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#E5C365]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-display font-bold text-[#C5A059] tabular-nums">
                      {service.num}.
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#E5C365] transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xs text-[#C5A059] mt-1 font-medium">{service.tagline}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-stone-800/60">
                    {service.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-xs text-stone-400">Free Laser Measurement</span>
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-[#E5C365] hover:text-white transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>Inquire for this</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-900/40 border border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shrink-0">
              <Ruler className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Laser Precision Measurement</div>
              <div className="text-xs text-stone-400">Exact square footage with zero guesswork</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Karachi Climate Hardened</div>
              <div className="text-xs text-stone-400">Built to resist high humidity & coastal salinity</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">On-Time Completion</div>
              <div className="text-xs text-stone-400">Feature walls completed in 24 - 48 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
