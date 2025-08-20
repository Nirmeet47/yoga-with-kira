import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left SVG */}
        <Image
          src="/images/home/about-bg-1.png"
          alt="decorative bg 1"
          width={200}
          height={200}
          className="absolute top-0 left-0 w-[200px] lg:w-[220px] "
        />
        {/* Bottom Right SVG */}
        <Image
          src="/images/home/about-bg-2.png"
          alt="decorative bg 2"
          width={200}
          height={200}
          className="absolute bottom-0 right-0 w-[200px] lg:w-[220px] "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden ">
              <Image
                src="/images/home/about-kira.jpg"
                alt="Yoga practice outdoors"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="font-amaranth text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                About Yoga with{' '}
                <span className="font-amaranth text-[#A9D941] font-medium">
                  Kira
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#35402A] text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#A9D941] rounded-full"></div>
                  Certified Trainers
                </span>
                <span className="bg-[#35402A] text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#A9D941] rounded-full"></div>
                  Holistic Wellness
                </span>
                <span className="bg-[#35402A] text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#A9D941] rounded-full"></div>
                  Diverse Classes
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-[#35402A] text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#A9D941] rounded-full"></div>
                  Mindful Practices
                </span>
                <span className="bg-[#35402A] text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#A9D941] rounded-full"></div>
                  Certified Trainers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
