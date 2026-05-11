import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon, title, description, color }) => {
  const bgColors = {
    salmon: 'bg-[#fee2e2]',
    mint: 'bg-[#ecfdf5]',
    yellow: 'bg-[#fffbeb]',
  };

  return (
    <div className=" p-8 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 group">
      <div className={`w-20 h-20 ${bgColors[color]} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>
      <h3 className="text-2xl font-black text-dark-text mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <a
        href="#"
        className="flex items-center gap-2 text-emerald-primary font-bold group-hover:gap-3 transition-all"
      >
        Learn More <ArrowRight size={18} />
      </a>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Fast building',
      description: "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!",
      icon: '/cardInfo/Icon.png',
      color: 'salmon'
    },
    {
      title: 'Responsive Design',
      description: "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
      icon: '/cardInfo/Icon (1).png',
      color: 'mint'
    },
    {
      title: 'No Code Needed',
      description: "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.",
      icon: '/cardInfo/Icon (2).png',
      color: 'yellow'
    }
  ];

  return (
    <section className="py-24  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-dark-text mb-6 tracking-tight">Features</h2>
          <p className="text-xl text-gray-500 font-medium">We are packed with features.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-mint-light/20 blur-[120px] -z-10 rounded-full"></div>
    </section>
  );
};

export default Features;
