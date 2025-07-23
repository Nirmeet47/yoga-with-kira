import React from 'react';
import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="text-4xl font-light tracking-wide">
            <span className="text-sm uppercase tracking-wider block mb-1 text-white">
              Yoga with
            </span>
            <span className="text-5xl font-extralight">kira</span>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-white/30 mb-6"></div>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm font-light tracking-wide">
            <li>
              <Link 
                href="/" 
                className="hover:text-lime-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="hover:text-lime-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href="/yoga-nutrition" 
                className="hover:text-lime-400 transition-colors duration-200"
              >
                Yoga & Nutrition
              </Link>
            </li>
            <li>
              <Link 
                href="/testimonials" 
                className="hover:text-lime-400 transition-colors duration-200"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link 
                href="/retreats" 
                className="hover:text-lime-400 transition-colors duration-200"
              >
                Our Retreats
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:text-lime-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Another Horizontal Line */}
        <div className="border-t border-white/30 mb-6"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <Link 
            href="#" 
            className="group w-10 h-10 bg-green-800 border-2 border-white/70 hover:border-none rounded-full flex items-center justify-center transition-all duration-300 hover:bg-lime-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white group-hover:text-green-800 transition-colors duration-300" />
          </Link>
          
          <Link 
            href="#" 
            className="group w-10 h-10 bg-green-800 border-2 border-white/70 hover:border-none rounded-full flex items-center justify-center transition-all duration-300 hover:bg-lime-400"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-white group-hover:text-green-800 transition-colors duration-300" />
          </Link>
          
          <Link 
            href="#" 
            className="group w-10 h-10 bg-green-800 border-2 border-white/70 hover:border-none rounded-full flex items-center justify-center transition-all duration-300 hover:bg-lime-400"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white group-hover:text-green-800 transition-colors duration-300" />
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-white/80 leading-relaxed">
          <p className="mb-1">
            Copyright © 2025YogawithKira - All Rights Reserved
          </p>
          <p>
            Developed by dotNET IT Services Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;