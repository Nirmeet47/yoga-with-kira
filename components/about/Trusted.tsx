'use client';
import Image from 'next/image';

export default function Trusted() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="text-center pt-10 pb-6">
          <h2 className="font-amaranth font-medium text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 mb-6">
            <span className="text-[#A9D941] ">Trusted</span> by Thousands,
            <br className="hidden sm:block" />
            Recognized by Many
          </h2>
          <p className="text-gray-700 text-md leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Testimonial Image */}
        <div className="relative w-full h-68 sm:h-86 md:h-100 lg:h-[28rem] rounded-xl overflow-hidden shadow-md mb-12">
          <Image
            src="/images/about/trusted.png"
            alt="Happy Customers"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority
          />
        </div>

      {/* CTA Section */}
<div className="bg-[#35402A] rounded-4xl py-8 px-6 sm:px-12 md:px-16 text-center">
  {/* Heading */}
  <h3 className="font-amaranth text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-3 leading-snug">
    Your <span className="text-[#A9D941]">First</span> Class Is On Us
  </h3>

  {/* Subheading */}
  <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
    Experience the calm, clarity, and connection of yoga — completely free.  
    <br />
    Step onto the mat and discover what&apos;s possible.
  </p>

  {/* CTA Button Group */}
  <div className="flex flex-col sm:flex-row items-center justify-center">
    {/* Main Button */}
    <button className="bg-[#A9D941] text-[#35402A] font-semibold px-8 py-3 rounded-full text-lg hover:bg-lime-300 transition-all">
      Try a Free Class
    </button>

    {/* Arrow Button */}
    <button className="bg-white border-4 border-[#A9D941] p-3 rounded-full transition hover:bg-gray-100">
      <svg
        className="w-6 h-6 text-[#35402A]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>


        {/* Bottom spacing */}
        <div className="h-12" />
      </div>
    </section>
  );
}
