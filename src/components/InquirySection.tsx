import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle2, ShieldCheck, X, FileText, Upload } from 'lucide-react';
import { CONTACT_INFO, SURGERIES, PANELS } from '../data/healthcareData';
import { Language, InquiryFormData } from '../types';

interface InquirySectionProps {
  language: Language;
  defaultSurgery?: string;
  defaultScheme?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  language,
  defaultSurgery = '',
  defaultScheme = '',
  isModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    city: '',
    surgeryType: defaultSurgery || 'Knee Replacement Surgery',
    panelScheme: defaultScheme || 'Ayushman Bharat PM-JAY',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [reportFileName, setReportFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `नमस्ते Divyarsh Health Care Institute,
मेरा नाम: ${formData.fullName}
फ़ोन: ${formData.phone}
शहर: ${formData.city || 'दिल्ली / एनसीआर'}
आवश्यक सर्जरी: ${formData.surgeryType}
पैनल / कार्ड: ${formData.panelScheme}
विवरण: ${formData.notes || 'कृपया अस्पताल और कैशलेस प्रक्रिया की जानकारी दें।'}`
    );
    window.open(`https://wa.me/91${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const content = (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
      {isModal && onCloseModal && (
        <button
          type="button"
          onClick={onCloseModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-6">
        <span className="inline-block px-3 py-1 bg-emerald-100 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          {language === 'hi' ? '100% निःशुल्क एनजीओ सहायता' : '100% Free NGO Guidance'}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {language === 'hi'
            ? 'सर्जरी एवं अस्पताल मार्गदर्शन हेतु अनुरोध करें'
            : 'Request Surgery & Hospital Guidance'}
        </h3>
        <p className="mt-1.5 text-slate-600 text-xs sm:text-sm">
          {language === 'hi'
            ? 'अपनी जानकारी भरें। हमारे वरिष्ठ मेडिकल सलाहकार 30 मिनट में आपसे संपर्क करेंगे।'
            : 'Fill in your details. Our patient welfare coordinators will review and connect promptly.'}
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-extrabold text-slate-900">
              {language === 'hi' ? 'अनुरोध सफलतापूर्वक प्राप्त हुआ!' : 'Inquiry Submitted Successfully!'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              {language === 'hi'
                ? `धन्यवाद ${formData.fullName} जी! दिव्यार्श टीम आपकी रिपोर्ट और अस्पताल पात्रता की समीक्षा कर रही है।`
                : `Thank you, ${formData.fullName}! Our coordination desk has logged your request and will contact ${formData.phone} shortly.`}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              id="submitted-whatsapp-btn"
              onClick={handleWhatsAppRedirect}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa54] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'hi' ? 'व्हाट्सएप पर रिपोर्ट भेजें' : 'Send Reports on WhatsApp'}</span>
            </button>

            <a
              id="submitted-call-btn"
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#116831] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>
          </div>

          {isModal && (
            <div className="pt-4">
              <button
                type="button"
                onClick={onCloseModal}
                className="text-xs text-slate-500 font-semibold hover:underline cursor-pointer"
              >
                {language === 'hi' ? 'बंद करें' : 'Close window'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'hi' ? 'मरीज या परिजन का नाम *' : 'Patient / Contact Name *'}
              </label>
              <input
                id="form-fullname"
                type="text"
                required
                placeholder={language === 'hi' ? 'उदा. राजेश शर्मा' : 'e.g. Rajesh Sharma'}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'hi' ? 'मोबाइल नंबर (कॉल / व्हाट्सएप) *' : 'Mobile / WhatsApp Number *'}
              </label>
              <input
                id="form-phone"
                type="tel"
                required
                placeholder="10 digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* City */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'hi' ? 'शहर / जिला' : 'City / Location'}
              </label>
              <input
                id="form-city"
                type="text"
                placeholder={language === 'hi' ? 'उदा. दिल्ली, गाजियाबाद...' : 'e.g. Delhi, Noida...'}
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B]"
              />
            </div>

            {/* Surgery */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'hi' ? 'संभावित सर्जरी' : 'Surgery Needed'}
              </label>
              <select
                id="form-surgery"
                value={formData.surgeryType}
                onChange={(e) => setFormData({ ...formData, surgeryType: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B]"
              >
                {SURGERIES.map((s) => (
                  <option key={s.id} value={s.nameEn}>
                    {language === 'hi' ? s.nameHi : s.nameEn}
                  </option>
                ))}
                <option value="Other Medical Assistance">
                  {language === 'hi' ? 'अन्य स्वास्थ्य परामर्श' : 'Other Consultation'}
                </option>
              </select>
            </div>

            {/* Scheme / Panel */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'hi' ? 'पैनल या स्वास्थ्य कार्ड' : 'Health Card / Panel'}
              </label>
              <select
                id="form-scheme"
                value={formData.panelScheme}
                onChange={(e) => setFormData({ ...formData, panelScheme: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B]"
              >
                {PANELS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {language === 'hi' ? p.titleHi : p.titleEn}
                  </option>
                ))}
                <option value="No Card - Need Subsidized Option">
                  {language === 'hi' ? 'कोई कार्ड नहीं (रियायती अस्पताल)' : 'No Card (Charitable)'}
                </option>
              </select>
            </div>
          </div>

          {/* Report Attachment / Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {language === 'hi' ? 'बीमारी या डॉक्टर की सलाह का विवरण (वैकल्पिक)' : 'Medical Notes or Diagnosis Details (Optional)'}
            </label>
            <textarea
              id="form-notes"
              rows={2}
              placeholder={
                language === 'hi'
                  ? 'जैसे: एक्स-रे में घुटने का गैप खत्म बताया है, ऑपरेशन की सलाह दी गई है...'
                  : 'e.g. Doctor suggested knee surgery; have MRI reports ready...'
              }
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0B4A8B]"
            />
          </div>

          {/* Quick file upload simulation */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <Upload className="w-4 h-4 text-[#0B4A8B]" />
              <span>
                {reportFileName
                  ? `संलग्न: ${reportFileName}`
                  : language === 'hi'
                  ? 'एक्स-रे / एमआरआई / डिस्चार्ज समरी अटैच करें (वैकल्पिक)'
                  : 'Attach MRI / X-Ray / Discharge Summary (Optional)'}
              </span>
            </div>
            <label className="cursor-pointer bg-white px-3 py-1 rounded-md border border-slate-200 font-bold text-[#0B4A8B] hover:bg-slate-100 transition">
              {reportFileName ? 'बदलें' : 'फ़ाइल चुनें'}
              <input
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setReportFileName(e.target.files[0].name);
                  }
                }}
              />
            </label>
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <button
              id="form-submit-btn"
              type="submit"
              className="w-full bg-[#0B4A8B] hover:bg-[#083a6f] text-white py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-emerald-300" />
              <span>{language === 'hi' ? 'मुफ्त सहायता के लिए अनुरोध भेजें' : 'Submit Consultation Request'}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
            <span>
              {language === 'hi'
                ? 'आपकी जानकारी पूर्णतः सुरक्षित एवं गोपनीय रखी जाती है।'
                : '100% confidential. NGO Regd. No. 191267 verified assistance.'}
            </span>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
        <div className="w-full max-w-2xl my-8">{content}</div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-14 sm:py-20 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">{content}</div>
    </section>
  );
};
