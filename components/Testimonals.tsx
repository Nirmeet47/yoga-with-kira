"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ralph Edwards",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Courtney Henry",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Arlene McCoy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const pauseThenResume = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    pauseThenResume();
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    pauseThenResume();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    pauseThenResume();
  };

  return (
    <section className="pb-10 bg-gray-50 relative">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-amaranth text-5xl font-medium text-[#35402A]">
          What Our <span className="text-[#A9D941]">Clients</span> Say
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Arrows */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#A9D941] rounded-full p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 text-[#35402A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#A9D941] rounded-full p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 text-[#35402A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 w-full sm:w-[300px] text-center border transition-all duration-500 ${
                i === activeIndex
                  ? "bg-[#35402A] text-white border-[#A9D941] scale-105 shadow-md"
                  : "bg-white text-[#35402A] border-gray-200"
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
                      i === activeIndex ? "text-[#A9D941]" : "text-[#35402A]"
                    }`}
                  >
                    <path d="M12 2l2.9 6.5L22 9.3l-5 5 1.2 7.7L12 18.6 5.8 22l1.2-7.7-5-5 7.1-0.8L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm">{t.text}</p>
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
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex
                ? "bg-[#35402A] w-6 h-1.5"
                : "bg-gray-300 w-4 h-1.5 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
