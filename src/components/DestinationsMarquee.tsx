import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal, MotionImage, hoverLift, itemFadeUp } from '../lib/motion';

const MotionLink = motion(Link);

export default function NavigationCards() {
  const cards = [
    {
      title: 'Discover Destinations',
      description: 'Explore 80+ carefully curated travel destinations',
      image: 'https://images.pexels.com/photos/1183622/pexels-photo-1183622.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      href: '/destinations',
    },
    {
      title: 'Browse Packages',
      description: '6 signature packages for every travel style',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      href: '/packages',
    },
    {
      title: 'Our Services',
      description: 'Everything from planning to on-ground support',
      image: 'https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      href: '/services',
    },
    {
      title: 'Traveler Stories',
      description: '12,000+ transformative travel experiences',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      href: '/testimonials',
    },
    {
      title: 'About Blue Mormon',
      description: '15+ years of expertise in luxury travel',
      image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      href: '/about',
    },
    {
      title: 'Get in Touch',
      description: 'Begin your journey with a personal consultation',
      image: 'https://images.pexels.com/photos/1180615/pexels-photo-1180615.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      href: '/contact',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-premium">
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ position: 'relative' }}>
          {cards.map((card, idx) => (
            <MotionLink
              key={idx}
              to={card.href}
              variants={itemFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: idx * 0.08 }}
              {...hoverLift}
              className="group relative h-64 overflow-hidden rounded-xl cursor-pointer bg-slate-50 shadow-premium"
            >
              <MotionImage
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm font-light opacity-90">{card.description}</p>
              </div>
            </MotionLink>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
