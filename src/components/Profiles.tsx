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
    <section id="perfiles" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" aria-labelledby="perfiles-heading">
      <div className="bg-[#E5DCED]/50 rounded-3xl sm:rounded-[3rem] p-5 sm:p-12 lg:p-16 border border-[#BAA8D2]/40">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-xs sm:text-sm font-sans font-semibold tracking-widest text-[#5F6950] uppercase mb-2 block">
            ¿QUÉ NECESITAS HOY?
          </span>
          <h2 id="perfiles-heading" className="font-editorial text-3xl sm:text-5xl text-[#2D2B28] font-normal leading-tight mb-3 sm:mb-4">
            Tu cuerpo tiene algo que decirte. Aprendamos a escucharlo.
          </h2>
          <p className="text-sm sm:text-lg text-[#2D2B28]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Cada persona llega con una historia corporal diferente. En <strong>VIVA PILATES</strong> te acompañamos a encontrar tu propio ritmo, respetando cómo te sientes hoy y lo que necesitas alcanzar.
          </p>

          {/* Segmented Tab Selector: 2 equal columns on mobile (no clipping), pill bar on sm+ */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:inline-flex p-1.5 rounded-full bg-[#F7F4ED] border border-[#BAA8D2]/50 shadow-inner w-full sm:w-auto gap-1 sm:gap-0" role="tablist" aria-label="Selecciona tu perfil de alumna">
            <button
              type="button"
              role="tab"
              aria-selected={activeProfileTab === 'stress'}
              aria-controls="panel-stress"
              onClick={() => setActiveProfileTab('stress')}
              className={`px-3 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeProfileTab === 'stress'
                  ? 'bg-[#5F6950] text-[#F7F4ED] shadow-sm'
                  : 'text-[#2D2B28]/75 hover:text-[#2D2B28]'
              }`}
            >
              <Feather className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${activeProfileTab === 'stress' ? 'text-[#E5DCED]' : 'text-[#5F6950]'}`} aria-hidden="true" />
              <span className="sm:hidden">Necesito pausa</span>
              <span className="hidden sm:inline">01 · NECESITO UNA PAUSA</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeProfileTab === 'rehab'}
              aria-controls="panel-rehab"
              onClick={() => setActiveProfileTab('rehab')}
              className={`px-3 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeProfileTab === 'rehab'
                  ? 'bg-[#5F6950] text-[#F7F4ED] shadow-sm'
                  : 'text-[#2D2B28]/75 hover:text-[#2D2B28]'
              }`}
            >
              <Activity className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${activeProfileTab === 'rehab' ? 'text-[#E5DCED]' : 'text-[#5F6950]'}`} aria-hidden="true" />
              <span className="sm:hidden">Volver a moverme</span>
              <span className="hidden sm:inline">02 · QUIERO VOLVER A MOVERME</span>
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BAA8D2]/40 text-[#2D2B28] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                  <span>01 · NECESITO UNA PAUSA Y ALIVIO</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#2D2B28] leading-snug">
                  Bajar el ritmo, soltar tensiones y respirar.
                </h3>
                <p className="text-sm sm:text-lg text-[#2D2B28]/85 font-sans leading-relaxed">
                  A veces el ritmo laboral y la rutina nos desconectan de nosotras mismas. Regálate un momento para dejar afuera las exigencias del día, liberar tensiones acumuladas en trapecios y cuello, y volver a sentirte presente y ligera.
                </p>

                {/* Metadata tags */}
                <div className="flex flex-wrap items-center gap-2 py-1 text-xs sm:text-sm font-medium text-[#5F6950]">
                  <span>Respiración consciente</span>
                  <span aria-hidden="true">·</span>
                  <span>Movilidad suave</span>
                  <span aria-hidden="true">·</span>
                  <span>Movimiento con intención</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F7F4ED] border border-[#BAA8D2]/35">
                    <h4 className="font-editorial text-base sm:text-lg text-[#2D2B28] mb-1">Apertura diafragmática</h4>
                    <p className="text-xs sm:text-sm text-[#2D2B28]/80">
                      Liberamos la caja torácica para que vuelvas a respirar hondo sin la sensación de opresión en el pecho.
                    </p>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F7F4ED] border border-[#BAA8D2]/35">
                    <h4 className="font-editorial text-base sm:text-lg text-[#2D2B28] mb-1">Descompresión cervical</h4>
                    <p className="text-xs sm:text-sm text-[#2D2B28]/80">
                      Secuencias suaves para soltar mandíbula (bruxismo), trapecios sobrecargados y tensión acumulada por pantallas.
                    </p>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onOpenBookingModal}
                    className="w-full sm:w-auto justify-center bg-[#5F6950] hover:bg-[#4B543E] text-[#F7F4ED] px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>Quiero encontrar mi momento</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span className="text-xs text-[#5F6950] font-sans flex items-center gap-1 font-medium mx-auto sm:mx-0">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" /> Sin exigencias ni juicios
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#BAA8D2]/40 aspect-[16/10] sm:aspect-auto sm:h-[420px]">
                  <img
                    src="/IMG_2550.jpg"
                    alt="Práctica de estiramiento y pausa consciente en reformer - VIVA Pilates"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter saturate-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2B28]/85 via-[#2D2B28]/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-[#F7F4ED]">
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#E5DCED] font-sans">Sensación tras la clase</span>
                    <p className="font-editorial text-base sm:text-xl italic mt-1">
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5F6950]/15 text-[#49523D] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                  <span>02 · QUIERO VOLVER A MOVERME Y FORTALECER</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#2D2B28] leading-snug">
                  Recuperar confianza, fuerza y movilidad a mi ritmo.
                </h3>
                <p className="text-sm sm:text-lg text-[#2D2B28]/85 font-sans leading-relaxed">
                  Si estás retomando la actividad física tras un periodo sedentario o necesitas recuperar movilidad tras molestias lumbares o contracturas recurrentes, te acompañamos con atención minuciosa y progresiones graduadas a tus capacidades.
                </p>

                {/* Metadata tags */}
                <div className="flex flex-wrap items-center gap-2 py-1 text-xs sm:text-sm font-medium text-[#5F6950]">
                  <span>Control corporal</span>
                  <span aria-hidden="true">·</span>
                  <span>Fuerza progresiva</span>
                  <span aria-hidden="true">·</span>
                  <span>Atención personalizada</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F7F4ED] border border-[#BAA8D2]/35">
                    <h4 className="font-editorial text-base sm:text-lg text-[#2D2B28] mb-1">Cero impacto articular</h4>
                    <p className="text-xs sm:text-sm text-[#2D2B28]/80">
                      El trabajo en plano horizontal descomprime discos vertebrales, protegiendo columna lumbar y rodillas.
                    </p>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F7F4ED] border border-[#BAA8D2]/35">
                    <h4 className="font-editorial text-base sm:text-lg text-[#2D2B28] mb-1">Estabilidad profunda</h4>
                    <p className="text-xs sm:text-sm text-[#2D2B28]/80">
                      Fortalecimiento gradual de transverso abdominal, glúteos y musculatura estabilizadora profunda.
                    </p>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onOpenBookingModal}
                    className="w-full sm:w-auto justify-center bg-[#5F6950] hover:bg-[#4B543E] text-[#F7F4ED] px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>Quiero encontrar mi momento</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span className="text-xs text-[#5F6950] font-sans flex items-center gap-1 font-medium mx-auto sm:mx-0">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> Enfoque terapéutico personalizado
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#BAA8D2]/40 aspect-[16/10] sm:aspect-auto sm:h-[420px]">
                  <img
                    src="/IMG_1406.jpg"
                    alt="Instructoras y práctica cuidada en reformer - VIVA Pilates"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top sm:object-center filter saturate-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2B28]/85 via-[#2D2B28]/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-[#F7F4ED]">
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#E5DCED] font-sans">Seguridad garantizada</span>
                    <p className="font-editorial text-base sm:text-xl italic mt-1">
                      “Por primera vez hago ejercicio sin miedo al dolor lumbar al día siguiente.”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pie de sección */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#BAA8D2]/40 text-center flex flex-col items-center">
          <p className="text-sm sm:text-lg text-[#2D2B28] font-sans mb-4 sm:mb-5 max-w-xl">
            ¿No estás segura de por dónde comenzar? Te ayudamos a encontrar el horario y enfoque más adecuado para ti.
          </p>
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto justify-center group bg-[#5F6950] hover:bg-[#4B543E] text-[#F7F4ED] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-3 cursor-pointer"
          >
            <span>Quiero encontrar mi momento</span>
            <span className="w-7 h-7 rounded-full bg-[#E5DCED]/25 flex items-center justify-center group-hover:translate-y-1 transition-transform">
              <ArrowDown className="w-4 h-4 text-[#F7F4ED]" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
