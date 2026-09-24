import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Building, HelpCircle, Phone } from 'lucide-react';
import { PANELS, CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface PanelsSectionProps {
  language: Language;
  onOpenInquiry: (panelScheme?: string) => void;
}

export const PanelsSection: React.FC<PanelsSectionProps> = ({
  language,
  onOpenInquiry,
}) => {
  return (
    <section id="panels" className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            {language === 'hi' ? 'सरकारी पैनल्स एवं टाई-अप्स' : 'Government Schemes & TPA Panels'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'hi'
              ? 'आयुष्मान भारत, CGHS, ECHS एवं सभी प्रमुख बीमा पैनल्स'
              : 'Ayushman Bharat PM-JAY, CGHS, ECHS & All Health Panels'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'hi'
              ? 'हम सरकारी योजनाओं एवं निजी स्वास्थ्य बीमा के तहत पंजीकृत सुपर स्पेशियलिटी अस्पतालों में कैशलेस भर्ती, अप्रूवल और कागजी कार्यवाही को सुगम बनाते हैं।'
              : 'We streamline paperwork, eligibility verification, and pre-authorizations so you receive seamless cashless medical admissions.'}
          </p>
        </div>

        {/* Highlighted Banner directly from poster:
            "इन सभी पैनलों से इलाज कराना आपकी प्राथमिकता है, तो आप बताइए, आपका पूरा सहयोग किया जाएगा।" */}
        <div className="mb-10 bg-gradient-to-r from-[#0B4A8B] via-[#0D5C9A] to-[#15803D] rounded-2xl p-5 sm:p-7 text-white shadow-lg text-center">
          <div className="max-w-3xl mx-auto space-y-2">
            <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest text-emerald-200">
              {language === 'hi' ? 'हमारा वचन' : 'Patient First Commitment'}
            </span>
            <p className="text-lg sm:text-2xl font-black leading-snug">
              {language === 'hi'
                ? '“इन सभी पैनलों से इलाज कराना आपकी प्राथमिकता है, तो आप बताइए, आपका पूरा सहयोग किया जाएगा।”'
                : '“If getting treatment under any of these panels is your priority, let us know — we will provide complete assistance.”'}
            </p>
            <p className="text-xs sm:text-sm text-sky-100">
              {language === 'hi'
                ? 'कागजी औपचारिकताओं, रेफरल लेटर और पैनल मंजूरी में कोई असुविधा नहीं होने दी जाएगी।'
                : 'Zero hassle in documentation, referral verification, or panel pre-authorization.'}
            </p>
          </div>
        </div>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PANELS.map((panel, idx) => (
            <div
              key={panel.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#15803D]">
                    <ShieldCheck className="w-6 h-6" />
                  </span>
                  {panel.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-[#15803D] border border-emerald-200">
                      {panel.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {language === 'hi' ? panel.titleHi : panel.titleEn}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'hi' ? panel.descHi : panel.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {language === 'hi' ? 'कवरेज लाभ:' : 'Coverage Benefit:'}
                  </div>
                  <div className="text-xs font-bold text-[#0B4A8B] mt-0.5">
                    {language === 'hi' ? panel.coverageInfoHi : panel.coverageInfoEn}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 flex items-center justify-between">
                <button
                  type="button"
                  id={`panel-inquiry-${idx}`}
                  onClick={() => onOpenInquiry(panel.name)}
                  className="text-xs font-bold text-[#15803D] hover:text-[#0B4A8B] transition flex items-center gap-1 cursor-pointer"
                >
                  <span>{language === 'hi' ? 'पैनल अस्पताल सूची देखें' : 'View Empanelled Hospitals'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Private Insurance & TPA Ticker */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <div className="text-center mb-4">
            <h4 className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
              {language === 'hi'
                ? 'सभी प्रमुख निजी बीमा एवं TPA चैनल समर्थित'
                : 'Supported Private Insurance & TPA Networks'}
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-slate-600">
            {['Bajaj Allianz', 'HDFC ERGO', 'Niva Bupa (Max Bupa)', 'Star Health', 'Care Health', 'ICICI Lombard', 'Medi Assist', 'Heritage Health'].map((tpa, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs"
              >
                {tpa}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
