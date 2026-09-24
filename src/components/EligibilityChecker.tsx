import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Phone, MessageSquare, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface EligibilityCheckerProps {
  language: Language;
  onOpenInquiryWithData: (treatment: string, scheme: string) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({
  language,
  onOpenInquiryWithData,
}) => {
  const [selectedSurgery, setSelectedSurgery] = useState('knee');
  const [selectedPanel, setSelectedPanel] = useState('ayushman');
  const [patientCity, setPatientCity] = useState('');
  const [checked, setChecked] = useState(false);

  const surgeriesList = [
    { id: 'knee', hi: 'घुटना प्रत्यारोपण (Knee Replacement)', en: 'Knee Replacement Surgery' },
    { id: 'hip', hi: 'कूल्हा प्रत्यारोपण (Hip Replacement)', en: 'Hip Replacement Surgery' },
    { id: 'spine', hi: 'रीढ़ / स्पाइन सर्जरी (Spine Surgery)', en: 'Spine & Disc Surgery' },
    { id: 'heart', hi: 'हृदय सर्जरी (Heart / CABG Surgery)', en: 'Heart & Bypass Surgery' },
    { id: 'general', hi: 'जनरल / लेप्रोस्कोपिक सर्जरी (Gallbladder/Hernia)', en: 'General & Laparoscopic Surgery' },
  ];

  const panelsList = [
    { id: 'ayushman', nameHi: 'आयुष्मान भारत कार्ड (PM-JAY)', nameEn: 'Ayushman Bharat Card (PM-JAY)' },
    { id: 'cghs', nameHi: 'CGHS (केंद्रीय कर्मचारी / पेंशनभोगी)', nameEn: 'CGHS (Central Govt Staff / Pensioner)' },
    { id: 'echs', nameHi: 'ECHS (पूर्व सैनिक व परिवार)', nameEn: 'ECHS (Ex-Servicemen & Veterans)' },
    { id: 'dghs', nameHi: 'DGHS (दिल्ली सरकार स्वास्थ्य योजना)', nameEn: 'DGHS (Delhi Govt Health Scheme)' },
    { id: 'djb', nameHi: 'DJB (दिल्ली जल बोर्ड पैनल)', nameEn: 'Delhi Jal Board (DJB) Panel' },
    { id: 'insurance', nameHi: 'प्राइवेट मेडिक्लेम / TPA इंश्योरेंस', nameEn: 'Private Health Insurance / TPA' },
    { id: 'none', nameHi: 'कोई कार्ड नहीं (रियायती / चैरिटेबल दरें)', nameEn: 'No Card (Subsidized / Charitable)' },
  ];

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0B4A8B] to-[#15803D] px-4 sm:px-6 py-3 text-white flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h2 className="text-sm sm:text-base font-bold">
              {language === 'hi'
                ? 'कैशलेस सर्जरी एवं अस्पताल पैनल पात्रता जांचें (100% Free)'
                : 'Check Cashless Surgery & Hospital Panel Eligibility (100% Free)'}
            </h2>
          </div>
          <span className="text-xs bg-white/20 text-white px-2.5 py-0.5 rounded-full font-semibold">
            {language === 'hi' ? 'त्वरित जांच • कोई शुल्क नहीं' : 'Instant Check • Zero Fee'}
          </span>
        </div>

        {/* Interactive Form */}
        <form onSubmit={handleCheck} className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Field 1: Surgery Required */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {language === 'hi' ? '1. आवश्यक सर्जरी चुनें:' : '1. Select Required Surgery:'}
              </label>
              <select
                id="checker-surgery-select"
                value={selectedSurgery}
                onChange={(e) => {
                  setSelectedSurgery(e.target.value);
                  setChecked(false);
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B] focus:border-[#0B4A8B]"
              >
                {surgeriesList.map((s) => (
                  <option key={s.id} value={s.id}>
                    {language === 'hi' ? s.hi : s.en}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Panel or Card */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {language === 'hi' ? '2. उपलब्ध कार्ड या पैनल चुनें:' : '2. Select Card / Scheme:'}
              </label>
              <select
                id="checker-panel-select"
                value={selectedPanel}
                onChange={(e) => {
                  setSelectedPanel(e.target.value);
                  setChecked(false);
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B] focus:border-[#0B4A8B]"
              >
                {panelsList.map((p) => (
                  <option key={p.id} value={p.id}>
                    {language === 'hi' ? p.nameHi : p.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: City / Area & Submit Button */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {language === 'hi' ? '3. आपका शहर या जिला:' : '3. Your City / Location:'}
              </label>
              <div className="flex gap-2">
                <input
                  id="checker-city-input"
                  type="text"
                  placeholder={language === 'hi' ? 'जैसे दिल्ली, गाजियाबाद...' : 'e.g. Delhi, NCR, Lucknow...'}
                  value={patientCity}
                  onChange={(e) => setPatientCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B]"
                />
                <button
                  id="checker-submit-btn"
                  type="submit"
                  className="bg-[#15803D] hover:bg-[#116831] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm whitespace-nowrap cursor-pointer transition"
                >
                  {language === 'hi' ? 'पात्रता देखें' : 'Check Now'}
                </button>
              </div>
            </div>
          </div>

          {/* Instant Result Box */}
          {checked && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#15803D] flex-shrink-0" />
                    <span className="font-extrabold text-sm sm:text-base text-emerald-900">
                      {language === 'hi'
                        ? 'शुभ समाचार! यह सर्जरी अनुमोदित पैनल अस्पतालों में कवर की जाती है।'
                        : 'Great News! This surgery is covered across empanelled partner hospitals.'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {selectedPanel === 'ayushman'
                      ? language === 'hi'
                        ? 'आयुष्मान भारत (PM-JAY) के अंतर्गत पात्र मरीजों को अस्पताल में भर्ती, इंप्लांट, दवाइयां और जांचें ₹5 लाख तक पूर्णतः कैशलेस उपलब्ध हैं।'
                        : 'Under Ayushman Bharat (PM-JAY), eligible beneficiaries receive completely free cashless hospitalization, implants, medicines, and tests up to ₹5,00,000.'
                      : selectedPanel === 'insurance'
                      ? language === 'hi'
                        ? 'बजाज आलियांज, HDFC ERGO, निवा बूपा, स्टार हेल्थ आदि के तहत हमारे पैनल अस्पतालों में त्वरित प्री-ऑथराइजेशन और कैशलेस सहायता मिलती है।'
                        : 'Fast-track cashless pre-authorization is available with Bajaj Allianz, HDFC ERGO, Niva Bupa, Star Health, and all major TPAs.'
                      : language === 'hi'
                      ? 'सरकारी पैनल नियमों के तहत अस्पताल चयन, डॉक्टर सेकंड ओपिनियन और कागजी प्रक्रिया में दिव्यार्श टीम पूरा सहयोग करेगी।'
                      : 'Our team will assist with accredited hospital selection, doctor second opinions, and cashless documentation.'}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    id="checker-inquiry-btn"
                    onClick={() => {
                      const surgeryName = surgeriesList.find((s) => s.id === selectedSurgery)?.en || selectedSurgery;
                      const panelName = panelsList.find((p) => p.id === selectedPanel)?.nameEn || selectedPanel;
                      onOpenInquiryWithData(surgeryName, panelName);
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#0B4A8B] hover:bg-[#083a6f] text-white px-3.5 py-2 rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <span>{language === 'hi' ? 'मार्गदर्शन प्राप्त करें' : 'Get Hospital List'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                    className="inline-flex items-center gap-1 bg-[#15803D] hover:bg-[#116831] text-white px-3 py-2 rounded-lg text-xs font-bold transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{CONTACT_INFO.primaryPhoneRaw}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
