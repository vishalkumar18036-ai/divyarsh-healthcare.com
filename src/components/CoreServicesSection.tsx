import React from 'react';
import { Stethoscope, Activity, Building2, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { CORE_SERVICES, CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface CoreServicesSectionProps {
  language: Language;
  onOpenInquiry: (serviceName?: string) => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({
  language,
  onOpenInquiry,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-7 h-7 text-emerald-600" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-blue-600" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-teal-600" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-7 h-7 text-indigo-600" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            {language === 'hi' ? 'हमारी प्रमुख सेवाएं' : 'Our Key Pillars'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'hi'
              ? 'मरीजों के लिए संपूर्ण स्वास्थ्य एवं मार्गदर्शन सेवाएं'
              : 'Comprehensive Healthcare Services & Patient Guidance'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'hi'
              ? 'हम मरीजों और उनके परिवारों को अस्पताल चयन, डॉक्टर परामर्श, जांच प्रक्रिया, सर्जरी संबंधी सहायता और उपचार की पूरी जानकारी सरल भाषा में उपलब्ध कराते हैं।'
              : 'We provide patients and families with transparent information on hospital selection, doctor consultation, diagnostic tests, surgical care, and cashless panel procedures.'}
          </p>
        </div>

        {/* 4 Cards Grid - Straight from the poster */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0B4A8B]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                  {getIcon(service.icon)}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0B4A8B] transition-colors">
                    {language === 'hi' ? service.titleHi : service.titleEn}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'hi' ? service.descHi : service.descEn}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  id={`service-inquiry-${idx}`}
                  onClick={() => onOpenInquiry(service.titleEn)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0B4A8B] hover:text-[#15803D] transition cursor-pointer"
                >
                  <span>{language === 'hi' ? 'विस्तार से जानें' : 'Learn More'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Quote Box */}
        <div className="mt-12 bg-gradient-to-r from-[#0B4A8B] to-[#0D5C9A] rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">
                {language === 'hi' ? 'हमारा संकल्प' : 'Our Commitment'}
              </span>
              <p className="text-lg sm:text-xl font-bold leading-snug">
                "{language === 'hi' ? CONTACT_INFO.taglineHi : CONTACT_INFO.taglineEn}"
              </p>
              <p className="text-xs sm:text-sm text-sky-100">
                {language === 'hi'
                  ? 'सही इलाज, सही समय और सही दिशा — आपके बेहतर स्वास्थ्य के लिए भरोसेमंद मार्गदर्शन।'
                  : 'Right treatment, right time, and right direction — trustworthy guidance for your optimal health.'}
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                id="services-consult-cta-btn"
                onClick={() => onOpenInquiry()}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-md transition cursor-pointer"
              >
                {language === 'hi' ? 'निःशुल्क परामर्श लें' : 'Free Consultation'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
