import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickInquiryWidget from './components/QuickInquiryWidget';
import LeadPopup from './components/LeadPopup';
import Home from './pages/Home';
import DestinationsPage from './pages/Destinations';
import ServicesPage from './pages/Services';
import PackagesPage from './pages/Packages';
import AboutPage from './pages/About';
import TestimonialsPage from './pages/Testimonials';
import ContactPage from './pages/Contact';
import { PageTransition } from './lib/motion';

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/destinations" element={<PageTransition><DestinationsPage /></PageTransition>} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/packages" element={<PageTransition><PackagesPage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/testimonials" element={<PageTransition><TestimonialsPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <QuickInquiryWidget />
      <LeadPopup />
    </BrowserRouter>
  );
}
