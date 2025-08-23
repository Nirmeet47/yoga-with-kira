'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#f7f7f7] overflow-hidden">
      {/* Decorative Top-Left Image */}
      <Image
        src="/images/contact/contact-hero-bg.png"
        alt="Decorative"
        width={160} // controls size on default screens
        height={160}
        className="absolute top-0 left-0 pointer-events-none select-none sm:w-24 md:w-32 lg:w-40 h-auto"
        priority
      />

      <div className="max-w-7xl mx-auto flex flex-col px-3 xs:px-4 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center pt-6 xs:pt-4 pb-3 xs:pb-2">
          <h1 className="font-amaranth text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 mb-3 xs:mb-2 px-2 text-center">
            <span className="text-[#A9D941] block">Stay Connected</span>
            <span className="text-black block">to the Practice</span>
          </h1>

          <p className="text-gray-700 text-sm xs:text-sm sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto px-4 xs:px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center items-center my-4 xs:my-3">
          <button className="bg-[#35402A] text-white px-6 xs:px-8 py-2.5 xs:py-3 rounded-full text-base xs:text-lg font-medium transition-colors duration-300 hover:bg-[#2a3221] flex-shrink-0">
            Start your Journey Today
          </button>
          <button className="bg-[#A9D941] border-3 border-[#35402A] px-2.5 xs:px-3 py-2.5 xs:py-3 rounded-full transition-colors duration-300 hover:bg-[#8bbf31] flex-shrink-0">
            <FaWhatsapp className="w-5 xs:w-6 h-5 xs:h-6 text-[#35402A]" />
          </button>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-48 xs:h-52 sm:h-56 md:h-72 lg:h-80 xl:h-[21rem] rounded-xl overflow-hidden mb-8 xs:mb-6 mx-2 xs:mx-0">
          <Image
            src="/images/retreats/retreats-hero.jpg"
            alt="Yoga meditation session"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 480px) 95vw, (max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>

        {/* Contact Section */}
        <div className="pt-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 text-center px-1">
            {/* Call Us */}
            <div>
              <div className="bg-[#A9D941] rounded-full w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Phone className="text-[#35402A] w-3 sm:w-5 h-3 sm:h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 text-xs sm:text-base">Call Us</h3>
              <p className="text-gray-600 text-xs sm:text-base">(205) 555-0100</p>
            </div>

            {/* Email Us */}
            <div>
              <div className="bg-[#A9D941] rounded-full w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Mail className="text-[#35402A] w-3 sm:w-5 h-3 sm:h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 text-xs sm:text-base">Email Us</h3>
              <p className="text-gray-600 text-xs sm:text-base break-all sm:break-normal">hey@yogawithkira.com</p>
            </div>

            {/* Location */}
            <div>
              <div className="bg-[#A9D941] rounded-full w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3 relative">
                <MapPin className="text-[#35402A] w-3 sm:w-5 h-3 sm:h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 text-xs sm:text-base">Visit Us</h3>
              <p className="text-gray-600 text-xs sm:text-base leading-tight sm:leading-relaxed">
                4140 Parker Rd, Allentown,<br />New Mexico 31134
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <div className="bg-[#A9D941] rounded-full w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Clock className="text-[#35402A] w-3 sm:w-5 h-3 sm:h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 text-xs sm:text-base">Business Hours</h3>
              <p className="text-gray-600 text-xs sm:text-base leading-tight sm:leading-relaxed">
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
