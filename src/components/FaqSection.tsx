import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  openWhatsApp: (msg?: string) => void;
  onOpenBookingModal: () => void;
}

export const FAQS: FaqItem[] = [
  {
    id: 'que-es-viva-pilates',
    category: 'metodologia',
    question: '¿Qué es VIVA Pilates y cuál es su enfoque terapéutico?',
    answer:
      'VIVA Pilates es un estudio boutique de Pilates Reformer ubicado en Providencia, Santiago. Nuestro enfoque terapéutico se centra en el movimiento consciente, la biomecánica postural y el respeto por los ritmos individuales de cada cuerpo. No buscamos la sobreexigencia ni la competencia estética, sino ayudarte a ganar fuerza profunda, descomprimir la columna vertebral, mejorar tu movilidad articular y aliviar el estrés corporal acumulado.',
  },
  {
    id: 'ubicacion-como-llegar',
    category: 'ubicacion',
    question: '¿Dónde está ubicado el estudio en Providencia y cómo puedo llegar?',
    answer:
      'Estamos en Valenzuela Castillo 1250, en la comuna de Providencia, Santiago de Chile. El sector es un barrio residencial tranquilo y arbolado, a pocos minutos caminando de la estación de Metro Manuel Montt (Línea 1). Cuenta con accesos cómodos tanto en transporte público como en automóvil, además de ciclovías cercanas.',
  },
  {
    id: 'lesiones-hernias-dolor',
    category: 'salud',
    question: '¿Puedo asistir si tengo dolor lumbar, cervicalgia, hernias discales o no tengo experiencia previa?',
    answer:
      '¡Por supuesto! Gran parte de nuestras alumnas llegan por derivación médica o buscando alivio para dolores lumbares, contracturas de cuello por trabajo frente a pantallas o rehabilitación tras periodos sedentarios. El trabajo en camilla Reformer elimina el impacto articular y permite graduar la resistencia de resortes para trabajar en un plano seguro y descompresivo. Además, realizamos una conversación previa para conocer tu historial antes de tu primera sesión.',
  },
  {
    id: 'grupos-reducidos-clases',
    category: 'metodologia',
    question: '¿Cuántas alumnas hay por clase y cómo es la atención personalizada?',
    answer:
      'Nuestras clases se realizan en grupos reducidos de máximo 4 a 6 alumnas por sesión. Esto garantiza que la instructora te observe con dedicación constante, corrija posturas con suavidad y adapte cada ejercicio a tus posibilidades, asegurando una experiencia íntima, segura y 100% personalizada.',
  },
  {
    id: 'que-llevar-primera-clase',
    category: 'inscripcion',
    question: '¿Qué necesito llevar o vestir para mi primera clase de Pilates Reformer?',
    answer:
      'Te recomendamos vestir ropa deportiva cómoda que te permita moverte con libertad (como calzas o buzo cómodo y polera). La práctica se realiza con calcetines (idealmente antideslizantes para mayor agarre en el reformer). En el estudio contamos con agua y un espacio tranquilo para que dejes tus pertenencias.',
  },
  {
    id: 'como-agendar-bienvenida',
    category: 'inscripcion',
    question: '¿Cómo agendo mi primera clase o conversación previa?',
    answer:
      'Puedes escribirnos directamente a nuestro WhatsApp oficial (+56 9 6525 8234) o hacer clic en "Agenda tu primera clase" en esta página. Coordinaremos una breve conversación para saber qué necesitas y reservar el horario que mejor se adapte a tu rutina semanal.',
  },
];

export const FaqSection: React.FC<FaqSectionProps> = ({ openWhatsApp, onOpenBookingModal }) => {
  const [openId, setOpenId] = useState<string | null>('que-es-viva-pilates');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative border-t border-[#5E4E63]/15"
      aria-labelledby="faq-title"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#BA4F12]/15 text-[#BA4F12] text-xs font-semibold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#BA4F12]" aria-hidden="true" />
          <span>Preguntas Frecuentes · AEO & Información Práctica</span>
        </span>
        <h2 id="faq-title" className="font-editorial text-3xl sm:text-5xl text-[#5E4E63] font-normal leading-tight mb-4">
          Todo lo que necesitas saber antes de empezar.
        </h2>
        <p className="text-base sm:text-lg text-[#4A4540]/80 font-sans leading-relaxed">
          Respuestas claras sobre nuestro método terapéutico, el estudio en Providencia, grupos reducidos y cómo iniciar tu práctica.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'bg-white/80 border-[#5E4E63]/30 shadow-md'
                  : 'bg-[#F6F2EA] border-[#5E4E63]/15 hover:border-[#5E4E63]/30'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BA4F12]"
              >
                <h3 className="font-editorial text-lg sm:text-xl text-[#5E4E63] font-medium leading-snug">
                  {faq.question}
                </h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#5E4E63] text-[#F6F2EA]' : 'bg-[#5E4E63]/10 text-[#5E4E63]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-header-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A4540]/90 font-sans leading-relaxed border-t border-[#5E4E63]/10">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Extra CTA Box */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#5E4E63]/5 border border-[#5E4E63]/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h4 className="font-editorial text-xl sm:text-2xl text-[#5E4E63]">¿Tienes una consulta específica o indicación médica?</h4>
          <p className="text-xs sm:text-sm text-[#4A4540]/80 font-sans mt-1">
            Escríbenos directamente y conversaremos sobre tu situación particular.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => openWhatsApp("Hola VIVA Pilates, tengo una consulta específica antes de agendar mi primera clase.")}
            className="bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] px-6 py-3 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Consultar por WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="border border-[#5E4E63]/30 hover:border-[#5E4E63] text-[#5E4E63] px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer"
          >
            Agendar conversación
          </button>
        </div>
      </div>
    </section>
  );
};
