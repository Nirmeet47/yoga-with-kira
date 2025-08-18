'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <section className="bg-[#f7f7f5] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-8">

        {/* Contact Form */}
        <ContactForm />

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex items-stretch">
            {/* Content Left */}
            <div className="p-6 flex flex-col justify-center w-1/2">
              <h2 className="font-amaranth text-[1.8rem] md:text-[2rem] text-[#35402A] mb-2 font-medium">
                Free Diet Consultation
              </h2>
              <p className="text-gray-600 text-base mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center text-sm font-medium text-gray-700">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#A9D941] text-[#35402A] mr-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
                Mon - Fri @ 07:00 – 07:30 AM
              </div>
            </div>
            {/* Image Right */}
            <div className="relative w-1/2 h-56 md:h-auto flex items-center p-4">
              <Image
                src="/images/retreats/retreats-hero.jpg"
                alt="Be Fit"
                width={400}
                height={400}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex items-stretch">
            {/* Content Left */}
            <div className="p-6 flex flex-col justify-center w-1/2">
              <h2 className="font-amaranth text-[1.8rem] md:text-[2rem] text-[#35402A] mb-2 font-medium">
                Cleansing Techniques
              </h2>
              <p className="text-gray-600 text-base mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center text-sm font-medium text-gray-700">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#A9D941] text-[#35402A] mr-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
                Mon - Fri @ 07:00 – 07:30 AM
              </div>
            </div>
            {/* Image Right */}
            <div className="relative w-1/2 h-56 md:h-auto flex items-center p-4">
              <Image
                src="/images/retreats/retreats-hero.jpg"
                alt="Cleansing Techniques"
                width={400}
                height={400}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        {/* Button */}
<div className="mt-10 flex justify-center">
  <div className="flex items-center ">
    {/* Pill Button */}
    <button className="bg-[#35402A] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#4a5739] transition-colors duration-200">
      Start Your Wellness Journey
    </button>

    {/* Arrow Button Outside */}
    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#A9D941] border-3 border-[#4a5739] transition-colors duration-200">
      <ArrowRight className="w-5 h-5 text-[#35402A]" />
    </button>
  </div>
</div>

      </div>
    </section>
  );
};

export default ContactPage;