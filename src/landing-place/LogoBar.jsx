import React from 'react';

const LogoBar = () => {
  const logos = [
    { name: 'Airbnb', src: '/logos/airbnb.png' },
    { name: 'Google', src: '/logos/google.png' },
    { name: 'Amazon', src: '/logos/amazon.png' },
    { name: 'Microsoft', src: '/logos/microsoft.png' },
    { name: 'FedEx', src: '/logos/fedex.png' },
    { name: 'HubSpot', src: '/logos/hubspot.png' },
  ];

  return (
    <div className="w-full  py-12  relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-8 lg:gap-12  ">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-6 md:h-8 lg:h-9 object-contain hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
