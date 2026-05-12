import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingCard = ({ title, price, description, features, isHighlighted }) => {
  return (
    <div className={`p-10 rounded-[40px] flex flex-col h-full transition-all duration-300 ${
      isHighlighted 
        ? 'bg-emerald-primary text-white shadow-[0_20px_50px_rgba(0,154,116,0.2)]' 
        : 'bg-white text-dark-text shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-gray-50'
    }`}>
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-6 ${isHighlighted ? 'text-white/90' : 'text-gray-500'}`}>
          {title}
        </h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-6xl font-black">${price}</span>
          <span className={`text-lg font-medium ${isHighlighted ? 'text-white/70' : 'text-gray-400'}`}>
            / month
          </span>
        </div>
        <p className={`text-lg leading-relaxed ${isHighlighted ? 'text-white/80' : 'text-gray-500'}`}>
          {description}
        </p>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
              isHighlighted ? 'text-white' : 'text-emerald-primary'
            }`}>
              <Check size={18} strokeWidth={3} />
            </div>
            <span className={`text-lg font-medium ${isHighlighted ? 'text-white/90' : 'text-[#2d2d2d]'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
        isHighlighted 
          ? 'bg-white text-emerald-primary hover:shadow-lg hover:-translate-y-1' 
          : 'bg-mint-light text-emerald-primary hover:bg-[#d5ebe7] hover:-translate-y-1'
      }`}>
        Get Started
        {isHighlighted && <ArrowRight size={20} />}
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: 'Free',
      price: '0',
      description: 'Best for Small Teams or Individuals.',
      features: ['Basic growth', 'Some support', 'Branding'],
      isHighlighted: false
    },
    {
      title: 'Professional',
      price: '19',
      description: 'Ideal for Growing Companies.',
      features: ['Everything on Free', 'More growth', 'Lots of support'],
      isHighlighted: false
    },
    {
      title: 'Enterprise',
      price: '49',
      description: 'Ultimate for Enterprise Solutions.',
      features: ['Everything on Professional', 'Huge Discounts', 'Instant support'],
      isHighlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-dark-text mb-6 tracking-tight">
            Pick Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Find the perfect plan for your business with our flexible pricing options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
