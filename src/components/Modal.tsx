import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, lastUpdated, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto" role="dialog" aria-modal="true" aria-label={title}>
          <motion.div
            className="fixed inset-0 backdrop-blur-sm"
            style={{ background: 'color-mix(in srgb, #0b1020 55%, transparent)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="flex min-h-full items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="panel relative w-full max-w-3xl flex flex-col max-h-[90vh] pointer-events-auto"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex-shrink-0 px-6 py-5 flex items-center justify-between gap-4" style={{ borderBottom: '1px solid var(--line)' }}>
                <div>
                  <h2 className="text-lg font-extrabold tracking-[0.02em]">{title}</h2>
                  {lastUpdated && (
                    <p className="mono text-[11px] tracking-[0.08em] mt-1" style={{ color: 'var(--ink-muted)' }}>
                      SON GÜNCELLEME · {lastUpdated}
                    </p>
                  )}
                </div>
                <button onClick={onClose} className="btn !h-9 !w-9 !p-0 flex-shrink-0" aria-label="Kapat">
                  <FaTimes size={13} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>
              <div className="flex-shrink-0 px-6 py-4" style={{ borderTop: '1px solid var(--line)', background: 'var(--panel-soft)' }}>
                <button onClick={onClose} className="btn primary w-full">
                  Kapat
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
