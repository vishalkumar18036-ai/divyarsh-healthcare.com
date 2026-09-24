/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EligibilityChecker } from './components/EligibilityChecker';
import { CoreServicesSection } from './components/CoreServicesSection';
import { SurgeriesSection } from './components/SurgeriesSection';
import { PanelsSection } from './components/PanelsSection';
import { ProcessSection } from './components/ProcessSection';
import { EducationAndValuesSection } from './components/EducationAndValuesSection';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('hi');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [prefilledSurgery, setPrefilledSurgery] = useState<string>('');
  const [prefilledScheme, setPrefilledScheme] = useState<string>('');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const handleOpenInquiry = (categoryOrTreatment?: string) => {
    setPrefilledSurgery(categoryOrTreatment || '');
    setPrefilledScheme('');
    setInquiryModalOpen(true);
  };

  const handleOpenInquiryWithData = (treatment: string, scheme: string) => {
    setPrefilledSurgery(treatment);
    setPrefilledScheme(scheme);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Top Navbar */}
      <Navbar
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          language={language}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 2. Interactive Eligibility & Hospital Scheme Checker */}
        <EligibilityChecker
          language={language}
          onOpenInquiryWithData={handleOpenInquiryWithData}
        />

        {/* 3. Core Services Section */}
        <CoreServicesSection
          language={language}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 4. Surgeries Section (Knee, Hip, Spine, Heart, General) */}
        <SurgeriesSection
          language={language}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 5. Government Panels & Insurance Tie-ups */}
        <PanelsSection
          language={language}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 6. 4-Step Patient Assistance Workflow */}
        <ProcessSection
          language={language}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 7. Health Education & Institutional Values */}
        <EducationAndValuesSection language={language} />

        {/* 8. Leadership & Team */}
        <TeamSection language={language} />

        {/* 9. Photo Showcase & Inpatient Care Moments */}
        <GallerySection language={language} />

        {/* 10. Frequently Asked Questions */}
        <FAQSection language={language} />

        {/* 11. Embedded Consultation Inquiry Form */}
        <InquirySection
          language={language}
          defaultSurgery={prefilledSurgery}
          defaultScheme={prefilledScheme}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Modal Consultation Form */}
      {inquiryModalOpen && (
        <InquirySection
          language={language}
          defaultSurgery={prefilledSurgery}
          defaultScheme={prefilledScheme}
          isModal={true}
          onCloseModal={() => setInquiryModalOpen(false)}
        />
      )}
    </div>
  );
}
