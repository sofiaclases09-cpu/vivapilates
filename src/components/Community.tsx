import React, { useRef, useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX, MessageCircle, Instagram } from 'lucide-react';

interface CommunityProps {
  openWhatsApp: (msg?: string) => void;
  onOpenBookingModal: () => void;
}

export const Community: React.FC<CommunityProps> = ({ openWhatsApp, onOpenBookingModal }) => {
  const communityVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isCommunityMuted, setIsCommunityMuted] = useState(true);

  const toggleCommunitySound = () => {
    if (communityVideoRef.current) {
      const nextMuted = !isCommunityMuted;
      communityVideoRef.current.muted = nextMuted;
      setIsCommunityMuted(nextMuted);
      if (!nextMuted) {
        communityVideoRef.current.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    const video = communityVideoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section id="comunidad" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#BAA8D2]/30" aria-labelledby="comunidad-heading">
      <div className="bg-[#5F6950] text-[#F7F4ED] rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        {/* Resplandor ambiental decorativo en lavanda y crema */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#BAA8D2]/20 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#E5DCED]/15 blur-3xl pointer-events-none" aria-hidden="true" />

        {/* Mobile-only context header shown above the centered vertical video */}
        <div className="lg:hidden relative z-10 text-center space-y-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F4ED]/15 text-[#F7F4ED] text-[11px] font-semibold uppercase tracking-widest border border-[#E5DCED]/25">
            <Heart className="w-3 h-3 text-[#E5DCED]" aria-hidden="true" />
            <span>MÁS QUE UN ESTUDIO, UNA COMUNIDAD</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-normal leading-tight text-[#F7F4ED]">
            Aquí hay un espacio cuidado para ti.
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Lado Izquierdo: Cuadro Vertical Centrado para Video en Bucle con Control de Sonido */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] aspect-[9/16] max-h-[56svh] lg:max-h-none mx-auto rounded-3xl lg:rounded-[2.5rem] bg-black/40 border-2 border-[#E5DCED]/30 shadow-2xl overflow-hidden relative group">
              <video
                ref={communityVideoRef}
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted={isCommunityMuted}
                playsInline
                preload="metadata"
                title="Clase y comunidad en VIVA Pilates Providencia"
              >
                <source src="/videos/vivap.mp4" type="video/mp4" />
              </video>

              {/* Sombra sutil para legibilidad de controles */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

              {/* Badge superior */}
              <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#F7F4ED]/90 border border-[#E5DCED]/20">
                  Comunidad VIVA
                </span>
              </div>

              {/* Botón flotante para activar / silenciar sonido */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <button
                  type="button"
                  onClick={toggleCommunitySound}
                  aria-label={isCommunityMuted ? "Activar audio del video de la comunidad" : "Silenciar audio del video"}
                  className={`px-3.5 py-2 rounded-full backdrop-blur-md text-xs font-sans font-medium flex items-center gap-2 border transition-all shadow-xl active:scale-95 cursor-pointer whitespace-nowrap ${
                    isCommunityMuted
                      ? "bg-black/75 hover:bg-black/90 text-[#F7F4ED] border-[#E5DCED]/30 hover:border-[#E5DCED]/50"
                      : "bg-[#BAA8D2] hover:bg-[#E5DCED] text-[#2D2B28] border-[#E5DCED]"
                  }`}
                >
                  {isCommunityMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-[#BAA8D2]" aria-hidden="true" />
                      <span>Activar sonido</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-[#2D2B28] animate-pulse" aria-hidden="true" />
                      <span>Sonido activado</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Texto de Comunidad */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="hidden lg:block">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F4ED]/15 text-[#F7F4ED] text-xs font-semibold uppercase tracking-widest border border-[#E5DCED]/25">
                <Heart className="w-3.5 h-3.5 text-[#E5DCED]" aria-hidden="true" />
                <span>MÁS QUE UN ESTUDIO, UNA COMUNIDAD</span>
              </span>
            </div>

            <h2 id="comunidad-heading" className="hidden lg:block font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#F7F4ED]">
              Aquí hay un espacio cuidado para ti.
            </h2>

            <p className="font-editorial text-xl sm:text-2xl text-[#E5DCED] italic leading-relaxed text-center lg:text-left">
              Creemos que el bienestar corporal y mental florece cuando nos sentimos en confianza y en compañía.
            </p>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-lg text-[#F7F4ED]/90 font-sans leading-relaxed">
              <p>
                Queremos que al cruzar la puerta de VIVA Pilates encuentres un ambiente donde te sientas acogida desde el primer minuto, puedas compartir tu proceso con naturalidad y disfrutes plenamente de regalarte una hora de autocuidado.
              </p>
              <p className="hidden sm:block">
                No importa si nunca te has subido a una camilla de reformer o si llevas años de práctica. Lo verdaderamente importante es reconectar con el movimiento de una forma que tenga sentido para tu cuerpo y tu salud.
              </p>
              <p className="font-medium text-[#F7F4ED] text-base sm:text-xl pt-1 sm:pt-2 text-center lg:text-left">
                Nos movemos de manera diferente, pero compartimos algo en común: las ganas sinceras de cuidarnos.
              </p>
            </div>

            {/* Acciones & Botones */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => openWhatsApp("Hola VIVA Pilates, leí sobre su comunidad y me gustaría saber cómo empezar a practicar con ustedes.")}
                className="w-full sm:w-auto justify-center bg-[#E5DCED] hover:bg-[#BAA8D2] text-[#2D2B28] px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Conversar por WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto justify-center border border-[#E5DCED]/50 hover:border-[#F7F4ED] text-[#F7F4ED] hover:bg-[#F7F4ED]/10 px-6 py-3.5 rounded-full text-sm font-medium transition-all cursor-pointer"
              >
                Agendar Bienvenida
              </button>

              <a
                href="https://www.instagram.com/vivapilates.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#E5DCED] hover:text-[#F7F4ED] flex items-center gap-1.5 font-medium transition-colors py-1"
                aria-label="Perfil de Instagram de VIVA Pilates"
              >
                <Instagram className="w-4 h-4 text-[#E5DCED]" aria-hidden="true" />
                <span>@vivapilates.cl</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
