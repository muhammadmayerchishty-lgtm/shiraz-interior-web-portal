import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, MapPin, Eye, Sliders } from 'lucide-react';

interface ProjectTransformation {
  id: string;
  title: string;
  location: string;
  category: string;
  beforeDesc: string;
  afterDesc: string;
  materials: string[];
  duration: string;
  beforeImg: string;
  afterImg: string;
}

const TRANSFORMATIONS: ProjectTransformation[] = [
  {
    id: 'trans-01',
    title: 'Modern TV Lounge & Acoustic Media Wall',
    location: 'Zoramin Residency, KU Circular Rd, Karachi',
    category: 'PVC & WPC Panels',
    beforeDesc: 'Dull peeling off-white plaster with exposed cabling and uneven surface.',
    afterDesc: 'Deep charcoal fluted WPC louvers with integrated warm LED backlighting and concealed cable conduit.',
    materials: ['Charcoal Fluted WPC Louvers', 'Warm 3000K LED Cove Profile', 'Concealed Interlocking Clips'],
    duration: 'Completed in 1 Day',
    beforeImg: '/images/before-renovation.jpg',
    afterImg: '/images/after-renovation.jpg',
  },
  {
    id: 'trans-02',
    title: 'Luxury Drawing Room Feature Wall',
    location: 'Gulshan-e-Iqbal Block 13-D, Karachi',
    category: 'Luxury Wallpapers',
    beforeDesc: 'Faded plain distemper paint prone to coastal moisture stains.',
    afterDesc: 'German 3D metallic damask wallpaper with gold foil emboss and antifungal paste.',
    materials: ['Imperial Gold Damask 3D', 'German Anti-Humidity Adhesive', 'Seamless Pattern Repeat'],
    duration: 'Completed in 6 Hours',
    beforeImg: '/images/before-renovation.jpg',
    afterImg: '/images/wallpapers.jpg',
  },
  {
    id: 'trans-03',
    title: 'Master Suite Waterproof Flooring Makeover',
    location: 'DHA Phase 6, Karachi',
    category: 'Wooden & Vinyl Flooring',
    beforeDesc: 'Cold slippery ceramic tiles with broken stained grout joints.',
    afterDesc: 'Smoked walnut herringbone SPC rigid core flooring with acoustic IXPE step dampening.',
    materials: ['Herringbone SPC Planks', '0.5mm Commercial Wear Layer', 'Moisture Proof Underlay Pad'],
    duration: 'Completed in 2 Days',
    beforeImg: '/images/before-renovation.jpg',
    afterImg: '/images/flooring.jpg',
  },
  {
    id: 'trans-04',
    title: 'High-Rise Architectural Window Automation',
    location: 'Clifton Block 4, Karachi',
    category: 'Modern Window Blinds',
    beforeDesc: 'Bulky heavy fabric curtains collecting sea salt dust and blocking city views.',
    afterDesc: 'Motorized dual zebra blinds with wireless multi-channel remote and solar heat reflection.',
    materials: ['Motorized Dual Zebra Blinds', 'Anti-Static Dust Shield Fabric', 'Thermal Heat Barrier'],
    duration: 'Completed in 4 Hours',
    beforeImg: '/images/before-renovation.jpg',
    afterImg: '/images/blinds.jpg',
  },
];

interface BeforeAfterGalleryProps {
  onOpenBooking: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeProject, setActiveProject] = useState<ProjectTransformation>(TRANSFORMATIONS[0]);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');

  return (
    <section id="gallery" className="py-20 bg-[#090C0E] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Karachi Project Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
            Witness the Shiraz Interior Difference
          </h2>
          <p className="text-sm sm:text-base text-stone-400">
            Drag the interactive slider to compare unfinished plain walls with our finished installations across Karachi.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {TRANSFORMATIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveProject(item)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeProject.id === item.id
                  ? 'bg-[#C5A059] text-[#090C0E] font-semibold shadow-lg shadow-[#C5A059]/20'
                  : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Comparison Canvas (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl bg-stone-950 aspect-[4/3] select-none">
              {viewMode === 'slider' ? (
                /* Interactive Draggable Slider */
                <div
                  className="relative w-full h-full cursor-ew-resize overflow-hidden"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                    setSliderPosition((x / rect.width) * 100);
                  }}
                  onTouchMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const touch = e.touches[0];
                    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                    setSliderPosition((x / rect.width) * 100);
                  }}
                >
                  {/* After Image (Full background) */}
                  <img
                    src={activeProject.afterImg}
                    alt={`${activeProject.title} After Renovation`}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Before Image (Clipped overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={activeProject.beforeImg}
                      alt={`${activeProject.title} Before Renovation`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ width: '100%', maxWidth: 'none' }}
                      referrerPolicy="no-referrer"
                    />
                    {/* Before Label */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-stone-700 text-xs font-semibold text-stone-300">
                      BEFORE (Raw Wall)
                    </div>
                  </div>

                  {/* After Label */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#090C0E]/85 backdrop-blur-md border border-[#C5A059]/40 text-xs font-semibold text-[#E5C365]">
                    AFTER (Shiraz Interior)
                  </div>

                  {/* Vertical Divider Line with Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-[#C5A059] shadow-lg shadow-black"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#C5A059] text-[#090C0E] border-2 border-white shadow-xl flex items-center justify-center">
                      <Sliders className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>
              ) : (
                /* Side-by-side mode */
                <div className="grid grid-cols-2 h-full">
                  <div className="relative border-r border-stone-800">
                    <img
                      src={activeProject.beforeImg}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[11px] text-stone-300">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={activeProject.afterImg}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#C5A059] text-[11px] text-[#090C0E] font-semibold">
                      After
                    </div>
                  </div>
                </div>
              )}

              {/* View mode toggle pill in corner */}
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 bg-[#090C0E]/85 backdrop-blur-md p-1 rounded-lg border border-stone-800 text-[11px]">
                <button
                  onClick={() => setViewMode('slider')}
                  className={`px-2 py-1 rounded font-medium transition-colors ${
                    viewMode === 'slider' ? 'bg-[#C5A059] text-[#090C0E]' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Interactive Slider
                </button>
                <button
                  onClick={() => setViewMode('side-by-side')}
                  className={`px-2 py-1 rounded font-medium transition-colors ${
                    viewMode === 'side-by-side' ? 'bg-[#C5A059] text-[#090C0E]' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Side by Side
                </button>
              </div>
            </div>
          </div>

          {/* Project Details Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 bg-gradient-to-b from-[#0F1418] to-[#0A0D10] p-6 sm:p-7 rounded-2xl border border-stone-800">
            <div>
              <div className="flex items-center gap-1 text-xs text-[#C5A059] font-medium uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeProject.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {activeProject.title}
              </h3>
              <div className="text-xs text-stone-400 font-mono mt-1">{activeProject.duration}</div>
            </div>

            {/* Before vs After notes */}
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                <div className="text-stone-400 font-semibold mb-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>The Problem (Before):</span>
                </div>
                <p className="text-stone-300 leading-relaxed">{activeProject.beforeDesc}</p>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1A14] border border-[#10B981]/30">
                <div className="text-[#10B981] font-semibold mb-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Shiraz Solution (After):</span>
                </div>
                <p className="text-stone-200 leading-relaxed">{activeProject.afterDesc}</p>
              </div>
            </div>

            {/* Installed materials checklist */}
            <div>
              <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                Materials & Specifications:
              </div>
              <div className="space-y-1.5">
                {activeProject.materials.map((mat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                    <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 border-t border-stone-800">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#DFBF77] to-[#C5A059] hover:from-[#EAD598] hover:to-[#D4AF53] text-[#090C0E] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-2"
              >
                <span>Get This Makeover for Your Home</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
