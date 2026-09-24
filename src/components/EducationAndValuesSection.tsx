import React from 'react';
import { Lightbulb, Brain, HeartHandshake, ShieldCheck, FileText, Heart, Users, CheckCircle2 } from 'lucide-react';
import { EDUCATION_PILLARS, INSTITUTIONAL_VALUES, CONTACT_INFO } from '../data/healthcareData';
import { Language } from '../types';

interface EducationAndValuesSectionProps {
  language: Language;
}

export const EducationAndValuesSection: React.FC<EducationAndValuesSectionProps> = ({ language }) => {
  const getEduIcon = (id: string) => {
    switch (id) {
      case 'learn':
        return <Lightbulb className="w-8 h-8 text-amber-500" />;
      case 'understand':
        return <Brain className="w-8 h-8 text-[#0B4A8B]" />;
      case 'act':
      default:
        return <HeartHandshake className="w-8 h-8 text-[#15803D]" />;
    }
  };

  const getValueIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 1:
        return <FileText className="w-6 h-6 text-blue-600" />;
      case 2:
        return <Heart className="w-6 h-6 text-rose-500" />;
      case 3:
      default:
        return <Users className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="education" className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Part 1: Health Education (स्वास्थ्य शिक्षा) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              {language === 'hi' ? 'स्वास्थ्य शिक्षा एवं जागरूकता' : 'Health Literacy & Community Education'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {language === 'hi' ? 'सीखें • समझें • कार्रवाई करें' : 'Learn • Understand • Act'}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {language === 'hi'
                ? 'स्वास्थ्य जागरूकता को बढ़ावा देना, प्रिवेंटिव केयर और सही जीवनशैली की जानकारी देकर समुदाय को सशक्त बनाना।'
                : 'Promoting proactive health awareness, early diagnosis, and educating families on public healthcare entitlements.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getEduIcon(pillar.id)}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {language === 'hi' ? pillar.titleHi : pillar.titleEn}
                    </h3>
                    <div className="text-xs font-bold text-[#15803D] mt-1">
                      {language === 'hi' ? pillar.subHi : pillar.subEn}
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {language === 'hi' ? pillar.descHi : pillar.descEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Institutional Values (हमारे मूल्य) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 bg-blue-100 text-[#0B4A8B] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              {language === 'hi' ? 'हमारे मार्गदर्शक सिद्धांत' : 'Institutional Values'}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
              {language === 'hi'
                ? 'विश्वास, पारदर्शिता, संवेदनशीलता एवं सहयोग'
                : 'Trust, Transparency, Compassion & Collaboration'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTITUTIONAL_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#0B4A8B]/40 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                  {getValueIcon(idx)}
                </div>
                <h4 className="text-base font-extrabold text-slate-900">
                  {language === 'hi' ? val.titleHi : val.titleEn}
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {language === 'hi' ? val.descHi : val.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Welcome to Our Team / Community Invitation */}
        <div className="bg-gradient-to-br from-white via-sky-50/50 to-emerald-50/60 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#0B4A8B] text-white uppercase tracking-wider">
                {language === 'hi' ? 'टीम में स्वागत' : 'Welcome to Our Team'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {language === 'hi'
                  ? '“Together We Heal & Grow — एक स्वस्थ समाज के निर्माण में भागीदार बनें”'
                  : '“Together We Heal & Grow — Partner with Us for Community Welfare”'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {language === 'hi'
                  ? 'दिव्यार्श हेल्थ केयर इंस्टीट्यूट में हम डॉक्टरों, सामाजिक कार्यकर्ताओं, स्वयंसेवकों और स्वास्थ्य समन्वयकों का स्वागत करते हैं। यदि आप मरीजों की सेवा करने के इच्छुक हैं, तो हमसे जुड़ें।'
                  : 'We warmly welcome compassionate doctors, nurses, patient care volunteers, and social workers into the Divyarsh family to expand healthcare accessibility.'}
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Integrity
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Teamwork
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Respect
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Excellence
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Selfless Service
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right space-y-3">
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Volunteer/Join%20Divyarsh%20Team`}
                className="inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#116831] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition"
              >
                <span>{language === 'hi' ? 'हमसे जुड़ें (Join Team)' : 'Join As Volunteer'}</span>
              </a>
              <div className="text-[11px] text-slate-500 font-medium">
                Email: {CONTACT_INFO.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
