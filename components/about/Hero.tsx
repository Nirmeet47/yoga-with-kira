'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col px-6 sm:px-8 lg:px-12 py-12">
        {/* Top: Text part */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left: Heading */}
          <div>
            <h1 className="font-amaranth text-3xl sm:text-4xl md:text-5xl font-light leading-snug text-gray-900">
              Our Journey from <br />
              Yoga to <span className="text-[#A9D941]">Kira</span>
            </h1>
          </div>

          {/* Right: Paragraph + Button */}
          <div>
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
           <div className="flex ">
                         <div className="flex items-center">
                           <button
                             type="submit"
                             className="bg-[#2E4023] hover:bg-[#24361b] text-white px-8 py-3 rounded-full text-sm font-medium transition"
                           >
                             Book an session
                           </button>
                           <button
                             type="button"
                             className="bg-[#8DD82E] border-[#35402A] border-3  p-3 rounded-full transition"
                           >
                             <ArrowRight className="w-4 h-4 stroke-black" />
                           </button>
                         </div>
                       </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-88 rounded-2xl overflow-hidden mt-10">
          <Image
            src="/images/home/about-kira.jpg"
            alt="Yoga session"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* New Section */}
        <div className="pt-16">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-gray-900 font-amaranth text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Where Ancient Wisdom Meets Modern Life for Healing,
              <br className="hidden sm:block" /> Balance, and Presence.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section - Full width with different container */}
      <div className="mt-10 bg-[#35402A] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20 text-center py-12 px-6 sm:px-8 lg:px-12">
          <div className="px-4">
            <p className="text-4xl font-semibold">21+</p>
            <p className="text-sm mt-1">Yoga Style Workout</p>
          </div>
          <div className="px-4">
            <p className="text-4xl font-semibold">10+</p>
            <p className="text-sm mt-1">Years of Experience</p>
          </div>
          <div className="px-4">
            <p className="text-4xl font-semibold">5,000+</p>
            <p className="text-sm mt-1">Successful sessions</p>
          </div>
          <div className="px-4">
            <p className="text-4xl font-semibold">50+</p>
            <p className="text-sm mt-1">Achievable Events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;