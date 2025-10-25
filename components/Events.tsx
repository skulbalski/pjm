import React from 'react';
import type { Event } from '../types';
import { TargetIcon } from './icons/TargetIcon';

const location = 'Carroll County Trap Club, 129 W Liberty Rd, Eldersburg, MD 21784';

const initialEventsData: Event[] = [
  {
    id: 5,
    name: 'Weekly Trap Practice',
    date: 'Every Wednesday',
    time: '6:00 PM',
    location: location,
    description: 'Join us for our weekly trap practice. A great opportunity to hone your skills and get ready for competition.'
  },
  {
    id: 6,
    name: 'Sunday Trap League',
    date: 'Every Sunday',
    time: 'Mornings',
    location: location,
    description: 'Compete in our friendly but competitive Sunday morning trap league. All members are encouraged to participate.'
  },
  {
    id: 7,
    name: 'Holiday Party',
    date: 'December 2024',
    time: 'Details TBD',
    location: location,
    description: 'Join us for our annual holiday party! A festive time for all members and their families. More details to be announced soon.'
  }
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-md-white border-l-4 border-md-yellow rounded-r-lg shadow-lg p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-xl font-bold text-md-black mb-2">{event.name}</h3>
      <div className="text-md-red font-semibold mb-3 text-sm">
        <span>{event.date} &bull; {event.time}</span>
        <br/>
        <span>{event.location}</span>
      </div>
      <p className="text-gray-600 flex-grow">{event.description}</p>
    </div>
  );
};


const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-4 mb-8 justify-center">
    <TargetIcon className="h-10 w-10 text-md-white" />
    <h2 className="text-3xl md:text-4xl font-bold text-md-white text-center">{children}</h2>
  </div>
);

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-md-black">
      <div className="container mx-auto px-6">
        <SectionTitle>Upcoming Events</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialEventsData.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;