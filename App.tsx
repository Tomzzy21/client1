
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
