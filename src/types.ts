export type Language = 'hi' | 'en';

export interface SurgeryItem {
  id: string;
  nameHi: string;
  nameEn: string;
  descHi: string;
  descEn: string;
  iconType: 'knee' | 'hip' | 'spine' | 'heart' | 'general';
  commonReasonsHi: string[];
  commonReasonsEn: string[];
  benefitsHi: string[];
  benefitsEn: string[];
  tag: string;
}

export interface PanelItem {
  id: string;
  name: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  type: 'govt' | 'tpa' | 'ayushman';
  coverageInfoHi: string;
  coverageInfoEn: string;
  badge?: string;
}

export interface ProcessStep {
  stepNumber: string;
  titleHi: string;
  titleEn: string;
  subHi: string;
  subEn: string;
  detailHi: string;
  detailEn: string;
}

export interface TeamMember {
  name: string;
  roleHi: string;
  roleEn: string;
  bioHi: string;
  bioEn: string;
  image?: string;
  isCeo?: boolean;
}

export interface FAQItem {
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
  category: 'surgery' | 'panels' | 'ayushman' | 'general';
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  city: string;
  surgeryType: string;
  panelScheme: string;
  notes: string;
}
