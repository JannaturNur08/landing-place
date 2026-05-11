import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-dark-logo rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <div className="w-6 h-5 border-2 border-white rounded-md relative">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-white rounded-t-full"></div>
            </div>
          </div>
          <span className="text-2xl font-black text-dark-logo tracking-tighter">LandingPlace</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#contact" className="font-bold text-emerald-primary hover:text-emerald-primary/80 transition-colors">Contact</a>
          <Button variant="secondary">How it works</Button>
          <Button variant="primary" icon={Rocket}>Get Started</Button>
        </div>

        <button
          className="md:hidden text-dark-text p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden transition-all duration-300 origin-top ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <a href="#contact" className="font-bold text-lg py-2 border-b border-gray-100">Contact</a>
        <a href="#how" className="font-bold text-lg py-2 border-b border-gray-100">How it works</a>
        <Button variant="primary" icon={Rocket} className="w-full mt-4">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
