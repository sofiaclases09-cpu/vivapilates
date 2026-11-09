import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="filosofia" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" aria-labelledby="filosofia-heading">
      {/* Section Heading Editorial */}
      <div className="max-w-3xl mb-16 sm:mb-24">
        <span className="text-xs sm:text-sm font-sans font-semibold tracking-widest text-[#BA4F12] uppercase mb-2 block">
          Nuestra Filosofía
        </span>
        <h2 id="filosofia-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#5E4E63] font-normal leading-tight">
          El movimiento consciente transforma.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A4540]/80 font-sans leading-relaxed">
          Creemos que el <strong>Método de Pilates Reformer</strong> va mucho más allá del ejercicio convencional: es una práctica para conectar profundamente con tu cuerpo, desarrollar fuerza funcional y movilidad sin dolor, y regalarte un refugio de calma en tu semana.
        </p>
      </div>

      {/* Asymmetrical Flow: 3 Pillars */}
      <div className="space-y-16 sm:space-y-24">
        {/* Pilar 01 */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-14 bg-gradient-to-br from-[#5E4E63]/5 to-transparent p-6 sm:p-12 rounded-[2.5rem] border border-[#5E4E63]/10"
        >
          <div className="lg:w-1/2 relative">
            <span className="font-editorial text-7xl sm:text-9xl text-[#5E4E63]/15 font-bold absolute -top-8 -left-4 select-none" aria-hidden="true">
              01
            </span>
            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E4E63]/10 text-[#5E4E63] text-xs font-semibold uppercase tracking-wider mb-3">
                <UserCheck className="w-3.5 h-3.5 text-[#5E4E63]" aria-hidden="true" />
                01 · ATENCIÓN PERSONALIZADA
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#5E4E63] mb-4">
                Primero, te escuchamos.
              </h3>
              <p className="text-base sm:text-lg text-[#4A4540] font-sans leading-relaxed mb-6">
                Antes de comenzar tu práctica, conversamos contigo para conocer tus objetivos, antecedentes de salud, dolores o lesiones previas y tu nivel de experiencia. Así adaptamos cada movimiento a tu biomecánica única.
              </p>
              <div className="space-y-2.5 text-sm sm:text-base text-[#4A4540]/90">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606E51] shrink-0" aria-hidden="true" />
                  <span>Evaluación inicial y objetivos personales de bienestar</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606E51] shrink-0" aria-hidden="true" />
                  <span>Adaptaciones posturales específicas según tu historial</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <figure className="relative rounded-3xl overflow-hidden shadow-md border border-[#5E4E63]/15 aspect-[4/3] group">
              <img
                src="/punto01.jpg"
                alt="Conversación de bienvenida y escucha personalizada en VIVA Pilates Providencia"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-[#5E4E63]/70 via-transparent to-transparent flex items-end p-6 pointer-events-none">
                <p className="text-[#F6F2EA] font-editorial text-lg italic">
                  “Tu cuerpo tiene una historia; nosotras la escuchamos con respeto.”
                </p>
              </figcaption>
            </figure>
          </div>
        </motion.article>

        {/* Pilar 02 */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-14 bg-gradient-to-bl from-[#BA4F12]/5 to-transparent p-6 sm:p-12 rounded-[2.5rem] border border-[#BA4F12]/15"
        >
          <div className="lg:w-1/2 relative">
            <span className="font-editorial text-7xl sm:text-9xl text-[#BA4F12]/15 font-bold absolute -top-8 -left-4 select-none" aria-hidden="true">
              02
            </span>
            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BA4F12]/10 text-[#BA4F12] text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BA4F12]" aria-hidden="true" />
                02 · MOVIMIENTO CONSCIENTE
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#5E4E63] mb-4">
                Un cuerpo más fuerte, una mente más presente.
              </h3>
              <p className="text-base sm:text-lg text-[#4A4540] font-sans leading-relaxed mb-6">
                Entrenamos fuerza central (core), movilidad articular, alineación espinal y estabilidad en reformer. La asistencia de los resortes permite un fortalecimiento seguro sin impacto articular ni compresiones dolorosas.
              </p>
              <div className="space-y-2.5 text-sm sm:text-base text-[#4A4540]/90">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606E51] shrink-0" aria-hidden="true" />
                  <span>Grupos reducidos e íntimos (máximo 4 a 6 alumnas por clase)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606E51] shrink-0" aria-hidden="true" />
                  <span>Acompañamiento, correcciones suaves y control técnico continuo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <figure className="relative rounded-3xl overflow-hidden shadow-md border border-[#BA4F12]/15 aspect-[4/3] group">
              <img
                src="/IMG_3231.jpg"
                alt="Alineación consciente y cuidado terapéutico en camilla reformer - VIVA Pilates"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-[#5E4E63]/70 via-transparent to-transparent flex items-end p-6 pointer-events-none">
                <p className="text-[#F6F2EA] font-editorial text-lg italic">
                  “Movimientos lentos y precisos que devuelven la soltura a tu postura.”
                </p>
              </figcaption>
            </figure>
          </div>
        </motion.article>

        {/* Pilar 03 */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-14 bg-gradient-to-br from-[#606E51]/5 to-transparent p-6 sm:p-12 rounded-[2.5rem] border border-[#606E51]/15"
        >
          <div className="lg:w-1/2 relative">
            <span className="font-editorial text-7xl sm:text-9xl text-[#606E51]/15 font-bold absolute -top-8 -left-4 select-none" aria-hidden="true">
              03
            </span>
            <div className="relative z-10 pt-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#606E51]/10 text-[#606E51] text-xs font-semibold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5 text-[#606E51]" aria-hidden="true" />
                03 · BIENESTAR FÍSICO Y EMOCIONAL
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#5E4E63] mb-4">
                Un espacio para volver a ti.
              </h3>
              <p className="text-base sm:text-lg text-[#4A4540] font-sans leading-relaxed mb-4">
                En VIVA PILATES creemos que el bienestar no es un estándar estético ni una exigencia más en tu agenda: es una forma de cuidarte con paciencia y volver a habitar tu cuerpo con plenitud.
              </p>
              <p className="text-base sm:text-lg text-[#4A4540] font-sans leading-relaxed mb-6">
                Aquí no necesitas llegar con flexibilidad previa ni energía desbordante. Puedes venir tal como estás, regalarte una pausa consciente y encontrar un espacio donde tu bienestar sea la única prioridad.
              </p>
              <div className="space-y-2.5 text-sm sm:text-base text-[#4A4540]/90">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606E51] shrink-0" aria-hidden="true" />
                  <span>Un ambiente acogedor, luminoso, cálido y libre de exigencias o juicios.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606E51] shrink-0" aria-hidden="true" />
                  <span>Prácticas con enfoque somático respetando tus ritmos fisiológicos.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606E51] shrink-0" aria-hidden="true" />
                  <span>Descompresión de tensiones cotidianas en cuello, mandíbula y espalda baja.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <figure className="relative rounded-3xl overflow-hidden shadow-md border border-[#606E51]/15 aspect-[4/3] group">
              <img
                src="/IMG_1247.jpg"
                alt="Ambiente de calma y bienestar emocional en estudio VIVA Pilates"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9]"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-[#5E4E63]/70 via-transparent to-transparent flex items-end p-6 pointer-events-none">
                <p className="text-[#F6F2EA] font-editorial text-lg italic">
                  “El bienestar no se compite; se cultiva con suavidad día a día.”
                </p>
              </figcaption>
            </figure>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
