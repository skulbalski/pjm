
import React from 'react';
import { TargetIcon } from './icons/TargetIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-4 mb-8 justify-center">
    <TargetIcon className="h-10 w-10 text-md-red" />
    <h2 className="text-3xl md:text-4xl font-bold text-md-black text-center">{children}</h2>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-md-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-gray-700 leading-relaxed mb-8">
          Have questions or ready to take the next step? We'd love to hear from you. Please reach out to our club secretary for more information about membership, events, or our program in general.
        </p>
        <div className="bg-gray-100 rounded-lg p-8 inline-block shadow-md">
          <h3 className="font-bold text-lg text-md-black">Club Secretary</h3>
          <a href="mailto:patapscojuniormarksmen@gmail.com" className="text-xl text-md-red hover:text-md-yellow transition-colors duration-300 break-all">
            patapscojuniormarksmen@gmail.com
          </a>
          <p className="text-gray-600 mt-2">(410) 555-0123</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;