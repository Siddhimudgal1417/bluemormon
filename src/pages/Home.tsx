import Hero from '../components/Hero';
import NavigationCards from '../components/DestinationsMarquee';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeDo from '../components/WhatWeDo';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="pt-0">
      <Hero />
      <NavigationCards />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeWork />
      <Testimonials />
      <Footer />
    </div>
  );
}
