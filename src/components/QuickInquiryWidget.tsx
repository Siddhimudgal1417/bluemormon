import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const defaultForm = {
  name: '',
  phone: '',
  destination: '',
  message: '',
};

export default function QuickInquiryWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(defaultForm);
    setTimeout(() => setSubmitted(false), 4500);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex justify-end sm:inset-x-auto sm:right-5">
      <div className="relative w-full max-w-[420px]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mb-3 rounded-3xl border border-sunset-gold-200/80 bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_rgba(244,162,97,0.18)]"
            >
              <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-sunset-gold-100">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sunset-gold-600 font-semibold">Quick Inquiry</p>
                  <h2 className="text-lg font-semibold text-navy-900">Share your travel interest</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-navy-900 text-white transition hover:bg-sunset-gold-500"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-5 space-y-4">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sunset-gold-100 text-sunset-gold-600">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900">Inquiry sent</h3>
                    <p className="text-sm text-navy-600">Our travel team will reach out to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-sunset-gold-400 focus:ring-2 focus:ring-sunset-gold-100"
                        placeholder="Aarav Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="tel"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-sunset-gold-400 focus:ring-2 focus:ring-sunset-gold-100"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Destination Interest</label>
                      <input
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-sunset-gold-400 focus:ring-2 focus:ring-sunset-gold-100"
                        placeholder="Maldives, Bali, or Europe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-sunset-gold-400 focus:ring-2 focus:ring-sunset-gold-100"
                        placeholder="Tell us who you are traveling with, when, and what matters most."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sunset-gold-500 to-coral-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sunset-gold-500/30 transition hover:opacity-95"
                    >
                      Submit Inquiry <ArrowUpRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sunset-gold-500 to-coral-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(244,162,97,0.28)] transition hover:-translate-y-0.5 active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          Quick Inquiry
        </button>
      </div>
    </div>
  );
}
