import React from 'react';
import Navbar from './landing-place/Navbar';
import Hero from './landing-place/Hero';
import LogoBar from './landing-place/LogoBar';
import Features from './landing-place/Features';
import Pricing from './landing-place/Pricing';
import Metrics from './landing-place/Metrics';
import Team from './landing-place/Team';
import CTA from './landing-place/CTA';
import Testimonials from './landing-place/Testimonials';
import Footer from './landing-place/Footer';

function App() {
  return (
    <div className="min-h-screen  bg-[#f8f9ff] font-sans text-dark-text selection:bg-mint-light selection:text-emerald-primary">
      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
      <Metrics />
      <CTA />
      <Testimonials />
      <Pricing />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
