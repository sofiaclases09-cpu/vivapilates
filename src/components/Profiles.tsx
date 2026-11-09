import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Feather, Activity, ArrowRight, ArrowDown, Check, ShieldCheck } from 'lucide-react';
import { ProfileTab } from '../types';

interface ProfilesProps {
  onOpenBookingModal: () => void;
}

export const Profiles: React.FC<ProfilesProps> = ({ onOpenBookingModal }) => {
  const [activeProfileTab, setActiveProfileTab] = useState<ProfileTab>('stress');

  return (
    <section id="perfiles" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" aria-labelledby="perfiles-heading">
      <div className="bg-[#5E4E63]/5 rounded-[3rem] p-6 sm:p-12 lg:p-16 border border-[#5E4E63]/15">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-sans font-semibold tracking-widest text-[#BA4F12] uppercase mb-2 block">
            ¿QUÉ NECESITAS HOY?
          </span>
          <h2 id="perfiles-heading" className="font-editorial text-3xl sm:text-5xl text-[#5E4E63] font-normal leading-tight mb-4">
            Tu cuerpo tiene algo que decirte. Aprendamos a escucharlo.
          </h2>
          <p className="text-base sm:text-lg text-[#4A4540]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Cada persona llega con una historia corporal diferente. En <strong>VIVA PILATES</strong> te acompañamos a encontrar tu propio ritmo, respetando cómo te sientes hoy y lo que necesitas alcanzar.
          </p>

          {/* Pill Selector */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#F6F2EA] border border-[#5E4E63]/20 shadow-inner max-w-full overflow-x-auto" role="tablist" aria-label="Selecciona tu perfil de alumna">
            <button
              type="button"
              role="tab"
              aria-selected={activeProfileTab === 'stress'}
              aria-controls="panel-stress"
              onClick={() => setActiveProfileTab('stress')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeProfileTab === 'stress'
                  ? 'bg-[#5E4E63] text-[#F6F2EA] shadow-sm'
                  : 'text-[#4A4540]/80 hover:text-[#5E4E63]'
              }`}
            >
              <Feather className="w-4 h-4 text-[#BA4F12]" aria-hidden="true" />
              <span>01 · NECESITO UNA PAUSA</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeProfileTab === 'rehab'}
              aria-controls="panel-rehab"
              onClick={() => setActiveProfileTab('rehab')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeProfileTab === 'rehab'
                  ? 'bg-[#5E4E63] text-[#F6F2EA] shadow-sm'
                  : 'text-[#4A4540]/80 hover:text-[#5E4E63]'
              }`}
            >
              <Activity className="w-4 h-4 text-[#606E51]" aria-hidden="true" />
              <span>02 · QUIERO VOLVER A MOVERME</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Transitions */}
        <AnimatePresence mode="wait">
          {activeProfileTab === 'stress' ? (
            <motion.div
              key="stress-tab"
              id="panel-stress"
              role="tabpanel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BA4F12]/10 text-[#BA4F12] text-xs font-semibold uppercase tracking-wider">
                  <span>01 · NECESITO UNA PAUSA Y ALIVIO</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#5E4E63] leading-snug">
                  Bajar el ritmo, soltar tensiones y respirar.
                </h3>
                <p className="text-base sm:text-lg text-[#4A4540] font-sans leading-relaxed">
                  A veces el ritmo laboral y la rutina nos desconectan de nosotras mismas. Regálate un momento para dejar afuera las exigencias del día, liberar tensiones acumuladas en trapecios y cuello, y volver a sentirte presente y ligera.
                </p>

                {/* Pills tags */}
                <div className="flex flex-wrap items-center gap-2 py-1 text-xs sm:text-sm font-medium text-[#606E51]">
                  <span className="px-3 py-1 rounded-full bg-[#606E51]/10">Respiración consciente</span>
                  <span>·</span>
                  <span className="px-3 py-1 rounded-full bg-[#606E51]/10">Movilidad suave</span>
                  <span>·</span>
                  <span className="px-3 py-1 rounded-full bg-[#606E51]/10">Movimiento con intención</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-[#F6F2EA] border border-[#5E4E63]/10">
                    <h4 className="font-editorial text-lg text-[#5E4E63] mb-1">Apertura diafragmática</h4>
                    <p className="text-xs sm:text-sm text-[#4A4540]/80">
                      Liberamos la caja torácica para que vuelvas a respirar hondo sin la sensación de opresión en el pecho.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F6F2EA] border border-[#5E4E63]/10">
                    <h4 className="font-editorial text-lg text-[#5E4E63] mb-1">Descompresión cervical</h4>
                    <p className="text-xs sm:text-sm text-[#4A4540]/80">
                      Secuencias suaves para soltar mandíbula (bruxismo), trapecios sobrecargados y tensión acumulada por pantallas.
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onOpenBookingModal}
                    className="bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>Quiero encontrar mi momento</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span className="text-xs text-[#606E51] font-sans flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" /> Sin exigencias ni juicios
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#5E4E63]/15 aspect-[4/5] sm:aspect-auto sm:h-[420px]">
                  <img
                    src="/IMG_2550.jpg"
                    alt="Práctica de estiramiento y pausa consciente en reformer - VIVA Pilates"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter saturate-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5E4E63]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-[#F6F2EA]">
                    <span className="text-xs uppercase tracking-widest text-[#F6F2EA]/80 font-sans">Sensación tras la clase</span>
                    <p className="font-editorial text-xl italic mt-1">
                      “Salí sintiendo que mi cuerpo medía cinco centímetros más y con la mente completamente despejada.”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="rehab-tab"
              id="panel-rehab"
              role="tabpanel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#606E51]/15 text-[#606E51] text-xs font-semibold uppercase tracking-wider">
                  <span>02 · QUIERO VOLVER A MOVERME Y FORTALECER</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#5E4E63] leading-snug">
                  Recuperar confianza, fuerza y movilidad a mi ritmo.
                </h3>
                <p className="text-base sm:text-lg text-[#4A4540] font-sans leading-relaxed">
                  Si estás retomando la actividad física tras un periodo sedentario o necesitas recuperar movilidad tras molestias lumbares o contracturas recurrentes, te acompañamos con atención minuciosa y progresiones graduadas a tus capacidades.
                </p>

                {/* Pills tags */}
                <div className="flex flex-wrap items-center gap-2 py-1 text-xs sm:text-sm font-medium text-[#606E51]">
                  <span className="px-3 py-1 rounded-full bg-[#606E51]/10">Control corporal</span>
                  <span>·</span>
                  <span className="px-3 py-1 rounded-full bg-[#606E51]/10">Fuerza progresiva</span>
                  <span>·</span>
                  <span className="px-3 py-1 rounded-full bg-[#606E51]/10">Atención personalizada</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-[#F6F2EA] border border-[#5E4E63]/10">
                    <h4 className="font-editorial text-lg text-[#5E4E63] mb-1">Cero impacto articular</h4>
                    <p className="text-xs sm:text-sm text-[#4A4540]/80">
                      El trabajo en plano horizontal descomprime discos vertebrales, protegiendo columna lumbar y rodillas.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F6F2EA] border border-[#5E4E63]/10">
                    <h4 className="font-editorial text-lg text-[#5E4E63] mb-1">Estabilidad profunda</h4>
                    <p className="text-xs sm:text-sm text-[#4A4540]/80">
                      Fortalecimiento gradual de transverso abdominal, glúteos y musculatura estabilizadora profunda.
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onOpenBookingModal}
                    className="bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>Quiero encontrar mi momento</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span className="text-xs text-[#606E51] font-sans flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> Enfoque terapéutico personalizado
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#5E4E63]/15 aspect-[4/5] sm:aspect-auto sm:h-[420px]">
                  <img
                    src="/IMG_1406.jpg"
                    alt="Instructoras y práctica cuidada en reformer - VIVA Pilates"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top sm:object-center filter saturate-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5E4E63]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-[#F6F2EA]">
                    <span className="text-xs uppercase tracking-widest text-[#F6F2EA]/80 font-sans">Seguridad garantizada</span>
                    <p className="font-editorial text-xl italic mt-1">
                      “Por primera vez hago ejercicio sin miedo al dolor lumbar al día siguiente.”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pie de sección */}
        <div className="mt-12 pt-8 border-t border-[#5E4E63]/15 text-center flex flex-col items-center">
          <p className="text-base sm:text-lg text-[#4A4540] font-sans mb-5 max-w-xl">
            ¿No estás segura de por dónde comenzar? Te ayudamos a encontrar el horario y enfoque más adecuado para ti.
          </p>
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="group bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-3 cursor-pointer"
          >
            <span>Quiero encontrar mi momento</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-y-1 transition-transform">
              <ArrowDown className="w-4 h-4 text-white" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
