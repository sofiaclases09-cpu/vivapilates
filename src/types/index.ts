export interface ModalFormData {
  name: string;
  phone: string;
  concern: string;
  message: string;
}

export type ProfileTab = 'stress' | 'rehab';

export type BreathPhase = 'inhale' | 'hold' | 'exhale';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'metodologia' | 'ubicacion' | 'salud' | 'inscripcion';
}
