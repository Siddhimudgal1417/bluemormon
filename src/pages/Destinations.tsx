import { useState } from 'react';
import { MapPin, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, itemFadeUp, staggerContainer, MotionImage } from '../lib/motion';

const allDestinations = [
  { name: 'Maldives', img: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Asia', vibe: 'Luxury', desc: 'Overwater villas, pristine reefs, pure paradise.' },
  { name: 'Bali', img: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Asia', vibe: 'Adventure', desc: 'Temples, rice terraces, yoga retreats, jungle vibes.' },
  { name: 'Santorini', img: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Europe', vibe: 'Romance', desc: 'Iconic sunsets, white-washed villages, caldera views.' },
  { name: 'Phuket', img: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Asia', vibe: 'Beach', desc: 'Island hopping, night markets, tropical beaches.' },
  { name: 'Amalfi Coast', img: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Europe', vibe: 'Romance', desc: 'Dramatic cliffs, charming villages, Italian cuisine.' },
  { name: 'Zanzibar', img: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Africa', vibe: 'Adventure', desc: 'Spice markets, historic towns, pristine beaches.' },
  { name: 'Kyoto', img: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Asia', vibe: 'Culture', desc: 'Ancient temples, bamboo groves, cherry blossoms.' },
  { name: 'Patagonia', img: 'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'South America', vibe: 'Adventure', desc: 'Glaciers, hiking trails, wild landscapes.' },
  { name: 'Morocco', img: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Africa', vibe: 'Culture', desc: 'Medinas, deserts, mountains, and souks.' },
  { name: 'Iceland', img: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Europe', vibe: 'Adventure', desc: 'Waterfalls, geysers, glaciers, northern lights.' },
  { name: 'Thailand', img: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Asia', vibe: 'Beach', desc: 'Temples, markets, beaches, and vibrant culture.' },
  { name: 'Portugal', img: 'https://images.pexels.com/photos/1075318/pexels-photo-1075318.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', region: 'Europe', vibe: 'Romance', desc: 'Coastal cliffs, historic tiles, wine country.' },
];

const regions = ['All', ...new Set(allDestinations.map((d) => d.region))];
const vibes = ['All', ...new Set(allDestinations.map((d) => d.vibe))];

function DestinationCard({ dest, index }: { dest: typeof allDestinations[0]; index: number }) {
  return (
    <motion.div
      variants={itemFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg mb-4 bg-slate-100">
        <MotionImage src={dest.img} alt={dest.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm leading-relaxed">{dest.desc}</p>
        </div>
      </div>
      <h3 className="font-display font-bold text-navy-900 text-2xl mb-2">{dest.name}</h3>
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 bg-royal-blue-100 text-royal-blue-600 text-xs font-semibold rounded-full">{dest.region}</span>
        <span className="px-3 py-1 bg-ocean-100 text-ocean-600 text-xs font-semibold rounded-full">{dest.vibe}</span>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedVibe, setSelectedVibe] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allDestinations.filter((d) => {
    const matchesRegion = selectedRegion === 'All' || d.region === selectedRegion;
    const matchesVibe = selectedVibe === 'All' || d.vibe === selectedVibe;
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesVibe && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="text-royal-blue-500 text-xs font-bold uppercase tracking-widest">Explore</span>
          <h1 className="font-display font-black text-navy-900 text-6xl md:text-7xl mt-3 leading-tight">
            80+ <span className="italic text-royal-blue-500">Destinations</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            From tropical islands to mountain peaks, discover your next adventure.
          </p>
        </Reveal>

        <div className="mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:border-royal-blue-500 focus:ring-2 focus:ring-royal-blue-100 text-navy-900 placeholder:text-gray-400 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1">
              <Filter className="w-4 h-4" /> Filter:
            </span>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Region:</span>
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedRegion === r
                      ? 'bg-royal-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Vibe:</span>
              {vibes.map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVibe(v)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedVibe === v
                      ? 'bg-ocean-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 text-sm">
            Showing <span className="font-bold text-navy-900">{filtered.length}</span> of <span className="font-bold text-navy-900">{allDestinations.length}</span> destinations
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {filtered.map((d, i) => (
            <DestinationCard key={d.name} dest={d} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <MapPin className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No destinations match your filters. Try adjusting them.</p>
          </div>
        )}

        <Reveal className="mt-20 p-10 bg-gradient-to-r from-royal-blue-500 to-ocean-500 rounded-3xl text-center text-white">
          <h3 className="font-display font-bold text-2xl mb-2">Can't decide?</h3>
          <p className="text-white/80 mb-6">Let our experts craft a custom itinerary just for you.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-royal-blue-500 font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Plan with Us
          </a>
        </Reveal>
      </div>
    </div>
  );
}
