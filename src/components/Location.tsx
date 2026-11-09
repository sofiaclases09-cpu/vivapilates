import React from 'react';
import { MapPin, ShieldCheck, Compass, Navigation, ExternalLink, MessageCircle } from 'lucide-react';

interface LocationProps {
  openWhatsApp: (msg?: string) => void;
}

export const Location: React.FC<LocationProps> = ({ openWhatsApp }) => {
  return (
    <section id="ubicacion" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#5E4E63]/15" aria-labelledby="ubicacion-heading">
      <div className="bg-[#5E4E63]/5 rounded-3xl p-7 sm:p-10 lg:p-12 border border-[#5E4E63]/15 relative overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Izquierdo: Información completa local (7 cols) */}
          <div className="lg:col-span-7 min-w-0 space-y-5">
            {/* Badges superiores */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#BA4F12]/15 text-[#BA4F12] text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#BA4F12]" aria-hidden="true" />
                <span>Dónde encontrarnos</span>
              </span>
              <span className="text-xs text-[#606E51] font-sans flex items-center gap-1.5 font-medium px-3 py-1 rounded-full bg-[#606E51]/10">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> Estudio Boutique en Providencia · Grupos reducidos
              </span>
            </div>

            {/* Título y Dirección Principal */}
            <div className="space-y-1.5">
              <h2 id="ubicacion-heading" className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#5E4E63] font-normal leading-tight">
                Nuestro Estudio en Providencia
              </h2>
              <div className="flex flex-wrap items-baseline gap-2">
                <address className="not-italic font-editorial text-2xl sm:text-3xl text-[#BA4F12] font-semibold">
                  Valenzuela Castillo 1250
                </address>
                <span className="text-base sm:text-lg text-[#4A4540]/80 font-sans">
                  · Providencia, Santiago de Chile (Región Metropolitana)
                </span>
              </div>
            </div>

            {/* Párrafo descriptivo del espacio */}
            <p className="text-base sm:text-lg text-[#4A4540] font-sans leading-relaxed max-w-xl">
              Un estudio boutique acogedor, con luz natural, aire renovado y sereno para que tu práctica sea un respiro genuino. Situado a pocos minutos de avenidas principales y estaciones de Metro, en un barrio residencial tranquilo y arbolado.
            </p>

            {/* Referencias clave de conectividad */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#4A4540]/90 font-sans pt-1">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F6F2EA] border border-[#5E4E63]/15 flex items-center gap-2 shadow-2xs">
                <Compass className="w-4 h-4 text-[#606E51]" aria-hidden="true" />
                <span>Cercano a Metro Manuel Montt (Línea 1)</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F6F2EA] border border-[#5E4E63]/15 flex items-center gap-2 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#606E51]" aria-hidden="true" />
                <span>Sector residencial seguro y caminable</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F6F2EA] border border-[#5E4E63]/15 flex items-center gap-2 shadow-2xs">
                <span>🚗 Acceso vehicular cómodo</span>
              </span>
            </div>

            {/* Botones de acción directa para navegación GEO */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://maps.app.goo.gl/2gwJzdsCFRhSuHCc6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] px-6 py-3 rounded-full text-sm font-medium tracking-wide flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
              </a>

              <a
                href="https://waze.com/ul?q=Valenzuela%20Castillo%201250,%20Providencia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F6F2EA] hover:bg-white text-[#5E4E63] border border-[#5E4E63]/25 px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-2xs hover:shadow-xs"
              >
                <span>Navegar con Waze</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#5E4E63]/60" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => openWhatsApp("Hola VIVA Pilates, quisiera consultar cómo llegar al estudio en Valenzuela Castillo 1250, Providencia.")}
                className="text-sm text-[#5E4E63] hover:text-[#BA4F12] flex items-center gap-2 font-medium px-4 py-3 rounded-full hover:bg-white/60 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#606E51]" aria-hidden="true" />
                <span>Pedir ubicación por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Lado Derecho: Mapa interactivo responsive */}
          <div className="lg:col-span-5 min-w-0 flex flex-col justify-center">
            <div className="relative h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#5E4E63]/20 bg-[#F6F2EA] w-full">
              <iframe
                title="Mapa de ubicación VIVA Pilates - Valenzuela Castillo 1250, Providencia"
                src="https://maps.google.com/maps?q=-33.4348519,-70.6173818&hl=es&z=16&output=embed"
                className="absolute -top-16 left-0 w-full h-[calc(100%+64px)] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Botón flotante directo */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                <a
                  href="https://maps.app.goo.gl/2gwJzdsCFRhSuHCc6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F6F2EA]/95 hover:bg-white text-[#5E4E63] backdrop-blur-md px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium shadow-sm border border-[#5E4E63]/20 flex items-center justify-between transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#606E51] animate-ping" aria-hidden="true" />
                    <span>Ver ruta directa en Google Maps</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#BA4F12]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
