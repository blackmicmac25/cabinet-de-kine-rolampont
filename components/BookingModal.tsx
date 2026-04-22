import React from 'react';
import { X, ExternalLink, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Practitioner } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  practitioners: Practitioner[];
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, practitioners }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden pointer-events-auto relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-stone-500" />
              </button>

              <div className="p-8 md:p-12 text-center">
                <h3 className="text-3xl font-serif text-sage-900 mb-2">Prendre Rendez-vous</h3>
                <p className="text-stone-500 mb-8">Veuillez sélectionner votre praticien pour être redirigé vers Maiia.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {practitioners.map((p) => (
                    <a
                      key={p.id}
                      href={p.maiiaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 rounded-2xl border border-stone-200 hover:border-sage-400 hover:shadow-xl hover:shadow-sage-100/50 transition-all duration-300 bg-stone-50 text-left"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center text-sage-700 overflow-hidden relative">
                          {p.image ? (
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-6 h-6" />
                          )}
                        </div>
                        <ExternalLink className="w-5 h-5 text-stone-300 group-hover:text-sage-500 transition-colors" />
                      </div>
                      <h4 className="font-serif text-xl text-sage-900 mb-1">{p.name}</h4>
                      <p className="text-sm text-stone-500">{p.role}</p>
                      <div className="mt-4 text-sage-600 text-sm font-medium flex items-center gap-2">
                        <span>Voir disponibilités</span>
                        <span className="block w-0 group-hover:w-4 h-px bg-sage-600 transition-all duration-300"></span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-sage-50 p-4 text-center text-xs text-sage-600">
                Vous serez redirigé vers la plateforme sécurisée Maiia.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;