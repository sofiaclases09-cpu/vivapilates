import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-24 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#BAA8D2]/30" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 text-xs sm:text-sm text-[#2D2B28]/80 font-sans">
        {/* Brand & Mission */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#5F6950] text-[#F7F4ED] flex items-center justify-center font-editorial text-base font-semibold">
              V
            </div>
            <span className="font-editorial text-2xl text-[#2D2B28] font-medium">
              VIVA <span className="font-sans text-xs tracking-widest text-[#5F6950] uppercase font-bold">Pilates</span>
            </span>
          </div>
          <p className="font-editorial text-xl sm:text-2xl text-[#2D2B28] font-normal leading-snug">
            Sentirse plenamente viva a través del movimiento consciente.
          </p>
          <p className="text-xs text-[#2D2B28]/70 max-w-sm leading-relaxed">
            Estudio boutique de Pilates Reformer con enfoque terapéutico en Providencia, Santiago. Acompañamiento cercano en grupos reducidos para que habites tu cuerpo con confianza.
          </p>
        </div>

        {/* Local GEO Information */}
        <div className="md:col-span-4 space-y-2">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#5F6950]">
            Ubicación & Contacto
          </h3>
          <address className="not-italic space-y-1.5 text-xs text-[#2D2B28]/80">
            <p className="flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#5F6950] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Valenzuela Castillo 1250, Providencia, Santiago de Chile</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#5F6950] shrink-0" aria-hidden="true" />
              <a href="tel:+56965258234" className="hover:text-[#5F6950] transition-colors">
                +56 9 6525 8234
              </a>
            </p>
            <p className="flex items-center gap-1.5">
              <Instagram className="w-4 h-4 text-[#5F6950] shrink-0" aria-hidden="true" />
              <a
                href="https://www.instagram.com/vivapilates.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5F6950] transition-colors"
              >
                @vivapilates.cl
              </a>
            </p>
          </address>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-3 space-y-2">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#5F6950]">
            Secciones
          </h3>
          <ul className="space-y-1.5 text-xs text-[#2D2B28]/80">
            <li>
              <a href="#viva-hero" className="hover:text-[#5F6950] transition-colors">Inicio</a>
            </li>
            <li>
              <a href="#filosofia" className="hover:text-[#5F6950] transition-colors">Filosofía & Enfoque</a>
            </li>
            <li>
              <a href="#perfiles" className="hover:text-[#5F6950] transition-colors">Tu Momento</a>
            </li>
            <li>
              <a href="#comunidad" className="hover:text-[#5F6950] transition-colors">Comunidad VIVA</a>
            </li>
            <li>
              <a href="#preguntas-frecuentes" className="hover:text-[#5F6950] transition-colors">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="#ubicacion" className="hover:text-[#5F6950] transition-colors">Ubicación</a>
            </li>
            <li>
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="text-[#5F6950] font-semibold hover:underline cursor-pointer"
              >
                Agendar Bienvenida
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 border-t border-[#BAA8D2]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#2D2B28]/60">
        <p>
          © {currentYear} VIVA Pilates Studio · Providencia, Santiago de Chile. Todos los derechos reservados.
        </p>
        <p className="text-[11px]">
          Pilates Reformer Terapéutico · Movimiento Consciente & Bienestar
        </p>
      </div>
    </footer>
  );
};
