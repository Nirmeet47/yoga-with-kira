'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, User,  HeartHandshake, Layers, Smile } from 'lucide-react';
import Navbar from './Navbar';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <div className="relative w-full h-[calc(100vh-81px)] flex items-center justify-center p-8 gap-2.5">
        {/* Background Image */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src="/images/home/landing-bg.jpg"
            alt="Yoga background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="font-amaranth text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
              Welcome to Yoga 
              <br />
              <span className='font-amaranth'>with Kira</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center items-center   ">
                <button className="bg-[#35402A]   text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300">
                    Start your Journey Today
                </button>
                <button className="bg-[#A9D941] border-3 border-[#35402A] text-white px-3 py-3 rounded-full transition-colors duration-300">
                    <ArrowRight className="w-6 h-6 text-[#35402A]" />
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Personalized Guidance */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#A9D941] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Guidance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Mindful Practices */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4   rounded-full flex items-center justify-center  ">
                <div className="w-8 h-8 bg-[#A9D941] rounded-full flex items-center justify-center">
                  < HeartHandshake className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mindful Practices</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Diverse Classes */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4   rounded-full flex items-center justify-center  ">
                <div className="w-8 h-8 bg-[#A9D941] rounded-full flex items-center justify-center">
                  <Layers className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Diverse Classes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Relaxing Atmosphere */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4   rounded-full flex items-center justify-center  ">
                <div className="w-8 h-8 bg-[#A9D941] rounded-full flex items-center justify-center">
                  <Smile className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Relaxing Atmosphere</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
