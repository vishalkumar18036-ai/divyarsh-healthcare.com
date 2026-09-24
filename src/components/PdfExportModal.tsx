import React, { useState } from 'react';
import { FileText, Printer, Download, X, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, Laptop, Smartphone } from 'lucide-react';
import { Logo } from './Logo';
import { Language } from '../types';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  onSetLanguage: (lang: Language) => void;
}

export type PdfMode = 'full-website' | 'two-page-brochure';

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onSetLanguage,
}) => {
  const [selectedMode, setSelectedMode] = useState<PdfMode>('full-website');
  const [isPreparing, setIsPreparing] = useState(false);

  if (!isOpen) return null;

  const handlePrint = (mode: PdfMode) => {
    setIsPreparing(true);

    // If 2-page brochure mode selected, add class to body
    if (mode === 'two-page-brochure') {
      document.body.classList.add('print-brochure-mode');
    } else {
      document.body.classList.remove('print-brochure-mode');
    }

    // Allow DOM to settle before opening print dialog
    setTimeout(() => {
      window.print();
      setIsPreparing(false);
      // Clean up after print window opens/closes
      setTimeout(() => {
        document.body.classList.remove('print-brochure-mode');
      }, 1000);
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm no-print">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B4A8B] via-[#0D5C9A] to-[#15803D] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
              <Printer className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {currentLanguage === 'hi'
                  ? 'वेबसाइट को PDF में बदलें / डाउनलोड करें'
                  : 'Convert Website to PDF / Download'}
              </h3>
              <p className="text-xs text-emerald-100">
                {currentLanguage === 'hi'
                  ? 'दिव्यार्श हेल्थ केयर इंस्टीट्यूट (NGO Regd. No. 191267)'
                  : 'Divyarsh Health Care Institute Official PDF Export'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Language Selection for PDF */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-slate-800">
                {currentLanguage === 'hi' ? 'PDF की भाषा चुनें:' : 'Select PDF Language:'}
              </div>
              <div className="text-[11px] text-slate-500">
                {currentLanguage === 'hi'
                  ? 'दस्तावेज़ उसी भाषा में डाउनलोड होगा'
                  : 'The PDF will render in your chosen language'}
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => onSetLanguage('hi')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  currentLanguage === 'hi'
                    ? 'bg-[#15803D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                हिन्दी
              </button>
              <button
                type="button"
                onClick={() => onSetLanguage('en')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  currentLanguage === 'en'
                    ? 'bg-[#0B4A8B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* PDF Mode Selection */}
          <div className="space-y-3">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
              {currentLanguage === 'hi' ? 'PDF प्रारूप (Format) चुनें:' : 'Choose PDF Format:'}
            </label>

            {/* Option 1: Full Website Dossier */}
            <div
              onClick={() => setSelectedMode('full-website')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                selectedMode === 'full-website'
                  ? 'border-[#0B4A8B] bg-blue-50/60 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <input
                type="radio"
                name="pdfMode"
                checked={selectedMode === 'full-website'}
                onChange={() => setSelectedMode('full-website')}
                className="mt-1 text-[#0B4A8B] focus:ring-[#0B4A8B]"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-slate-900">
                    {currentLanguage === 'hi'
                      ? '1. संपूर्ण वेबसाइट पीडीएफ (Full Website Dossier)'
                      : '1. Complete Full Website Dossier'}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#0B4A8B]">
                    {currentLanguage === 'hi' ? 'विस्तृत (Comprehensive)' : 'All Sections'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {currentLanguage === 'hi'
                    ? 'पूरी वेबसाइट के सभी 11 सेक्शन: सर्जरी लिस्ट, आयुष्मान व CGHS पैनल, पात्रता जांच, 4-चरणीय प्रक्रिया, टीम, गैलरी, प्रश्नोत्तर व संपर्क।'
                    : 'Includes all 11 website sections: Surgeries, Ayushman/CGHS panels, eligibility, 4-step workflow, team, gallery, FAQs and contact info.'}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {currentLanguage === 'hi'
                      ? 'आधिकारिक एनजीओ लेटरहेड व सील सहित'
                      : 'Includes Official NGO Header & Seal'}
                  </span>
                </div>
              </div>
            </div>

            {/* Option 2: 2-Page Executive Patient Prospectus */}
            <div
              onClick={() => setSelectedMode('two-page-brochure')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                selectedMode === 'two-page-brochure'
                  ? 'border-[#15803D] bg-emerald-50/60 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <input
                type="radio"
                name="pdfMode"
                checked={selectedMode === 'two-page-brochure'}
                onChange={() => setSelectedMode('two-page-brochure')}
                className="mt-1 text-[#15803D] focus:ring-[#15803D]"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-slate-900">
                    {currentLanguage === 'hi'
                      ? '2. संक्षिप्त 2-पेज आधिकारिक ब्रोशर (Patient Guide Brochure)'
                      : '2. Compact 2-Page Official Patient Brochure'}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-[#15803D]">
                    {currentLanguage === 'hi' ? '2 पेज में रेडी' : 'Compact 2 Pages'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {currentLanguage === 'hi'
                    ? 'मरीजों, डॉक्टरों व परिवार के लिए विशेष तैयार किया गया 2-पेज का संक्षिप्त पर्चा। मुख्य सर्जरी, जरूरी दस्तावेज चेकलिस्ट, पैनल एवं हेल्पलाइन।'
                    : 'Specially formatted 2-page leaflet for patients and families. Covers core surgeries, documents checklist, admission steps, and helplines.'}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {currentLanguage === 'hi'
                      ? 'मरीजों को बांटने व प्रिंट करने हेतु उपयुक्त'
                      : 'Ideal for handouts, printing & WhatsApp sharing'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Guide on How to Save as PDF */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 text-xs text-amber-900 space-y-1.5">
            <div className="font-extrabold flex items-center gap-1.5 text-amber-950">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>
                {currentLanguage === 'hi'
                  ? 'PDF के रूप में कैसे सेव करें:'
                  : 'How to Save as PDF:'}
              </span>
            </div>
            <div className="text-[11px] text-amber-800 leading-relaxed">
              {currentLanguage === 'hi' ? (
                <>
                  नीचे बटन दबाने पर प्रिंट विंडो खुलेगी। वहाँ <strong>Destination / Printer</strong> में <strong>"Save as PDF" (पीडीएफ के रूप में सहेजें)</strong> चुनें और <strong>Save</strong> पर क्लिक करें।
                </>
              ) : (
                <>
                  Click the button below to open the print dialog. Under <strong>Destination / Printer</strong>, select <strong>"Save as PDF"</strong> and click <strong>Save</strong>.
                </>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-50 px-5 sm:px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            <span className="font-semibold text-slate-700">NGO Regd. No. 191267</span> • Divyarsh Health Care
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition cursor-pointer"
            >
              {currentLanguage === 'hi' ? 'रद्द करें' : 'Cancel'}
            </button>

            <button
              id="confirm-generate-pdf-btn"
              type="button"
              disabled={isPreparing}
              onClick={() => handlePrint(selectedMode)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#116831] text-white px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {isPreparing
                  ? currentLanguage === 'hi'
                    ? 'तैयार हो रहा है...'
                    : 'Preparing PDF...'
                  : currentLanguage === 'hi'
                  ? 'PDF के रूप में सेव करें'
                  : 'Save / Download as PDF'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
