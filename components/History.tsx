
import React from 'react';
import { TargetIcon } from './icons/TargetIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-4 mb-6">
    <TargetIcon className="h-8 w-8 text-md-yellow" />
    <h2 className="text-3xl md:text-4xl font-bold text-md-white">{children}</h2>
  </div>
);

const historyImage = 'https://images.pexels.com/photos/69773/shotgun-hunting-cartridge-shells-69773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const History: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-md-red text-md-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={historyImage} 
              alt="Classic shotgun shells next to a firearm, evoking a sense of history" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <SectionTitle>Our History</SectionTitle>
            <p className="leading-relaxed mb-4">
              Launching in 2025, the Patapsco Junior Marksmen is being formed by a group of dedicated community members to provide a safe and structured outlet for youth interested in shooting sports. Our vision is to build one of Maryland's most respected junior marksmanship programs from the ground up.
            </p>
            <p className="leading-relaxed">
              We aim to foster state and regional champions, but our greatest success will be the countless young men and women who learn valuable life skills through our program. Our commitment to our core values will be the foundation of our club from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
