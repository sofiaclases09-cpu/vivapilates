import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  openWhatsApp: (msg?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ openWhatsApp }) => {
  return (
    <motion.button
      type="button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={() => openWhatsApp()}
      title="Hablar con una instructora de VIVA Pilates"
      aria-label="Contactar a VIVA Pilates por WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2 group active:scale-95 cursor-pointer"
    >
      <MessageCircle className="w-6 h-6" aria-hidden="true" />
      <span className="hidden group-hover:inline text-xs font-medium tracking-wide pr-1">
        ¿Dudas? Escríbenos
      </span>
    </motion.button>
  );
};
