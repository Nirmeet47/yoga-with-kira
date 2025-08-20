"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  { name: "Sarah Johnson", text: "This service has transformed our business operations completely. The team's expertise and dedication to excellence is truly remarkable." },
  { name: "Michael Chen", text: "Outstanding results delivered on time and within budget. I couldn't be happier with the professionalism and quality of work." },
  { name: "Emily Rodriguez", text: "The attention to detail and customer service is unmatched. They went above and beyond our expectations in every aspect." },
  { name: "David Thompson", text: "Innovative solutions that perfectly addressed our unique challenges. The expertise and creativity of this team is impressive." },
  { name: "Lisa Parker", text: "Exceptional communication throughout the entire process. They made complex technical concepts easy to understand and implement." },
  { name: "James Wilson", text: "Reliable, efficient, and results-driven. This partnership has been instrumental in achieving our business goals and growth." }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Seamless looping array
  const extendedTestimonials = [
    ...testimonials.slice(-2),
    ...testimonials,
    ...testimonials.slice(0, 2),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === testimonials.length + 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(2);
      }, 700);
    }
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [currentIndex, isTransitioning, testimonials.length]);

  const getCardStyles = (index: number, isCenter: boolean) => `
    rounded-2xl p-6 text-center border flex-shrink-0 transition-all duration-700
    ${isCenter
      ? "bg-[#35402A] text-white border-[#A9D941] scale-105 shadow-lg"
      : "bg-white text-[#35402A] border-gray-200 opacity-80"
    }
  `;

  const StarRating = ({ active }: { active: boolean }) => (
    <div className="flex justify-center mb-4 gap-1">
      {[...Array(5)].map((_, idx) => (
        <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${active ? "text-[#A9D941]" : "text-[#35402A]"}`}>
          <path d="M12 2l2.9 6.5L22 9.3l-5 5 1.2 7.7L12 18.6 5.8 22l1.2-7.7-5-5 7.1-0.8L12 2z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-bold text-4xl md:text-5xl text-[#35402A] mb-4">
          What Our <span className="text-[#A9D941]">Clients</span> Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover why our clients trust us to deliver exceptional results and outstanding service every time.
        </p>
      </div>

      {/* Desktop (3) */}
      <div className="hidden lg:block  mx-auto px-4">
        <div className="overflow-hidden">
          <div
            className={`flex gap-6 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 1.5}rem))`
            }}
          >
            {extendedTestimonials.map((t, i) => (
              <div key={`desktop-${i}`} className={`${getCardStyles(i, i === currentIndex + 1)} w-1/3`}>
                <StarRating active={i === currentIndex + 1} />
                <p className="text-sm mb-4">{t.text}</p>
                <h4 className="font-semibold text-lg">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet (2) */}
      <div className="hidden md:block lg:hidden max-w-4xl mx-auto px-4">
        <div className="overflow-hidden">
          <div
            className={`flex gap-6 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 1.5}rem))`
            }}
          >
            {extendedTestimonials.map((t, i) => (
              <div key={`tablet-${i}`} className={`${getCardStyles(i, i === currentIndex)} w-1/2`}>
                <StarRating active={i === currentIndex} />
                <p className="text-sm mb-4">{t.text}</p>
                <h4 className="font-semibold text-lg">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile (1) */}
      <div className="md:hidden max-w-sm mx-auto px-4">
        <div className="overflow-hidden">
          <div
            className={`flex gap-6 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`
            }}
          >
            {extendedTestimonials.map((t, i) => (
              <div key={`mobile-${i}`} className={`${getCardStyles(i, i === currentIndex)} w-full`}>
                <StarRating active={i === currentIndex} />
                <p className="text-sm mb-4">{t.text}</p>
                <h4 className="font-semibold text-lg">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === (currentIndex - 2 + testimonials.length) % testimonials.length
                ? "bg-[#35402A] w-8 h-2"
                : "bg-gray-300 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
