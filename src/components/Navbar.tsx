import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, CalendarCheck, Sparkles } from 'lucide-react';
import { GOOGLE_STATS } from '../data/reviews';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090C0E]/90 backdrop-blur-md border-b border-[#C5A059]/15 shadow-xl shadow-black/40 py-3.5'
            : 'bg-gradient-to-b from-[#090C0E]/90 via-[#090C0E]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single brand anchor with official logo image and wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 whitespace-nowrap shrink-0 group"
            >
              <img
                src="/images/logo.jpg"
                alt="Shiraz Interior Logo"
                className="h-10 sm:h-12 w-auto object-contain rounded-lg border border-[#C5A059]/40 shadow-lg shadow-black/60 group-hover:border-[#C5A059] transition-all"
                loading="eager"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-display font-bold tracking-wider text-white group-hover:text-[#C5A059] transition-colors leading-none">
                  SHIRAZ INTERIOR
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A059] mt-0.5 hidden sm:inline">
                  Complete Turnkey Interior Solutions
                </span>
              </div>
            </a>

            {/* Zone 2: 4-5 clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-300">
              <a
                href="#catalog"
                className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
              >
                Catalog
              </a>
              <a
                href="#gallery"
                className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
              >
                Transformations
              </a>
              <a
                href="#services"
                className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
              >
                Services
              </a>
              <a
                href="#estimator"
                className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
              >
                Estimator
              </a>
              <a
                href="#reviews"
                className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
              >
                Reviews
              </a>
              <a
                href="#showroom"
                className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
              >
                Mosamiyat Studio
              </a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${GOOGLE_STATS.rawPhone}`}
                className="hidden lg:flex items-center gap-2 text-xs font-medium text-stone-300 hover:text-white px-3 py-2 rounded-lg border border-stone-800 hover:border-stone-700 transition-colors whitespace-nowrap shrink-0"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="tabular-nums font-mono">{GOOGLE_STATS.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-[#090C0E] bg-gradient-to-r from-[#DFBF77] via-[#C5A059] to-[#AA813F] hover:from-[#E8CFA0] hover:to-[#B68D45] rounded-lg shadow-md shadow-[#C5A059]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 font-body flex items-center gap-1.5"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book Free Site Visit</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-4 pb-6 mt-3 bg-[#0A0D10]/95 backdrop-blur-xl border-b border-[#C5A059]/20 flex flex-col gap-3">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-stone-200 hover:text-[#C5A059] transition-colors"
            >
              Product Catalog
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-stone-200 hover:text-[#C5A059] transition-colors"
            >
              Cost Estimator (Karachi)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-stone-200 hover:text-[#C5A059] transition-colors"
            >
              Interior Services
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-stone-200 hover:text-[#C5A059] transition-colors"
            >
              Google Reviews (4.9 ⭐)
            </a>
            <a
              href="#showroom"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-stone-200 hover:text-[#C5A059] transition-colors"
            >
              Mosamiyat Showroom & Location
            </a>
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>Mosamiyat, KU Circular Rd</span>
              <a href={`tel:${GOOGLE_STATS.rawPhone}`} className="text-[#C5A059] font-mono">
                {GOOGLE_STATS.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
