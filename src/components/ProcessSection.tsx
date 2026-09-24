import React from 'react';
import { PhoneCall, FileSearch, Hospital, HeartHandshake, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface ProcessSectionProps {
  language: Language;
  onOpenInquiry: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  language,
  onOpenInquiry,
}) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <PhoneCall className="w-6 h-6 text-[#0B4A8B]" />;
      case 1:
        return <FileSearch className="w-6 h-6 text-[#15803D]" />;
      case 2:
        return <Hospital className="w-6 h-6 text-teal-600" />;
      case 3:
      default:
        return <HeartHandshake className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="process" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-blue-100 text-[#0B4A8B] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            {language === 'hi' ? 'सरल 4-चरणीय प्रक्रिया' : 'Simple 4-Step Workflow'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'hi'
              ? 'मरीज सहायता प्रक्रिया — शुरुआत से स्वस्थ होने तक'
              : 'Patient Care & Hospital Guidance Process'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'hi'
              ? 'बिना किसी परेशानी के सही डॉक्टर, सही अस्पताल और कैशलेस प्रक्रिया में कदम-दर-कदम सहयोग।'
              : 'From first phone call to complete post-surgical recovery, we walk with your family at every milestone.'}
          </p>
        </div>

        {/* 4 Steps Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Step badge & icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#0B4A8B] transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {language === 'hi' ? step.titleHi : step.titleEn}
                  </h3>
                  <div className="text-xs font-bold text-[#15803D] mt-0.5">
                    {language === 'hi' ? step.subHi : step.subEn}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'hi' ? step.detailHi : step.detailEn}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <span className="text-[11px] font-semibold text-slate-500">
                  {idx === 0 && (language === 'hi' ? 'कॉल: 87997 22280' : 'Call 24/7 Helpline')}
                  {idx === 1 && (language === 'hi' ? 'निशुल्क द्वितीय राय' : 'Free 2nd Opinion')}
                  {idx === 2 && (language === 'hi' ? 'कैशलेस एडमिशन' : 'Cashless Admission')}
                  {idx === 3 && (language === 'hi' ? 'स्वास्थ्य फॉलो-अप' : 'Continuous Recovery')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to start process */}
        <div className="mt-12 text-center">
          <button
            type="button"
            id="process-start-btn"
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 bg-[#0B4A8B] hover:bg-[#083a6f] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <span>{language === 'hi' ? 'पहला कदम उठाएं — रिपोर्ट साझा करें' : 'Take The First Step — Submit Case'}</span>
            <ArrowRight className="w-4 h-4 text-emerald-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
