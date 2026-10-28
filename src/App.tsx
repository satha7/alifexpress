import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatsAppInquiryGenerator } from './components/WhatsAppInquiryGenerator';
import { CityCoverage } from './components/CityCoverage';
import { SpecializedCare } from './components/SpecializedCare';
import { FleetSafety } from './components/FleetSafety';
import { PrepChecklist } from './components/PrepChecklist';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 font-sans selection:bg-emerald-700 selection:text-white" dir="rtl">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Interactive WhatsApp Route & Message Builder (Direct Booking) */}
        <WhatsAppInquiryGenerator />

        {/* All Saudi Cities & Express Corridors */}
        <CityCoverage />

        {/* Specialized Care for Cats, Birds, and other pets */}
        <SpecializedCare />

        {/* Fleet Equipment, 24/7 AC, Video Reports */}
        <FleetSafety />

        {/* Owner Travel Preparation Advice */}
        <PrepChecklist />

        {/* Customer Testimonials Across Saudi Cities */}
        <Reviews />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Call Action Buttons (and mobile bottom bar) */}
      <FloatingContact />
    </div>
  );
}
