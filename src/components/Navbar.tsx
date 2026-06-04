import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hoverLift } from '../lib/motion';

const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '/destinations' },
    { name: 'Packages', href: '/packages' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0)',
        boxShadow: isScrolled ? '0 24px 45px rgba(15, 23, 42, 0.08)' : '0 0 0 rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-premium flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-2xl transition-all duration-300">
          <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center text-white text-xs font-black">
            BM
          </div>
          <span className={`hidden md:inline transition-colors duration-300 ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
            Blue Mormon
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <MotionLink
              key={link.name}
              to={link.href}
              {...hoverLift}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-navy-900 hover:text-coral-500' : 'text-white hover:text-coral-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </MotionLink>
          ))}
        </div>

        <div className="hidden md:block">
          <MotionLink
            to="/contact"
            {...hoverLift}
            className="btn btn-primary bg-sunset-gold-500 hover:bg-sunset-gold-600 text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            Plan Your Trip
          </MotionLink>
        </div>

        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`md:hidden p-2 rounded transition-colors ${isScrolled ? 'text-navy-900' : 'text-white'}`}
          whileTap={{ scale: 0.92 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container-premium py-6 space-y-4">
              {navLinks.map((link) => (
                <MotionLink
                  key={link.name}
                  to={link.href}
                  {...hoverLift}
                  className="block text-navy-900 font-medium hover:text-coral-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </MotionLink>
              ))}
              <MotionLink
                to="/contact"
                {...hoverLift}
                className="block btn bg-sunset-gold-500 hover:bg-sunset-gold-600 text-white w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Plan Your Trip
              </MotionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
