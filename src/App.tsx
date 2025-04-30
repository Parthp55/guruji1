import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import BirthChartTool from './components/sections/BirthChartTool';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Celestial Guide | Professional Astrology';
  }, []);

  return (
    <div className="font-sans text-cosmic-dark bg-cream-light">
      <Header />
      <Hero />
      <Services />
      <About />
      <BirthChartTool />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;