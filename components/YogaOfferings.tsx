'use client';

import Image from 'next/image';

const offerings = [
  {
    title: 'Physiotherapy',
    description: 'Heal faster and move better with expert physiotherapy.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Nutrition Consultation',
    description: 'Personalized diet plans for a healthier you.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Mental Wellness',
    description: 'Confidential therapy sessions with trained professionals.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Yoga Sessions',
    description: 'Relax and strengthen your body with guided yoga.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Health Checkups',
    description: 'Stay on top of your health with regular checkups.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
  {
    title: 'Skincare Treatment',
    description: 'Glow with our expert skincare routines.',
    image: '/images/yoga-with-kira.jpeg',
    buttonText: 'Book an Appointment',
  },
];

const Offerings = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Offerings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="relative group w-full h-80 overflow-hidden rounded-xl shadow-md"
            >
              {/* ✅ Use image from object */}
              <Image
                src={offering.image}
                alt={offering.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-40 group-hover:h-52 transition-all duration-500 bg-gradient-to-t from-white via-white/90 to-transparent z-10 pointer-events-none" />

              {/* Text */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] text-center z-20 transition-transform duration-500 group-hover:-translate-y-10">
                <h3 className="text-lg font-semibold text-gray-800">
                  {offering.title}
                </h3>
                <p className="text-sm text-gray-600">{offering.description}</p>
              </div>

              {/* Button on Hover */}
              <div className="absolute left-1/2 bottom-6 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-500 z-30 pointer-events-none group-hover:pointer-events-auto">
                <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium text-sm shadow-md hover:bg-green-700 transition">
                  {offering.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
