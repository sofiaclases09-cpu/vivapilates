import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, MessageCircle } from 'lucide-react';
import { ModalFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  openWhatsApp: (msg?: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, openWhatsApp }) => {
  const [modalForm, setModalForm] = useState<ModalFormData>({
    name: '',
    phone: '',
    concern: 'Dolor o tensión muscular',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      const msg = `Hola VIVA Pilates, mi nombre es ${modalForm.name || 'Alumna'}. Motivo de consulta: ${modalForm.concern}. Mensaje: ${
        modalForm.message || 'Quisiera coordinar una conversación de bienvenida.'
      }`;
      openWhatsApp(msg);
      onClose();
      setFormSubmitted(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#2D2933]/65 backdrop-blur-sm"
          />

          {/* Dialog Content: Bottom Sheet on mobile, centered modal on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-[#F7F4ED] rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-t sm:border border-[#BAA8D2]/50 max-h-[90svh] overflow-y-auto"
          >
            {/* Mobile drag handle indicator */}
            <div className="w-10 h-1 rounded-full bg-[#BAA8D2]/70 mx-auto mb-4 sm:hidden" aria-hidden="true" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ventana de agendamiento"
              className="absolute top-5 right-5 p-1.5 rounded-full text-[#2D2B28]/60 hover:text-[#2D2B28] hover:bg-[#E5DCED] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="mb-5 sm:mb-6">
              <span className="text-xs uppercase tracking-widest text-[#5F6950] font-semibold block mb-1">
                Conversación de Bienvenida
              </span>
              <h3 id="modal-title" className="font-editorial text-2xl sm:text-3xl text-[#2D2B28] font-medium">
                Cuéntanos sobre ti y tu cuerpo
              </h3>
              <p className="text-xs sm:text-sm text-[#2D2B28]/80 mt-1.5 font-sans">
                Sin compromisos ni exigencias. Te responderemos personalmente para orientarte hacia el grupo y horario ideal para ti.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3" role="status">
                <div className="w-12 h-12 rounded-full bg-[#5F6950] text-[#F7F4ED] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" aria-hidden="true" />
                </div>
                <h4 className="font-editorial text-xl text-[#2D2B28]">¡Gracias por tu confianza!</h4>
                <p className="text-xs text-[#2D2B28]/80">
                  Abriendo WhatsApp para coordinar tu conversación...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-[#5F6950] uppercase tracking-wider mb-1">
                    Tu Nombre
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Ej. Sofía Morales"
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/85 border border-[#BAA8D2]/50 focus:outline-none focus:ring-2 focus:ring-[#5F6950]/40 text-[#2D2B28]"
                  />
                </div>

                <div>
                  <label htmlFor="modal-concern" className="block text-xs font-semibold text-[#5F6950] uppercase tracking-wider mb-1">
                    Motivo o Molestia Principal
                  </label>
                  <select
                    id="modal-concern"
                    value={modalForm.concern}
                    onChange={(e) => setModalForm({ ...modalForm, concern: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/85 border border-[#BAA8D2]/50 focus:outline-none focus:ring-2 focus:ring-[#5F6950]/40 text-[#2D2B28]"
                  >
                    <option value="Dolor o tensión lumbar / cervical">Dolor o tensión lumbar / cervical</option>
                    <option value="Estrés laboral y necesidad de pausa">Estrés laboral y necesidad de pausa</option>
                    <option value="Rehabilitación / Indicación médica o hernia">Rehabilitación / Indicación médica o hernia</option>
                    <option value="Retomar actividad física sin sobreexigirme">Retomar actividad física sin sobreexigirme</option>
                    <option value="Conocer Pilates Reformer por primera vez">Conocer Pilates Reformer por primera vez</option>
                    <option value="Otro motivo">Otro motivo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-xs font-semibold text-[#5F6950] uppercase tracking-wider mb-1">
                    ¿Algún detalle que quieras compartir? (Opcional)
                  </label>
                  <textarea
                    id="modal-message"
                    rows={3}
                    placeholder="Ej. Siento rigidez en hombros al trabajar frente al computador..."
                    value={modalForm.message}
                    onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/85 border border-[#BAA8D2]/50 focus:outline-none focus:ring-2 focus:ring-[#5F6950]/40 text-[#2D2B28] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-full text-xs font-medium text-[#2D2B28] hover:bg-[#E5DCED] transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none justify-center bg-[#5F6950] hover:bg-[#4B543E] text-[#F7F4ED] px-6 py-3 sm:py-2.5 rounded-full text-xs font-medium tracking-wide flex items-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Continuar a WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
