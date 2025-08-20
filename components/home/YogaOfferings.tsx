'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const offerings = [
  {
    title: '12 Pranayama Techniques',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/home/yoga-off-1.jpg',
    buttonText: 'Book an Appointment',
  },
  {
    title: '10+ Meditation Types',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/home/yoga-off-2.jpg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Cleansing Techniques (Kriyas)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/home/yoga-off-3.jpg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Free diet consultation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/home/yoga-off-4.jpg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Therapy Yoga for medical conditions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/home/yoga-off-5.jpg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Goal-based exercise programs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: '/images/home/yoga-off-6.jpg',
    buttonText: 'Book an Appointment',
  },
];

const Offerings = () => {
  return (
    <section className="relative pt-20 pb-10 bg-gray-50 overflow-hidden">
      {/* ✅ Decorative Background Image - Middle Left */}
      <Image
        src="/images/home/offerings-bg.png"
        alt="Offerings Background"
        width={180}
        height={180}
        className="absolute top-5/9 -translate-y-1/2  left-0 object-contain opacity-80 pointer-events-none"
      />

      {/* Section Header */}
      <div className="text-center mb-12 px-4 relative z-10">
        <h2 className="font-amaranth text-5xl font-medium text-gray-800">
          Our Yoga Class <span className="text-[#A9D941]">Offerings</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

              {/* Buttons : Book my appointment */}
              <div className="whitespace-nowrap absolute left-1/2 bottom-6 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-500 z-30 pointer-events-none group-hover:pointer-events-auto">
                <div className="flex items-center justify-center">
                  <button className="bg-[#35402A] text-white px-6 py-2 rounded-full font-medium text-sm shadow-md  transition">
                    {offering.buttonText}
                  </button>
                  <button className="bg-[#A9D941] border-3 border-[#35402A] transition text-white p-2 rounded-full shadow-md">
                    <ArrowRight className="w-5 h-5 text-[#35402A]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Badge Line - Placed at Bottom */}
      <div className="flex items-center justify-center mt-20 relative px-4 z-10">
        {/* Horizontal Line */}
        <div className="absolute w-full h-px bg-gray-300 top-1/2 left-0"></div>

        {/* Centered Badge */}
        <div className="relative z-10 bg-white px-6 py-2 rounded-full border border-gray-300 text-gray-800 text-sm font-medium flex items-center space-x-3 shadow-sm">
          <span>500+ Successful Sessions</span>
          {/* Green Stars */}
          <span className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-green-500"
              >
                <path d="M12 2l2.9 6.5L22 9.3l-5 5 1.2 7.7L12 18.6 5.8 22l1.2-7.7-5-5 7.1-0.8L12 2z" />
              </svg>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
