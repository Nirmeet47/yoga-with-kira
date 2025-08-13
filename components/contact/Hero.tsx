'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto flex flex-col px-2 sm:px-4 lg:px-6 xl:px-8">
        
        {/* Header Section */}
        <div className="text-center pt-4 pb-2">
          <h1 className="font-amaranth text-3xl md:text-4xl lg:text-5xl  leading-tight text-gray-900 mb-2">
            <span className="text-[#A9D941]">Stay Connected</span>
            <br className="hidden sm:block" />
            <span className="text-black ">to the Practice</span>
          </h1>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center my-3">
          <a
            href="#"
            className="inline-flex items-center bg-[#35402A] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#4a5739] transition-colors duration-200"
          >
            Connect with us on <span className="ml-1 font-semibold">WhatsApp</span>
            <ArrowRight className="ml-2 text-[#A9D941] w-4 h-4" />
          </a>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-40 sm:h-56 md:h-72 lg:h-80 xl:h-[23rem] rounded-xl overflow-hidden mb-6">
          <Image
            src="/images/retreats/retreats-hero.jpg"
            alt="Yoga meditation session"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>

        {/* Contact Section */}
        <div className="pt-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Call Us */}
            <div>
              <div className="bg-[#A9D941] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Phone className="text-[#35402A] w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Call Us</h3>
              <p className="text-gray-600">(205) 555-0100</p>
            </div>

            {/* Email Us */}
            <div>
              <div className="bg-[#A9D941] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Mail className="text-[#35402A] w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Email Us</h3>
              <p className="text-gray-600">hey@yogawithkira.com</p>
            </div>

            {/* Location */}
            <div>
              <div className="bg-[#A9D941] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 relative">
                <MapPin className="text-[#35402A] w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Visit Us</h3>
              <p className="text-gray-600">
                4140 Parker Rd, Allentown,<br />New Mexico 31134
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <div className="bg-[#A9D941] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Clock className="text-[#35402A] w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Business Hours</h3>
              <p className="text-gray-600">
                Mon-Sat: 08:30AM – 01:00PM<br />
                Sun: 10:00AM – 12:00PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
