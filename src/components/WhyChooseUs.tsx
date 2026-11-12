import React from 'react';
import { Clock, ShieldCheck, Star, Ruler, Sparkles, MessageSquare, Award, CheckCircle } from 'lucide-react';
import { GOOGLE_STATS } from '../data/reviews';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const reasons = [
    {
      icon: Clock,
      title: '24/7 Rapid Consultation & WhatsApp Response',
      subtitle: 'Replies within 5 minutes',
      description: 'We know Karachi homeowners have busy schedules. Our design coordinators reply instantly on WhatsApp with catalog PDFs, price estimates, and appointment booking at your convenience.',
    },
    {
      icon: Ruler,
      title: '100% Free On-Site Measurement Across Karachi',
      subtitle: 'Zero visit fee, zero obligation',
      description: 'From Mosamiyat to DHA, Gulshan to Clifton, and Scheme 33 to Bahria Town — we dispatch our supervisor with laser meters and complete material swatches directly to your doorstep.',
    },
    {
      icon: Star,
      title: '4.9 ⭐ Google Rated with 26+ Verified Reviews',
      subtitle: 'Karachi’s trusted interior studio',
      description: 'Consistently praised for spotless craftsmanship, millimeter-precise joint cutting around switchboards, and punctuality. Our reputation is built on real word-of-mouth client trust.',
    },
    {
      icon: ShieldCheck,
      title: 'Premium Coastal-Grade & Termite-Proof Materials',
      subtitle: 'Engineered for Karachi climate',
      description: 'Karachi coastal humidity and damp walls can ruin ordinary paint and cheap boards. We use high-density virgin WPC, 100% waterproof SPC rigid flooring, and German heavy-duty antifungal vinyl.',
    },
    {
      icon: Award,
      title: 'In-House Master Artisans & 1-Day Turnaround',
      subtitle: 'No outsourced day laborers',
      description: 'Every louver, wallpaper roll, and floor plank is fitted by our trained studio team. Most feature walls are completed in 24 hours with complete cleanup post-installation.',
    },
    {
      icon: Sparkles,
      title: 'Turnkey Design to Execution Under One Roof',
      subtitle: 'Wallpapers, Louvers, Flooring & Blinds',
      description: 'No need to coordinate with multiple vendors. Shiraz Interior provides harmonized color palettes, matching cove lighting, and cohesive architectural finishes.',
    },
  ];

  return (
    <section className="py-20 bg-[#07090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium flex items-center justify-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Why Shiraz Interior</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
            Built on Trust, Precision, and Unmatched Quality
          </h2>
          <p className="text-sm sm:text-base text-stone-400">
            Discover why Karachi homeowners, architects, and corporate offices choose Shiraz Interior for their architectural wall finishes and turnkey upgrades.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-stone-800 hover:border-[#C5A059]/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#E5C365] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-[#E5C365] transition-colors leading-snug">
                      {reason.title}
                    </h3>
                    <div className="text-xs font-mono text-[#C5A059] mt-1">{reason.subtitle}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-800/60 flex items-center text-xs text-[#10B981] gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Service Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner with Direct WhatsApp trigger */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0E151A] via-[#121B22] to-[#0E151A] border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg sm:text-xl font-display font-bold text-white">
              Ready to Upgrade Your Karachi Property?
            </div>
            <p className="text-xs sm:text-sm text-stone-400">
              Speak directly with Shiraz Bhai or request our supervisor to visit with physical samples today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#090C0E] bg-gradient-to-r from-[#DFBF77] to-[#C5A059] hover:from-[#EBD39C] hover:to-[#B68D45] rounded-xl shadow-lg transition-transform hover:scale-105 whitespace-nowrap"
            >
              Book Free Site Visit
            </button>

            <a
              href={GOOGLE_STATS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
