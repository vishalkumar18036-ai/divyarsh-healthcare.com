import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Menu, X, Languages, Clock, HeartHandshake, FileDown } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenInquiry: (defaultTreatment?: string) => void;
  onOpenPdfModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  onOpenInquiry,
  onOpenPdfModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelHi: 'होम', labelEn: 'Home' },
    { href: '#services', labelHi: 'सेवाएं', labelEn: 'Services' },
    { href: '#surgeries', labelHi: 'सर्जरी सहायता', labelEn: 'Surgeries' },
    { href: '#panels', labelHi: 'सरकारी पैनल्स', labelEn: 'Govt Panels' },
    { href: '#process', labelHi: 'सहायता प्रक्रिया', labelEn: 'Process' },
    { href: '#education', labelHi: 'स्वास्थ्य शिक्षा', labelEn: 'Education' },
    { href: '#team', labelHi: 'हमारी टीम', labelEn: 'Our Team' },
    { href: '#gallery', labelHi: 'गैलरी', labelEn: 'Gallery' },
    { href: '#contact', labelHi: 'संपर्क', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-gradient-to-r from-[#0B4A8B] via-[#0D5C9A] to-[#15803D] text-white py-1.5 px-3 sm:px-6 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left Info */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold bg-white/15 px-2 py-0.5 rounded-full text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {language === 'hi' ? 'पंजीकृत एनजीओ: 191267' : 'Regd. NGO: 191267'}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-100 text-[11px]">
              <Clock className="w-3 h-3 text-emerald-300" />
              {language === 'hi' ? '24x7 इमरजेंसी सहायता उपलब्ध' : '24x7 Emergency Assistance Available'}
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-200 text-[11px]">
              <MapPin className="w-3 h-3 text-rose-300" />
              Patel Nagar West, Central Delhi
            </span>
          </div>

          {/* Right Direct Links & Language Switcher */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              id="topbar-call-btn"
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1 text-white hover:text-emerald-200 font-bold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>

            <span className="text-white/40">|</span>

            <a
              id="topbar-whatsapp-btn"
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-100 font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <span className="text-white/40">|</span>

            {/* PDF Export Button in Topbar */}
            <button
              id="topbar-pdf-btn"
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-2 py-0.5 rounded-md font-semibold text-xs transition cursor-pointer"
              title={language === 'hi' ? 'वेबसाइट को PDF में डाउनलोड करें' : 'Download Website as PDF'}
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">PDF</span>
            </button>

            <span className="text-white/40">|</span>

            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLanguage}
              className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-2 py-0.5 rounded-md font-semibold text-xs transition cursor-pointer"
              title="Toggle Hindi / English"
            >
              <Languages className="w-3.5 h-3.5 text-amber-300" />
              <span>{language === 'hi' ? 'EN (English)' : 'हिन्दी (Hindi)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <Logo variant="full" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-700">
          {navLinks.map((item, idx) => (
            <a
              key={item.href}
              id={`nav-link-${idx}`}
              href={item.href}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                idx === 0
                  ? 'bg-[#15803D] text-white shadow-xs font-bold'
                  : 'hover:bg-slate-100 hover:text-[#0B4A8B]'
              }`}
            >
              {language === 'hi' ? item.labelHi : item.labelEn}
            </a>
          ))}
        </nav>

        {/* Actions Button */}
        <div className="hidden sm:flex items-center gap-2">
          {/* PDF Export Button */}
          <button
            id="nav-pdf-modal-btn"
            onClick={onOpenPdfModal}
            className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-3 py-2 rounded-full font-bold text-xs sm:text-sm transition cursor-pointer shadow-xs"
            title={language === 'hi' ? 'वेबसाइट को PDF में बदलें / डाउनलोड करें' : 'Download / Convert to PDF'}
          >
            <FileDown className="w-4 h-4 text-[#15803D]" />
            <span>{language === 'hi' ? 'PDF डाउनलोड' : 'Download PDF'}</span>
          </button>

          <button
            id="nav-inquiry-modal-btn"
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 bg-[#0B4A8B] hover:bg-[#083a6f] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:shadow-lg cursor-pointer"
          >
            <HeartHandshake className="w-4 h-4 text-emerald-300" />
            <span>{language === 'hi' ? 'मुफ्त सहायता लें' : 'Get Free Guidance'}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            id="mobile-pdf-btn"
            onClick={onOpenPdfModal}
            className="sm:hidden inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2.5 py-1.5 rounded-full text-xs font-bold border border-emerald-300"
            title="PDF"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>

          <button
            id="mobile-inquiry-btn"
            onClick={() => onOpenInquiry()}
            className="sm:hidden inline-flex items-center gap-1 bg-[#0B4A8B] text-white px-2.5 py-1.5 rounded-full text-xs font-bold"
          >
            {language === 'hi' ? 'सलाह लें' : 'Guidance'}
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2.5 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="flex items-center justify-center gap-1.5 bg-[#15803D] text-white font-bold text-xs py-2.5 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>कॉल करें</span>
            </a>
            <a
              id="mobile-drawer-wa-btn"
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold text-xs py-2.5 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* PDF Download in Mobile Drawer */}
          <button
            id="mobile-drawer-pdf-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPdfModal();
            }}
            className="w-full flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-300 text-[#15803D] py-2.5 rounded-xl font-bold text-xs shadow-xs"
          >
            <FileDown className="w-4 h-4 text-[#15803D]" />
            <span>
              {language === 'hi'
                ? '📄 पूरी वेबसाइट को PDF में डाउनलोड करें'
                : '📄 Convert & Download Website as PDF'}
            </span>
          </button>

          <div className="flex flex-col divide-y divide-slate-100 font-semibold text-slate-800 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-2 hover:bg-slate-50 hover:text-[#0B4A8B] transition"
              >
                {language === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              id="mobile-drawer-full-inquiry-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#0B4A8B] text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <HeartHandshake className="w-4 h-4 text-emerald-300" />
              <span>{language === 'hi' ? 'मुफ्त सर्जरी व अस्पताल सलाह फॉर्म' : 'Free Surgery & Hospital Guidance Form'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
