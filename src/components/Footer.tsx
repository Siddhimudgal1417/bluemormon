import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../lib/motion';

export default function Footer() {
  return (
    <>
      <section className="section-lg bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
        <Reveal className="container-premium text-center">
          <p className="text-small text-royal-blue-300 mb-6">READY TO EXPLORE?</p>
          <h2 className="mb-8">Begin Your Next Adventure</h2>
          <p className="text-xl font-light mb-12 max-w-2xl mx-auto opacity-90">
            Let's create a journey that transforms you. Our team is ready to help you discover the world in a whole new way.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link to="/contact" className="btn bg-royal-blue-600 hover:bg-royal-blue-700 text-white border-0 px-8 py-4 transition-all duration-300">
              Plan Your Trip
            </Link>
            <Link to="/packages" className="btn border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 transition-all duration-300">
              View Packages
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="bg-navy-900 text-white py-16">
        <div className="container-premium mb-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 font-display font-bold text-2xl mb-4">
                <div className="w-8 h-8 bg-royal-blue-900 rounded-full flex items-center justify-center text-white text-xs font-black">
                  BM
                </div>
                <span>Blue Mormon</span>
              </div>
              <p className="text-sm text-white/60 font-light">
                Crafting transformative travel experiences since 2010.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-royal-blue-500">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/destinations" className="text-white/70 hover:text-royal-blue-400 transition">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="text-white/70 hover:text-royal-blue-400 transition">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-royal-blue-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-white/70 hover:text-royal-blue-400 transition">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-royal-blue-500">Get in Touch</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="text-royal-blue-500 mt-0.5" />
                  <a href="tel:+1234567890" className="text-white/70 hover:text-royal-blue-400 transition">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="text-royal-blue-500 mt-0.5" />
                  <a href="mailto:hello@bluemonormon.com" className="text-white/70 hover:text-royal-blue-400 transition">
                    hello@bluemonormon.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-royal-blue-500 mt-0.5" />
                  <span className="text-white/70">Available Worldwide</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-royal-blue-500">Follow</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-royal-blue-400 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-royal-blue-400 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-royal-blue-400 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-white/60">
            <p>© 2024 Blue Mormon Travelopedia. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-royal-blue-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-royal-blue-400 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
