import { motion } from 'framer-motion';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, MotionImage, itemFadeUp, staggerContainer, hoverLift } from '../lib/motion';

const packages = [
  {
    id: 1,
    name: 'Maldives Escape',
    subtitle: 'Private Overwater Villa',
    duration: '7 nights',
    group: '2 people',
    rating: 4.9,
    reviews: 234,
    price: 3_490,
    tag: 'Bestseller',
    tagColor: 'bg-coral-500',
    img: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    highlights: ['Overwater bungalow', 'Dolphin cruise', 'Snorkeling reef'],
  },
  {
    id: 2,
    name: 'Bali Soul Journey',
    subtitle: 'Temples, Rice & Retreats',
    duration: '10 nights',
    group: 'Up to 4',
    rating: 4.8,
    reviews: 187,
    price: 2_190,
    tag: 'Most Popular',
    tagColor: 'bg-ocean-500',
    img: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    highlights: ['Sunrise Volcano trek', 'Ubud rice terraces', 'Spa & Yoga retreat'],
  },
  {
    id: 3,
    name: 'Santorini Romance',
    subtitle: 'Sunset Caldera Views',
    duration: '6 nights',
    group: '2 people',
    rating: 4.9,
    reviews: 312,
    price: 4_100,
    tag: 'Luxury',
    tagColor: 'bg-sand-600',
    img: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    highlights: ['Cave suite hotel', 'Catamaran sunset sail', 'Private wine tasting'],
  },
  {
    id: 4,
    name: 'Thailand Island Hop',
    subtitle: 'Krabi · Koh Lanta · Phi Phi',
    duration: '12 nights',
    group: 'Any size',
    rating: 4.7,
    reviews: 156,
    price: 1_890,
    tag: 'Adventure',
    tagColor: 'bg-ocean-600',
    img: 'https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    highlights: ['Speedboat transfers', 'Kayak sea caves', 'Full moon beach party'],
  },
  {
    id: 5,
    name: 'Amalfi Coast Drive',
    subtitle: 'La Dolce Vita by the Sea',
    duration: '8 nights',
    group: '2–6 people',
    rating: 4.8,
    reviews: 98,
    price: 3_750,
    tag: 'New',
    tagColor: 'bg-coral-600',
    img: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    highlights: ['Positano villa stay', 'Limoncello tasting', 'Capri day trip'],
  },
  {
    id: 6,
    name: 'Zanzibar Discovery',
    subtitle: 'Spice, Sea & Swahili Culture',
    duration: '9 nights',
    group: 'Family friendly',
    rating: 4.6,
    reviews: 73,
    price: 2_650,
    tag: 'Hidden Gem',
    tagColor: 'bg-navy-700',
    img: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    highlights: ['Stone Town tour', 'Spice farm visit', 'Dhow sunset cruise'],
  },
];

const MotionLink = motion(Link);

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  return (
    <motion.div
      variants={itemFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      className="card-hover bg-white rounded-3xl overflow-hidden shadow-premium group border border-white/0 hover:border-white/50"
    >
      <div className="relative h-60 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        <MotionImage src={pkg.img} alt={pkg.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <span
          className={`absolute top-5 left-5 ${pkg.tagColor} text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg transform transition-transform duration-500 group-hover:-translate-y-1`}
        >
          {pkg.tag}
        </span>

        <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm text-navy-900 rounded-xl px-4 py-3 text-center shadow-premium-lg border border-white/20 group-hover:bg-white group-hover:shadow-premium transition-all duration-500">
          <div className="text-xs text-gray-500 font-semibold tracking-wide">FROM</div>
          <div className="text-2xl font-display font-black leading-tight text-coral-500">${pkg.price.toLocaleString()}</div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 transition-colors ${
                    i < Math.floor(pkg.rating) ? 'text-sand-500 fill-sand-500' : 'text-gray-300 fill-gray-300'
                  }`}
                />
              ))}
          </div>
          <span className="text-sm font-semibold text-navy-900">{pkg.rating}</span>
          <span className="text-sm text-gray-400 font-medium">({pkg.reviews} reviews)</span>
        </div>

        <h3 className="font-display font-black text-navy-900 text-2xl leading-tight mb-2 tracking-tight">{pkg.name}</h3>
        <p className="text-gray-600 text-sm mt-1 mb-6 font-light leading-relaxed">{pkg.subtitle}</p>

        <div className="flex items-center gap-6 text-xs text-gray-500 font-semibold mb-6 pb-6 border-b border-gray-200/50">
          <span className="flex items-center gap-2 hover:text-coral-500 transition-colors">
            <Clock className="w-4 h-4 text-coral-500" />
            <span className="tracking-wide">{pkg.duration}</span>
          </span>
          <span className="flex items-center gap-2 hover:text-coral-500 transition-colors">
            <Users className="w-4 h-4 text-coral-500" />
            <span className="tracking-wide">{pkg.group}</span>
          </span>
        </div>

        <ul className="space-y-2.5 mb-7">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm text-gray-700 font-light leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-coral-400 to-coral-500 flex-shrink-0 mt-1.5 shadow-sm" />
              <span className="group-hover:text-coral-600 transition-colors">{h}</span>
            </li>
          ))}
        </ul>

        <MotionLink
          to="/contact"
          {...hoverLift}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy-900 hover:bg-coral-500 text-white font-semibold text-sm rounded-2xl transition-all duration-500 group-hover:shadow-lg group-hover:shadow-coral-500/20 active:scale-95 tracking-wide uppercase"
        >
          View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </MotionLink>
      </div>
    </motion.div>
  );
}

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <span className="text-coral-500 text-xs font-black uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-coral-500/10 rounded-full">
            Curated Trips
          </span>
          <h1 className="font-display font-black text-navy-900 text-6xl md:text-7xl lg:text-8xl mt-4 leading-tight tracking-tight">
            Our <span className="italic text-coral-500">Signature</span> Packages
          </h1>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Every trip is crafted with precision and care. No cookie-cutter tours — just unforgettable experiences designed specifically for you.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </motion.div>

        <div className="text-center mb-24">
          <MotionLink
            to="/contact"
            {...hoverLift}
            className="group inline-flex items-center gap-3 px-12 py-4 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold text-base rounded-full transition-all duration-500 hover:-translate-y-1 shadow-premium-sm hover:shadow-premium"
          >
            Request a Custom Package <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MotionLink>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-24 p-12 bg-white rounded-3xl shadow-premium border border-white/50 hover:border-white transition-all duration-500"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              title: 'Fully Customizable',
              desc: 'Every package can be tailored to your exact needs, dates, budget, and travel style.',
            },
            {
              title: 'All-Inclusive Options',
              desc: 'Flights, hotels, tours, meals — we can bundle it all together seamlessly.',
            },
            {
              title: 'Expert Local Guides',
              desc: 'Meet passionate locals who know their destinations inside and out.',
            },
          ].map((info, idx) => (
            <motion.div
              key={info.title}
              variants={itemFadeUp}
              className="space-y-4 group hover:bg-coral-500/5 p-4 rounded-2xl transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-coral-500 to-coral-600 shadow-sm group-hover:scale-125 transition-transform duration-300" />
                <h4 className="font-semibold text-navy-900 text-lg tracking-tight">{info.title}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-light">{info.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
