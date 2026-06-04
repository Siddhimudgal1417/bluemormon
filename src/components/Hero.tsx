import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hoverLift, MotionImage, Reveal } from '../lib/motion';

const MotionLink = motion(Link);

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      <MotionImage
        src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80"
        alt="Tropical destination"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex items-center justify-center">
        <Reveal className="container-premium text-center text-white max-w-3xl">
          <motion.p
            className="text-small text-white/80 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            TRAVEL EXPERIENCES
          </motion.p>

          <motion.h1
            className="mb-6 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            Journeys That <span className="font-bold">Transform</span>
          </motion.h1>

          <motion.p
            className="text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Curated travel experiences designed for Indian travelers seeking authentic connections, breathtaking destinations, and moments that matter.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <MotionLink
              to="/packages"
              {...hoverLift}
              className="btn btn-primary bg-sunset-gold-500 hover:bg-sunset-gold-600 text-white border-0"
            >
              Explore Packages <ArrowRight size={18} />
            </MotionLink>
            <MotionLink
              to="/contact"
              {...hoverLift}
              className="btn btn-secondary text-white border-white hover:bg-white hover:text-navy-900"
            >
              Plan Your Trip
            </MotionLink>
          </motion.div>
        </Reveal>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
