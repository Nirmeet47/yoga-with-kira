'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const offerings = [
  {
    title: '12 Pranayama Techniques',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: '10+ Meditation Types',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Cleansing Techniques (Kriyas)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Free diet consultation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Therapy Yoga for medical conditions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Goal-based exercise programs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
];

const Offerings = () => {
  return (
    <section className="py-20 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Yoga Class <span className="text-green-500">Offerings</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="relative group w-full h-120 overflow-hidden rounded-2xl shadow-sm bg-white border"
            >
              {/* Background Image */}
              <Image
                src={offering.image}
                alt={offering.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-44 group-hover:h-56 transition-all duration-500 bg-gradient-to-t from-white via-white/90 to-transparent z-10 pointer-events-none" />

              {/* Title & Description */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] text-center z-20 transition-transform duration-500 group-hover:-translate-y-12">
                <h3 className="text-lg font-semibold text-gray-800">
                  {offering.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {offering.description}
                </p>
              </div>

              {/* Buttons */}
              <div className=" whitespace-nowrap absolute left-1/2 bottom-6 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-500 z-30 pointer-events-none group-hover:pointer-events-auto">
                <div className="flex items-center  justify-center">
                  {/* Text Button */}
                  <button className="bg-green-600 text-white px-10 py-2 rounded-full font-medium text-sm shadow-md hover:bg-green-700 transition">
                    {offering.buttonText}
                  </button>

                  {/* Arrow Button */}
                  <button className="bg-green-600 hover:bg-green-700 transition text-white p-2 rounded-full shadow-md">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
