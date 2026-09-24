import React from 'react';
import { Award, UserCheck, ShieldCheck, Heart } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/healthcareData';
import { APP_IMAGES } from '../assets/images';
import { Language } from '../types';

interface TeamSectionProps {
  language: Language;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {
  return (
    <section id="team" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            {language === 'hi' ? 'हमारा नेतृत्व एवं विशेषज्ञ' : 'Leadership & Medical Panel'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'hi'
              ? 'मरीजों के कल्याण के लिए समर्पित टीम'
              : 'Dedicated Leaders & Healthcare Coordinators'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'hi'
              ? 'संस्थापक एवं मुख्य कार्यकारी अधिकारी प्रवीण कुमार के मार्गदर्शन में हमारी टीम हर मरीज के लिए निष्पक्ष और श्रेष्ठ स्वास्थ्य सेवा सुनिश्चित करती है।'
              : 'Under the guidance of Founder & CEO Praveen Kumar, our multidisciplinary team coordinates timely care for thousands of families.'}
          </p>
        </div>

        {/* CEO Featured Card */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0B4A8B] to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* CEO Image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src={APP_IMAGES.ceo}
                  alt="Praveen Kumar, Founder & CEO, Divyarsh Health Care Institute"
                  referrerPolicy="no-referrer"
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl object-cover object-top border-4 border-emerald-400 shadow-2xl bg-white"
                />
                <div className="absolute -bottom-3 right-4 bg-emerald-500 text-white p-2.5 rounded-xl shadow-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* CEO Content */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/30 text-emerald-300 border border-emerald-400/40">
                  {language === 'hi' ? 'संस्थापक एवं मुख्य कार्यकारी अधिकारी' : 'Founder & Chief Executive Officer'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-2">
                  Praveen Kumar
                </h3>
                <div className="text-sm font-semibold text-sky-200">
                  Divyarsh Health Care Institute (NGO Regd. No. 191267)
                </div>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {language === 'hi'
                  ? '“हमारा एकमात्र उद्देश्य यह है कि कोई भी मरीज धन या जानकारी के अभाव में उचित इलाज से वंचित न रहे। आयुष्मान भारत और सरकारी योजनाओं का लाभ समाज के अंतिम व्यक्ति तक पहुंचाना हमारा कर्तव्य है।”'
                  : '“Our primary mission is to ensure no patient is deprived of life-saving medical care due to lack of awareness or financial stress. Bridging govt schemes and top surgical care to every doorstep is our life’s commitment.”'}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-emerald-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> 10+ Years Dedicated Service
                </span>
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4" /> 50,000+ Surgery Patients Guided
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Panels / Teams */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_MEMBERS.filter((m) => !m.isCeo).map((member, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0B4A8B] shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-[#15803D] mt-0.5">
                    {language === 'hi' ? member.roleHi : member.roleEn}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'hi' ? member.bioHi : member.bioEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/70 text-xs font-semibold text-slate-500">
                {language === 'hi' ? '24 घंटे मरीज सेवा में तत्पर' : 'Available for clinical evaluations 24/7'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
