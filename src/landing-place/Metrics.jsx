import React from 'react';

const MetricCard = ({ number, label }) => {
  return (
    <div className="bg-white p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border-b-4 border-[#ff6b52]/20 hover:border-[#ff6b52] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center justify-center text-center">
      <div className="text-5xl md:text-6xl font-black text-dark-text mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
        {number}
      </div>
      <div className="text-gray-500 font-medium text-lg">
        {label}
      </div>
    </div>
  );
};

const Metrics = () => {
  const metrics = [
    { number: '10k+', label: 'Website launched' },
    { number: '931k+', label: 'Projects created with Anima' },
    { number: '240k+', label: 'New users joined Anima' },
    { number: '12k+', label: 'Teams used Anima' },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark-text mb-6 tracking-tight">
            Our Metrics Tell the Story
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
