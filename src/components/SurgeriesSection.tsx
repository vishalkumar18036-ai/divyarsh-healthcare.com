import React, { useState } from 'react';
import { Phone, MessageSquare, Check, ArrowRight, ShieldCheck, HeartPulse, Activity } from 'lucide-react';
import { SURGERIES, CONTACT_INFO } from '../data/healthcareData';
import { APP_IMAGES } from '../assets/images';
import { Language, SurgeryItem } from '../types';

interface SurgeriesSectionProps {
  language: Language;
  onOpenInquiry: (surgeryName?: string) => void;
}

export const SurgeriesSection: React.FC<SurgeriesSectionProps> = ({
  language,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<string>(SURGERIES[0].id);

  const activeSurgery: SurgeryItem =
    SURGERIES.find((s) => s.id === activeTab) || SURGERIES[0];

  return (
    <section id="surgeries" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 bg-blue-100 text-[#0B4A8B] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            {language === 'hi' ? 'विशेषज्ञ सर्जरी सहायता' : 'Specialized Surgery Support'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'hi'
              ? 'आधुनिक तकनीक एवं कैशलेस पैनलों के साथ सर्जरी मार्गदर्शन'
              : 'Advanced Surgical Procedures with Cashless Panel Tie-ups'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'hi'
              ? 'वरिष्ठ सर्जनों के परामर्श, न्यूनतम चीरे वाली आधुनिक सर्जरी एवं आयुष्मान भारत / CGHS पैनलों के माध्यम से आर्थिक राहत।'
              : 'Senior surgeon consultations, modern robotic & laparoscopic procedures, and zero out-of-pocket financial relief under govt panels.'}
          </p>
        </div>

        {/* Surgery Selection Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SURGERIES.map((surgery) => (
            <button
              key={surgery.id}
              type="button"
              id={`surgery-tab-${surgery.id}`}
              onClick={() => setActiveTab(surgery.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === surgery.id
                  ? 'bg-[#0B4A8B] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {language === 'hi' ? surgery.nameHi : surgery.nameEn}
            </button>
          ))}
        </div>

        {/* Active Surgery Highlight Bento Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-emerald-100 text-[#15803D] uppercase tracking-wide">
                  {activeSurgery.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {language === 'hi' ? activeSurgery.nameHi : activeSurgery.nameEn}
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {language === 'hi' ? activeSurgery.descHi : activeSurgery.descEn}
                </p>
              </div>

              {/* Symptoms / When Needed */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {language === 'hi' ? 'यह सर्जरी कब आवश्यक होती है?' : 'Common Clinical Indications:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(language === 'hi' ? activeSurgery.commonReasonsHi : activeSurgery.commonReasonsEn).map((reason, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 bg-white p-2 rounded-lg border border-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patient Benefits */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {language === 'hi' ? 'दिव्यार्श द्वारा प्रदान की जाने वाली सहायता:' : 'Divyarsh Support & Benefits:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(language === 'hi' ? activeSurgery.benefitsHi : activeSurgery.benefitsEn).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 bg-white p-2 rounded-lg border border-slate-200">
                      <Check className="w-4 h-4 text-[#15803D] flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  id={`surgery-inquire-btn-${activeSurgery.id}`}
                  onClick={() => onOpenInquiry(activeSurgery.nameEn)}
                  className="bg-[#0B4A8B] hover:bg-[#083a6f] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'hi' ? 'इस सर्जरी हेतु अस्पताल व खर्च पूछें' : 'Get Hospital & Cost Estimate'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/91${CONTACT_INFO.whatsapp}?text=नमस्ते,%20मुझे%20${activeSurgery.nameHi}%20के%20बारे%20में%20जानकारी%20चाहिए।`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#1faa54] text-white px-4 py-3 rounded-xl font-bold text-sm shadow-md transition flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'hi' ? 'रिपोर्ट्स व्हाट्सएप करें' : 'WhatsApp Reports'}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-4 space-y-4">
                <img
                  src={APP_IMAGES.surgeryTeam}
                  alt="Surgery Team Operating"
                  className="w-full h-56 object-cover rounded-xl"
                />

                <div className="p-2 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>{language === 'hi' ? 'प्रक्रिया प्रकार' : 'Procedure Standard'}</span>
                    <span className="text-[#15803D] font-extrabold">{language === 'hi' ? 'कैशलेस स्वीकृत' : 'Cashless Approved'}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-blue-50/70 p-2.5 rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-[#0B4A8B] flex-shrink-0" />
                    <span>{language === 'hi' ? 'आयुष्मान PM-JAY एवं CGHS द्वारा पूर्णतः अधिकृत' : 'Authorized under Ayushman Bharat PM-JAY & CGHS'}</span>
                  </div>

                  <div className="text-[11px] text-slate-500 leading-relaxed">
                    {language === 'hi'
                      ? 'मरीज की एक्स-रे, एमआरआई या सीटी स्कैन रिपोर्ट के आधार पर हम अनुभवी सर्जनों से निःशुल्क द्वितीय राय (Second Opinion) उपलब्ध कराते हैं।'
                      : 'Based on your MRI/CT/X-Ray, our senior orthopedic and spine consultants provide a comprehensive free second opinion.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Callout Banner straight from poster:
            "आपके या आपके परिवार के किसी सदस्य को किसी भी प्रकार की सर्जरी की आवश्यकता है? अभी संपर्क करें >" */}
        <div className="mt-12 bg-gradient-to-r from-emerald-700 via-[#15803D] to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-emerald-100">
                <HeartPulse className="w-4 h-4 text-emerald-300 animate-pulse" />
                <span>{language === 'hi' ? 'तत्काल सर्जरी परामर्श' : 'Immediate Surgery Assistance'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
                {language === 'hi'
                  ? 'आपके या आपके परिवार के किसी सदस्य को किसी भी प्रकार की सर्जरी की आवश्यकता है? अभी संपर्क करें >'
                  : 'Does anyone in your family require surgery? Contact Us Right Now >'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
                {language === 'hi'
                  ? 'अस्पताल चयन, खर्च का अनुमान, पैनल पात्रता एवं भर्ती प्रक्रिया में दिव्यार्श टीम आपकी निःस्वार्थ सेवा के लिए सदैव उपस्थित है।'
                  : 'Hospital recommendations, cost calculations, cashless paperwork, and post-op care — Divyarsh is always here for you.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <a
                id="surgery-banner-call-btn"
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="bg-white hover:bg-slate-100 text-[#15803D] font-black px-6 py-3.5 rounded-full text-sm shadow-md transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.primaryPhone}</span>
              </a>

              <a
                id="surgery-banner-whatsapp-btn"
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-900 hover:bg-emerald-950 text-white font-black px-6 py-3.5 rounded-full text-sm shadow-md transition flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>{CONTACT_INFO.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
