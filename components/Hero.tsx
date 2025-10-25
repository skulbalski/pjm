
import React from 'react';

const heroImage = 'https://images.pexels.com/photos/899459/pexels-photo-899459.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-cover bg-center" 
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      <div className="absolute inset-0 bg-md-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-md-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Patapsco Junior Marksmen
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8 max-w-3xl mx-auto">
          Building confidence, discipline, and skill in the next generation of responsible marksmen.
        </p>
        <a 
          href="#about" 
          className="bg-md-yellow text-md-black font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-md-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
