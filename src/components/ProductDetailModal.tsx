import React, { useState } from 'react';
import { X, Check, ShieldCheck, Ruler, Sparkles, MessageSquare, PhoneCall, Layers, Box } from 'lucide-react';
import { Product } from '../data/products';
import { GOOGLE_STATS } from '../data/reviews';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'installation' | 'calculator'>('specs');
  const [wallWidth, setWallWidth] = useState<number>(12);
  const [wallHeight, setWallHeight] = useState<number>(10);

  if (!product) return null;

  const totalSqFt = wallWidth * wallHeight;
  let estimatedUnits = '';
  let estimatedCost = 0;

  if (product.category === 'wallpapers') {
    // 1 roll covers ~57 sq ft (usable ~50 sq ft after pattern matching)
    const rollsNeeded = Math.ceil(totalSqFt / 50);
    estimatedUnits = `${rollsNeeded} Rolls (incl. pattern matching allowance)`;
    estimatedCost = rollsNeeded * product.numericPrice;
  } else if (product.category === 'panels') {
    // WPC panel width is ~0.53 ft (6.5 inches), 9.5 ft height
    const panelsNeeded = Math.ceil(wallWidth / 0.54);
    estimatedUnits = `${panelsNeeded} Panels (for ${wallWidth} ft wide wall)`;
    estimatedCost = panelsNeeded * product.numericPrice;
  } else if (product.category === 'flooring') {
    // Flooring by sq ft + 7% wastage
    const flooringSqFt = Math.ceil(totalSqFt * 1.07);
    estimatedUnits = `${flooringSqFt} Sq.Ft (incl. 7% wastage & underlay)`;
    estimatedCost = flooringSqFt * product.numericPrice;
  } else {
    // Blinds
    estimatedUnits = `${totalSqFt} Sq.Ft Custom Window Frame`;
    estimatedCost = totalSqFt * product.numericPrice;
  }

  const whatsappInquiryUrl = `https://wa.me/923452769981?text=Hi%20Shiraz%20Interior%2C%20I%20am%20interested%20in%20"${encodeURIComponent(
    product.name
  )}"%20(${product.categoryLabel}).%20My%20wall%20area%20is%20approx%20${totalSqFt}%20sq.ft.%20Please%20share%20swatches%20and%20quote.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl bg-[#0D1115] border border-[#C5A059]/30 rounded-2xl shadow-2xl shadow-black overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#090C0E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span className="text-xs font-mono uppercase text-[#C5A059] tracking-wider">
              {product.categoryLabel}
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-xs text-stone-400">Karachi Studio Stock</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
          {/* Left Column: Image Showcase (5 cols) */}
          <div className="md:col-span-5 bg-[#080A0C] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-800">
            <div>
              <div className="relative rounded-xl overflow-hidden border border-stone-800 aspect-[4/3] group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('unsplash')) {
                      target.src = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#090C0E]/85 border border-[#C5A059]/30 text-[11px] font-medium text-[#E5C365]">
                  {product.stockStatus}
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-lg bg-stone-900/40 border border-stone-800 text-xs text-stone-300 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-400">Finish:</span>
                  <span className="text-white font-medium">{product.accentFinish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Dimensions:</span>
                  <span className="text-white font-mono">{product.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Warranty:</span>
                  <span className="text-[#10B981] font-medium">{product.warranty}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800">
              <div className="text-xs text-stone-400">Starting Price</div>
              <div className="text-2xl font-display font-bold text-white tabular-nums">
                {product.pricePerUnit}{' '}
                <span className="text-xs font-normal text-stone-400 font-sans">{product.unit}</span>
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                *Prices exclude GST & installation (available on request). Free measurement included.
              </p>
            </div>
          </div>

          {/* Right Column: Specs, Interactive Estimator & Booking (7 cols) */}
          <div className="md:col-span-7 p-6 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                {product.name}
              </h3>
              <p className="text-sm text-[#C5A059] mt-1 font-medium">{product.tagline}</p>
              <p className="text-sm text-stone-300 mt-2 leading-relaxed">{product.description}</p>
            </div>

            {/* Interactive Detail Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-900/80 rounded-lg border border-stone-800">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === 'specs'
                    ? 'bg-[#C5A059] text-[#090C0E] font-semibold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Features & Specs
              </button>
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === 'calculator'
                    ? 'bg-[#C5A059] text-[#090C0E] font-semibold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Area Cost Calculator
              </button>
              <button
                onClick={() => setActiveTab('installation')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === 'installation'
                    ? 'bg-[#C5A059] text-[#090C0E] font-semibold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Karachi Installation
              </button>
            </div>

            {/* Tab 1: Specs */}
            {activeTab === 'specs' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-900/40 border border-stone-800/80 text-xs text-stone-200"
                    >
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-lg bg-stone-900/30 border border-stone-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Core Substrate:</span>
                    <span className="text-stone-200 font-medium">{product.material}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Recommended Rooms:</span>
                    <span className="text-[#E5C365] font-medium">{product.bestFor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Moisture Tolerance:</span>
                    <span className="text-[#10B981] font-medium">100% Coastal Humidity Rated</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Interactive Quick Area Calculator */}
            {activeTab === 'calculator' && (
              <div className="space-y-4 p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                <div className="text-xs font-semibold text-stone-200 flex items-center justify-between">
                  <span>Enter Your Wall / Window Dimensions</span>
                  <span className="text-[#C5A059] font-mono">{totalSqFt} sq.ft total</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-stone-400 block mb-1">Width (Feet)</label>
                    <input
                      type="number"
                      min={1}
                      max={80}
                      value={wallWidth}
                      onChange={(e) => setWallWidth(Number(e.target.value) || 1)}
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059] tabular-nums"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-stone-400 block mb-1">Height (Feet)</label>
                    <input
                      type="number"
                      min={1}
                      max={40}
                      value={wallHeight}
                      onChange={(e) => setWallHeight(Number(e.target.value) || 1)}
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A059] tabular-nums"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-stone-400">Required Quantity:</div>
                    <div className="text-sm font-semibold text-[#E5C365]">{estimatedUnits}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-stone-400">Estimated Material Cost:</div>
                    <div className="text-lg font-display font-bold text-white tabular-nums">
                      Rs. {estimatedCost.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Installation */}
            {activeTab === 'installation' && (
              <div className="space-y-3 text-xs text-stone-300">
                <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800">
                  <div className="font-semibold text-white mb-1">Free Karachi Measurement Visit</div>
                  <p className="text-stone-400 leading-relaxed">
                    Our field supervisor visits your location with precision laser meters and original physical swatch albums. We inspect wall plaster quality, dampness, and squareness.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800">
                  <div className="font-semibold text-white mb-1">Certified Fitting Artisans</div>
                  <p className="text-stone-400 leading-relaxed">
                    We do not outsource to day-laborers. Shiraz Interior craftsmen specialize exclusively in German wallpaper pasting, WPC clip locking, and SPC seamless flooring.
                  </p>
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center gap-3">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 py-3 px-4 bg-[#C5A059] hover:bg-[#D4AF53] text-[#090C0E] font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Ruler className="w-4 h-4" />
                <span>Schedule Free Visit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
