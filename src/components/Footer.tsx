import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#5E4E63]/10" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 text-xs sm:text-sm text-[#4A4540]/80 font-sans">
        {/* Brand & Mission */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#5E4E63] text-[#F6F2EA] flex items-center justify-center font-editorial text-base font-semibold">
              V
            </div>
            <span className="font-editorial text-2xl text-[#5E4E63] font-medium">
              VIVA <span className="font-sans text-xs tracking-widest text-[#BA4F12] uppercase font-bold">Pilates</span>
            </span>
          </div>
          <p className="font-editorial text-xl sm:text-2xl text-[#5E4E63] font-normal leading-snug">
            Sentirse plenamente viva a través del movimiento consciente.
          </p>
          <p className="text-xs text-[#4A4540]/70 max-w-sm leading-relaxed">
            Estudio boutique de Pilates Reformer con enfoque terapéutico en Providencia, Santiago. Acompañamiento cercano en grupos reducidos para que habites tu cuerpo con confianza.
          </p>
        </div>

        {/* Local GEO Information */}
        <div className="md:col-span-4 space-y-2">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#BA4F12]">
            Ubicación & Contacto
          </h3>
          <address className="not-italic space-y-1.5 text-xs text-[#4A4540]/80">
            <p className="flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#606E51] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Valenzuela Castillo 1250, Providencia, Santiago de Chile</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#606E51] shrink-0" aria-hidden="true" />
              <a href="tel:+56965258234" className="hover:text-[#BA4F12] transition-colors">
                +56 9 6525 8234
              </a>
            </p>
            <p className="flex items-center gap-1.5">
              <Instagram className="w-4 h-4 text-[#BA4F12] shrink-0" aria-hidden="true" />
              <a
                href="https://www.instagram.com/vivapilates.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BA4F12] transition-colors"
              >
                @vivapilates.cl
              </a>
            </p>
          </address>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-3 space-y-2">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#BA4F12]">
            Secciones
          </h3>
          <ul className="space-y-1.5 text-xs text-[#4A4540]/80">
            <li>
              <a href="#viva-hero" className="hover:text-[#BA4F12] transition-colors">Inicio</a>
            </li>
            <li>
              <a href="#filosofia" className="hover:text-[#BA4F12] transition-colors">Filosofía & Enfoque</a>
            </li>
            <li>
              <a href="#perfiles" className="hover:text-[#BA4F12] transition-colors">Tu Momento</a>
            </li>
            <li>
              <a href="#comunidad" className="hover:text-[#BA4F12] transition-colors">Comunidad VIVA</a>
            </li>
            <li>
              <a href="#preguntas-frecuentes" className="hover:text-[#BA4F12] transition-colors">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="#ubicacion" className="hover:text-[#BA4F12] transition-colors">Ubicación</a>
            </li>
            <li>
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="text-[#BA4F12] font-semibold hover:underline cursor-pointer"
              >
                Agendar Bienvenida
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 border-t border-[#5E4E63]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#4A4540]/60">
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
