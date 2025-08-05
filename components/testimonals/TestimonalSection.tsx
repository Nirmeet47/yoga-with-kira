'use client';

import React from 'react';

const testimonials = [
  {
    name: "Ralph Edwards",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Courtney Henry",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Arlene McCoy",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Wade Warren",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Darlene Robertson",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Marvin McKinney",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Esther Howard",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Jane Cooper",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Savannah Nguyen",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Guy Hawkins",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const StarRating = ({ className = "" }) => (
  <div className={`flex gap-1 mb-4 ${className}`}>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-current text-yellow-400"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 font-amaranth mb-4">
            Client Success <span className="text-[#A9D941]">Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16">
          {/* 3 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-300 hover:bg-[#32412d] hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <StarRating className="group-hover:text-yellow-400" />
                <p className="text-gray-700 group-hover:text-white mb-6 leading-relaxed text-sm">{t.message}</p>
                <p className="font-semibold text-gray-900 group-hover:text-white">{t.name}</p>
              </div>
            ))}
          </div>

          {/* 4 Small Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {testimonials.slice(3, 7).map((t, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl border border-gray-300 hover:bg-[#32412d] hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <StarRating className="group-hover:text-yellow-400 mb-3" />
                <p className="text-gray-700 group-hover:text-white mb-3 text-xs leading-relaxed">{t.message}</p>
                <p className="font-semibold text-gray-900 group-hover:text-white text-sm">{t.name}</p>
              </div>
            ))}
          </div>

          {/* 3 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(7, 10).map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-300 hover:bg-[#32412d] hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <StarRating className="group-hover:text-yellow-400" />
                <p className="text-gray-700 group-hover:text-white mb-6 leading-relaxed text-sm">{t.message}</p>
                <p className="font-semibold text-gray-900 group-hover:text-white">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center mt-12 ">
          <button className="bg-[#35402A] text-white px-8 py-2 rounded-full text-lg font-small transition-colors duration-300">
            View More
          </button>
          <button className="bg-[#A9D941] border-3 border-[#35402A] text-white p-3 rounded-full transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#35402A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal line with badge - Full width */}
      <div className="w-screen mt-20 relative -mx-4">
        {/* Line spans full screen width */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>

        {/* Badge */}
        <div className="relative flex justify-center">
          <div className="bg-white px-6 py-2 rounded-full border border-gray-300 text-gray-800 text-sm font-medium flex items-center space-x-3 shadow-sm z-10">
            <span>500+ Successful Sessions</span>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;