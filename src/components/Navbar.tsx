import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, MessageCircle, Menu, X, ChevronRight, Volume2, VolumeX, Instagram } from 'lucide-react';

interface NavbarProps {
  isPlayingSound: boolean;
  toggleCalmTone: () => void;
  openWhatsApp: (msg?: string) => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPlayingSound,
  toggleCalmTone,
  openWhatsApp,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="viva-header" className="sticky top-4 z-50 px-4 sm:px-6 max-w-7xl mx-auto" role="banner">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#F7F4ED]/90 backdrop-blur-md border border-[#BAA8D2]/40 rounded-full px-5 sm:px-8 py-3.5 shadow-sm shadow-[#5F6950]/5 flex items-center justify-between transition-all"
      >
        {/* Logo + Location for Local GEO Recognition */}
        <a href="#viva-hero" className="flex items-center gap-3 group" aria-label="VIVA Pilates - Inicio">
          <div className="w-9 h-9 rounded-full bg-[#5F6950] text-[#F7F4ED] flex items-center justify-center font-editorial text-lg tracking-wider transition-transform group-hover:scale-105 shadow-inner">
            V
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-xl sm:text-2xl tracking-wide text-[#2D2B28] font-medium leading-none">
              VIVA <span className="font-sans text-xs tracking-widest text-[#5F6950] font-semibold uppercase ml-1">Pilates</span>
            </span>
            <span className="text-[11px] text-[#2D2B28]/70 flex items-center gap-1 font-sans mt-0.5">
              <MapPin className="w-3 h-3 text-[#5F6950]" aria-hidden="true" />
              <span>Providencia, Santiago</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-sans text-[#2D2B28]/80" aria-label="Navegación principal">
          <a href="#filosofia" className="hover:text-[#5F6950] transition-colors relative py-1 hover:font-medium whitespace-nowrap">
            Filosofía & Enfoque
          </a>
          <a href="#perfiles" className="hover:text-[#5F6950] transition-colors relative py-1 hover:font-medium whitespace-nowrap">
            Tu Momento
          </a>
          <a href="#comunidad" className="hover:text-[#5F6950] transition-colors relative py-1 hover:font-medium whitespace-nowrap">
            Comunidad VIVA
          </a>
          <a href="#preguntas-frecuentes" className="hover:text-[#5F6950] transition-colors relative py-1 hover:font-medium whitespace-nowrap">
            Preguntas Frecuentes
          </a>
          <a href="#ubicacion" className="hover:text-[#5F6950] transition-colors relative py-1 hover:font-medium whitespace-nowrap">
            Ubicación
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Sound Button (sintonizar.mp3) */}
          <button
            type="button"
            onClick={toggleCalmTone}
            title={isPlayingSound ? "Pausar ambiente sonoro" : "Sintonizar ambiente sonoro"}
            aria-label={isPlayingSound ? "Pausar música ambiental" : "Reproducir música ambiental de calma"}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              isPlayingSound
                ? "bg-[#5F6950] text-[#F7F4ED] shadow-sm animate-pulse"
                : "bg-[#E5DCED]/80 text-[#2D2B28] hover:bg-[#BAA8D2]/50"
            }`}
          >
            {isPlayingSound ? <Volume2 className="w-3.5 h-3.5" aria-hidden="true" /> : <VolumeX className="w-3.5 h-3.5" aria-hidden="true" />}
            <span className="text-[11px]">{isPlayingSound ? "Sonando" : "Sintonizar"}</span>
          </button>

          {/* WhatsApp Primary CTA */}
          <button
            type="button"
            onClick={() => openWhatsApp()}
            id="header-cta-whatsapp"
            aria-label="Hablar con VIVA Pilates por WhatsApp"
            className="bg-[#5F6950] hover:bg-[#4B543E] text-[#F7F4ED] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Hablar por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#2D2B28] hover:bg-[#E5DCED] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Cerrar menú móvil" : "Abrir menú móvil"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="lg:hidden mt-2 bg-[#F7F4ED] border border-[#BAA8D2]/50 rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col gap-4 text-base font-sans"
            role="navigation"
            aria-label="Menú para dispositivos móviles"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#BAA8D2]/30">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#5F6950]">Navegación</span>
              <span className="text-xs text-[#5F6950] flex items-center gap-1">
                <MapPin className="w-3 h-3" aria-hidden="true" /> Providencia, Santiago
              </span>
            </div>
            <a
              href="#filosofia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2B28] hover:text-[#5F6950] flex items-center justify-between"
            >
              <span>Filosofía & Enfoque</span>
              <ChevronRight className="w-4 h-4 text-[#BAA8D2]" />
            </a>
            <a
              href="#perfiles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2B28] hover:text-[#5F6950] flex items-center justify-between"
            >
              <span>Tu Momento</span>
              <ChevronRight className="w-4 h-4 text-[#BAA8D2]" />
            </a>
            <a
              href="#comunidad"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2B28] hover:text-[#5F6950] flex items-center justify-between"
            >
              <span>Comunidad VIVA</span>
              <ChevronRight className="w-4 h-4 text-[#BAA8D2]" />
            </a>
            <a
              href="#preguntas-frecuentes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2B28] hover:text-[#5F6950] flex items-center justify-between"
            >
              <span>Preguntas Frecuentes</span>
              <ChevronRight className="w-4 h-4 text-[#BAA8D2]" />
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#2D2B28] hover:text-[#5F6950] flex items-center justify-between"
            >
              <span>Dónde encontrarnos</span>
              <ChevronRight className="w-4 h-4 text-[#BAA8D2]" />
            </a>

            <div className="pt-3 border-t border-[#BAA8D2]/30 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={toggleCalmTone}
                className={`w-full py-2.5 rounded-full text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isPlayingSound
                    ? "bg-[#5F6950] text-[#F7F4ED] shadow-sm animate-pulse"
                    : "bg-[#E5DCED] text-[#2D2B28] hover:bg-[#BAA8D2]/50"
                }`}
              >
                {isPlayingSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{isPlayingSound ? "Pausar música / sonido de calma" : "Sintonizar música / sonido de calma"}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 rounded-full border border-[#5F6950]/40 text-[#5F6950] text-sm font-medium hover:bg-[#E5DCED]/50 transition-colors cursor-pointer"
              >
                Agendar conversación previa
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full py-3 rounded-full bg-[#5F6950] hover:bg-[#4B543E] text-[#F7F4ED] text-sm font-medium flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir a WhatsApp (+56 9 6525 8234)
              </button>
              <a
                href="https://www.instagram.com/vivapilates.cl/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-[#E5DCED]/70 hover:bg-[#BAA8D2]/50 text-[#2D2B28] text-xs font-medium flex items-center justify-center gap-2 transition-colors mt-1"
              >
                <Instagram className="w-3.5 h-3.5 text-[#5F6950]" />
                <span>Seguir en Instagram @vivapilates.cl</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
