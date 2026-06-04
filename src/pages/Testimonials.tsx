import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Reveal, itemFadeUp, staggerContainer, MotionImage } from '../lib/motion';

const testimonials = [
  {
    name: 'Sofia Marques',
    location: 'Lisbon, Portugal',
    trip: 'Maldives Escape',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'I\'ve traveled a lot, but nothing compares to the experience Blue Mormon crafted for us. Every single detail was perfect — from the overwater villa to the sunset dolphin cruise. I was in tears on the last day.',
    rating: 5,
  },
  {
    name: 'Luca & Marta Romano',
    location: 'Milan, Italy',
    trip: 'Santorini Romance',
    avatar: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'We honeymooned in Santorini with Blue Mormon and it was beyond our wildest dreams. The cave suite, the private caldera view, the wine tasting — pure magic. They thought of everything we didn\'t even know we wanted.',
    rating: 5,
  },
  {
    name: 'James Okafor',
    location: 'Lagos, Nigeria',
    trip: 'Bali Soul Journey',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'The Bali trip was life-changing. The sunrise volcano trek, the rice terrace walks, the yoga retreat — I came back a different person. The local guide they matched me with was absolutely exceptional.',
    rating: 5,
  },
  {
    name: 'Emma Chen',
    location: 'Singapore',
    trip: 'Thailand Island Hop',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'Traveling with four friends could be chaotic, but Blue Mormon made it seamless. The speedboat transfers, the Phi Phi day trip, even the beach party on the last night. Zero stress, all fun.',
    rating: 5,
  },
  {
    name: 'Raj Patel',
    location: 'Mumbai, India',
    trip: 'Amalfi Coast Drive',
    avatar: 'https://images.pexels.com/photos/1124582/pexels-photo-1124582.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'My first international trip was with Blue Mormon. They made everything so easy and the experience was magical. The personalized recommendations, the perfect pacing — everything was ideal. Already booking my next trip!',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
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
    return () => obs.disconnect();
  }, []);

  const t = testimonials[current];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20" style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <span className="text-coral-500 text-xs font-black uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-coral-500/10 rounded-full">
            Real Stories
          </span>
          <h1 className="font-display font-black text-navy-900 text-6xl md:text-7xl mt-4 leading-tight tracking-tight">
            They <span className="italic text-coral-500">Went.</span> They Loved.
          </h1>
          <p className="text-gray-700 text-lg mt-6 mx-auto font-light leading-relaxed">
            Thousands of travelers have trusted us with their precious time. Here's what they say.
          </p>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto mb-24">
          <motion.div
            className={`relative bg-white rounded-3xl p-10 md:p-16 shadow-premium border border-white/50 transition-all duration-300 ${
              animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            animate={{ opacity: animating ? 0 : 1, scale: animating ? 0.95 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-coral-100/60 opacity-50" strokeWidth={1} />

            <div className="flex gap-1.5 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-sand-500 fill-sand-500 shadow-sm" />
              ))}
            </div>

            <blockquote className="text-navy-900 text-2xl md:text-3xl font-light leading-relaxed mb-10 relative z-10">
              "{t.text}"
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <motion.img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover ring-3 ring-coral-200/50 shadow-premium-sm"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <div>
                  <div className="font-semibold text-navy-900 text-lg">{t.name}</div>
                  <div className="text-sm text-gray-500 font-light">{t.location}</div>
                </div>
              </div>
              <div className="px-5 py-2.5 bg-gradient-to-br from-coral-50 to-coral-100/50 text-coral-600 text-xs font-semibold rounded-full uppercase tracking-widest border border-coral-200/50 shadow-sm">
                {t.trip}
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={() => go(-1)}
              className="group w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-coral-500 hover:bg-coral-500 hover:text-white text-gray-400 transition-all duration-500 active:scale-95 shadow-premium-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (!animating) {
                      setAnimating(true);
                      setTimeout(() => {
                        setCurrent(i);
                        setAnimating(false);
                      }, 250);
                    }
                  }}
                  className={`rounded-full transition-all duration-500 ${
                    i === current ? 'w-10 h-3 bg-gradient-to-r from-coral-500 to-coral-600 shadow-lg shadow-coral-500/30' : 'w-3 h-3 bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="group w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-coral-500 hover:bg-coral-500 hover:text-white text-gray-400 transition-all duration-500 active:scale-95 shadow-premium-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>

        <Reveal className="grid md:grid-cols-3 gap-8 py-16 border-t border-b border-gray-200/50">
          {[
            { value: '12K+', label: 'Happy Travelers', desc: 'From over 50 countries' },
            { value: '4.9★', label: 'Average Rating', desc: 'Based on 3,400+ reviews' },
            { value: '100%', label: 'Recommend Us', desc: 'Would travel with us again' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group hover:bg-coral-500/5 p-6 rounded-2xl transition-colors duration-300">
              <div className="font-display font-black text-5xl bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="font-semibold text-navy-900 text-base">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-2 font-light">{stat.desc}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-20">
          <h2 className="font-display font-black text-navy-900 text-4xl text-center mb-12 tracking-tight">More Stories</h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {testimonials.map((test) => (
              <motion.div
                key={test.name}
                variants={itemFadeUp}
                className="p-7 rounded-2xl bg-white border border-gray-100/50 hover:shadow-premium hover:border-coral-200/50 transition-all duration-500 group cursor-pointer card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-sand-500 fill-sand-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 line-clamp-3 font-light">{test.text}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-coral-100/50"
                    loading="lazy"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-gray-900">{test.name}</div>
                    <div className="text-gray-500 font-light">{test.trip}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>

        <Reveal className="mt-24 text-center p-14 md:p-16 rounded-3xl bg-gradient-to-br from-coral-500 to-coral-600 text-white shadow-premium-lg border border-coral-400/30">
          <h3 className="font-display font-black text-4xl mb-4 tracking-tight">Ready to Write Your Story?</h3>
          <p className="text-white/85 mb-8 max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Join thousands of travelers who discovered unforgettable experiences with Blue Mormon Travelopedia.
          </p>
          <a
            href="/packages"
            className="inline-block px-10 py-4 bg-white text-coral-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-500 hover:shadow-lg active:scale-95 uppercase text-sm tracking-wide"
          >
            Explore Packages
          </a>
        </Reveal>
      </div>
    </div>
  );
}
