import React from 'react';
import { MapPin, ShieldCheck, Compass, Navigation, ExternalLink, MessageCircle } from 'lucide-react';

interface LocationProps {
  openWhatsApp: (msg?: string) => void;
}

export const Location: React.FC<LocationProps> = ({ openWhatsApp }) => {
  return (
    <section id="ubicacion" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#BAA8D2]/30" aria-labelledby="ubicacion-heading">
      <div className="bg-[#E5DCED]/45 rounded-3xl p-5 sm:p-10 lg:p-12 border border-[#BAA8D2]/40 relative overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Lado Izquierdo: Información completa local (7 cols) */}
          <div className="lg:col-span-7 min-w-0 space-y-4 sm:space-y-5">
            {/* Badges superiores */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAA8D2]/40 text-[#2D2B28] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#5F6950]" aria-hidden="true" />
                <span>Dónde encontrarnos</span>
              </span>
              <span className="text-[11px] sm:text-xs text-[#49523D] font-sans flex items-center gap-1.5 font-medium px-3 py-1 rounded-full bg-[#5F6950]/12">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5F6950]" aria-hidden="true" /> Estudio Boutique · Providencia
              </span>
            </div>

            {/* Título y Dirección Principal */}
            <div className="space-y-1">
              <h2 id="ubicacion-heading" className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2D2B28] font-normal leading-tight">
                Nuestro Estudio en Providencia
              </h2>
              <div className="flex flex-wrap items-baseline gap-2">
                <address className="not-italic font-editorial text-2xl sm:text-3xl text-[#5F6950] font-semibold">
                  Valenzuela Castillo 1250
                </address>
                <span className="text-sm sm:text-lg text-[#2D2B28]/80 font-sans">
                  · Providencia, Santiago de Chile
                </span>
              </div>
            </div>

            {/* Párrafo descriptivo del espacio */}
            <p className="text-sm sm:text-lg text-[#2D2B28]/85 font-sans leading-relaxed max-w-xl">
              Un estudio boutique acogedor, con luz natural, aire renovado y sereno para que tu práctica sea un respiro genuino. Situado a pocos minutos de avenidas principales y estaciones de Metro, en un barrio residencial tranquilo y arbolado.
            </p>

            {/* Referencias clave de conectividad */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#2D2B28]/90 font-sans pt-0.5">
              <span className="px-3 py-1.5 rounded-full bg-[#F7F4ED] border border-[#BAA8D2]/40 flex items-center gap-1.5 shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-[#5F6950]" aria-hidden="true" />
                <span>Metro Manuel Montt (L1)</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#F7F4ED] border border-[#BAA8D2]/40 flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5F6950]" aria-hidden="true" />
                <span>Barrio seguro y caminable</span>
              </span>
              <span className="hidden sm:flex px-3.5 py-1.5 rounded-full bg-[#F7F4ED] border border-[#BAA8D2]/40 items-center gap-2 shadow-2xs">
                <span>Acceso vehicular cómodo</span>
              </span>
            </div>

            {/* Botones de acción directa: 2 columnas en móvil para llegar directo en Maps/Waze */}
            <div className="pt-2 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="https://maps.app.goo.gl/2gwJzdsCFRhSuHCc6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center bg-[#5F6950] hover:bg-[#4B543E] text-[#F7F4ED] px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Google Maps</span>
                <ExternalLink className="hidden sm:inline w-3.5 h-3.5 opacity-80" aria-hidden="true" />
              </a>

              <a
                href="https://waze.com/ul?q=Valenzuela%20Castillo%201250,%20Providencia"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center bg-[#F7F4ED] hover:bg-white text-[#2D2B28] border border-[#BAA8D2]/60 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition-all shadow-2xs hover:shadow-xs"
              >
                <span>Waze</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#5F6950]" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => openWhatsApp("Hola VIVA Pilates, quisiera consultar cómo llegar al estudio en Valenzuela Castillo 1250, Providencia.")}
                className="col-span-2 sm:col-span-1 justify-center text-xs sm:text-sm text-[#2D2B28] hover:text-[#5F6950] flex items-center gap-2 font-medium px-4 py-2.5 sm:py-3 rounded-full hover:bg-[#F7F4ED]/70 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#5F6950]" aria-hidden="true" />
                <span>Pedir ubicación por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Lado Derecho: Mapa compacto en móvil (250px) y amplio en desktop (480px) */}
          <div className="lg:col-span-5 min-w-0 flex flex-col justify-center">
            <div className="relative h-[240px] sm:h-[320px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#BAA8D2]/50 bg-[#F7F4ED] w-full">
              <iframe
                title="Mapa de ubicación VIVA Pilates - Valenzuela Castillo 1250, Providencia"
                src="https://maps.google.com/maps?q=-33.4348519,-70.6173818&hl=es&z=16&output=embed"
                className="absolute -top-16 left-0 w-full h-[calc(100%+64px)] border-0 pointer-events-none lg:pointer-events-auto"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Botón flotante directo */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-10">
                <a
                  href="https://maps.app.goo.gl/2gwJzdsCFRhSuHCc6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F7F4ED]/95 hover:bg-white text-[#2D2B28] backdrop-blur-md px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium shadow-sm border border-[#BAA8D2]/50 flex items-center justify-between transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5F6950]" aria-hidden="true" />
                    <span>Ver ruta directa en Google Maps</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5F6950]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
