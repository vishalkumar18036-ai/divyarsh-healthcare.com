import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO, SURGERIES, PANELS, PROCESS_STEPS, VALUES } from '../data/healthcareData';
import { Language } from '../types';
import { Phone, Mail, MapPin, Globe, CheckCircle2, ShieldCheck, Heart, FileText, Clock } from 'lucide-react';

interface PrintBrochureProps {
  language: Language;
}

export const PrintBrochure: React.FC<PrintBrochureProps> = ({ language }) => {
  return (
    <div id="print-brochure-container" className="hidden print-brochure:block bg-white text-slate-900 font-sans p-6">
      {/* PAGE 1 */}
      <div className="print-page min-h-[980px] flex flex-col justify-between pb-8">
        <div>
          {/* Header */}
          <div className="border-b-4 border-[#15803D] pb-4 mb-5 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Logo variant="compact" />
              <div className="pl-3 border-l-2 border-slate-300">
                <div className="text-xs font-black text-[#0B4A8B] tracking-wider uppercase">
                  {language === 'hi' ? 'स्वास्थ्य सेवा एवं शिक्षा संस्थान' : 'Healthcare Services & Education'}
                </div>
                <div className="text-[11px] font-bold text-emerald-800">
                  {language === 'hi' ? 'पंजीकृत एनजीओ: 191267' : 'Regd. NGO No. 191267'}
                </div>
                <div className="text-[10px] text-slate-600">
                  Patel Nagar West, Central Delhi - 110008
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-slate-500">
                {language === 'hi' ? '24x7 आपातकालीन हेल्पलाइन' : '24x7 Emergency Helpline'}
              </div>
              <div className="text-base font-black text-[#15803D]">
                {CONTACT_INFO.primaryPhone}
              </div>
              <div className="text-xs font-bold text-[#0B4A8B]">
                {CONTACT_INFO.secondPhone} • {CONTACT_INFO.thirdPhone}
              </div>
            </div>
          </div>

          {/* Banner Tagline */}
          <div className="bg-gradient-to-r from-blue-900 to-emerald-800 text-white rounded-xl p-4 mb-5 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                {language === 'hi' ? 'स्वास्थ्य • सहायता • मार्गदर्शन • शिक्षा' : 'Health • Assistance • Guidance • Education'}
              </div>
              <div className="text-xl font-black mt-0.5">
                {language === 'hi'
                  ? 'आपके स्वास्थ्य का साथी, हम हर कदम पर साथ हैं!'
                  : 'Your Healthcare Companion, With You At Every Step!'}
              </div>
              <div className="text-xs text-slate-200 mt-1 max-w-xl">
                {language === 'hi'
                  ? 'आयुष्मान भारत (PM-JAY), CGHS, ईसीएचएस एवं सभी प्रमुख पैनलों के तहत गुणवत्तापूर्ण सर्जरी व अस्पताल भर्ती में 100% निःशुल्क मार्गदर्शन।'
                  : 'Divyarsh Health Care Institute assists patients and families with expert guidance for cashless hospital admissions and critical surgeries.'}
              </div>
            </div>
            <div className="hidden sm:block text-center bg-white/10 backdrop-blur-xs px-3 py-2 rounded-lg border border-white/20">
              <span className="text-[10px] block text-emerald-200 font-bold uppercase">Cashless Limit</span>
              <span className="text-lg font-black text-white">₹5 Lakh</span>
              <span className="text-[9px] block text-slate-200">Ayushman PM-JAY</span>
            </div>
          </div>

          {/* 5 Core Surgeries Grid */}
          <div className="mb-5">
            <h3 className="text-sm font-black text-[#0B4A8B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#15803D]" />
              <span>{language === 'hi' ? 'विशेष सर्जरी सहायता कार्यक्रम' : 'Specialized Surgery Assistance Programs'}</span>
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              {SURGERIES.map((surgery) => (
                <div key={surgery.id} className="border border-slate-200 rounded-lg p-3 bg-slate-50/70">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900">
                      {language === 'hi' ? surgery.nameHi : surgery.nameEn}
                    </span>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      {surgery.stat}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                    {language === 'hi' ? surgery.descriptionHi : surgery.descriptionEn}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {surgery.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-[9px] font-medium bg-white border border-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Government Panels & Schemes */}
          <div>
            <h3 className="text-sm font-black text-[#0B4A8B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0B4A8B]" />
              <span>{language === 'hi' ? 'संबद्ध सरकारी योजनाएं व कैशलेस पैनल्स' : 'Government Panels & Cashless Schemes'}</span>
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {PANELS.map((panel) => (
                <div key={panel.id} className="border border-slate-200 rounded-lg p-2.5 bg-white text-left">
                  <div className="text-xs font-black text-[#0B4A8B]">{panel.name}</div>
                  <div className="text-[10px] font-bold text-slate-800 leading-tight mt-0.5">
                    {language === 'hi' ? panel.titleHi : panel.titleEn}
                  </div>
                  <div className="text-[9px] text-slate-500 mt-1">
                    {language === 'hi' ? panel.descHi : panel.descEn}
                  </div>
                  <div className="mt-1 text-[9px] font-bold text-emerald-700">
                    {panel.coverage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page 1 Bottom Tag */}
        <div className="pt-3 border-t border-slate-300 flex items-center justify-between text-[10px] text-slate-500">
          <span>{CONTACT_INFO.name} • Official Patient Prospectus (Page 1 of 2)</span>
          <span>Helpline: {CONTACT_INFO.primaryPhone} • {CONTACT_INFO.secondPhone}</span>
        </div>
      </div>

      {/* PAGE BREAK FOR PRINT */}
      <div className="print:break-before-page pt-6"></div>

      {/* PAGE 2 */}
      <div className="print-page min-h-[980px] flex flex-col justify-between pt-4 pb-8">
        <div>
          {/* Page 2 Mini Header */}
          <div className="border-b-2 border-slate-200 pb-3 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo variant="symbol" className="scale-75" />
              <div>
                <div className="text-xs font-black text-[#0B4A8B]">DIVYARSH HEALTH CARE INSTITUTE</div>
                <div className="text-[10px] text-emerald-700 font-bold">NGO Regd. No. 191267 • Patient Guidance Dossier</div>
              </div>
            </div>
            <div className="text-right text-[11px] font-bold text-slate-700">
              {language === 'hi' ? 'प्रक्रिया, दस्तावेज व संपर्क' : 'Procedure, Documents & Contacts'}
            </div>
          </div>

          {/* 4-Step Patient Assistance Workflow */}
          <div className="mb-5">
            <h3 className="text-sm font-black text-[#0B4A8B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#15803D]" />
              <span>{language === 'hi' ? '4-चरणीय मरीज सहायता प्रक्रिया' : '4-Step Patient Assistance Workflow'}</span>
            </h3>

            <div className="grid grid-cols-4 gap-2">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="border border-slate-200 rounded-lg p-2.5 bg-slate-50 text-center">
                  <div className="w-6 h-6 rounded-full bg-[#15803D] text-white font-bold text-xs flex items-center justify-center mx-auto mb-1">
                    {step.step}
                  </div>
                  <div className="text-xs font-black text-slate-900">
                    {language === 'hi' ? step.titleHi : step.titleEn}
                  </div>
                  <div className="text-[10px] text-slate-600 mt-1 leading-snug">
                    {language === 'hi' ? step.descHi : step.descEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist for Hospital Admission */}
          <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-3.5 mb-5">
            <div className="text-xs font-black text-[#15803D] uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <FileText className="w-4 h-4" />
              <span>
                {language === 'hi'
                  ? 'अस्पताल भर्ती व कैशलेस सहायता हेतु आवश्यक दस्तावेज'
                  : 'Required Documents for Cashless Hospital Admission'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{language === 'hi' ? 'मरीज का आधार कार्ड (Aadhaar Card)' : "Patient's Aadhaar Card"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{language === 'hi' ? 'आयुष्मान भारत कार्ड / राशन कार्ड' : 'Ayushman Card / Ration Card'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{language === 'hi' ? 'डॉक्टर का पर्चा (Doctor Prescription)' : "Doctor's Prescription Slip"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{language === 'hi' ? 'एक्स-रे, एमआरआई व रक्त जांच रिपोर्ट' : 'X-Ray, MRI & Diagnostic Reports'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{language === 'hi' ? 'CGHS/ECHS/TPA कार्ड (यदि लागू हो)' : 'CGHS/ECHS/TPA Card (if applicable)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{language === 'hi' ? 'सक्रिय मोबाइल नंबर (OTP सत्यापन हेतु)' : 'Active Mobile Number for OTP verification'}</span>
              </div>
            </div>
          </div>

          {/* Core Values & Pillars */}
          <div className="mb-5">
            <h3 className="text-sm font-black text-[#0B4A8B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>{language === 'hi' ? 'संस्थान के 4 प्रमुख सिद्धांत' : 'Institutional Core Values'}</span>
            </h3>

            <div className="grid grid-cols-4 gap-2">
              {VALUES.map((val, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-2 bg-white text-center">
                  <div className="text-xs font-bold text-[#0B4A8B]">
                    {language === 'hi' ? val.titleHi : val.titleEn}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {language === 'hi' ? val.descHi : val.descEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Verification & Contact Box */}
          <div className="border-2 border-[#15803D] rounded-xl p-4 bg-slate-50">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 text-xs">
                <div className="font-extrabold text-[#0B4A8B] text-sm">
                  {CONTACT_INFO.name}
                </div>
                <div className="text-emerald-800 font-bold">
                  {language === 'hi'
                    ? 'संस्थापक एवं मुख्य कार्यकारी: प्रवीण कुमार (Praveen Kumar, Founder & CEO)'
                    : 'Founder & CEO: Praveen Kumar | Divyarsh Health Care Institute'}
                </div>
                <div className="flex items-center gap-2 text-slate-700 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 pt-0.5">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-emerald-700" />
                    <strong>{CONTACT_INFO.primaryPhone}</strong> / {CONTACT_INFO.secondPhone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-amber-600" />
                    <span>{CONTACT_INFO.email}</span>
                  </span>
                </div>
              </div>

              {/* Verified NGO Seal Box */}
              <div className="text-center p-2 rounded-lg bg-white border border-emerald-600 min-w-[130px]">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-black text-slate-800 uppercase">Govt. Regd. NGO</div>
                <div className="text-xs font-black text-[#15803D]">NO. 191267</div>
                <div className="text-[8px] text-slate-500">Divyarsh Healthcare</div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 Bottom Tag */}
        <div className="pt-3 border-t border-slate-300 flex items-center justify-between text-[10px] text-slate-500">
          <span>{CONTACT_INFO.name} • Official Patient Prospectus (Page 2 of 2)</span>
          <span>Website: {CONTACT_INFO.website} • WhatsApp: {CONTACT_INFO.whatsapp}</span>
        </div>
      </div>
    </div>
  );
};
