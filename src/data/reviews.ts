export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  reviewText: string;
  verified: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    author: 'Engr. Tariq Rasheed',
    location: 'Zoramin Residency, KU Circular Rd',
    rating: 5,
    date: '3 weeks ago',
    service: 'Fluted WPC Panels & TV Lounge Media Wall',
    reviewText: 'We live right across the street in Zoramin Residency. Visited Shiraz Interior at Decent Plaza after seeing their exterior display. Their master carpenter installed charcoal acoustic WPC panels with LED coving in just one day. Flawless cutting around power sockets. Highly recommend Shiraz bhai and team.',
    verified: true,
  },
  {
    id: 'rev-02',
    author: 'Ar. Saima Tariq Khan',
    location: 'DHA Phase 6, Karachi',
    rating: 5,
    date: '1 month ago',
    service: 'Herringbone SPC Flooring & 3D Damask Wallpaper',
    reviewText: 'As an interior architect, I am very particular about finish tolerances. Shiraz Interior provided sample booklets to my client’s villa in DHA for site measurement. The herringbone SPC flooring feels solid, 100% waterproof, and the German metallic wallpaper pattern matching is seamless. 4.9 stars well-deserved.',
    verified: true,
  },
  {
    id: 'rev-03',
    author: 'Taha Farooqui',
    location: 'Gulshan-e-Iqbal Block 13-D',
    rating: 5,
    date: '2 months ago',
    service: 'Motorized Zebra Blinds & Bedroom Wallpaper',
    reviewText: 'Called on WhatsApp from Gulshan and within 2 hours their measurement technician arrived with full wallpaper swatch folders and blind fabric books. The motorized zebra blinds work like a charm with the wireless remote. Transparent pricing with zero hidden charges.',
    verified: true,
  },
  {
    id: 'rev-04',
    author: 'Dr. Kashif Siddiqui',
    location: 'Gulistan-e-Johar Block 7',
    rating: 5,
    date: '3 months ago',
    service: 'PVC UV Marble Sheets & Drawing Room Decor',
    reviewText: 'Replaced our old peeling wall paint with Shiraz Interior’s Calacatta UV marble sheets and brass edge profiles. It looks like a 5-star hotel lobby now! Easy to clean and no more dampness issues. Friendly, respectful installation team.',
    verified: true,
  },
  {
    id: 'rev-05',
    author: 'Bilal Ahmed Sheikh',
    location: 'Malir Cantt, Karachi',
    rating: 5,
    date: '4 months ago',
    service: 'Royal Teak SPC Vinyl & Blackout Thermal Blinds',
    reviewText: 'Very honest service. They advised us properly regarding moisture barrier underlay for Karachi ground floors. The thermal blackout blinds significantly reduced afternoon heat in our southwest-facing bedrooms. Excellent job done on schedule.',
    verified: true,
  }
];

export const GOOGLE_STATS = {
  rating: 4.9,
  totalReviews: 26,
  freeSiteVisitsCount: '500+ Completed',
  experienceYears: '8+ Years',
  address: 'Decent Plaza, KU Circular Rd, Zoramin Residency, Mosamiyat, Karachi',
  phone: '+92 345 2769981',
  rawPhone: '+923452769981',
  whatsappUrl: 'https://wa.me/923452769981?text=Hi%20Shiraz%20Interior%2C%20I%20want%20to%20discuss%20interior%20styling%20for%20my%20home%2Foffice',
};
