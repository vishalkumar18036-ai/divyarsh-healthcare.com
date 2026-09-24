import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface PrintHeaderProps {
  language: Language;
}

export const PrintHeader: React.FC<PrintHeaderProps> = ({ language }) => {
  const currentDate = new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="hidden print:block mb-6 pb-4 border-b-2 border-[#15803D]">
      {/* Top Institutional Bar */}
      <div className="flex items-start justify-between gap-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <Logo variant="compact" />
          <div className="pl-3 border-l-2 border-slate-300 text-xs text-slate-700">
            <div className="font-bold text-[#0B4A8B] text-sm">
              {language === 'hi' ? 'स्वास्थ्य सेवा एवं शिक्षा संस्थान' : 'Healthcare Services & Education'}
            </div>
            <div className="text-[11px] font-semibold text-emerald-700">
              {language === 'hi'
                ? 'पंजीकृत एनजीओ: 191267 • दिल्ली-एनसीआर एवं अखिल भारतीय सेवाएं'
                : 'Regd. NGO No. 191267 • Delhi-NCR & Pan-India Patient Advocacy'}
            </div>
            <div className="text-[10px] text-slate-500">
              {CONTACT_INFO.address}
            </div>
          </div>
        </div>

        {/* Verification & Helplines Box */}
        <div className="text-right text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 min-w-[220px]">
          <div className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-800">
            {language === 'hi' ? '24x7 आधिकारिक हेल्पलाइन' : '24x7 Official Helpline'}
          </div>
          <div className="font-extrabold text-[#0B4A8B] text-sm">
            {CONTACT_INFO.primaryPhone}
          </div>
          <div className="text-[11px] font-semibold text-slate-700">
            {CONTACT_INFO.secondPhone} • {CONTACT_INFO.thirdPhone}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            {CONTACT_INFO.email} • {CONTACT_INFO.website}
          </div>
        </div>
      </div>

      {/* Document Sub-bar */}
      <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
        <div className="font-bold text-[#0B4A8B]">
          {language === 'hi'
            ? '📄 आधिकारिक स्वास्थ्य मार्गदर्शन विवरणिका व अस्पताल पैनल गाइड'
            : '📄 Official Patient Guidance Dossier & Hospital Schemes Guide'}
        </div>
        <div>
          <span>{language === 'hi' ? 'मुद्रण तिथि: ' : 'Date Generated: '}</span>
          <span className="font-bold text-slate-800">{currentDate}</span>
        </div>
      </div>
    </div>
  );
};
