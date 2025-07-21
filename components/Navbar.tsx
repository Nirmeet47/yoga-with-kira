'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-green-600">kira</span>
              <div className="text-xs text-gray-500 -mt-1">Yoga</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-green-600 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 text-sm font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 text-sm font-medium transition-colors">
              Yoga & Nutrition
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 text-sm font-medium transition-colors">
              Testimonials
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 text-sm font-medium transition-colors">
              Our Retreats
            </a>
          </div>

          {/* Contact Button */}
          <div className="flex items-center">
            <button className="bg-green-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition">
              Contact
            </button>
            <button className="bg-lime-400 hover:bg-lime-500 text-green-900 p-2 rounded-full transition">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;