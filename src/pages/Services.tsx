import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Plane, 
  Hotel, 
  FileText, 
  Shield, 
  Users, 
  Building2, 
  Car, 
  Headphones,
  MapPin,
  CreditCard,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Reveal, itemFadeUp, staggerContainer, PageTransition } from '../lib/motion';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    notes: '',
  });

  const services = [
    {
      icon: Plane,
      title: 'Domestic Tours',
      description: 'Expertly curated tours across India\'s most beautiful destinations with local insights.',
    },
    {
      icon: MapPin,
      title: 'International Tours',
      description: 'Seamless international travel experiences with comprehensive support and planning.',
    },
    {
      icon: Building2,
      title: 'Customized Holiday Packages',
      description: 'Bespoke itineraries tailored to your preferences, budget, and travel style.',
    },
    {
      icon: CreditCard,
      title: 'Flight Booking Assistance',
      description: 'Expert guidance on flight selection, pricing, and best travel times.',
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Access to premium accommodations with negotiated rates and exclusive perks.',
    },
    {
      icon: FileText,
      title: 'Visa Guidance',
      description: 'Complete visa application support and documentation assistance.',
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance options for peace of mind.',
    },
    {
      icon: Users,
      title: 'Group Tours',
      description: 'Organize group travel with dedicated coordination and group rates.',
    },
    {
      icon: Building2,
      title: 'Corporate Travel',
      description: 'Tailored travel solutions for corporate events and team outings.',
    },
    {
      icon: Car,
      title: 'Airport Transfers',
      description: 'Reliable ground transportation and transfer services.',
    },
    {
      icon: Users,
      title: 'Tour Managers',
      description: 'Professional tour managers for guided experiences and group support.',
    },
    {
      icon: Headphones,
      title: '24/7 Travel Support',
      description: 'Round-the-clock assistance for any travel needs or emergencies.',
    },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle2,
      title: 'Experienced Travel Experts',
      description: 'Decades of combined travel planning expertise.',
    },
    {
      icon: MapPin,
      title: 'Personalized Planning',
      description: 'Every trip designed around your unique preferences.',
    },
    {
      icon: Clock,
      title: 'End-to-End Support',
      description: 'Support from planning through post-travel follow-up.',
    },
    {
      icon: Headphones,
      title: 'Trusted Travel Partners',
      description: 'Established relationships with premium providers worldwide.',
    },
    {
      icon: CreditCard,
      title: 'Transparent Pricing',
      description: 'No hidden fees, competitive rates, clear breakdowns.',
    },
  ];

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Booking inquiry submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', destination: '', travelDate: '', notes: '' });
    }, 4500);
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <Reveal className="mb-20 text-center">
            <span className="text-royal-blue-500 text-xs font-bold uppercase tracking-widest">Our Services</span>
            <h1 className="font-display font-black text-navy-900 text-5xl md:text-6xl leading-tight mb-6">
              Travel Services Designed Around <span className="italic text-royal-blue-500">You</span>
            </h1>
            <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              From planning and bookings to guided tours and travel assistance, Blue Mormon takes care of every detail of your journey.
            </p>
          </Reveal>

          {/* Services Grid */}
          <Reveal className="mb-24">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    variants={itemFadeUp}
                    className="group p-8 rounded-3xl border border-gray-200 hover:border-coral-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-blue-100 to-royal-blue-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-royal-blue-500" />
                    </div>
                    <h3 className="font-semibold text-navy-900 text-lg mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </Reveal>

          {/* Why Choose Us Section */}
          <Reveal className="mb-24 py-16 border-y border-gray-200">
            <div className="text-center mb-12">
              <span className="text-royal-blue-500 text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
              <h2 className="font-display font-black text-navy-900 text-4xl md:text-5xl mt-4 leading-tight">
                The Blue Mormon Advantage
              </h2>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={itemFadeUp} className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-royal-blue-100 to-royal-blue-200 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-royal-blue-600" />
                    </div>
                    <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </Reveal>

          {/* Find My Booking Section */}
          <Reveal className="mb-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-royal-blue-500 text-xs font-bold uppercase tracking-widest">Booking Assistance</span>
              <h2 className="font-display font-black text-navy-900 text-4xl md:text-5xl mt-4 leading-tight">
                Find My Booking
              </h2>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                Lost your booking reference? Our team is here to help. Submit your details and we'll retrieve your booking information.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 shadow-lg"
            >
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-royal-blue-100 text-royal-blue-600">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-semibold text-navy-900 mb-2">Inquiry Received</h3>
                  <p className="text-gray-600 text-lg">Our team will verify your details and contact you with your booking information.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                        placeholder="Aarav Sharma"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                        placeholder="aarav@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy-900 mb-2">Destination / Package Name</label>
                      <input
                        required
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                        placeholder="e.g., Maldives Paradise, Bali Adventure"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Travel Date (Optional)</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleFormChange}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Additional Notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleFormChange}
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                      placeholder="Any additional information about your booking..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-royal-blue-500 to-royal-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:opacity-95 active:scale-95"
                  >
                    Retrieve My Booking Details
                  </button>
                </form>
              )}
            </motion.div>
          </Reveal>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
