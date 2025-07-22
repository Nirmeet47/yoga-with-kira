'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Ralph Edwards',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Courtney Henry',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Arlene McCoy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-20 bg-white relative">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-800">
          What Our <span className="text-green-500">Clients</span> Says
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Navigation Arrows */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Testimonial Cards - EXACTLY your original layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 w-full sm:w-[300px] text-center shadow-md transition-all duration-500 ${
                i === activeIndex
                  ? 'bg-green-900 text-white scale-105'
                  : 'bg-white text-gray-800'
              }`}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-4 h-4 ${
                      i === activeIndex ? 'text-green-300' : 'text-green-500'
                    }`}
                  >
                    <path d="M12 2l2.9 6.5L22 9.3l-5 5 1.2 7.7L12 18.6 5.8 22l1.2-7.7-5-5 7.1-0.8L12 2z" />
                  </svg>
                ))}
              </div>
              {/* Text */}
              <p className="text-sm">{t.text}</p>
              {/* Name */}
              <h4 className="mt-4 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`transition-all duration-300 rounded-full hover:scale-125 ${
              i === activeIndex 
                ? 'bg-green-800 w-6 h-1.5' 
                : 'bg-gray-300 w-4 h-1.5 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;