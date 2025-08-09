'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-50 shadow-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-[#A9D941]">kira</span>
              <div className="text-xs text-gray-500 -mt-1">Yoga</div>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Yoga & Nutrition', href: '/yoga-nutrition' },
              { name: 'Testimonials', href: '/testimonials' },
              { name: 'Our Retreats', href: '/retreats' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-800 text-sm font-medium px-4 py-2 transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right: Contact Button */}
          <div className="flex justify-center items-center space-x-2">
            <button className="bg-[#35402A] text-white px-10 py-3 rounded-full transition-colors duration-300">
              Contact
            </button>
            <button className="bg-[#A9D941] border border-[#35402A] text-white px-3 py-3 rounded-full transition-colors duration-300">
              <ArrowRight className="w-5 h-5 text-[#35402A]" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
