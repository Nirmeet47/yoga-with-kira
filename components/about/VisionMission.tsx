'use client';

import React from 'react';
import Image from 'next/image';
import { Lightbulb, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section className="relative bg-[#f7f7f7] py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile & Tablet Layout */}
        <div className="block xl:hidden">

          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 mx-auto max-w-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-amaranth text-xl sm:text-2xl text-[#35402A]">
                Our <span className="text-[#A9D941]">Vision</span>
              </h3>
              <div className="bg-[#A9D941] rounded-full p-2 flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-[#35402A]" />
              </div>
            </div>
            <p className="text-[#35402A] text-sm sm:text-base leading-relaxed">
              We envision a world where yoga is more than a practice — it&apos;s a way of life. 
              A world where breath, movement, and stillness come together to foster conscious 
              communities, compassionate living, and a deep connection to self, others, and the planet.
            </p>
          </div>

          {/* Central Images */}
          <div className="relative flex justify-center items-center mb-16 min-h-[320px] sm:min-h-[400px]">
            <Image
              src="/images/about/vision1.png"
              alt="Background pattern"
              fill
              className="object-contain opacity-70 pointer-events-none bg-rotate"
              sizes="100vw"
            />
            <Image
              src="/images/about/vision2.png"
              alt="Yoga pose"
              width={300}
              height={300}
              className="relative z-10 object-contain w-[70%] max-w-xs sm:max-w-sm"
              sizes="(max-width: 640px) 250px, 400px"
            />
          </div>

          {/* Mission Card */}
          <div className="bg-[#35402A] rounded-lg shadow-lg p-6 text-white mx-auto max-w-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-amaranth text-xl sm:text-2xl text-white">
                Our <span className="text-[#A9D941]">Mission</span>
              </h3>
              <div className="bg-[#A9D941] rounded-full p-2 flex-shrink-0">
                <Target className="w-5 h-5 text-[#35402A]" />
              </div>
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              To create a nurturing space where individuals of all backgrounds can explore 
              the transformative power of yoga — cultivating strength, balance, and inner peace. 
              We are committed to guiding every practitioner toward greater self-awareness, 
              mindful living, and holistic well-being.
            </p>
          </div>

        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:block relative">
          <div className="relative min-h-[800px] flex justify-center items-center">

            {/* Background Pattern */}
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src="/images/about/vision1.png"
                alt="Background pattern"
                width={580}
                height={750} 
                className="object-contain opacity-70 pointer-events-none bg-rotate"
              />
            </div>

            {/* Central Yoga Image */}
            <div className="relative z-10">
              <Image
                src="/images/about/vision2.png"
                alt="Yoga pose"
                width={750}
                height={750}
                className="object-contain"
              />
            </div>

            {/* Vision Box (move more right) */}
            <div className="absolute top-8 right-0 2xl:right-4 w-[400px] 2xl:w-[460px] h-auto bg-white rounded-lg shadow-lg p-4 z-20 transform hover:scale-105 transition-transform duration-300">
              <p className="text-[#35402A] text-sm 2xl:text-base mb-4 leading-relaxed">
                We envision a world where yoga is more than a practice — it&apos;s a way of life. 
                A world where breath, movement, and stillness come together to foster conscious 
                communities, compassionate living, and a deep connection to self, others, and the planet.
              </p>
              <div className="flex items-center justify-between">
                <h3 className="text-[#35402A] font-amaranth text-xl 2xl:text-2xl">
                  Our <span className="text-[#A9D941]">Vision</span>
                </h3>
                <div className="bg-[#A9D941] rounded-full p-2">
                  <Lightbulb className="w-5 h-5 text-[#35402A]" />
                </div>
              </div>
            </div>

            {/* Mission Box (move more left) */}
            <div className="absolute bottom-8 left-0 2xl:left-4 w-[420px] 2xl:w-[480px] h-auto bg-[#35402A] rounded-lg shadow-lg p-4 z-20 text-white transform hover:scale-105 transition-transform duration-300">
              <p className="text-white text-sm 2xl:text-base mb-4 leading-relaxed">
                To create a nurturing space where individuals of all backgrounds can explore 
                the transformative power of yoga — cultivating strength, balance, and inner peace. 
                We are committed to guiding every practitioner toward greater self-awareness, 
                mindful living, and holistic well-being.
              </p>
              <div className="flex items-center justify-between">
                <h3 className="font-amaranth text-xl 2xl:text-2xl text-white">
                  Our <span className="text-[#A9D941]">Mission</span>
                </h3>
                <div className="bg-[#A9D941] rounded-full p-2">
                  <Target className="w-5 h-5 text-[#35402A]" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;
