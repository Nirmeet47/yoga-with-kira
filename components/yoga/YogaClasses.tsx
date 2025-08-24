'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const YogaClasses: React.FC = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-6 xl:px-8">

        {/* CTA Section */}
        <div className="bg-[#32412D] text-white rounded-[40px] py-12 px-6 sm:px-16 text-center mb-16">
          <h3 className="font-amaranth text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] leading-tight mb-4">
            Your <span className="text-[#A9D941] font-bold">First</span> Class Is On Us
          </h3>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-white/90">
            Experience the calm, clarity, and connection of yoga — completely free.
            <br />
            Step onto the mat and discover what&apos;s possible.
          </p>

          <div className="flex justify-center items-center space-x-3">
            {/* Pill Button */}
            <button className="bg-[#A9D941] text-black font-medium px-8 py-3 rounded-full hover:bg-lime-300 transition text-base sm:text-lg">
              Try a Free Class
            </button>
            {/* Arrow Button Outside */}
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#A9D941] hover:bg-gray-100 transition">
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Column → Two Cards stacked */}
          <div className="flex flex-col gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-1">
              <div className="p-6 flex flex-col justify-center w-[60%]">
                <h2 className="font-amaranth text-2xl md:text-[2rem] text-[#32412D] mb-2 font-medium leading-snug">
                  Therapy Yoga for Medical Conditions
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <div className="bg-[#A9D941] rounded-full w-6 h-6 flex items-center justify-center text-xs text-black mr-2">
                    🧘
                  </div>
                  Mon - Fri @ 07:00 - 07:30 AM
                </div>
              </div>
              <div className="relative w-[40%] min-h-[14rem] flex items-center p-4">
                <Image
                  src="/images/retreats/retreats-hero.jpg"
                  alt="Therapy Yoga"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-1">
              <div className="p-6 flex flex-col justify-center w-[60%]">
                <h2 className="font-amaranth text-2xl md:text-[2rem] text-[#32412D] mb-2 font-medium leading-snug">
                  12 Pranayama Techniques
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <div className="bg-[#A9D941] rounded-full w-6 h-6 flex items-center justify-center text-xs text-black mr-2">
                    🧘
                  </div>
                  Mon - Fri @ 07:00 - 07:30 AM
                </div>
              </div>
              <div className="relative w-[40%] min-h-[14rem] flex items-center p-4">
                <Image
                  src="/images/retreats/retreats-hero.jpg"
                  alt="Pranayama Techniques"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column → Large Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
            <div className="relative flex-1 min-h-[28rem] flex items-center p-4">
              <Image
                src="/images/retreats/retreats-hero.jpg"
                alt="Goal-based exercise"
                width={600}
                height={600}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h2 className="font-amaranth text-2xl md:text-[2rem] text-[#32412D] mb-2 font-medium leading-snug">
                Goal-based exercise programs
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center text-sm font-medium text-gray-700">
                <div className="bg-[#A9D941] rounded-full w-6 h-6 flex items-center justify-center text-xs text-black mr-2">
                  🧘
                </div>
                Mon - Fri @ 07:00 - 07:30 AM
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YogaClasses;
