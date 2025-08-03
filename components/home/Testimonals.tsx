"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "This service has transformed our business operations completely. The team's expertise and dedication to excellence is truly remarkable."
  },
  {
    name: "Michael Chen",
    text: "Outstanding results delivered on time and within budget. I couldn't be happier with the professionalism and quality of work."
  },
  {
    name: "Emily Rodriguez",
    text: "The attention to detail and customer service is unmatched. They went above and beyond our expectations in every aspect."
  },
  {
    name: "David Thompson",
    text: "Innovative solutions that perfectly addressed our unique challenges. The expertise and creativity of this team is impressive."
  },
  {
    name: "Lisa Parker",
    text: "Exceptional communication throughout the entire process. They made complex technical concepts easy to understand and implement."
  },
  {
    name: "James Wilson",
    text: "Reliable, efficient, and results-driven. This partnership has been instrumental in achieving our business goals and growth."
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create extended array for seamless looping
  const extendedTestimonials = [
    ...testimonials.slice(-2), // Last 2 items at the beginning
    ...testimonials,
    ...testimonials.slice(0, 2) // First 2 items at the end
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Handle seamless looping
    if (currentIndex === testimonials.length + 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(2);
      }, 700);
    } else if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length + 1);
      }, 700);
    }

    // Re-enable transitions after jump
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [currentIndex, isTransitioning, testimonials.length]);

  const getCardStyles = (index: number, screenSize: 'mobile' | 'tablet' | 'desktop') => {
    let centerIndex = currentIndex;
    
    // Adjust center calculation for different screen sizes
    if (screenSize === 'tablet') {
      centerIndex = currentIndex;
    } else if (screenSize === 'desktop') {
      centerIndex = currentIndex + 1;
    }

    const isCenter = index === centerIndex;
    
    return `rounded-2xl p-6 text-center border transition-all duration-700 flex-shrink-0 ${
      isCenter
        ? "bg-[#35402A] text-white border-[#A9D941] scale-105 shadow-lg"
        : "bg-white text-[#35402A] border-gray-200 opacity-80"
    }`;
  };

  const StarRating = ({ isActive }: { isActive: boolean }) => (
    <div className="flex justify-center mb-4 gap-1">
      {[...Array(5)].map((_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${
            isActive ? "text-[#A9D941]" : "text-[#35402A]"
          }`}
        >
          <path d="M12 2l2.9 6.5L22 9.3l-5 5 1.2 7.7L12 18.6 5.8 22l1.2-7.7-5-5 7.1-0.8L12 2z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-bold text-4xl md:text-5xl text-[#35402A] mb-4">
          What Our <span className="text-[#A9D941]">Clients</span> Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Discover why our clients trust us to deliver exceptional results and outstanding service every time.
        </p>
      </div>

      {/* Desktop Carousel - 3 cards */}
      <div className="hidden lg:block max-w-6xl mx-auto px-4">
        <div className="overflow-hidden">
          <div 
            className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${(currentIndex) * (100/3)}%)`
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`desktop-${index}`}
                className={`${getCardStyles(index, 'desktop')} w-1/3`}
              >
                <StarRating isActive={index === currentIndex + 1} />
                <p className="text-sm leading-relaxed mb-4">{testimonial.text}</p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Carousel - 2 cards */}
      <div className="hidden md:block lg:hidden max-w-4xl mx-auto px-4">
        <div className="overflow-hidden">
          <div 
            className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${(currentIndex) * 50}%)`
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`tablet-${index}`}
                className={`${getCardStyles(index, 'tablet')} w-1/2`}
              >
                <StarRating isActive={index === currentIndex} />
                <p className="text-sm leading-relaxed mb-4">{testimonial.text}</p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Carousel - 1 card */}
      <div className="md:hidden max-w-sm mx-auto px-4">
        <div className="overflow-hidden">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${(currentIndex) * 100}%)`
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`mobile-${index}`}
                className={`${getCardStyles(index, 'mobile')} w-full`}
              >
                <StarRating isActive={index === currentIndex} />
                <p className="text-sm leading-relaxed mb-4">{testimonial.text}</p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 rounded-full ${
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