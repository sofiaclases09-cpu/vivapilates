import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Calendar } from 'lucide-react';

interface FloatingWhatsAppProps {
  openWhatsApp: (msg?: string) => void;
  onOpenBookingModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ openWhatsApp, onOpenBookingModal }) => {
  return (
    <>
      {/* DESKTOP & TABLET (md+): Floating quick WhatsApp button (unchanged) */}
      <motion.button
        type="button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => openWhatsApp()}
        title="Hablar con una instructora de VIVA Pilates"
        aria-label="Contactar a VIVA Pilates por WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 bg-[#5F6950] hover:bg-[#4B543E] text-[#F7F4ED] border border-[#E5DCED]/35 p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all items-center gap-2 group active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
        <span className="hidden group-hover:inline text-xs font-medium tracking-wide pr-1">
          ¿Dudas? Escríbenos
        </span>
      </motion.button>

      {/* MOBILE ONLY (< md): Compact Thumb-Zone Action Bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden fixed bottom-3 left-3 right-3 z-40"
      >
        <div className="bg-[#F7F4ED]/95 backdrop-blur-lg border border-[#BAA8D2]/50 rounded-full p-1.5 shadow-xl flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenBookingModal}
            className="flex-1 bg-[#E5DCED] active:bg-[#BAA8D2] text-[#2D2B28] py-2.5 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#5F6950]" aria-hidden="true" />
            <span>Agendar clase</span>
          </button>

          <button
            type="button"
            onClick={() => openWhatsApp()}
            aria-label="Contactar a VIVA Pilates por WhatsApp"
            className="flex-1 bg-[#5F6950] active:bg-[#4B543E] text-[#F7F4ED] py-2.5 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};
