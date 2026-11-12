/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatsAppInquiryBar } from './components/WhatsAppInquiryBar';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { Catalog } from './components/Catalog';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Estimator } from './components/Estimator';
import { InlineBookingForm } from './components/InlineBookingForm';
import { Reviews } from './components/Reviews';
import { LocationShowroom } from './components/LocationShowroom';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { SiteVisitModal } from './components/SiteVisitModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090C0E] text-[#EAE6DF] font-body selection:bg-[#C5A059]/30 selection:text-[#F3E5AB]">
      {/* Top Header & Navigation with Official Logo */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Direct WhatsApp Quick-Inquiry Bar */}
        <WhatsAppInquiryBar />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterGallery onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Filterable Product Catalog with Area Calculators */}
        <Catalog onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Turnkey Services Breakdown Grid (5 Core Services) */}
        <Services onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Why Choose Us Section */}
        <WhyChooseUs onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Interactive Room Finish & Cost Estimator */}
        <Estimator onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Dedicated Interactive Free Site Visit Multi-Step Booking Form */}
        <InlineBookingForm />

        {/* Google Maps Reviews (4.9 Rating) & Social Proof */}
        <Reviews />

        {/* Mosamiyat Studio Location & Timings */}
        <LocationShowroom onOpenBooking={() => setBookingModalOpen(true)} />
      </main>

      {/* Quiet Luxury Footer with ORION IT SOLUTIONS Copyright */}
      <Footer onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Sticky Interactive WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* Pop-up Free Site Visit Booking Modal */}
      <SiteVisitModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
