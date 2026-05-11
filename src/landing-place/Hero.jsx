import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import Button from './Button';

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

export default Hero;
