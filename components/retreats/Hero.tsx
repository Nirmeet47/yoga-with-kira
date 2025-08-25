'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 xl:px-12 ">
        
        {/* Header Section */}
        <div className="text-center pt-6 pb-4">
          <h1 className="font-amaranth text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-6">
            <span className="text-[#A9D941]">Retreats</span> That Move You
            <br className="hidden sm:block" />
            Inside & Out
          </h1>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-40 sm:h-60 md:h-76 lg:h-84 xl:h-[25rem] rounded-xl overflow-hidden mb-5">
          <Image
            src="/images/retreats/retreats-hero.jpg"
            alt="Yoga retreat in mountains with three women practicing warrior pose"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>

        {/* Bottom Text with Decorative SVG */}
        <div className="flex flex-col items-center text-center gap-3">
          {/* Decorative Flower-like SVG */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#35402A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-1"
          >
            <circle cx="12" cy="12" r="3" stroke="#A9D941" />
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <path d="M4.93 4.93l2.83 2.83" />
            <path d="M16.24 16.24l2.83 2.83" />
            <path d="M4.93 19.07l2.83-2.83" />
            <path d="M16.24 7.76l2.83-2.83" />
          </svg>

          {/* Styled Quote */}
          <p className="font-amaranth text-lg sm:text-xl lg:text-2xl italic text-[#35402A] leading-relaxed font-medium max-w-3xl">
            In <span className="text-[#A9D941]">nature</span>, we return to stillness.
            <br />
            With each breath, we root into the earth,
            <br />
            stretch toward the sky, and flow with the rhythm of life.
            <br />
            <span className="text-[#A9D941]">Yoga</span> in nature isn’t escape — it’s homecoming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
