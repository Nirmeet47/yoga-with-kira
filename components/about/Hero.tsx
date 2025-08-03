'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto flex flex-col px-4 sm:px-6 md:h-[calc(100vh-81px)]">
        {/* For mobile: Stack in natural reading order */}
        <div className="flex-1 flex flex-col md:hidden py-10 gap-6">
          <h1 className="font-amaranth text-3xl sm:text-4xl font-light leading-snug text-gray-900 text-center">
            Our Journey from <br />
            Yoga to <span className="text-[#A9D941]">Kira</span>
          </h1>

          <div className="relative w-full h-48 rounded-2xl overflow-hidden">
            <Image
              src="/images/home/about-kira.jpg"
              alt="Yoga session"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="text-center">
            <p className="text-gray-700 text-sm sm:text-base  leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#35402A] text-white px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300">
                Book a Session
              </button>
              <button className="bg-[#A9D941] text-white p-2 sm:p-3 rounded-full transition-colors duration-300">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#35402A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop / Tablet layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 flex-1 items-center gap-10">
          {/* Left: Heading */}
          <div>
            <h1 className="font-amaranth text-4xl md:text-5xl font-light leading-snug text-gray-900">
              Our Journey from <br />
              Yoga to <span className="text-[#A9D941]">Kira</span>
            </h1>
          </div>

          {/* Right: Paragraph + Button */}
          <div>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center ">
              <button className="bg-[#35402A] text-white px-6 py-3 rounded-full text-base font-medium transition-colors duration-300">
                Book a Session
              </button>
              <button className="bg-[#A9D941] text-white p-3 border-3 border-[#35402A] rounded-full transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-[#35402A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop image at the bottom */}
        <div className="hidden md:block relative w-full h-80 lg:h-94 rounded-3xl overflow-hidden mb-6">
          <Image
            src="/images/home/about-kira.jpg"
            alt="Yoga session"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
