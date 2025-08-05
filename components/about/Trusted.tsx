'use client';
import Image from 'next/image';

export default function Trusted() {
  return (
    <section className="bg-[#f7f7f7] py-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          <span className="text-green-600 font-bold">Trusted</span> by Thousands,<br className="hidden sm:block" />
          Recognized by Many
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>

        {/* Testimonial Image */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <Image
            src="/images/about/trusted.png"
            alt="Happy Customers"
            fill
            className="object-cover"
          />
        </div>

        {/* CTA Section - same width as image */}
        <div className="mt-16 mx-auto max-w-[1240px]">
          <div className="bg-[#32412d] text-white rounded-[40px] py-10 px-6 sm:px-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Your <span className="text-lime-400 font-bold">First</span> Class Is On Us
            </h3>
            <p className="text-sm sm:text-base max-w-xl mx-auto mb-6">
              Experience the calm, clarity, and connection of yoga — completely free.
              <br />
              Step onto the mat and discover what's possible.
            </p>

            <button className="mt-2 inline-flex items-center bg-lime-400 text-black font-medium px-6 py-2 rounded-full hover:bg-lime-300 transition">
              Try a Free Class
              <span className="ml-2 bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Add spacing at bottom */}
      <div className="h-12" />
    </section>
  );
}
