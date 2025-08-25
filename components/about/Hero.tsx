'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        
        {/* Top: Text part */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 text-center lg:text-left items-start">
          
          {/* Left: Heading */}
          <div className="order-1">
            <h1 className="font-amaranth text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 m-0 p-0">
              Our Journey from <br className="hidden sm:block" />
              Yoga to <span className="text-[#A9D941]">Kira</span>
            </h1>
          </div>

          {/* Right: Paragraph + Button */}
          <div className="order-2 max-w-xl mx-auto lg:mx-0">
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
            
            {/* Button */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-[#2E4023]  text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium flex-shrink-0"
                >
                  Book a session
                </button>
                <button
                  type="button"
                  className="bg-[#A9D941]  border-3 border-[#35402A] p-3 sm:p-3.5 rounded-full transition-colors duration-200 flex-shrink-0 "
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-black" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-70 sm:h-86 md:h-94 lg:h-[23rem] xl:h-[25rem] rounded-xl sm:rounded-2xl overflow-hidden mt-4 sm:mt-6 lg:mt-8">
          <Image
            src="/images/about/about-hero.png"
            alt="Yoga session"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>

        {/* Bottom Text Section */}
        <div className="pt-8 sm:pt-12 lg:pt-14">
          <div className="text-center mx-auto">
            <h2 className="text-gray-900 font-amaranth text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 sm:mb-6 leading-tight">
              Where Ancient Wisdom Meets Modern Life for Healing,
              <br className="hidden sm:block" /> Balance, and Presence.
            </h2>
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mt-8 sm:mt-12 lg:mt-16 bg-[#35402A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-white/20 text-center">
            <div className="lg:px-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2">21+</p>
              <p className="text-xs sm:text-sm lg:text-base text-white/90">Yoga Style Workout</p>
            </div>
            <div className="lg:px-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2">10+</p>
              <p className="text-xs sm:text-sm lg:text-base text-white/90">Years of Experience</p>
            </div>
            <div className="lg:px-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2">5,000+</p>
              <p className="text-xs sm:text-sm lg:text-base text-white/90">Successful sessions</p>
            </div>
            <div className="lg:px-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-2">50+</p>
              <p className="text-xs sm:text-sm lg:text-base text-white/90">Achievable Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;