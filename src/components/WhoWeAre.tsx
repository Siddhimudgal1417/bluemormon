import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal, MotionImage, AnimatedCounter, itemFadeUp, staggerContainer, hoverLift } from '../lib/motion';

const stats = [
  { end: 15, suffix: '+', label: 'Years of Experience' },
  { end: 80, suffix: '+', label: 'Destinations' },
  { end: 12000, suffix: '+', label: 'Happy Travelers' },
  { end: 99, suffix: '%', label: 'Satisfaction Rate' },
];

const team = [
  { name: 'Sofia Reis', role: 'Founder & CEO', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80', expertise: 'Asia Specialist' },
  { name: 'Marco Rossi', role: 'Head of Experiences', img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&q=80', expertise: 'Adventure Travel' },
  { name: 'Emma Watson', role: 'Operations Manager', img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&q=80', expertise: 'Luxury Travel' },
  { name: 'Liam Chen', role: 'Travel Consultant', img: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200&q=80', expertise: 'Europe Expert' },
];

export default function WhoWeAre() {
  return (
    <section className="section bg-gray-50">
      <div className="container-premium">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <MotionImage
                src="https://images.pexels.com/photos/1121598/pexels-photo-1121598.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Blue Mormon Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>

            <div className="absolute -bottom-12 -right-8 w-56 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden lg:block">
              <MotionImage
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Local experience"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-8 -right-6 bg-royal-blue-500 text-white rounded-2xl px-5 py-4 shadow-xl shadow-coral-500/30 hidden lg:block">
              <div className="text-3xl font-display font-black">
                <AnimatedCounter target={15} suffix="+" className="leading-none" />
              </div>
              <div className="text-xs font-medium text-royal-blue-100 mt-0.5">Years crafting<br />journeys</div>
            </div>
          </Reveal>

          <Reveal className="space-y-8">
            <p className="text-small text-royal-blue-500 mb-4">ABOUT US</p>
            <h2 className="mb-6">
              Luxury Travel With <span className="font-light">Authenticity</span>
            </h2>

            <p className="text-lg text-muted mb-6">
              For 15 years, Blue Mormon has been redefining luxury travel. We're not just booking flights and hotels—we're crafting transformative experiences that connect you with the world's most extraordinary destinations.
            </p>

            <p className="text-muted mb-8">
              Our team of experts combines insider knowledge with personalized service, ensuring every detail of your journey is perfect. From hidden temples in Bali to clifftop dinners in Santorini, we design travel that matters.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Expert local guides in every destination',
                '24/7 support throughout your journey',
                'Fully customizable packages',
                'Exclusive experiences not found elsewhere',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-royal-blue-500 font-bold mt-1">✓</span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <motion.div {...hoverLift}>
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
              </motion.div>
              <motion.div {...hoverLift}>
                <Link to="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </div>

        <div className="divider my-16" />

        <motion.div
          className="grid md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemFadeUp} className="rounded-3xl bg-white p-8 shadow-premium border border-gray-100">
              <div className="text-4xl font-bold text-royal-blue-500 mb-2">
                <AnimatedCounter target={stat.end} suffix={stat.suffix} className="inline-block" />
              </div>
              <p className="text-muted font-light">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
