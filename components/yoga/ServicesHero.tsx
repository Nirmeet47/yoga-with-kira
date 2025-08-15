'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-amaranth text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight text-gray-900 font-normal">
            <span className="text-[#A9D941] font-bold">Strength</span> in Stillness,&nbsp;
            <span className="block sm:inline">Power in <span className="text-[#A9D941] font-bold">Nourishment</span></span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="mt-6 inline-flex items-center bg-[#35402A] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#4a5739] transition-colors duration-200">
            Start Your Wellness Journey
            <span className="ml-3 flex items-center justify-center w-7 h-7 rounded-full bg-[#A9D941]">
              <ArrowRight className="w-4 h-4 text-[#35402A]" />
            </span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1fr] gap-8">

          {/* Left Large Card */}
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col">
            <div className="bg-[#A9D941] flex items-center justify-center h-[28rem] relative">
              <div className="relative w-48 h-[24rem]">
                <Image
                  src="/images/meditation-woman.jpg"
                  alt="Woman meditating"
                  fill
                  className="object-cover rounded-none"
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-amaranth text-2xl text-gray-900 mb-2">
                10+ Meditation Types
              </h2>
              <p className="text-gray-600 text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center text-sm font-medium text-gray-700">
                <div className="bg-[#A9D941] rounded-full w-2.5 h-2.5 mr-2"></div>
                Mon - Fri @ 07:00 - 07:30 AM
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex h-[13.5rem]">
              <div className="p-6 flex flex-col justify-center w-3/5">
                <h2 className="font-amaranth text-2xl text-gray-900 mb-2">
                  Basic to Advanced Yoga Instruction
                </h2>
                <p className="text-gray-600 text-base mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <div className="bg-[#A9D941] rounded-full w-2.5 h-2.5 mr-2"></div>
                  Mon - Fri @ 07:00 - 07:30 AM
                </div>
              </div>
              <div className="relative w-2/5">
                <Image
                  src="/images/yoga-pose.jpg"
                  alt="Yoga pose"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex h-[13.5rem]">
              <div className="p-6 flex flex-col justify-center w-3/5">
                <h2 className="font-amaranth text-2xl text-gray-900 mb-2">
                  Sound Healing & Sound Therapy
                </h2>
                <p className="text-gray-600 text-base mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <div className="bg-[#A9D941] rounded-full w-2.5 h-2.5 mr-2"></div>
                  Mon - Fri @ 07:00 - 07:30 AM
                </div>
              </div>
              <div className="relative w-2/5">
                <Image
                  src="/images/sound-healing.jpg"
                  alt="Sound healing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
