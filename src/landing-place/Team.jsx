import React from 'react';

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
);

const DribbbleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.722-1.46 4.693-4.143 5.12-7.288l-.728.418zM16.497 22.06c-.187-.872-.735-3.88-2.172-7.51-3.142 1.01-4.767 3.078-5.32 3.825 1.623 1.272 3.65 2.025 5.862 2.025 1.24 0 2.413-.26 3.473-.722l-1.843 2.382zM6.983 17.153c.532-.734 2.79-3.666 6.023-4.782.133-.31.273-.62.41-.933-4.25-1.373-8.81-.51-9.45-.38 0 2.26.85 4.31 2.25 5.85l.767.245zM2.87 10.366c.103-.016 4.352-.682 9.07.72.63-1.442 1.25-2.903 1.77-4.25-3.35-1.742-6.522-1.63-7.072-1.59-1.92 1.34-3.23 3.43-3.768 5.83l.23-.71zm12.35-6.57c-.55 1.38-1.18 2.89-1.83 4.38 3.12.82 5.82 2.5 6.47 2.94.38-3.03-.79-5.83-2.97-7.66l-1.67.34zm-9.15.54c.48-.05 3.9-.22 7.64 1.73.61-1.38 1.15-2.73 1.54-3.79C13.9 1.17 12.56 1 12 1c-2.45 0-4.69.83-6.47 2.23l-.11.106z"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
      <div className="w-full aspect-square overflow-hidden p-6 pb-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-[30px]"
        />
      </div>
      
      <div className="p-8 pb-4">
        <h3 className="text-2xl font-bold text-dark-text mb-2">{name}</h3>
        <p className="text-gray-500 font-medium">{role}</p>
      </div>
      
      <div className="flex gap-4 p-8 pt-4 border-t border-gray-50 w-full justify-center">
        <a href="#" className="w-10 h-10 rounded-full bg-mint-light/30 flex items-center justify-center text-emerald-primary hover:bg-emerald-primary hover:text-white transition-all duration-300">
          <TwitterIcon />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-mint-light/30 flex items-center justify-center text-emerald-primary hover:bg-emerald-primary hover:text-white transition-all duration-300">
          <DribbbleIcon />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-mint-light/30 flex items-center justify-center text-emerald-primary hover:bg-emerald-primary hover:text-white transition-all duration-300">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

const Team = () => {
  const team = [
    {
      name: 'Sarah K.',
      role: 'UX Designer',
      image: '/Team/Profile Image Placeholder 1.png'
    },
    {
      name: 'Michael L.',
      role: 'Lead Designer',
      image: '/Team/Profile Image Placeholder 1 (1).png'
    },
    {
      name: 'Lauren M.',
      role: 'Product Designer',
      image: '/Team/Profile Image Placeholder 1 (2).png'
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-dark-text mb-6 tracking-tight">
            Meet our team
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Get to know the faces behind the scenes and learn about the values that drive us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
