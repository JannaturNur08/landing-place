import React, { useState, useEffect } from 'react';
import { Rocket, MousePointer2, Smartphone, Layout, Zap, Menu, X, ArrowRight } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, className = '' }) => {
  const variants = {
    primary: 'bg-emerald-primary text-white hover:bg-opacity-90 shadow-lg shadow-emerald-primary/20 hover:-translate-y-0.5',
    secondary: 'bg-mint-light text-emerald-primary hover:bg-opacity-80',
    outline: 'border-2 border-emerald-primary text-emerald-primary hover:bg-mint-light/30 hover:-translate-y-0.5',
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={18} className="animate-pulse" />}
      {children}
    </button>
  );
};

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

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-mint-light/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent-salmon/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl lg:text-8xl font-black text-dark-text leading-[1.05] mb-8 tracking-tight animate-in fade-in slide-in-from-left-8 duration-700">
            Land your <br /> 
            <span className="text-emerald-primary relative">
              business
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-primary/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 10 Q 50 0 100 10" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span> today!
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed animate-in fade-in slide-in-from-left-12 duration-1000">
            Have a business? We take it to the next level with our all-in-one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button variant="primary" icon={Rocket} className="px-12 py-5 text-xl">
              Get Started
            </Button>
            <Button variant="outline" className="px-12 py-5 text-xl group">
              How it works
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="relative group animate-in zoom-in-95 duration-1000 flex justify-center">
          <img 
            src="/heroSectionImage.png" 
            alt="LandingPlace Platform" 
            className="w-full max-w-[600px] drop-shadow-[0_35px_35px_rgba(0,154,116,0.2)] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-dark-text selection:bg-mint-light selection:text-emerald-primary">
      <Navbar />
      <Hero />
      
      {/* Subtle Footer for completeness */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 font-medium">
        <p>© 2026 LandingPlace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
