
import React from 'react';
import { TargetIcon } from './icons/TargetIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-md-black text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <TargetIcon className="h-6 w-6 text-md-yellow" />
          <p className="font-bold text-md-white">Patapsco Junior Marksmen</p>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Patapsco Junior Marksmen. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          Promoting Safety, Sportsmanship, and Skill.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
