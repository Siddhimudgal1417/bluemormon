import { motion } from 'framer-motion';
import { Reveal, MotionImage, itemFadeUp, staggerContainer } from '../lib/motion';

const ABOUT_IMG_1 = 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800&q=80';
const ABOUT_IMG_2 = 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600&q=80';
const ABOUT_IMG_3 = 'https://images.pexels.com/photos/1264680/pexels-photo-1264680.jpeg?auto=compress&cs=tinysrgb&w=800&q=80';

export default function AboutPage() {
  const timeline = [
    { year: '2009', event: 'Founded with one backpack and a dream' },
    { year: '2012', event: 'Hit 1,000 happy travelers' },
    { year: '2016', event: 'Expanded to 50+ destinations' },
    { year: '2019', event: 'Received "Best Travel Agency" award' },
    { year: '2023', event: 'Reached 12,000+ travelers worldwide' },
    { year: '2024', event: '15 years of crafting unforgettable journeys' },
  ];

  const team = [
    { name: 'Sofia Reis', role: 'Founder & CEO', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80', expertise: 'Asia Specialist' },
    { name: 'Marco Rossi', role: 'Head of Experiences', img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&q=80', expertise: 'Adventure Travel' },
    { name: 'Emma Watson', role: 'Operations Manager', img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&q=80', expertise: 'Luxury Travel' },
    { name: 'Liam Chen', role: 'Travel Consultant', img: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200&q=80', expertise: 'Europe Expert' },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <span className="text-coral-500 text-xs font-bold uppercase tracking-widest">Our Philosophy</span>
          <h1 className="font-display font-black text-navy-900 text-6xl md:text-7xl mt-3 leading-tight">
            Be Lost in <span className="italic text-coral-500">Memories</span>
          </h1>
          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            We believe you travel first to lose yourself, then to find yourself. Memories are timeless treasures of the heart — and the best part of memories is making them. We invest every effort in turning your dreams into reality.
          </p>
        </Reveal>

        <Reveal className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-coral-500 text-xs font-bold uppercase tracking-widest">About Us</span>
            <h2 className="font-display font-black text-navy-900 text-4xl md:text-5xl mt-4 leading-tight">
              Blue Mormon is luxury travel built for the curious and the adventurous.
            </h2>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              We design journeys with local insight, premium hospitality, and seamless support from first inquiry to final farewell. Every trip is handcrafted to feel effortless, authentic, and unforgettable.
            </p>
          </div>
        </Reveal>

        <Reveal className="mb-20">
          <div className="text-center mb-12">
            <span className="text-coral-500 text-xs font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="font-display font-black text-navy-900 text-4xl md:text-5xl mt-4 leading-tight">
              We create inspired travel experiences with precision and heart.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Bespoke Itineraries',
                desc: 'Custom routes, handpicked stays, and experiences built around your rhythm and passions.',
              },
              {
                title: 'Premium Access',
                desc: 'VIP properties, private tours, and exclusive moments secured through trusted local partners.',
              },
              {
                title: 'Support Everywhere',
                desc: '24/7 planning support, on-ground care, and thoughtful details so you can travel stress-free.',
              },
            ].map((service) => (
              <div key={service.title} className="p-8 rounded-3xl border border-gray-200 hover:border-coral-200 transition-all bg-white shadow-sm">
                <div className="text-coral-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">{service.title}</div>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-coral-500 text-xs font-bold uppercase tracking-widest">How We Work</span>
            <h2 className="font-display font-black text-navy-900 text-4xl md:text-5xl mt-4 leading-tight">
              A simple process designed for effortless planning.
            </h2>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { step: '1', title: 'Tell Us Your Story', desc: 'Share your travel goals, style, and must-see destinations so we can create the perfect journey.' },
              { step: '2', title: 'We Curate It', desc: 'Our experts design every detail from accommodations to experiences with premium local partners.' },
              { step: '3', title: 'Confirm & Prepare', desc: 'Review the itinerary, make adjustments, and receive full support for visas, logistics, and packing.' },
              { step: '4', title: 'Travel with Confidence', desc: 'Enjoy your trip with 24/7 support, local guidance, and seamless service from start to finish.' },
            ].map((step) => (
              <motion.div key={step.step} variants={itemFadeUp} className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-coral-500 text-white font-display font-black flex items-center justify-center mb-5">{step.step}</div>
                <h3 className="font-semibold text-navy-900 text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal className="relative" style={{ position: 'relative' }}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <MotionImage src={ABOUT_IMG_1} alt="Travel experience" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>

            <div className="absolute -bottom-12 -right-8 w-56 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden lg:block">
              <MotionImage src={ABOUT_IMG_2} alt="Local experience" className="w-full h-full object-cover" loading="lazy" />
            </div>

            <div className="absolute top-8 -right-6 bg-coral-500 text-white rounded-2xl px-5 py-4 shadow-xl shadow-coral-500/30 hidden lg:block">
              <div className="text-3xl font-display font-black">15+</div>
              <div className="text-xs font-medium text-coral-100 mt-0.5">Years crafting<br/>journeys</div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display font-bold text-navy-900 text-4xl md:text-5xl leading-tight mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We invest each and every effort into turning your dream into reality, and that reality into your best memory. Our expert team has spent years building deep relationships with local guides, premium accommodations, and activity providers across the world's most beautiful destinations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With a decade of experience and a lifetime of living and traveling in our destinations, we've developed unparalleled knowledge and the ability to ask the right questions. You can trust we understand exactly what you're after — and we'll deliver it with thoughtfulness, professionalism, and a friendly approach.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Expert planning with personal touches and surprises',
                'Deep local knowledge and established relationships',
                'Flexible itineraries tailored to your exact needs',
                'Competitive pricing through negotiated rates',
                'Unparalleled support before, during, and after your trip',
                'One-stop shop: visas, insurance, forex, international SIM cards',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 hover:bg-coral-500 text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Journey &rarr;
            </a>
          </Reveal>
        </div>

        <Reveal className="mb-24 py-16 border-y border-gray-200">
          <h2 className="font-display font-bold text-navy-900 text-4xl mb-12 text-center">Our Journey</h2>
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {timeline.map((item, i) => (
              <motion.div key={item.year} variants={itemFadeUp} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-coral-100 flex items-center justify-center font-display font-bold text-coral-600 flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-16 bg-gradient-to-b from-coral-200 to-gray-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="font-bold text-coral-600 text-sm uppercase tracking-wide">{item.year}</div>
                  <p className="text-gray-700 mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>

        <Reveal className="mb-24">
          <h2 className="font-display font-bold text-navy-900 text-4xl mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Authenticity', desc: 'Real experiences with real people. No staged tours.' },
              { title: 'Responsibility', desc: 'We give back to communities we visit.' },
              { title: 'Quality', desc: 'Every detail matters — we never compromise.' },
              { title: 'Flexibility', desc: 'Your trip, your way. Always.' },
            ].map((v) => (
              <Reveal key={v.title} className="p-6 rounded-2xl bg-gray-50 hover:bg-coral-50 transition-colors group">
                <div className="w-3 h-3 rounded-full bg-coral-500 mb-4 group-hover:scale-150 transition-transform" />
                <h4 className="font-semibold text-navy-900 text-lg mb-2">{v.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mb-24 bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 text-white">
          <h2 className="font-display font-bold text-4xl mb-4 text-center">Meet the Team</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            A diverse group of travel enthusiasts, culture lovers, and adventure seekers who live and breathe what we do.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemFadeUp}
                className="text-center group cursor-pointer"
              >
                <div className="mb-4 rounded-2xl overflow-hidden h-64 bg-white/10">
                  <MotionImage
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-display font-bold text-lg">{member.name}</h4>
                <p className="text-coral-400 text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-white/50 text-xs">{member.expertise}</p>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>

        <Reveal className="grid md:grid-cols-4 gap-6 mb-24">
          {[
            { value: '15+', label: 'Years in Travel' },
            { value: '12K+', label: 'Happy Travelers' },
            { value: '80+', label: 'Destinations' },
            { value: '4.9★', label: 'Avg Rating' },
          ].map((s) => (
            <Reveal key={s.label} className="text-center p-8 bg-gradient-to-br from-coral-50 to-ocean-50 rounded-2xl">
              <div className="font-display font-black text-4xl text-coral-500 mb-2">{s.value}</div>
              <div className="text-gray-600 font-medium text-sm">{s.label}</div>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
