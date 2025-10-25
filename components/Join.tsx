
import React from 'react';
import { TargetIcon } from './icons/TargetIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-4 mb-8 justify-center">
      <TargetIcon className="h-10 w-10 text-md-red" />
      <h2 className="text-3xl md:text-4xl font-bold text-md-black text-center">{children}</h2>
    </div>
);

const JoinStep: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div>
        <div className="flex items-center justify-center w-10 h-10 border-2 border-md-red rounded-full">
          <span className="text-lg font-bold text-md-red">{number}</span>
        </div>
      </div>
      <div className="w-px h-full bg-md-red"></div>
    </div>
    <div className="pb-8">
      <p className="mb-2 text-xl font-bold text-gray-800">{title}</p>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

const Join: React.FC = () => {
  return (
    <section id="join" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle>Become a Member</SectionTitle>
        <p className="text-center text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
          Joining the Patapsco Junior Marksmen is a straightforward process. We are excited to welcome new members who share our passion for safety and sportsmanship. Follow the steps below to get started.
        </p>
        <div>
          <JoinStep number={1} title="Contact Us">
            Reach out via our contact form or email to express your interest. We'll answer any initial questions you have and invite you to an introductory session.
          </JoinStep>
          <JoinStep number={2} title="Attend an Orientation">
            All prospective members and their parents/guardians must attend a safety orientation. This session covers club rules, range etiquette, and the fundamentals of firearm safety.
          </JoinStep>
          <JoinStep number={3} title="Complete Paperwork">
            Fill out the membership application and liability waivers. Membership dues are collected annually and cover range fees and basic equipment usage.
          </JoinStep>
          <div className="flex">
             <div className="flex flex-col items-center mr-4">
                 <div>
                    <div className="flex items-center justify-center w-10 h-10 bg-md-red rounded-full">
                         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                </div>
            </div>
             <div className="pt-1">
                <p className="text-xl font-bold text-gray-800">Start Training!</p>
                <p className="text-gray-600">Once approved, you'll be officially welcomed to the team. You can start attending regular practices and events. Welcome aboard!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
