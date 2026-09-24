import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, Heart, ArrowUp, MessageSquare, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO, SURGERIES, PANELS } from '../data/healthcareData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenInquiry: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t-4 border-[#15803D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1: Institute Overview (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white p-3 sm:p-4 rounded-2xl inline-block shadow-md">
                <Logo variant="full" />
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {language === 'hi'
                  ? 'दिव्यार्श हेल्थ केयर इंस्टीट्यूट (पंजीकृत एनजीओ: 191267) मरीजों को सही समय, सही अस्पताल और सही इलाज दिलाने के लिए समर्पित है। आयुष्मान भारत, CGHS एवं सभी प्रमुख स्वास्थ्य पैनलों में निःशुल्क मार्गदर्शन।'
                  : 'Divyarsh Health Care Institute (NGO Regd. No. 191267) is dedicated to quality healthcare access, patient advocacy, and public health education across Delhi-NCR and India.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold">
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700 text-emerald-400">
                  NGO Regd. No. 191267
                </span>
                <span className="px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-700 text-sky-400">
                  Healthcare & Education
                </span>
              </div>
            </div>

            {/* Col 2: Surgery Guidance (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-black text-white uppercase tracking-wider">
                {language === 'hi' ? 'सर्जरी सहायता कार्यक्रम' : 'Surgical Specialties'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {SURGERIES.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => onOpenInquiry(s.nameEn)}
                      className="text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{language === 'hi' ? s.nameHi : s.nameEn}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Government Panels (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-black text-white uppercase tracking-wider">
                {language === 'hi' ? 'पैनल्स एवं स्कीम्स' : 'Panels & Schemes'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {PANELS.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => onOpenInquiry(p.name)}
                      className="text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                      <span>{language === 'hi' ? p.titleHi : p.titleEn}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Information (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-black text-white uppercase tracking-wider">
                {language === 'hi' ? 'कार्यालय एवं संपर्क' : 'Headquarters & Helpline'}
              </h4>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {CONTACT_INFO.address}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div className="space-x-1">
                    <a href={`tel:${CONTACT_INFO.primaryPhoneRaw}`} className="hover:text-emerald-300 font-bold">
                      {CONTACT_INFO.primaryPhone}
                    </a>
                    <span>|</span>
                    <a href={`tel:${CONTACT_INFO.secondPhoneRaw}`} className="hover:text-emerald-300">
                      {CONTACT_INFO.secondPhoneRaw}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#25D366] font-bold"
                  >
                    WhatsApp: {CONTACT_INFO.whatsapp}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber-200">
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noreferrer" className="hover:text-sky-200">
                    {CONTACT_INFO.website}
                  </a>
                </div>

                <div className="flex items-center gap-2.5 text-slate-400 text-[11px] pt-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>24x7 Helpline • Emergency Assistance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Mockup / Location Container */}
          <div className="py-6 border-b border-slate-800">
            <div className="rounded-xl overflow-hidden bg-slate-900 p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-700 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">
                    {CONTACT_INFO.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    311, Gali No. 10, Military Road, Nehru Nagar, Patel Nagar West, Central Delhi - 110008
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Patel+Nagar+West+Central+Delhi"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition"
              >
                {language === 'hi' ? 'गूगल मैप्स पर देखें' : 'View on Google Maps'}
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="text-center sm:text-left space-y-1">
              <div>
                © {new Date().getFullYear()} {CONTACT_INFO.name}. All Rights Reserved. NGO Regd. No. 191267.
              </div>
              <div className="text-[10px] text-slate-600">
                {language === 'hi'
                  ? 'दिव्यार्श हेल्थ केयर इंस्टीट्यूट एक पंजीकृत गैर-सरकारी संगठन है जो मरीजों को स्वास्थ्य मार्गदर्शन और सरकारी पैनल सहायता प्रदान करता है।'
                  : 'Divyarsh Health Care Institute is a registered healthcare NGO providing patient guidance and medical scheme coordination.'}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Floating Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          id="sticky-mobile-call-btn"
          href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#15803D] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm"
        >
          <Phone className="w-4 h-4" />
          <span>कॉल करें</span>
        </a>

        <a
          id="sticky-mobile-wa-btn"
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          id="sticky-mobile-form-btn"
          onClick={() => onOpenInquiry()}
          className="flex-1 flex items-center justify-center gap-1 bg-[#0B4A8B] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm"
        >
          <span>मुफ्त फॉर्म</span>
        </button>
      </div>
    </>
  );
};
