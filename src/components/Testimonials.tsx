import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal, MotionImage, itemFadeUp, staggerContainer, hoverLift } from '../lib/motion';

const MotionLink = motion(Link);

const testimonials = [
  {
    name: 'Sofia Marques',
    location: 'Lisbon, Portugal',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: "I've traveled extensively, but Blue Mormon's Maldives experience was truly transformative. Every detail was perfect.",
    rating: 5,
  },
  {
    name: 'Luca & Marta Romano',
    location: 'Milan, Italy',
    avatar: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'Our Santorini honeymoon exceeded every expectation. The team anticipated our every need.',
    rating: 5,
  },
  {
    name: 'James Okafor',
    location: 'Lagos, Nigeria',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    text: 'The Bali journey was life-changing. Local guides were exceptional and the itinerary perfectly paced.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-premium">
        <Reveal className="text-center mb-16">
          <p className="text-small text-royal-blue-500 mb-4">GUEST EXPERIENCES</p>
          <h2 className="mb-6">Travelers' Stories</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Join thousands who have discovered the world through Blue Mormon
          </p>
        </Reveal>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUp}
              className="card p-8 bg-white rounded-3xl shadow-premium border border-gray-100 hover:shadow-premium-lg transition-all duration-300"
              {...hoverLift}
            >
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="text-royal-blue-500 fill-royal-blue-500" />
                ))}
              </div>

              <p className="text-muted italic font-light mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="text-center mt-16">
          <p className="text-muted mb-6">
            12,000+ travelers have already experienced the Blue Mormon difference
          </p>
          <MotionLink to="/testimonials" {...hoverLift} className="btn btn-primary">
            Read More Stories
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
