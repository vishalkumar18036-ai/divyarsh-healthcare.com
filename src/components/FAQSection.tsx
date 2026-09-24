import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface FAQSectionProps {
  language: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            {language === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'hi'
              ? 'मरीजों एवं परिवारों के सामान्य प्रश्न एवं उत्तर'
              : 'Everything You Need to Know About Patient Guidance'}
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            {language === 'hi'
              ? 'आयुष्मान कार्ड, अस्पताल चयन, पैनल अनुमति और दिव्यार्श सहायता प्रक्रिया की स्पष्ट जानकारी।'
              : 'Clear answers on Ayushman Bharat coverage, empanelled hospital procedures, and free NGO guidance.'}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0B4A8B]/40 bg-blue-50/20 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {language === 'hi' ? faq.questionHi : faq.questionEn}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#0B4A8B] text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/50">
                    {language === 'hi' ? faq.answerHi : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helpline Box */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="text-xs font-bold text-slate-800">
              {language === 'hi' ? 'क्या आपका कोई अन्य सवाल है?' : 'Have a different question or complex report?'}
            </div>
            <div className="text-[11px] text-slate-500">
              {language === 'hi'
                ? 'हमारी मेडिकल कोऑर्डिनेशन टीम से सीधे बात करें।'
                : 'Speak directly with our senior care coordinator.'}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 bg-[#15803D] hover:bg-[#116831] text-white text-xs font-bold px-3 py-2 rounded-lg transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.primaryPhoneRaw}</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1faa54] text-white text-xs font-bold px-3 py-2 rounded-lg transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
