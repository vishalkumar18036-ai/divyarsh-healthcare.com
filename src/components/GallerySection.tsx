import React, { useState } from 'react';
import { APP_IMAGES } from '../assets/images';
import { Language } from '../types';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [filter, setFilter] = useState<'all' | 'guidance' | 'surgery' | 'counseling'>('all');

  const galleryItems = [
    {
      id: 1,
      image: APP_IMAGES.hero,
      category: 'guidance',
      titleHi: 'परिवार एवं मरीज स्वास्थ्य परामर्श',
      titleEn: 'Family & Patient Healthcare Guidance',
      descHi: 'अस्पताल में भर्ती से पूर्व डॉक्टरों द्वारा पूरी जानकारी',
      descEn: 'Comprehensive pre-admission consultation by medical staff',
    },
    {
      id: 2,
      image: APP_IMAGES.caringDoctor,
      category: 'counseling',
      titleHi: 'वरिष्ठ नागरिकों की विशेष देखभाल',
      titleEn: 'Compassionate Elderly Inpatient Care',
      descHi: 'घुटने व कूल्हे के मरीजों की भावनात्मक व चिकित्सकीय सहायता',
      descEn: 'Empathetic post-operative monitoring for joint replacement patients',
    },
    {
      id: 3,
      image: APP_IMAGES.surgeryTeam,
      category: 'surgery',
      titleHi: 'आधुनिक ऑपरेटिंग थिएटर एवं विशेषज्ञ सर्जन',
      titleEn: 'State-of-the-art Surgical Theater & Specialists',
      descHi: 'रोबोटिक एवं मिनिमली इनवेसिव सर्जरी सुविधाएं',
      descEn: 'Advanced minimally invasive and joint replacement operations',
    },
    {
      id: 4,
      image: APP_IMAGES.hospitalFacility,
      category: 'guidance',
      titleHi: 'पैनल अस्पताल समन्वय एवं सुविधाएं',
      titleEn: 'Empanelled Hospital Facilities & Staff',
      descHi: 'आयुष्मान भारत एवं CGHS अधिकृत सुपर स्पेशियलिटी केंद्र',
      descEn: 'Accredited super-specialty network for cashless treatment',
    },
  ];

  const filteredItems =
    filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 bg-blue-100 text-[#0B4A8B] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            {language === 'hi' ? 'तस्वीरें एवं गतिविधियां' : 'Photo Showcase & Patient Care'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'hi'
              ? 'अस्पताल मार्गदर्शन एवं मरीज सहायता की झलकियां'
              : 'Glimpses of Patient Care, Surgery Guidance & Network Hospitals'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'hi'
              ? 'वास्तविक अस्पतालों, योग्य डॉक्टरों और समर्पित टीम के साथ मरीजों के बेहतर भविष्य की तस्वीरें।'
              : 'Visual moments of empathetic bedside care, senior surgical procedures, and accredited hospital support.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {[
            { id: 'all', hi: 'सभी तस्वीरें', en: 'All Photos' },
            { id: 'guidance', hi: 'अस्पताल मार्गदर्शन', en: 'Hospital Guidance' },
            { id: 'surgery', hi: 'सर्जरी टीम', en: 'Surgery Units' },
            { id: 'counseling', hi: 'मरीज काउंसलिंग', en: 'Patient Counseling' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              id={`gallery-filter-${tab.id}`}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#0B4A8B] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {language === 'hi' ? tab.hi : tab.en}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0B4A8B] transition-colors">
                    {language === 'hi' ? item.titleHi : item.titleEn}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {language === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
