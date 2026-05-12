import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, company, text, image, rating }) => {
  return (
    <div className="bg-white p-10 rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <div className="mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm"
        />
      </div>
      <h3 className="text-xl font-bold text-[#2d2d2d] mb-1">{name}</h3>
      <p className="text-gray-500 text-sm font-medium mb-8">{role} {company}</p>
      
      <p className="text-[#2d2d2d] leading-relaxed mb-8 text-lg font-medium italic">
        "{text}"
      </p>
      
      <div className="flex gap-1 mt-auto">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={24} 
            className={`${i < rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-[#E5E7EB]'} `} 
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah K.',
      role: 'UX Designer',
      company: '@Brello',
      text: "I was looking for a way to streamline my design process and the Anima's Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
      image: '/testimonialCardPhoto/Photo.png',
      rating: 5
    },
    {
      name: 'Michael L.',
      role: 'Creative Director',
      company: '@Yo',
      text: "The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!",
      image: '/testimonialCardPhoto/Photo (1).png',
      rating: 4
    },
    {
      name: 'Lauren M.',
      role: 'UI Designer',
      company: '@Boo',
      text: "Anima's Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently.",
      image: '/testimonialCardPhoto/Photo (2).png',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#2d2d2d] mb-6 tracking-tight">
            Real Stories from Satisfied Customers
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            See how our landing page ui kit is making an impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
