/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import CrechePricing from "./components/CrechePricing";
import AttendanceRules from "./components/AttendanceRules";
import Testimonials from "./components/Testimonials";
import InstagramSection from "./components/InstagramSection";
import LocationAndHours from "./components/LocationAndHours";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PetModal from "./components/PetModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden antialiased bg-[#FBF9FA]">
      {/* Rules Banner - Premium Yellow-Gold Vibe */}
      <div className="bg-gradient-to-r from-brand-yellow to-brand-gold text-slate-950 py-3 px-6 text-center text-xs sm:text-sm font-extrabold tracking-wide flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-1.5 relative z-40 shadow-md border-b border-brand-yellow/40">
        <div className="flex items-center gap-1.5">
          <span className="text-base">✨</span>
          <span>Ambiente 100% livre de gaiolas e supervisionado 24h</span>
        </div>
        <span className="hidden md:inline text-slate-900/20 font-normal">|</span>
        <div className="flex items-center gap-1.5">
          <span className="text-base">🚫</span>
          <span>Obrigatório machos <strong className="underline decoration-slate-950 decoration-2 underline-offset-2 font-black">CASTRADOS</strong></span>
        </div>
        <span className="hidden md:inline text-slate-900/20 font-normal">|</span>
        <a href="https://wa.me/5547996587183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors font-extrabold group">
          <span className="text-base group-hover:scale-110 transition-transform">📲</span>
          <span>WhatsApp: (47) 99658-7183</span>
        </a>
      </div>

      {/* Navigation */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content Sections - Premium Conversion Hierarchy */}
      <main className="flex-grow">
        <Hero onOpenModal={handleOpenModal} />
        
        <Benefits />
        
        <CrechePricing />
        
        <AttendanceRules />
        
        <Testimonials />
        
        <InstagramSection />
        
        <LocationAndHours />
        
        <FAQ />
        
        <CTAFinal />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Interactive Estimator Wizard */}
      <PetModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

