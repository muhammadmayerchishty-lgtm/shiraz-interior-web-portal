import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Send, Sparkles, Ruler, Info } from 'lucide-react';
import { GOOGLE_STATS } from '../data/reviews';

interface EstimatorProps {
  onOpenBooking: () => void;
}

interface RoomPreset {
  id: string;
  name: string;
  defaultWidth: number;
  defaultHeight: number;
  recommendedMaterial: string;
}

const ROOM_PRESETS: RoomPreset[] = [
  { id: 'tv-lounge', name: 'TV Lounge Feature Wall', defaultWidth: 12, defaultHeight: 10, recommendedMaterial: 'wpc-panels' },
  { id: 'master-wall', name: 'Master Bedroom Accent Wall', defaultWidth: 14, defaultHeight: 10, recommendedMaterial: 'wallpaper-luxury' },
  { id: 'bedroom-full', name: 'Full Bedroom 4-Walls', defaultWidth: 48, defaultHeight: 10, recommendedMaterial: 'wallpaper-luxury' },
  { id: 'drawing-room', name: 'Drawing Room Majlis', defaultWidth: 16, defaultHeight: 10, recommendedMaterial: 'uv-marble' },
  { id: 'flooring-living', name: 'Living Room Flooring (SPC)', defaultWidth: 20, defaultHeight: 15, recommendedMaterial: 'spc-flooring' },
  { id: 'blinds-window', name: 'Architectural Window Frame', defaultWidth: 8, defaultHeight: 7, recommendedMaterial: 'zebra-blinds' },
];

interface FinishOption {
  id: string;
  name: string;
  category: string;
  rateDescription: string;
  unit: string;
  calculateUnits: (sqft: number, width: number, height: number) => { units: number; label: string; materialCost: number; laborCost: number };
}

const FINISH_OPTIONS: FinishOption[] = [
  {
    id: 'wpc-panels',
    name: 'Acoustic Fluted WPC Louvers',
    category: 'PVC & WPC Panels',
    rateDescription: 'Rs. 1,450 / 9.5ft panel (6.5" wide)',
    unit: 'panels',
    calculateUnits: (sqft, width) => {
      const panels = Math.ceil(width / 0.54);
      const materialCost = panels * 1450;
      const laborCost = panels * 250; // fitting & clips
      return { units: panels, label: `${panels} Panels`, materialCost, laborCost };
    }
  },
  {
    id: 'wallpaper-luxury',
    name: '3D Embossed Metallic Wallpaper',
    category: 'Luxury Wallpapers',
    rateDescription: 'Rs. 4,800 / roll (50 sq.ft usable)',
    unit: 'rolls',
    calculateUnits: (sqft) => {
      const rolls = Math.ceil(sqft / 50);
      const materialCost = rolls * 4800;
      const laborCost = rolls * 800; // German adhesive & paste artisan
      return { units: rolls, label: `${rolls} Rolls`, materialCost, laborCost };
    }
  },
  {
    id: 'uv-marble',
    name: 'High-Gloss Calacatta UV Marble Sheets',
    category: 'PVC & WPC Panels',
    rateDescription: 'Rs. 3,900 / sheet (8ft x 4ft = 32 sq.ft)',
    unit: 'sheets',
    calculateUnits: (sqft) => {
      const sheets = Math.ceil(sqft / 32);
      const materialCost = sheets * 3900;
      const laborCost = sheets * 600;
      return { units: sheets, label: `${sheets} Full Sheets`, materialCost, laborCost };
    }
  },
  {
    id: 'spc-flooring',
    name: 'Herringbone Waterproof SPC Flooring',
    category: 'Wooden & Vinyl Flooring',
    rateDescription: 'Rs. 240 / sq.ft (material & underlay)',
    unit: 'sq.ft',
    calculateUnits: (sqft) => {
      const totalArea = Math.ceil(sqft * 1.08); // 8% herringbone wastage
      const materialCost = totalArea * 240;
      const laborCost = totalArea * 45; // fitting per sqft
      return { units: totalArea, label: `${totalArea} Sq.Ft`, materialCost, laborCost };
    }
  },
  {
    id: 'zebra-blinds',
    name: 'Motorized Dual Zebra Blinds',
    category: 'Modern Window Blinds',
    rateDescription: 'Rs. 320 / sq.ft (custom fabricated)',
    unit: 'sq.ft',
    calculateUnits: (sqft) => {
      const materialCost = sqft * 320;
      const laborCost = 1500; // fixed mounting & remote pairing
      return { units: sqft, label: `${sqft} Sq.Ft`, materialCost, laborCost };
    }
  }
];

export const Estimator: React.FC<EstimatorProps> = ({ onOpenBooking }) => {
  const [selectedPreset, setSelectedPreset] = useState<string>('tv-lounge');
  const [wallWidth, setWallWidth] = useState<number>(12);
  const [wallHeight, setWallHeight] = useState<number>(10);
  const [selectedFinishId, setSelectedFinishId] = useState<string>('wpc-panels');
  const [includeFitting, setIncludeFitting] = useState<boolean>(true);

  const handleSelectPreset = (preset: RoomPreset) => {
    setSelectedPreset(preset.id);
    setWallWidth(preset.defaultWidth);
    setWallHeight(preset.defaultHeight);
    setSelectedFinishId(preset.recommendedMaterial);
  };

  const currentFinish = FINISH_OPTIONS.find((f) => f.id === selectedFinishId) || FINISH_OPTIONS[0];
  const sqft = wallWidth * wallHeight;
  const calculation = currentFinish.calculateUnits(sqft, wallWidth, wallHeight);

  const totalEstimate = calculation.materialCost + (includeFitting ? calculation.laborCost : 0);

  const whatsappEstimateText = `Hi Shiraz Interior! I calculated an estimate on your website for *${wallWidth}ft x ${wallHeight}ft (${sqft} sq.ft)*:
- Room: ${ROOM_PRESETS.find((p) => p.id === selectedPreset)?.name || 'Custom Space'}
- Finish: ${currentFinish.name}
- Needed: ${calculation.label}
- Estimated Total: Rs. ${totalEstimate.toLocaleString()} (Includes fitting: ${includeFitting ? 'Yes' : 'No'})
Can you visit my place in Karachi for free laser measurement and bring physical samples?`;

  const whatsappUrl = `https://wa.me/923452769981?text=${encodeURIComponent(whatsappEstimateText)}`;

  return (
    <section id="estimator" className="py-20 bg-[#07090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost & Material Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
            Instant Budget Calculator for Karachi Homes
          </h2>
          <p className="text-sm sm:text-base text-stone-400">
            Select your space or type custom wall dimensions to get transparent quantity calculations and price estimates before ordering.
          </p>
        </div>

        {/* Main Estimator Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#C5A059]/25 shadow-2xl">
          {/* Step 1: Preset Room Types */}
          <div className="mb-8">
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-3">
              Step 1: Choose Typical Space or Start with Presets
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {ROOM_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`p-3 rounded-xl text-left border transition-all text-xs flex flex-col justify-between h-20 ${
                    selectedPreset === preset.id
                      ? 'bg-[#C5A059]/15 border-[#C5A059] text-white shadow-md'
                      : 'bg-stone-900/40 border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  <span className="font-medium line-clamp-2">{preset.name}</span>
                  <span className="text-[11px] font-mono text-[#C5A059]">
                    {preset.defaultWidth}x{preset.defaultHeight} ft
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step 2: Dimensions & Material Selection (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Dimension Inputs */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Step 2: Enter Exact Dimensions
                  </label>
                  <span className="text-xs font-mono text-[#E5C365]">
                    Total Area: <strong className="text-white text-sm">{sqft}</strong> Sq.Ft
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800">
                    <span className="text-xs text-stone-400 block mb-1">Wall / Room Width</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={2}
                        max={100}
                        value={wallWidth}
                        onChange={(e) => {
                          setWallWidth(Math.max(1, Number(e.target.value) || 1));
                          setSelectedPreset('custom');
                        }}
                        className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-1.5 text-base font-bold text-white focus:outline-none focus:border-[#C5A059] tabular-nums"
                      />
                      <span className="text-xs font-mono text-stone-400">Feet</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800">
                    <span className="text-xs text-stone-400 block mb-1">Wall / Ceiling Height</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={2}
                        max={30}
                        value={wallHeight}
                        onChange={(e) => {
                          setWallHeight(Math.max(1, Number(e.target.value) || 1));
                          setSelectedPreset('custom');
                        }}
                        className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-1.5 text-base font-bold text-white focus:outline-none focus:border-[#C5A059] tabular-nums"
                      />
                      <span className="text-xs font-mono text-stone-400">Feet</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Finish Choice */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-3">
                  Step 3: Select Material Finish
                </label>
                <div className="space-y-2">
                  {FINISH_OPTIONS.map((finish) => (
                    <div
                      key={finish.id}
                      onClick={() => setSelectedFinishId(finish.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                        selectedFinishId === finish.id
                          ? 'bg-[#0D1418] border-[#C5A059] shadow-md shadow-[#C5A059]/10'
                          : 'bg-stone-900/30 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            selectedFinishId === finish.id
                              ? 'border-[#C5A059] bg-[#C5A059]'
                              : 'border-stone-600'
                          }`}
                        >
                          {selectedFinishId === finish.id && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#090C0E]" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{finish.name}</div>
                          <div className="text-xs text-stone-400">{finish.category}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-[#E5C365]">{finish.rateDescription}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fitting Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-900/40 border border-stone-800">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="fittingToggle"
                    checked={includeFitting}
                    onChange={(e) => setIncludeFitting(e.target.checked)}
                    className="w-4 h-4 accent-[#C5A059] rounded"
                  />
                  <label htmlFor="fittingToggle" className="text-xs sm:text-sm text-stone-300 cursor-pointer">
                    Include certified Shiraz Interior artisan installation & materials
                  </label>
                </div>
                <span className="text-xs font-mono text-[#10B981]">Recommended</span>
              </div>
            </div>

            {/* Step 4: Summary Card & Action Output (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1419] to-[#0A0D10] p-6 sm:p-7 rounded-2xl border border-[#C5A059]/30 shadow-xl space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <div className="text-xs uppercase tracking-wider text-[#C5A059] font-medium">
                  Estimated Breakdown
                </div>
                <div className="text-xl font-display font-bold text-white mt-1">
                  Karachi Project Quote
                </div>
              </div>

              {/* Breakdown lines */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Selected Finish:</span>
                  <span className="font-medium text-white text-right">{currentFinish.name}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Dimensions:</span>
                  <span className="font-mono text-white">
                    {wallWidth} ft x {wallHeight} ft ({sqft} sq.ft)
                  </span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Required Quantity:</span>
                  <span className="font-semibold text-[#E5C365]">{calculation.label}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Material Cost:</span>
                  <span className="font-mono text-white tabular-nums">
                    Rs. {calculation.materialCost.toLocaleString()}
                  </span>
                </div>
                {includeFitting && (
                  <div className="flex justify-between text-stone-300">
                    <span className="text-stone-400">Master Artisan Fitting:</span>
                    <span className="font-mono text-white tabular-nums">
                      Rs. {calculation.laborCost.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-stone-300 pt-2 border-t border-stone-800">
                  <span className="text-stone-400">Karachi Site Measurement:</span>
                  <span className="font-semibold text-[#10B981]">FREE (Rs. 0)</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="p-4 rounded-xl bg-stone-900/80 border border-[#C5A059]/20 text-center space-y-1">
                <div className="text-xs text-stone-400">Estimated Project Total (PKR)</div>
                <div className="text-3xl font-display font-bold text-[#F3E5AB] tabular-nums">
                  Rs. {totalEstimate.toLocaleString()}
                </div>
                <div className="text-[11px] text-stone-500">
                  *Final price confirmed after free physical laser measurement at your site.
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-4 bg-[#C5A059] hover:bg-[#D4AF53] text-[#090C0E] font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/20"
                >
                  <Ruler className="w-4 h-4" />
                  <span>Book Free Laser Measurement</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
