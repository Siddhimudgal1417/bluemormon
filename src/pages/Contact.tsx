import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Reveal, itemFadeUp, staggerContainer } from '../lib/motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', trip: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = [headerRef, formRef].map((ref, i) => {
      const el = ref.current;
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', trip: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-light via-white to-cream-light pt-32 pb-20 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-royal-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-tropical-teal-500/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-20" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-6 bg-gradient-to-b from-royal-blue-600 to-royal-blue-300" />
          </div>

          <h1 className="font-display font-black text-navy-900 text-6xl md:text-7xl mt-3 leading-tight">
            Let's Plan Your<br />
            <span className="text-transparent bg-gradient-to-r from-royal-blue-600 to-tropical-teal-500 bg-clip-text">Dream Trip</span>
          </h1>
          <p className="text-navy-700 text-lg mt-6 max-w-2xl mx-auto">
            Tell us about your travel dreams. We'll craft the perfect journey tailored just for you.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                detail: '+91 9960510101',
                subdesc: 'Mon-Fri, 9AM-6PM IST',
              },
              {
                icon: Mail,
                title: 'Email Us',
                detail: 'info@bluemormon.com',
                subdesc: 'We respond within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                detail: 'Office No-20, Bhosle-Shinde Arcade',
                subdesc: 'Deccan, Pune - 411004, India',
              },
            ].map((contact, i) => {
              const Icon = contact.icon;
              return (
                <motion.div key={contact.title} variants={itemFadeUp} className="group">
                  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-tropical-teal-50 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tropical-teal-500/20 to-royal-blue-500/20 text-tropical-teal-600 flex items-center justify-center flex-shrink-0 group-hover:from-tropical-teal-500/40 group-hover:to-royal-blue-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-lg">{contact.title}</h3>
                      <p className="text-tropical-teal-600 font-medium mt-1">{contact.detail}</p>
                      <p className="text-navy-600 text-sm mt-0.5">{contact.subdesc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div variants={itemFadeUp} className="pt-8 border-t border-tropical-teal-100">
              <p className="text-sm font-semibold text-navy-700 uppercase tracking-wide mb-4">Follow Us</p>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-11 h-11 rounded-full border-2 border-tropical-teal-200 bg-white/50 hover:bg-gradient-to-br hover:from-tropical-teal-500 hover:to-royal-blue-600 flex items-center justify-center hover:border-tropical-teal-500 text-tropical-teal-600 hover:text-white transition-all duration-300 text-xs font-bold"
                  >
                    {social.slice(0, 1)}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <Reveal className="lg:col-span-2" style={{ width: '100%' }}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-tropical-teal-500/20 to-royal-blue-500/20 opacity-50 group-hover:opacity-100 rounded-3xl blur transition-all" />

              <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/80 shadow-premium">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-tropical-teal-500 mx-auto mb-4 animate-bounce" />
                    <h3 className="font-display font-bold text-navy-900 text-3xl mb-2">Thank You!</h3>
                    <p className="text-navy-700 mb-2 text-lg">We've received your message and will be in touch shortly.</p>
                    <p className="text-navy-600 text-sm">Check your email for updates from our team.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-5">
                      <motion.div variants={itemFadeUp}>
                        <label className="block text-sm font-semibold text-navy-900 mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-tropical-teal-200 bg-white/50 rounded-xl focus:outline-none focus:border-tropical-teal-500 focus:ring-2 focus:ring-tropical-teal-200 transition-all"
                          placeholder="Naina Talwar"
                        />
                      </motion.div>
                      <motion.div variants={itemFadeUp}>
                        <label className="block text-sm font-semibold text-navy-900 mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-tropical-teal-200 bg-white/50 rounded-xl focus:outline-none focus:border-tropical-teal-500 focus:ring-2 focus:ring-tropical-teal-200 transition-all"
                          placeholder="nainatalwar@gmail.com"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-5">
                      <motion.div variants={itemFadeUp}>
                        <label className="block text-sm font-semibold text-navy-900 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-tropical-teal-200 bg-white/50 rounded-xl focus:outline-none focus:border-tropical-teal-500 focus:ring-2 focus:ring-tropical-teal-200 transition-all"
                          placeholder="+91 7346785322"
                        />
                      </motion.div>
                      <motion.div variants={itemFadeUp}>
                        <label className="block text-sm font-semibold text-navy-900 mb-2">Trip Interest</label>
                        <select
                          name="trip"
                          value={formData.trip}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-tropical-teal-200 bg-white/50 rounded-xl focus:outline-none focus:border-tropical-teal-500 focus:ring-2 focus:ring-tropical-teal-200 transition-all text-navy-700"
                        >
                          <option value="">Select a package or destination</option>
                          <option value="Maldives Escape">Maldives Escape</option>
                          <option value="Bali Soul Journey">Bali Soul Journey</option>
                          <option value="Santorini Romance">Santorini Romance</option>
                          <option value="Thailand Island Hop">Thailand Island Hop</option>
                          <option value="Amalfi Coast Drive">Amalfi Coast Drive</option>
                          <option value="Zanzibar Discovery">Zanzibar Discovery</option>
                          <option value="Custom Package">Custom Package</option>
                        </select>
                      </motion.div>
                    </motion.div>

                    <motion.div variants={itemFadeUp}>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Tell Us About Your Trip</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-tropical-teal-200 bg-white/50 rounded-xl focus:outline-none focus:border-tropical-teal-500 focus:ring-2 focus:ring-tropical-teal-200 transition-all resize-none"
                        placeholder="Share your travel dreams — when you want to go, who you're traveling with, budget, interests, etc."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      variants={itemFadeUp}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-royal-blue-500 to-royal-blue-600 hover:from-royal-blue-400 hover:to-royal-blue-500 text-navy-900 font-bold rounded-xl transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl shadow-sunset-gold-500/30"
                    >
                      Send My Request <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24 py-16 border-t border-tropical-teal-100">
          <h2 className="font-display font-bold text-navy-900 text-4xl text-center mb-12">Quick Questions</h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                q: 'How long does planning take?',
                a: 'Most trips are fully planned within 48 hours. Complex itineraries may take 3-5 business days.',
              },
              {
                q: "What's included in a package?",
                a: 'Accommodations, local guides, some meals, activities, and 24/7 support. We can customize everything.',
              },
              {
                q: 'Can I modify my trip after booking?',
                a: "Absolutely! We're flexible and encourage changes. Just let us know and we'll adjust.",
              },
              {
                q: 'Do you offer group discounts?',
                a: 'Yes! Groups of 8+ get special pricing. Email us to discuss your group travel needs.',
              },
            ].map((item) => (
              <motion.div
                key={item.q}
                variants={itemFadeUp}
                className="p-6 rounded-2xl bg-gradient-to-br from-tropical-teal-50/50 to-white border border-tropical-teal-100 hover:border-tropical-teal-300 hover:shadow-lg transition-all group cursor-pointer"
              >
                <h4 className="font-semibold text-navy-900 text-base mb-2 group-hover:text-tropical-teal-600 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-tropical-teal-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  {item.q}
                </h4>
                <p className="text-navy-700 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>

        <Reveal className="mt-20 rounded-3xl overflow-hidden shadow-premium h-80 bg-gradient-to-br from-tropical-teal-100 to-royal-blue-100 flex items-center justify-center border border-tropical-teal-200">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-tropical-teal-600 mx-auto mb-3" />
            <p className="text-tropical-teal-700 font-semibold">Office No-20, Bhosle-Shinde Arcade, Pune - 411004, India</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
