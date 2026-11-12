import React from 'react';
import { MessageSquare, PhoneCall, Sparkles, Ruler, FileText, CheckCircle2 } from 'lucide-react';
import { GOOGLE_STATS } from '../data/reviews';

export const WhatsAppInquiryBar: React.FC = () => {
  const quickActions = [
    {
      label: 'Book Free Site Measurement',
      icon: Ruler,
      text: 'Hi Shiraz Interior, I would like to book a Free Site Visit for measurement in Karachi.'
    },
    {
      label: 'Request Wallpaper Swatch Catalog',
      icon: FileText,
      text: 'Hi Shiraz Interior, please send me your latest 3D Wallpaper & Texture Catalog PDF.'
    },
    {
      label: 'WPC Louver Panel Rates',
      icon: Sparkles,
      text: 'Hi Shiraz Interior, I want to know rates and installation charges for Acoustic WPC Wall Louvers.'
    },
    {
      label: 'Herringbone Flooring Quote',
      icon: CheckCircle2,
      text: 'Hi Shiraz Interior, please share rates for waterproof SPC Herringbone wooden flooring.'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-emerald-950/40 via-stone-950 to-emerald-950/40 border-y border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Title */}
          <div className="text-center lg:text-left space-y-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Direct WhatsApp Business Desk · +92 345 2769981</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Instant Interior Inquiries & Catalog Delivery
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Select any inquiry below to start a pre-filled direct WhatsApp chat with our technical supervisor in Karachi.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              const waUrl = `https://wa.me/923452769981?text=${encodeURIComponent(action.text)}`;
              return (
                <a
                  key={idx}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-stone-900/90 hover:bg-emerald-900/40 border border-stone-800 hover:border-emerald-500/50 text-xs font-medium text-stone-200 hover:text-white transition-all flex items-center gap-2 shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{action.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
