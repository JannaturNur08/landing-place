import React from 'react';
import { Rocket } from 'lucide-react';
import Button from './Button';

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto  overflow-hidden relative group">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full  pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full  pointer-events-none"></div>

        <div className="grid md:grid-cols-2 items-center">


          <div className="relative p-12 md:p-0 md:pr-12 lg:pr-20  ">
            <div className="relative">
              <div className="absolute inset-0  rounded-full"></div>
              <img
                src="/ctaVisuals/Visuals (1).png"
                alt="Platform Preview"
                className="relative w-full h-auto  rounded-2xl"
              />
            </div>
          </div>
          <div className="p-12 md:p-20 text-center md:text-left relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-dark-text mb-8 tracking-tight leading-[1.1]">
              Get your business <br />
              going right now
            </h2>
            <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed">
              Break the limits and explore the endless possibilities.  </p>
            <div className="flex justify-center md:justify-start">
              <Button variant="primary" icon={Rocket} className="px-12 py-5 text-xl">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
