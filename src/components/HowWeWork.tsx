import { MessageSquare, Pencil, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, itemFadeUp, staggerContainer, hoverLift } from '../lib/motion';

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell Us Your Story',
    description: 'Share your travel dreams, preferences, and budget with our team',
  },
  {
    icon: Pencil,
    title: 'We Design',
    description: 'Our experts craft a bespoke itinerary tailored just for you',
  },
  {
    icon: Zap,
    title: 'Refine & Prepare',
    description: 'We present your journey and make adjustments until perfect',
  },
  {
    icon: CheckCircle,
    title: 'Experience & Cherish',
    description: 'Live the magic with 24/7 support from start to finish',
  },
];

export default function HowWeWork() {
  return (
    <section className="section bg-gray-50">
      <div className="container-premium">
        <Reveal className="text-center mb-16">
          <p className="text-small text-royal-blue-500 mb-4">OUR PROCESS</p>
          <h2 className="mb-6">How We Create Your Journey</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From your first consultation to the memories that last a lifetime, here's how we work.
          </p>
        </Reveal>

        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemFadeUp}
                className="flex flex-col items-center text-center rounded-3xl bg-white p-8 shadow-premium border border-gray-100 hover:border-royal-blue-200 transition-all duration-300"
                {...hoverLift}
              >
                <div className="w-16 h-16 rounded-full bg-royal-blue-500/10 flex items-center justify-center mb-6 relative z-10">
                  <Icon className="w-8 h-8 text-royal-blue-500" strokeWidth={1.5} />
                </div>

                <div className="text-5xl font-light text-gray-200 mb-4">{idx + 1}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-muted font-light text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="divider my-16" />

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { value: '48h', label: 'Average response time for custom itinerary proposals' },
            { value: '100%', label: 'Personalized experiences designed specifically for you' },
            { value: '360°', label: 'Complete support from planning through memories' },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={itemFadeUp}
              className="card p-8 text-center bg-white shadow-premium border border-gray-100 hover:shadow-premium-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-royal-blue-500 mb-3">{item.value}</div>
              <p className="text-sm font-light text-muted">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
