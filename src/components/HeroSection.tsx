import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, KEY_STATS } from '../data/healthcareData';
import { APP_IMAGES } from '../assets/images';
import { Language } from '../types';

interface HeroSectionProps {
  language: Language;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language, onOpenInquiry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-emerald-50/40 pt-4 sm:pt-8 pb-12 sm:pb-16">
      {/* Decorative subtle medical background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Tagline Pill Banner */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'hi' ? 'स्वास्थ्य • सहायता • मार्गदर्शन • शिक्षा' : 'Health • Assistance • Guidance • Education'}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200/80 text-[#0B4A8B] text-xs font-bold shadow-2xs">
            <img src="/divyarsh_emblem.svg" alt="Divyarsh Healthcare Emblem" className="w-4 h-4 object-contain" />
            <span>NGO Regd. No. 191267</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-7 space-y-5 text-center sm:text-left">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B4A8B] block">
                {language === 'hi' ? 'आपकी सेहत, हमारी सर्वोच्च प्राथमिकता' : 'YOUR HEALTH OUR PRIORITY'}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {language === 'hi' ? (
                  <>
                    <span className="text-[#0F3876] block">दिव्यार्श</span>
                    <span className="text-[#0C7A39] block text-2xl sm:text-3xl lg:text-4xl mt-1">
                      हेल्थ केयर इंस्टीट्यूट
                    </span>
                    <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="inline-block px-3.5 py-1 bg-[#0084DE] text-white text-xs sm:text-sm font-bold rounded-full shadow-xs">
                        Healthcare Services &amp; Education
                      </span>
                      <span className="inline-block px-3 py-1 bg-[#10823F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs">
                        NGO Regd. No. 191267
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold block mt-3 text-[#0D5C9A]">
                      आपके स्वास्थ्य का साथी, हम हर कदम पर साथ हैं!
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[#0F3876] block">DIVYARSH</span>
                    <span className="text-[#0C7A39] block text-2xl sm:text-3xl lg:text-4xl mt-1">
                      HEALTH CARE INSTITUTE
                    </span>
                    <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="inline-block px-3.5 py-1 bg-[#0084DE] text-white text-xs sm:text-sm font-bold rounded-full shadow-xs">
                        Healthcare Services &amp; Education
                      </span>
                      <span className="inline-block px-3 py-1 bg-[#10823F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs">
                        NGO Regd. No. 191267
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold block mt-3 text-[#0D5C9A]">
                      Your Health Companion, With You At Every Step!
                    </span>
                  </>
                )}
              </h1>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {language === 'hi'
                ? 'हमारा उद्देश्य लोगों को सही जानकारी, सही मार्गदर्शन और सही समय पर सहायता प्रदान करना है, ताकि हर व्यक्ति एक स्वस्थ और सुरक्षित जीवन जी सके। आयुष्मान भारत (PM-JAY), CGHS, सरकारी व निजी पैनल अस्पतालों में गुणवत्तापूर्ण इलाज हेतु पूर्ण सहयोग।'
                : 'Divyarsh Health Care Institute is committed to providing quality healthcare services, surgical guidance, and public health education for a healthier, brighter tomorrow. We assist families with empanelled hospital admissions, Ayushman Bharat PM-JAY, and cashless care.'}
            </p>

            {/* Core Features Quick Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left pt-1">
              {[
                { hi: 'आयुष्मान भारत कार्ड से ₹5 लाख तक कैशलेस सहायता', en: 'Cashless assistance up to ₹5 Lakh under Ayushman PM-JAY' },
                { hi: 'घुटना, कूल्हा, स्पाइन व हृदय सर्जरी में विशेषज्ञ मार्गदर्शन', en: 'Expert guidance for Knee, Hip, Spine & Cardiac surgery' },
                { hi: 'CGHS, ECHS, DGHS व सभी TPA पैनलों में सहयोग', en: 'Full support across CGHS, ECHS, DGHS & all major TPAs' },
                { hi: '100% निःशुल्क एनजीओ मार्गदर्शन व परामर्श', en: '100% free patient guidance from verified NGO' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] flex-shrink-0" />
                  <span>{language === 'hi' ? item.hi : item.en}</span>
                </div>
              ))}
            </div>

            {/* Big Action Buttons directly mirroring the posters */}
            <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              {/* Call Now Button */}
              <a
                id="hero-call-now-btn"
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#15803D] hover:bg-[#116831] text-white px-5 sm:px-6 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-100 font-semibold leading-tight">
                    {language === 'hi' ? 'कॉल करें' : 'Call Now'}
                  </div>
                  <div className="font-extrabold">{CONTACT_INFO.primaryPhone}</div>
                </div>
              </a>

              {/* WhatsApp Button */}
              <a
                id="hero-whatsapp-btn"
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1faa54] text-white px-5 sm:px-6 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-100 font-semibold leading-tight">
                    {language === 'hi' ? 'व्हाट्सएप पर पूछें' : 'WhatsApp Support'}
                  </div>
                  <div className="font-extrabold">{CONTACT_INFO.whatsapp}</div>
                </div>
              </a>

              {/* Free Guidance Modal Trigger */}
              <button
                id="hero-free-consult-btn"
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-1.5 bg-[#0B4A8B] hover:bg-[#083a6f] text-white px-5 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition cursor-pointer"
              >
                <span>{language === 'hi' ? 'मुफ्त सहायता फॉर्म भरें' : 'Book Free Guidance'}</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>
            </div>

            {/* Helpline Numbers strip */}
            <div className="pt-2 text-xs text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-3 flex-wrap">
              <span>{language === 'hi' ? 'हेल्पलाइन नंबर:' : 'Helpline Numbers:'}</span>
              <a href={`tel:${CONTACT_INFO.secondPhoneRaw}`} className="text-[#0B4A8B] font-bold hover:underline">
                {CONTACT_INFO.secondPhone}
              </a>
              <span>•</span>
              <a href={`tel:${CONTACT_INFO.thirdPhoneRaw}`} className="text-[#0B4A8B] font-bold hover:underline">
                {CONTACT_INFO.thirdPhone}
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={APP_IMAGES.hero}
                alt="Divyarsh Healthcare Doctor Team and Patient Family"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

              {/* Bottom text inside image */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[11px] font-bold tracking-wide">
                    {language === 'hi' ? 'स्वस्थ भारत, समृद्ध भारत' : 'Healthy People, Stronger Nation'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-white drop-shadow-sm">
                  {language === 'hi'
                    ? 'सही इलाज, सही समय और सही दिशा — आपके बेहतर स्वास्थ्य के लिए भरोसेमंद मार्गदर्शन।'
                    : 'Right Treatment, Right Time, and Right Direction — Trustworthy Guidance for Better Health.'}
                </p>
              </div>

              {/* Floating Badge 1: Ayushman Bharat Cashless */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-emerald-100 flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-[#15803D]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-extrabold text-[#15803D] tracking-wider">
                    {language === 'hi' ? 'आयुष्मान भारत' : 'Ayushman Bharat'}
                  </div>
                  <div className="text-xs font-black text-slate-800">
                    {language === 'hi' ? '₹5 लाख तक मुफ्त इलाज' : 'Up to ₹5 Lakh Cashless'}
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Emergency Response */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-rose-100 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600">
                  <Heart className="w-4 h-4 fill-rose-600 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-extrabold text-rose-600">
                    24x7 Support
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {language === 'hi' ? 'सक्रिय हेल्पडेस्क' : 'Active Helpline'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {KEY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs hover:border-[#0B4A8B]/30 transition-all text-center"
            >
              <div className="text-xl sm:text-2xl font-black text-[#0B4A8B] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-700 mt-0.5">
                {language === 'hi' ? stat.labelHi : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
