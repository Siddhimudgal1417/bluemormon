import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'bm_lead_popup_shown_v1';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // show only if not shown this session
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch (e) {
      // ignore storage errors
    }

    timerRef.current = window.setTimeout(() => setIsOpen(true), 2000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) handleClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  function rememberDismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {
      /* noop */
    }
  }

  function handleClose() {
    rememberDismiss();
    setIsOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // lightweight client-side capture (no backend)
    console.log('Lead captured', { name, phone });
    rememberDismiss();
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lead-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          />

          <motion.div
            initial={{ y: 8, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 8, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.28 }}
            className="relative w-full max-w-md rounded-3xl bg-white/40 backdrop-blur-md border border-white/20 p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-title"
          >
            <button
              aria-label="Close"
              onClick={handleClose}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/30 text-navy-900 hover:bg-white/40 transition"
            >
              ✕
            </button>

            <div className="mb-4">
              <h3 id="lead-title" className="text-2xl font-display font-bold text-navy-900">Plan Your Next Adventure</h3>
              <p className="mt-2 text-sm text-gray-700">Get personalized travel recommendations, exclusive offers, and expert assistance from Blue Mormon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only">Full Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/30 bg-white/60 px-4 py-3 text-sm text-navy-900 outline-none focus:ring-2 focus:ring-coral-100"
                />
              </div>

              <div>
                <label className="sr-only">Phone Number</label>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-white/30 bg-white/60 px-4 py-3 text-sm text-navy-900 outline-none focus:ring-2 focus:ring-coral-100"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sunset-gold-500 to-coral-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
                >
                  Plan My Trip
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-3 text-sm font-medium text-navy-900 bg-white/20"
                >
                  No Thanks
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
