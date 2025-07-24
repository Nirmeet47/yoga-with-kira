'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-gray-800">
              <span className="text- [#A9D941]">kira</span>
              <div className="text-xs text-gray-500 -mt-1">Yoga</div>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text- [#A9D941] text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text- [#A9D941] text-sm font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text- [#A9D941] text-sm font-medium transition-colors">
              Yoga & Nutrition
            </a>
            <a href="#" className="text-gray-800 hover:text- [#A9D941] text-sm font-medium transition-colors">
              Testimonials
            </a>
            <a href="#" className="text-gray-800 hover:text- [#A9D941] text-sm font-medium transition-colors">
              Our Retreats
            </a>
          </div>

          {/* Right: Contact Button */}
          <div className="flex justify-center items-center  ">
                          <button className="bg-[#35402A]   text-white px-10 py-3 rounded-full  transition-colors duration-300">
                              Contact
                          </button>
                          <button className="bg-[#A9D941] border-3 border-[#35402A] text-white px-3 py-3 rounded-full transition-colors duration-300">
                              <ArrowRight className="w-5 h-5 text-[#35402A]" />
                          </button>
                      </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
