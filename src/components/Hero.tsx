import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Feather, MapPin, ArrowRight, Wind } from 'lucide-react';
import { BreathPhase } from '../types';

interface HeroProps {
  breathPhase: BreathPhase;
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ breathPhase, onOpenBookingModal }) => {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const handleFirstInteraction = () => {
            if (heroVideoRef.current) {
              heroVideoRef.current.muted = true;
              heroVideoRef.current.play().catch(() => {});
            }
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
          };
          window.addEventListener('click', handleFirstInteraction, { once: true });
          window.addEventListener('scroll', handleFirstInteraction, { once: true });
          window.addEventListener('touchstart', handleFirstInteraction, { once: true });
        });
      }
    }
  }, []);

  return (
    <section
      id="viva-hero"
      aria-label="VIVA Pilates - Estudio terapéutico de reformer en Providencia"
      className="relative -mt-20 pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 bg-[#37323E] text-[#F7F4ED] overflow-hidden min-h-[640px] lg:min-h-[760px] flex items-center shadow-2xl"
    >
      {/* Full-Bleed Background Video with Botanical Sage & Lilac Tint Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          ref={heroVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter saturate-[0.88] contrast-[1.04]"
          poster="/videos/viva-hero-poster.jpg"
        >
          <source src="/videos/VivaHero.mp4" type="video/mp4" />
          <source src="/videos/viva-hero.webm" type="video/webm" />
        </video>

        {/* 1. Capa Armónica en Verde Salvia y Lavanda Profundo */}
        <div className="absolute inset-0 bg-[#403A4A]/55 mix-blend-multiply" />

        {/* 2. Gradiente Horizontal para contraste óptimo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2933] via-[#3E3947]/80 to-[#5F6950]/40" />

        {/* 3. Gradiente Vertical */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2933] via-transparent to-[#2D2933]/55" />

        {/* Sutil halo orgánico en lavanda (#BAA8D2) */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-[#BAA8D2]/20 blur-[150px] pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LADO IZQUIERDO: H1 semántico y CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow Superior de Ubicación y Enfoque (GEO signals) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E5DCED]/15 backdrop-blur-md border border-[#BAA8D2]/35 text-[#F7F4ED] text-xs sm:text-sm font-sans tracking-wide mb-6 sm:mb-8"
          >
            <Feather className="w-3.5 h-3.5 text-[#BAA8D2]" aria-hidden="true" />
            <span>Pilates Reformer</span>
            <span className="text-[#BAA8D2]" aria-hidden="true">·</span>
            <span className="text-[#F7F4ED]/95 flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-[#E5DCED]" aria-hidden="true" /> Providencia, Santiago
            </span>
          </motion.div>

          {/* Titular Gigante de Alto Impacto */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="font-display uppercase text-4xl sm:text-6xl lg:text-[4.75rem] font-bold text-[#F7F4ED] tracking-tight leading-[1.05] mb-6"
          >
            VUELVE A CONECTAR CONTIGO
          </motion.h1>

          {/* Subtítulo Empático y claro para AEO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="text-base sm:text-xl text-[#F7F4ED]/90 font-sans font-light max-w-xl leading-relaxed mb-8 sm:mb-10 aeo-summary"
          >
            Estudio boutique de <strong>Pilates Reformer con enfoque terapéutico</strong> en Providencia, Santiago. Clases en grupos reducidos con atención cercana y acompañamiento individual para desarrollar fuerza, movilidad y confianza en tu cuerpo sin dolor.
          </motion.p>

          {/* Botones de Acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={onOpenBookingModal}
              id="hero-cta-primary"
              className="bg-[#BAA8D2] hover:bg-[#E5DCED] text-[#2D2B28] px-8 py-4 rounded-full text-base font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 group cursor-pointer"
            >
              <span>AGENDA TU PRIMERA CLASE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-[#2D2B28]" aria-hidden="true" />
            </button>

            <a
              href="#filosofia"
              id="hero-cta-secondary"
              className="border-2 border-[#E5DCED]/50 hover:border-[#F7F4ED] text-[#F7F4ED] hover:bg-[#E5DCED]/10 px-8 py-4 rounded-full text-base font-medium tracking-wide transition-all text-center flex items-center justify-center"
            >
              CONOCE VIVA PILATES
            </a>
          </motion.div>
        </div>

        {/* LADO DERECHO: Guía Somática de Respiración Compacta "Inhalar & Soltar" */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full max-w-[360px] sm:max-w-[260px] bg-black/25 backdrop-blur-md border border-[#E5DCED]/20 rounded-2xl p-4 shadow-xl text-center relative overflow-hidden"
            aria-live="polite"
            aria-label="Ejercicio guiado de respiración somática"
          >
            {/* Sutil resplandor ambiental */}
            <div
              className={`absolute -top-6 -right-6 w-28 h-28 rounded-full blur-[45px] pointer-events-none transition-colors duration-1000 ${
                breathPhase === 'inhale'
                  ? 'bg-[#BAA8D2]/35'
                  : breathPhase === 'hold'
                  ? 'bg-[#5F6950]/45'
                  : 'bg-[#E5DCED]/30'
              }`}
            />

            {/* Encabezado */}
            <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[#E5DCED]/15">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#BAA8D2]/25 border border-[#BAA8D2]/50 flex items-center justify-center">
                  <Wind className="w-3 h-3 text-[#E5DCED]" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-sans uppercase tracking-wider font-semibold text-[#F7F4ED]/90">
                  Pausa de Conexión
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E5DCED]/15 text-[#F7F4ED]/80 border border-[#E5DCED]/15">
                4-2-4
              </span>
            </div>

            {/* Núcleo Cinético */}
            <div className="relative h-32 flex items-center justify-center my-1">
              <motion.div
                animate={{
                  scale: breathPhase === 'inhale' ? [1, 1.25] : breathPhase === 'hold' ? 1.25 : [1.25, 0.95],
                  opacity: breathPhase === 'inhale' ? [0.2, 0.5] : breathPhase === 'hold' ? 0.4 : [0.4, 0.12],
                }}
                transition={{
                  duration: breathPhase === 'hold' ? 2 : 4,
                  ease: 'easeInOut',
                }}
                className="absolute w-28 h-28 rounded-full border border-dashed border-[#E5DCED]/40"
              />

              <motion.div
                animate={{
                  scale: breathPhase === 'inhale' ? [0.88, 1.12] : breathPhase === 'hold' ? [1.12, 1.14, 1.12] : [1.12, 0.88],
                  backgroundColor:
                    breathPhase === 'inhale'
                      ? 'rgba(186, 168, 210, 0.35)'
                      : breathPhase === 'hold'
                      ? 'rgba(95, 105, 80, 0.45)'
                      : 'rgba(229, 220, 237, 0.25)',
                  borderColor:
                    breathPhase === 'inhale'
                      ? 'rgba(186, 168, 210, 0.75)'
                      : breathPhase === 'hold'
                      ? 'rgba(229, 220, 237, 0.65)'
                      : 'rgba(247, 244, 237, 0.50)',
                }}
                transition={{
                  duration: breathPhase === 'hold' ? 2 : 4,
                  ease: 'easeInOut',
                }}
                className="relative w-20 h-20 rounded-full backdrop-blur-sm border flex flex-col items-center justify-center p-2 shadow-inner z-10"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={breathPhase}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="text-center"
                  >
                    <span className="font-editorial italic text-sm sm:text-base text-[#F7F4ED] block leading-tight">
                      {breathPhase === 'inhale' && 'inhalar'}
                      {breathPhase === 'hold' && 'sostener'}
                      {breathPhase === 'exhale' && 'soltar'}
                    </span>
                    <span className="text-[9px] font-sans text-[#F7F4ED]/80 uppercase tracking-widest block mt-0.5 font-medium">
                      {breathPhase === 'inhale' && '4 seg'}
                      {breathPhase === 'hold' && '2 seg'}
                      {breathPhase === 'exhale' && '4 seg'}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Guía Contextual */}
            <div className="h-7 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={breathPhase}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="text-[11px] text-[#F7F4ED]/90 font-sans leading-tight"
                >
                  {breathPhase === 'inhale' && <span>Expande tu pecho con calma</span>}
                  {breathPhase === 'hold' && <span className="text-[#F7F4ED]">Habita el momento presente</span>}
                  {breathPhase === 'exhale' && <span className="text-[#E5DCED] font-medium">Suelta los hombros y relaja</span>}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Barra de Progresión Rítmica */}
            <div className="mt-2 pt-2 border-t border-[#E5DCED]/15 flex items-center gap-1">
              <div
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  breathPhase === 'inhale' ? 'bg-[#BAA8D2]' : 'bg-white/15'
                }`}
              />
              <div
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  breathPhase === 'hold' ? 'bg-[#5F6950]' : 'bg-white/15'
                }`}
              />
              <div
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  breathPhase === 'exhale' ? 'bg-[#E5DCED]' : 'bg-white/15'
                }`}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador inferior "Descubre más" */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#F7F4ED]/65 text-[11px] font-sans tracking-widest uppercase pointer-events-none">
        <span>Descubre más</span>
        <div className="w-px h-5 bg-gradient-to-b from-[#E5DCED]/70 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
