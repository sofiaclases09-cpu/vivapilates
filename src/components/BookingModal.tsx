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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#5E4E63]/60 backdrop-blur-sm"
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-lg bg-[#F6F2EA] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#5E4E63]/20"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ventana de agendamiento"
              className="absolute top-5 right-5 p-1.5 rounded-full text-[#5E4E63]/60 hover:text-[#5E4E63] hover:bg-[#5E4E63]/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#BA4F12] font-semibold block mb-1">
                Conversación de Bienvenida
              </span>
              <h3 id="modal-title" className="font-editorial text-2xl sm:text-3xl text-[#5E4E63] font-medium">
                Cuéntanos sobre ti y tu cuerpo
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4540]/80 mt-1.5 font-sans">
                Sin compromisos ni exigencias. Te responderemos personalmente para orientarte hacia el grupo y horario ideal para ti.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3" role="status">
                <div className="w-12 h-12 rounded-full bg-[#606E51] text-[#F6F2EA] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" aria-hidden="true" />
                </div>
                <h4 className="font-editorial text-xl text-[#5E4E63]">¡Gracias por tu confianza!</h4>
                <p className="text-xs text-[#4A4540]/80">
                  Abriendo WhatsApp para coordinar tu conversación...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-[#5E4E63] uppercase tracking-wider mb-1">
                    Tu Nombre
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Ej. Sofía Morales"
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#5E4E63]/20 focus:outline-none focus:ring-2 focus:ring-[#BA4F12]/40 text-[#4A4540]"
                  />
                </div>

                <div>
                  <label htmlFor="modal-concern" className="block text-xs font-semibold text-[#5E4E63] uppercase tracking-wider mb-1">
                    Motivo o Molestia Principal
                  </label>
                  <select
                    id="modal-concern"
                    value={modalForm.concern}
                    onChange={(e) => setModalForm({ ...modalForm, concern: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#5E4E63]/20 focus:outline-none focus:ring-2 focus:ring-[#BA4F12]/40 text-[#4A4540]"
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
                  <label htmlFor="modal-message" className="block text-xs font-semibold text-[#5E4E63] uppercase tracking-wider mb-1">
                    ¿Algún detalle que quieras compartir? (Opcional)
                  </label>
                  <textarea
                    id="modal-message"
                    rows={3}
                    placeholder="Ej. Siento rigidez en hombros al trabajar frente al computador..."
                    value={modalForm.message}
                    onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#5E4E63]/20 focus:outline-none focus:ring-2 focus:ring-[#BA4F12]/40 text-[#4A4540] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-full text-xs font-medium text-[#4A4540] hover:bg-[#5E4E63]/10 transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-[#BA4F12] hover:bg-[#9d420e] text-[#F6F2EA] px-6 py-2.5 rounded-full text-xs font-medium tracking-wide flex items-center gap-2 shadow-md transition-all cursor-pointer"
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
