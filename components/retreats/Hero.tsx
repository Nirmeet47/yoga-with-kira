'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        
        {/* Header Section */}
        <div className="text-center pt-8 pb-6">
          <h1 className="font-amaranth text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-3">
            <span className="text-[#A9D941]">Retreats</span> That Move You
            <br className="hidden sm:block" />
            Inside & Out
          </h1>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Main Image - Fixed responsiveness */}
        <div className="relative w-full h-40 sm:h-56 md:h-72 lg:h-80 xl:h-[23rem] rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/retreats/retreats-hero.jpg"
            alt="Yoga retreat in mountains with three women practicing warrior pose"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
