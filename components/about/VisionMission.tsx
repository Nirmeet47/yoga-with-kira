'use client';

import React from 'react';
import Image from 'next/image';
import { Lightbulb, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/images/about/vision1.png"
            alt="Background pattern"
            width={580}
            height={580}
            className="object-contain opacity-70 pointer-events-none"
          />
        </div>

        {/* Yoga Image */}
        <div className="relative flex justify-center items-center">
          <Image
            src="/images/about/vision2.png"
            alt="Yoga pose"
            width={750}
            height={750}
            className="relative z-10 object-contain"
          />
        </div>

        {/* Vision Box (rectangular, top-right) */}
        <div className="absolute top-0 right-0 w-[360px] sm:w-[420px] bg-white rounded-lg shadow-lg p-5 z-20">
          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            We envision a world where yoga is more than a practice — it’s a way of life. A world where breath,
            movement, and stillness come together to foster conscious communities, compassionate living, and a deep
            connection to self, others, and the planet.
          </p>
          <div className="flex items-center justify-between">
            <h3 className="font-amaranth text-lg sm:text-xl">
              Our <span className="text-[#A9D941]">Vision</span>
            </h3>
            <div className="bg-[#A9D941] rounded-full p-2">
              <Lightbulb className="w-5 h-5 text-[#35402A]" />
            </div>
          </div>
        </div>

        {/* Mission Box (rectangular, bottom-left) */}
        <div className="absolute bottom-0 left-0 w-[380px] sm:w-[460px] bg-[#35402A] rounded-lg shadow-lg p-5 z-20 text-white">
          <p className="text-sm sm:text-base mb-4 leading-relaxed">
            To create a nurturing space where individuals of all backgrounds can explore the transformative power
            of yoga — cultivating strength, balance, and inner peace. We are committed to guiding every practitioner
            toward greater self-awareness, mindful living, and holistic well-being.
          </p>
          <div className="flex items-center justify-between">
            <h3 className="font-amaranth text-lg sm:text-xl">
              Our <span className="text-[#A9D941]">Mission</span>
            </h3>
            <div className="bg-[#A9D941] rounded-full p-2">
              <Target className="w-5 h-5 text-[#35402A]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
