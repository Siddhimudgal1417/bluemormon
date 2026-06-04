import { Heart, Zap, Compass, Users, Wind, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal, itemFadeUp, staggerContainer, hoverLift } from '../lib/motion';

const MotionLink = motion(Link);

const experiences = [
  {
    icon: Heart,
    title: 'Luxury Escapes',
    description: 'Ultra-refined retreats to exclusive sanctuaries',
  },
  {
    icon: Zap,
    title: 'Adventure Expeditions',
    description: 'Thrilling exploration of untamed wilderness',
  },
  {
    icon: Compass,
    title: 'Cultural Journeys',
    description: 'Deep immersion into authentic traditions',
  },
  {
    icon: Users,
    title: 'Family Vacations',
    description: 'Multigenerational adventures for all ages',
  },
  {
    icon: Wind,
    title: 'Spiritual Retreats',
    description: 'Transformative inner journeys of discovery',
  },
  {
    icon: Mountain,
    title: 'Expedition Luxury',
    description: 'Five-star comfort meets remote exploration',
  },
];

export default function WhatWeDo() {
  return (
    <section className="section bg-white">
      <div className="container-premium">
        <Reveal className="text-center mb-16">
          <p className="text-small text-coral-500 mb-4">TRAVEL STYLES</p>
          <h2 className="mb-6">Experience Our Collection</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Whether you seek adventure, tranquility, or cultural immersion, we have the perfect journey for you.
          </p>
        </Reveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                variants={itemFadeUp}
                className="card p-8 bg-white rounded-3xl shadow-premium border border-gray-100 hover:border-coral-200 transition-all duration-300"
                {...hoverLift}
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-coral-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                <p className="text-muted font-light">{exp.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="divider my-16" />

        <Reveal className="text-center">
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Every experience is customizable. Our travel consultants work with you to create the perfect journey tailored to your interests, budget, and travel style.
          </p>
          <MotionLink to="/contact" {...hoverLift} className="btn btn-primary">
            Start Planning
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
