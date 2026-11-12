import React from 'react';
import { MapPin, Phone, Star, ShieldCheck, Mail, ArrowUp } from 'lucide-react';
import { GOOGLE_STATS } from '../data/reviews';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050709] border-t border-stone-800 text-stone-400 text-xs font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="flex items-center gap-3 text-white group"
            >
              <img
                src="/images/logo.jpg"
                alt="Shiraz Interior Logo"
                className="h-10 w-auto object-contain rounded-md border border-[#C5A059]/30"
              />
              <span className="text-xl font-display font-bold tracking-wider group-hover:text-[#C5A059] transition-colors">
                SHIRAZ INTERIOR
              </span>
            </a>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Premier interior design studio and architectural surfaces specialist in Mosamiyat, Karachi.
              Providing luxury wallpapers, acoustic WPC louvers, rigid waterproof SPC flooring, and custom motorized blinds.
            </p>
            <div className="flex items-center gap-2 text-[#E5C365] text-xs">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="font-semibold text-white">4.9 ⭐</span>
              <span className="text-stone-400">Google Maps Rating (26+ Reviews)</span>
            </div>
          </div>

          {/* Catalog Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-semibold tracking-wider text-white">
              Product Categories
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalog" className="hover:text-[#C5A059] transition-colors">
                  Luxury 3D & Textured Wallpapers
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#C5A059] transition-colors">
                  Acoustic Charcoal WPC Louvers
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#C5A059] transition-colors">
                  UV Marble High-Gloss PVC Sheets
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#C5A059] transition-colors">
                  Herringbone & Wide SPC Flooring
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#C5A059] transition-colors">
                  Motorized Dual Zebra & Blackout Blinds
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase font-semibold tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#estimator" className="hover:text-[#C5A059] transition-colors">
                  Karachi Cost Estimator
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors">
                  Installation Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C5A059] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-[#C5A059] transition-colors">
                  Mosamiyat Studio Location
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#E5C365] hover:underline font-medium text-left"
                >
                  Book Free Site Measurement
                </button>
              </li>
            </ul>
          </div>

          {/* Karachi Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-semibold tracking-wider text-white">
              Karachi Studio
            </div>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Decent Plaza, KU Circular Rd, Opposite Zoramin Residency, Mosamiyat, Karachi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href={`tel:${GOOGLE_STATS.rawPhone}`} className="hover:text-white font-mono">
                  {GOOGLE_STATS.phone}
                </a>
              </div>
              <div className="pt-2 text-stone-400">
                <div>Mon – Sat: 11:00 AM – 10:00 PM</div>
                <div>Sun: 3:00 PM – 9:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="space-y-0.5 text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} Shiraz Interior (Decent Plaza, Mosamiyat, KU Circular Rd, Zoramin Residency, Karachi).
            </div>
            <div className="text-stone-400 font-medium">
              Web Application & Digital Experience by <span className="text-[#C5A059]">ORION IT SOLUTIONS</span>.
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-stone-400">Free Karachi Site Measurement</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
