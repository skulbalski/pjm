
import React from 'react';
import { TargetIcon } from './icons/TargetIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-4 mb-6">
    <TargetIcon className="h-8 w-8 text-md-red" />
    <h2 className="text-3xl md:text-4xl font-bold text-md-black">{children}</h2>
  </div>
);

const aboutImage = 'https://images.pexels.com/photos/7648434/pexels-photo-7648434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-md-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle>About Our Club</SectionTitle>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Patapsco Junior Marksmen club is dedicated to educating youth in the safe and responsible handling of firearms for competitive shooting sports. Founded on the principles of safety, sportsmanship, and personal discipline, our program provides a supportive environment for young athletes to develop their skills.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our certified coaches and instructors are passionate about mentoring young shooters, helping them to build confidence, focus, and a lifelong respect for the sport. We welcome members of all skill levels, from beginners to experienced competitors.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center p-4">
            <img 
              src={aboutImage}
              alt="A coach instructing a young marksman at a shooting range"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
