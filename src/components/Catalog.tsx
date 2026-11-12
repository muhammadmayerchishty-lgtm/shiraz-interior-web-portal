import React, { useState, useMemo } from 'react';
import { Search, Eye, MessageSquare, ArrowUpRight, Check, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { ProductDetailModal } from './ProductDetailModal';

interface CatalogProps {
  onOpenBooking: () => void;
}

type CategoryFilter = 'all' | 'wallpapers' | 'panels' | 'flooring' | 'blinds';

export const Catalog: React.FC<CatalogProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'All Architectural Collections', count: PRODUCTS.length },
    { id: 'wallpapers', label: 'Luxury Wallpapers', count: PRODUCTS.filter((p) => p.category === 'wallpapers').length },
    { id: 'panels', label: 'PVC & WPC Panels', count: PRODUCTS.filter((p) => p.category === 'panels').length },
    { id: 'flooring', label: 'Wooden & Vinyl Flooring', count: PRODUCTS.filter((p) => p.category === 'flooring').length },
    { id: 'blinds', label: 'Modern Window Blinds', count: PRODUCTS.filter((p) => p.category === 'blinds').length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog" className="py-20 bg-[#0A0D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
            Architectural Product Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
            Curated Wallpapers, Louver Panels & Bespoke Surfaces
          </h2>
          <p className="text-sm sm:text-base text-stone-400">
            Engineered for high durability in Karachi’s coastal environment. High-density WPC, 100% waterproof rigid SPC flooring, and European heavy-vinyl wallcoverings.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-800">
          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900/90 rounded-xl border border-stone-800 overflow-x-auto w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A059] text-[#090C0E] shadow-sm font-semibold'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800/60'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-mono tabular-nums ${
                    activeCategory === cat.id ? 'bg-[#090C0E]/20 text-[#090C0E]' : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search damask, louvers, teak..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-900/80 border border-stone-800 rounded-lg text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-900/20 rounded-2xl border border-stone-800/80">
            <SlidersHorizontal className="w-8 h-8 text-stone-600 mx-auto mb-3" />
            <div className="text-stone-300 font-medium text-base">No matching products found</div>
            <div className="text-stone-500 text-xs mt-1">Try clearing your search query or switching categories.</div>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-[#C5A059] bg-[#C5A059]/10 rounded-lg border border-[#C5A059]/30 hover:bg-[#C5A059]/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const whatsappLink = `https://wa.me/923452769981?text=Hi%20Shiraz%20Interior%2C%20I%20am%20inquiring%20about%20"${encodeURIComponent(
                product.name
              )}"%20listed%20on%20your%20catalog.%20Please%20share%20swatches%20and%20Karachi%20delivery%2Finstallation%20details.`;

              return (
                <div
                  key={product.id}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
                >
                  {/* Top Media & Image */}
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('unsplash')) {
                            target.src = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1115] via-transparent to-transparent opacity-80" />

                      {/* Stock & Category Overlays */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-[#090C0E]/80 backdrop-blur-sm border border-stone-700/80 text-stone-200">
                          {product.categoryLabel}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E5C365]">
                          {product.stockStatus}
                        </span>
                      </div>

                      {/* Quick Specs Pill */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-stone-300 px-3 py-1.5 rounded-lg bg-[#090C0E]/80 backdrop-blur-md border border-stone-800">
                        <span>{product.accentFinish}</span>
                        <span className="font-mono text-stone-400">{product.warranty}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="text-lg font-display font-bold text-white group-hover:text-[#E5C365] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Feature checkmarks */}
                      <div className="space-y-1.5 pt-1">
                        {product.features.slice(0, 2).map((f, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-stone-300">
                            <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price display */}
                      <div className="pt-3 border-t border-stone-800/80 flex items-baseline justify-between">
                        <div>
                          <div className="text-[11px] text-stone-500">Price Estimate</div>
                          <div className="text-lg font-display font-bold text-white tabular-nums">
                            {product.pricePerUnit}
                          </div>
                        </div>
                        <span className="text-[11px] text-stone-400 text-right">{product.unit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-3 py-2 text-xs font-medium text-stone-200 hover:text-white bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-[#C5A059]/40 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Details & Calc</span>
                    </button>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Free Measurement Banner below the catalog */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900/90 via-[#10151A] to-stone-900/90 border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold">
              Karachi On-Site Experience
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              Want to touch the textures before deciding?
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
              We bring complete wallpaper catalog binders, WPC panel samples, and flooring planks directly to your residence in Karachi with zero visit charges.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 text-sm font-semibold text-[#090C0E] bg-gradient-to-r from-[#DFBF77] to-[#C5A059] hover:from-[#EAD598] hover:to-[#D4AF53] rounded-lg shadow-lg shadow-[#C5A059]/20 transition-all hover:scale-105 whitespace-nowrap shrink-0"
          >
            Request Catalog at Home
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
