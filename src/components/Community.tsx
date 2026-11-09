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
    <section id="comunidad" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#5E4E63]/15" aria-labelledby="comunidad-heading">
      <div className="bg-[#5E4E63] text-[#F6F2EA] rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        {/* Resplandor ambiental decorativo */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#BA4F12]/15 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#606E51]/25 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Lado Izquierdo: Cuadro Vertical para Video en Bucle con Control de Sonido */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-[2.5rem] bg-black/40 border-2 border-white/20 shadow-2xl overflow-hidden relative group">
              <video
                ref={communityVideoRef}
                className="w-full h-full object-cover"
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
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-sans uppercase tracking-wider text-[#F6F2EA]/90 border border-white/15">
                  Comunidad VIVA
                </span>
              </div>

              {/* Botón flotante para activar / silenciar sonido */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
                <button
                  type="button"
                  onClick={toggleCommunitySound}
                  aria-label={isCommunityMuted ? "Activar audio del video de la comunidad" : "Silenciar audio del video"}
                  className={`px-4 py-2 rounded-full backdrop-blur-md text-xs font-sans font-medium flex items-center gap-2 border transition-all shadow-xl active:scale-95 cursor-pointer ${
                    isCommunityMuted
                      ? "bg-black/75 hover:bg-black/90 text-[#F6F2EA] border-white/25 hover:border-white/40"
                      : "bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] border-[#BA4F12]/50 shadow-orange-950/40"
                  }`}
                >
                  {isCommunityMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-[#BA4F12]" aria-hidden="true" />
                      <span>Activar sonido</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-white animate-pulse" aria-hidden="true" />
                      <span>Sonido activado</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Texto de Comunidad */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F2EA]/15 text-[#F6F2EA] text-xs font-semibold uppercase tracking-widest border border-white/10">
                <Heart className="w-3.5 h-3.5 text-[#BA4F12]" aria-hidden="true" />
                <span>MÁS QUE UN ESTUDIO, UNA COMUNIDAD</span>
              </span>
            </div>

            <h2 id="comunidad-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#F6F2EA]">
              Aquí hay un espacio cuidado para ti.
            </h2>

            <p className="font-editorial text-xl sm:text-2xl text-[#F6F2EA]/95 italic leading-relaxed">
              Creemos que el bienestar corporal y mental florece cuando nos sentimos en confianza y en compañía.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-[#F6F2EA]/85 font-sans leading-relaxed">
              <p>
                Queremos que al cruzar la puerta de VIVA Pilates encuentres un ambiente donde te sientas acogida desde el primer minuto, puedas compartir tu proceso con naturalidad y disfrutes plenamente de regalarte una hora de autocuidado.
              </p>
              <p>
                No importa si nunca te has subido a una camilla de reformer o si llevas años de práctica. Lo verdaderamente importante es reconectar con el movimiento de una forma que tenga sentido para tu cuerpo y tu salud.
              </p>
              <p className="font-medium text-[#F6F2EA] text-lg sm:text-xl pt-2">
                Nos movemos de manera diferente, pero compartimos algo en común: las ganas sinceras de cuidarnos.
              </p>
            </div>

            {/* Acciones & Botones */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openWhatsApp("Hola VIVA Pilates, leí sobre su comunidad y me gustaría saber cómo empezar a practicar con ustedes.")}
                className="bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] px-7 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Conversar por WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onOpenBookingModal}
                className="border border-white/30 hover:border-white text-[#F6F2EA] px-6 py-3.5 rounded-full text-sm font-medium transition-all cursor-pointer"
              >
                Agendar Bienvenida
              </button>

              <a
                href="https://www.instagram.com/vivapilates.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#F6F2EA]/80 hover:text-white flex items-center gap-1.5 font-medium transition-colors"
                aria-label="Perfil de Instagram de VIVA Pilates"
              >
                <Instagram className="w-4 h-4 text-[#BA4F12]" aria-hidden="true" />
                <span>@vivapilates.cl</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
