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
        className="bg-[#F6F2EA]/85 backdrop-blur-md border border-[#5E4E63]/15 rounded-full px-5 sm:px-8 py-3.5 shadow-sm shadow-[#5E4E63]/5 flex items-center justify-between transition-all"
      >
        {/* Logo + Location for Local GEO Recognition */}
        <a href="#viva-hero" className="flex items-center gap-3 group" aria-label="VIVA Pilates - Inicio">
          <div className="w-9 h-9 rounded-full bg-[#5E4E63] text-[#F6F2EA] flex items-center justify-center font-editorial text-lg tracking-wider transition-transform group-hover:scale-105 shadow-inner">
            V
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-xl sm:text-2xl tracking-wide text-[#5E4E63] font-medium leading-none">
              VIVA <span className="font-sans text-xs tracking-widest text-[#BA4F12] font-semibold uppercase ml-1">Pilates</span>
            </span>
            <span className="text-[11px] text-[#4A4540]/70 flex items-center gap-1 font-sans mt-0.5">
              <MapPin className="w-3 h-3 text-[#606E51]" aria-hidden="true" />
              <span>Providencia, Santiago</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-sans text-[#4A4540]/80" aria-label="Navegación principal">
          <a href="#filosofia" className="hover:text-[#5E4E63] transition-colors relative py-1 hover:font-medium">
            Filosofía & Enfoque
          </a>
          <a href="#perfiles" className="hover:text-[#5E4E63] transition-colors relative py-1 hover:font-medium">
            Tu Momento
          </a>
          <a href="#comunidad" className="hover:text-[#5E4E63] transition-colors relative py-1 hover:font-medium">
            Comunidad VIVA
          </a>
          <a href="#preguntas-frecuentes" className="hover:text-[#5E4E63] transition-colors relative py-1 hover:font-medium">
            Preguntas Frecuentes
          </a>
          <a href="#ubicacion" className="hover:text-[#5E4E63] transition-colors relative py-1 hover:font-medium">
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
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all ${
              isPlayingSound
                ? "bg-[#606E51] text-[#F6F2EA] shadow-sm animate-pulse"
                : "bg-[#5E4E63]/10 text-[#5E4E63] hover:bg-[#5E4E63]/20"
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
            className="bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Hablar por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#5E4E63] hover:bg-[#5E4E63]/10 transition-colors"
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
            className="lg:hidden mt-2 bg-[#F6F2EA] border border-[#5E4E63]/20 rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col gap-4 text-base font-sans"
            role="navigation"
            aria-label="Menú para dispositivos móviles"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#5E4E63]/10">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#BA4F12]">Navegación</span>
              <span className="text-xs text-[#606E51] flex items-center gap-1">
                <MapPin className="w-3 h-3" aria-hidden="true" /> Providencia, Santiago
              </span>
            </div>
            <a
              href="#filosofia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#4A4540] hover:text-[#5E4E63] flex items-center justify-between"
            >
              <span>Filosofía & Enfoque</span>
              <ChevronRight className="w-4 h-4 text-[#5E4E63]/40" />
            </a>
            <a
              href="#perfiles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#4A4540] hover:text-[#5E4E63] flex items-center justify-between"
            >
              <span>Tu Momento</span>
              <ChevronRight className="w-4 h-4 text-[#5E4E63]/40" />
            </a>
            <a
              href="#comunidad"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#4A4540] hover:text-[#5E4E63] flex items-center justify-between"
            >
              <span>Comunidad VIVA</span>
              <ChevronRight className="w-4 h-4 text-[#5E4E63]/40" />
            </a>
            <a
              href="#preguntas-frecuentes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#4A4540] hover:text-[#5E4E63] flex items-center justify-between"
            >
              <span>Preguntas Frecuentes</span>
              <ChevronRight className="w-4 h-4 text-[#5E4E63]/40" />
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#4A4540] hover:text-[#5E4E63] flex items-center justify-between"
            >
              <span>Dónde encontrarnos</span>
              <ChevronRight className="w-4 h-4 text-[#5E4E63]/40" />
            </a>

            <div className="pt-3 border-t border-[#5E4E63]/10 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={toggleCalmTone}
                className={`w-full py-2.5 rounded-full text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                  isPlayingSound
                    ? "bg-[#606E51] text-[#F6F2EA] shadow-sm animate-pulse"
                    : "bg-[#5E4E63]/10 text-[#5E4E63] hover:bg-[#5E4E63]/20"
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
                className="w-full py-3 rounded-full border border-[#5E4E63]/40 text-[#5E4E63] text-sm font-medium hover:bg-[#5E4E63]/5 transition-colors"
              >
                Agendar conversación previa
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full py-3 rounded-full bg-[#BA4F12] text-[#F6F2EA] text-sm font-medium flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir a WhatsApp (+56 9 6525 8234)
              </button>
              <a
                href="https://www.instagram.com/vivapilates.cl/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-[#5E4E63]/10 hover:bg-[#5E4E63]/20 text-[#5E4E63] text-xs font-medium flex items-center justify-center gap-2 transition-colors mt-1"
              >
                <Instagram className="w-3.5 h-3.5 text-[#BA4F12]" />
                <span>Seguir en Instagram @vivapilates.cl</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
