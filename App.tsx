
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        {/* Hero Section - First impression */}
        <Hero />
        
        {/* Why Choose Us - Showcase unique value */}
        <About />
        
        {/* Services - What we offer */}
        <Services />
        
        {/* How It Works - Our process */}
        <HowItWorks />
        
        {/* Portfolio - Our work examples */}
        <Portfolio />
        
        {/* About Us - Company information */}
        <AboutUs />
        
        {/* Testimonials - Social proof */}
        <Testimonials />
        
        {/* Contact - Final call to action */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
