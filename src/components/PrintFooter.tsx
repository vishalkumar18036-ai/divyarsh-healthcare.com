import React from 'react';
import { CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface PrintFooterProps {
  language: Language;
}

export const PrintFooter: React.FC<PrintFooterProps> = ({ language }) => {
  return (
    <div className="hidden print:block mt-8 pt-4 border-t-2 border-slate-300 text-[10px] text-slate-500">
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="font-bold text-slate-800">{CONTACT_INFO.name}</span>
          <span> (NGO Regd. No. 191267) • </span>
          <span>{CONTACT_INFO.address}</span>
        </div>
        <div className="font-semibold text-emerald-800">
          {language === 'hi'
            ? 'निःशुल्क मार्गदर्शन हेतु कॉल करें: '
            : 'For Free Guidance Call: '}
          <span className="font-bold">{CONTACT_INFO.primaryPhone}</span>
        </div>
      </div>
      <div className="mt-1 text-slate-400 text-[9px] text-center">
        {language === 'hi'
          ? 'यह दस्तावेज़ केवल जनस्वास्थ्य जागरूकता और मरीज मार्गदर्शन के लिए है। किसी भी आपात स्थिति में तुरंत नजदीकी अस्पताल से संपर्क करें।'
          : 'This document is issued for public health awareness and patient advocacy. In medical emergencies, reach the nearest hospital immediately.'}
      </div>
    </div>
  );
};
