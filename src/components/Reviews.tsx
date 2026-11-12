import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, MapPin, ExternalLink } from 'lucide-react';
import { REVIEWS, GOOGLE_STATS } from '../data/reviews';

export const Reviews: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filteredReviews = filterRating === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.rating === filterRating);

  return (
    <section id="reviews" className="py-20 bg-[#0A0D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Maps Trust Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-stone-800">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Verified Client Experiences in Karachi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Rated 4.9 Stars on Google Maps
            </h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              Real feedback from homeowners, corporate clients, and interior consultants across Mosamiyat, Zoramin Residency, DHA, and Gulshan-e-Iqbal.
            </p>
          </div>

          {/* Google Summary Badge */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-stone-900 to-[#101419] border border-[#C5A059]/30 flex items-center gap-5 shadow-xl shrink-0">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-bold text-[#F3E5AB] tabular-nums">
                {GOOGLE_STATS.rating}
              </div>
              <div className="flex items-center justify-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <div className="text-[11px] text-stone-400 mt-1">26+ Google Reviews</div>
            </div>

            <div className="h-12 w-px bg-stone-800" />

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Google Verified Studio</span>
              </div>
              <div className="text-stone-400">Decent Plaza, KU Circular Rd</div>
              <a
                href="https://maps.google.com/?q=Decent+Plaza+KU+Circular+Rd+Zoramin+Residency+Mosamiyat+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A059] hover:underline flex items-center gap-1 font-medium text-[11px]"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-stone-800/80 hover:border-[#C5A059]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-white text-base flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      <span title="Verified Client">
                        <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                      </span>
                    </div>
                    <div className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      <span>{rev.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 shrink-0 bg-stone-900 px-2 py-1 rounded-md border border-stone-800">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="text-[11px] font-medium text-[#E5C365] bg-stone-900/60 px-2.5 py-1 rounded-md border border-stone-800/60 inline-block">
                  Service: {rev.service}
                </div>

                {/* Review Prose */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light italic">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Footer of Card */}
              <div className="mt-5 pt-3 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-500">
                <span>Google Maps Review</span>
                <span className="font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Karachi Measurement Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-stone-950 via-[#0D1217] to-stone-950 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Free Measurement Across All Karachi Neighborhoods</div>
              <div className="text-xs text-stone-400">
                Mosamiyat · Gulshan-e-Iqbal · Gulistan-e-Johar · Scheme 33 · DHA · Clifton · Bahria Town
              </div>
            </div>
          </div>
          <a
            href={GOOGLE_STATS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap"
          >
            WhatsApp for Quick Visit
          </a>
        </div>
      </div>
    </section>
  );
};
