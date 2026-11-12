export interface Product {
  id: string;
  name: string;
  category: 'wallpapers' | 'panels' | 'flooring' | 'blinds';
  categoryLabel: string;
  tagline: string;
  pricePerUnit: string;
  unit: string;
  numericPrice: number;
  image: string;
  accentFinish: string;
  dimensions: string;
  material: string;
  warranty: string;
  features: string[];
  description: string;
  stockStatus: 'In Stock' | 'Fast Dispatch' | 'Custom Imported';
  bestFor: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'wp-01',
    name: 'Imperial Gold Damask 3D',
    category: 'wallpapers',
    categoryLabel: 'Luxury Wallpapers',
    tagline: 'Embossed metallic relief with deep charcoal textile background',
    pricePerUnit: 'Rs. 4,800',
    unit: 'per roll (57 sq.ft)',
    numericPrice: 4800,
    image: '/images/wallpapers.jpg',
    accentFinish: 'Champagne Gold & Charcoal',
    dimensions: '0.53m x 10m (5.3 sqm / roll)',
    material: 'Non-Woven Heavyweight Vinyl with Foil Emboss',
    warranty: '5 Years Color-Fast Guarantee',
    features: ['Washable & Scrubbable', 'Acoustic Sound Damping', 'Moisture & Mold Resistant', 'Seamless Pattern Match'],
    description: 'Bespoke European damask relief wallpaper created specifically for luxurious feature walls in drawing rooms, master bedrooms, and VIP executive suites.',
    stockStatus: 'In Stock',
    bestFor: 'Drawing Room & Master Bed Feature Walls'
  },
  {
    id: 'wp-02',
    name: 'Geometric Architectural Slate',
    category: 'wallpapers',
    categoryLabel: 'Luxury Wallpapers',
    tagline: 'Modern 3D faceted geometry with subtle brass inlays',
    pricePerUnit: 'Rs. 4,200',
    unit: 'per roll (57 sq.ft)',
    numericPrice: 4200,
    image: '/images/wallpapers.jpg',
    accentFinish: 'Smoked Onyx & Brass',
    dimensions: '0.53m x 10m (5.3 sqm / roll)',
    material: 'Deep Embossed German Fiber Vinyl',
    warranty: '5 Years Guarantee',
    features: ['Anti-Friction Surface', 'Zero Light Glare', 'Easy Peel & Clean', 'Flame Retardant B1'],
    description: 'A modern statement wallpaper designed with architectural polygons that reflect ambient cove lights dynamically throughout the day.',
    stockStatus: 'In Stock',
    bestFor: 'TV Media Walls & Office Conference Rooms'
  },
  {
    id: 'wp-03',
    name: 'Venetian Silk Grasscloth Textures',
    category: 'wallpapers',
    categoryLabel: 'Luxury Wallpapers',
    tagline: 'Hand-woven natural visual texture with matte earth tones',
    pricePerUnit: 'Rs. 3,600',
    unit: 'per roll (57 sq.ft)',
    numericPrice: 3600,
    image: '/images/wallpapers.jpg',
    accentFinish: 'Muted Bronze & Charcoal',
    dimensions: '0.53m x 10m (5.3 sqm / roll)',
    material: 'Textured Heavy Non-Woven Substrate',
    warranty: '5 Years Guarantee',
    features: ['Breathable Core', 'Eco-Friendly Low VOC', 'Textured Depth', 'Conceals Wall Imperfections'],
    description: 'Subtle, tactile, and calming. Perfect for understated luxury spaces that prioritize organic textures over bold patterns.',
    stockStatus: 'In Stock',
    bestFor: 'Corridors, Staircases & Dining Rooms'
  },
  {
    id: 'panel-01',
    name: 'Acoustic Fluted WPC Louvers',
    category: 'panels',
    categoryLabel: 'PVC & WPC Panels',
    tagline: 'Charcoal matte fluted slats with sound absorption felt',
    pricePerUnit: 'Rs. 1,450',
    unit: 'per 9.5ft panel (6.5 inches wide)',
    numericPrice: 1450,
    image: '/images/panels.jpg',
    accentFinish: 'Midnight Charcoal & Warm Oak Core',
    dimensions: '2900mm H x 160mm W x 22mm D',
    material: 'High-Density Wood-Plastic Composite (WPC)',
    warranty: '10 Years Termite & Water Proof',
    features: ['100% Waterproof & Termite Proof', 'Acoustic Sound Absorbing', 'Concealed Interlocking Clip System', 'Anti-Warping High Rigidity'],
    description: 'The signature Karachi interior trend. Shiraz Interior fluted WPC slats are engineered to withstand Karachi coastal humidity without bending or discoloration.',
    stockStatus: 'In Stock',
    bestFor: 'TV Lounge Backdrops & Entrance Foyers'
  },
  {
    id: 'panel-02',
    name: 'High-Gloss Calacatta UV Marble Sheet',
    category: 'panels',
    categoryLabel: 'PVC & WPC Panels',
    tagline: 'Mirror-finish luxury stone replica with gold-infused veins',
    pricePerUnit: 'Rs. 3,900',
    unit: 'per sheet (8ft x 4ft)',
    numericPrice: 3900,
    image: '/images/panels.jpg',
    accentFinish: 'Calacatta Gold & Deep Charcoal',
    dimensions: '2440mm x 1220mm (3.2mm Thickness)',
    material: 'Compressed PVC Core with UV Hardcoat',
    warranty: '10 Years Scratch & Water Resistance',
    features: ['Scratch-Resistant 4H UV Coat', 'Zero Grout Lines', 'Lightweight Easy Installation', 'Fire Resistant Class B1'],
    description: 'Gives the opulent look of imported Italian Calacatta marble slab at one-fifth the weight and cost, without needing heavy masonry.',
    stockStatus: 'In Stock',
    bestFor: 'Powder Rooms, Dining Highlights & Lift Lobbies'
  },
  {
    id: 'panel-03',
    name: 'Exterior Weatherproof WPC Cladding',
    category: 'panels',
    categoryLabel: 'PVC & WPC Panels',
    tagline: 'Heavy-duty co-extrusion UV-shielded exterior louvers',
    pricePerUnit: 'Rs. 1,850',
    unit: 'per 9.5ft plank',
    numericPrice: 1850,
    image: '/images/panels.jpg',
    accentFinish: 'Smoked Walnut UV Armor',
    dimensions: '2900mm H x 210mm W x 26mm D',
    material: 'Co-extruded WPC with Fluorocarbon Layer',
    warranty: '15 Years UV & Rot Warranty',
    features: ['Withstands Direct Karachi Sunlight', 'Zero Maintenance Oiling', 'Wind & Rain Proof', 'Heavy Structural Gauge'],
    description: 'Built for Karachi outdoor balconies, villa elevations, and terrace patio accents. Resists salt air, intense heat, and monsoons.',
    stockStatus: 'Fast Dispatch',
    bestFor: 'Terrace Walls, Balconies & Main Gate Pillars'
  },
  {
    id: 'fl-01',
    name: 'Herringbone Smoked Walnut SPC Flooring',
    category: 'flooring',
    categoryLabel: 'Wooden & Vinyl Flooring',
    tagline: 'Ultra-durable rigid core planks with micro-beveled luxury grain',
    pricePerUnit: 'Rs. 240',
    unit: 'per sq.ft (Installed with Underlay)',
    numericPrice: 240,
    image: '/images/flooring.jpg',
    accentFinish: 'Smoked Antique Walnut',
    dimensions: '600mm x 120mm x 5.5mm (0.5mm Wear Layer)',
    material: 'Stone Plastic Composite (SPC) + IXPE Pad',
    warranty: '15 Years Residential Wear Warranty',
    features: ['100% Submersion Waterproof', 'AC4 Commercial Wear Rating', 'Built-in Acoustic IXPE Backing', 'Uniclic Drop-Lock Mechanism'],
    description: 'Combines the timeless prestige of Parisian herringbone parquet with modern SPC waterproof performance. Completely unaffected by spills or mopping.',
    stockStatus: 'In Stock',
    bestFor: 'Luxury Bedrooms, Drawing Rooms & Penthouse Suites'
  },
  {
    id: 'fl-02',
    name: 'Royal Teak Natural Grain Vinyl Planks',
    category: 'flooring',
    categoryLabel: 'Wooden & Vinyl Flooring',
    tagline: 'Wide-plank embossed-in-register warm teak timber finish',
    pricePerUnit: 'Rs. 195',
    unit: 'per sq.ft (Installed with Underlay)',
    numericPrice: 195,
    image: '/images/flooring.jpg',
    accentFinish: 'Warm Golden Teak',
    dimensions: '1220mm x 180mm x 5.0mm',
    material: 'Virgin Polymer Rigid Core',
    warranty: '12 Years Residential Warranty',
    features: ['Warm & Soft Underfoot', 'Slip-Resistant R10 Rating', 'Pet-Proof & Scratch Resilient', 'Silent Walking IXPE Layer'],
    description: 'Wide format planks that brighten dark corridors and open floor plans with authentic synchronized wood grain texture.',
    stockStatus: 'In Stock',
    bestFor: 'Family Lounges, Home Theaters & Kids Rooms'
  },
  {
    id: 'bl-01',
    name: 'Motorized Dual Zebra Blinds',
    category: 'blinds',
    categoryLabel: 'Modern Window Blinds',
    tagline: 'Smart remote & manual transition between sheer light and full privacy',
    pricePerUnit: 'Rs. 320',
    unit: 'per sq.ft (Custom Sized)',
    numericPrice: 320,
    image: '/images/blinds.jpg',
    accentFinish: 'Slate Grey & Sheer Linen',
    dimensions: 'Custom Made to Millimeter Window Specs',
    material: 'Double-Layer Anti-Static Polyester Fabric',
    warranty: '3 Years Motor & Fabric Warranty',
    features: ['Motorized Remote or Pull-Cord Option', 'Dust-Repellent Anti-Static Coating', 'Blocks 95% Harmful UV Rays', 'Precision Aluminum Bottom Bar'],
    description: 'Precision alternating opaque and sheer horizontal stripes allow you to customize light filtration from gentle ambiance to deep shade with one finger touch.',
    stockStatus: 'In Stock',
    bestFor: 'Modern Master Bedrooms & High-Rise Apartment Windows'
  },
  {
    id: 'bl-02',
    name: 'Architectural Blackout Thermal Roller Blinds',
    category: 'blinds',
    categoryLabel: 'Modern Window Blinds',
    tagline: '100% total room blackout with silver reflective thermal back',
    pricePerUnit: 'Rs. 260',
    unit: 'per sq.ft (Custom Sized)',
    numericPrice: 260,
    image: '/images/blinds.jpg',
    accentFinish: 'Charcoal Black & Thermal Silver',
    dimensions: 'Custom Made to Exact Window Dimensions',
    material: 'Triple-Layer Woven Fabric with Foamed Blackout Core',
    warranty: '3 Years Warranty',
    features: ['100% Light Seal Blackout', 'Lowers Room Heat by up to 5°C', 'Acoustic Street Noise Reduction', 'Heavy Duty Steel Tube Mechanism'],
    description: 'Essential for Karachi summer heat. The thermal backing reflects solar heat while ensuring cinema-grade dark blackout in bedrooms and home theaters.',
    stockStatus: 'In Stock',
    bestFor: 'Bedrooms, Media Rooms & Sun-Facing Windows'
  }
];

export interface KarachiArea {
  id: string;
  name: string;
  zone: string;
  estimatedTransit: string;
}

export const KARACHI_AREAS: KarachiArea[] = [
  { id: 'mosamiyat', name: 'Mosamiyat & KU Circular Rd', zone: 'Direct Studio Vicinity (Decent Plaza)', estimatedTransit: '15 - 30 mins' },
  { id: 'zoramin', name: 'Zoramin Residency & Scheme 33', zone: 'Direct Studio Vicinity', estimatedTransit: '15 - 30 mins' },
  { id: 'gulshan', name: 'Gulshan-e-Iqbal (Blocks 1–19)', zone: 'East Karachi', estimatedTransit: '30 - 45 mins' },
  { id: 'johar', name: 'Gulistan-e-Johar (Blocks 1–20)', zone: 'East Karachi', estimatedTransit: '30 - 45 mins' },
  { id: 'dha', name: 'DHA Defence (Phases 1–8)', zone: 'South Karachi', estimatedTransit: '45 - 60 mins' },
  { id: 'clifton', name: 'Clifton (Blocks 1–9)', zone: 'South Karachi', estimatedTransit: '45 - 60 mins' },
  { id: 'pechs', name: 'PECHS & Bahadurabad', zone: 'Central Karachi', estimatedTransit: '35 - 50 mins' },
  { id: 'nazimabad', name: 'North Nazimabad & Nazimabad', zone: 'Central Karachi', estimatedTransit: '40 - 55 mins' },
  { id: 'malir', name: 'Malir Cantt & Model Colony', zone: 'East Karachi', estimatedTransit: '30 - 45 mins' },
  { id: 'bahria', name: 'Bahria Town Karachi', zone: 'Motorway M-9', estimatedTransit: '45 - 60 mins' },
  { id: 'federal-b', name: 'Federal B Area', zone: 'Central Karachi', estimatedTransit: '35 - 50 mins' },
  { id: 'kda', name: 'KDA Scheme 1 & Tipu Sultan', zone: 'Central Karachi', estimatedTransit: '35 - 50 mins' },
];
