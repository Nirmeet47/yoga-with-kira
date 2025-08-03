'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#35402A] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-4xl font-light tracking-wide">
            <span className="text-sm uppercase tracking-wider block mb-1 text-white">
              Yoga with
            </span>
            <span className="text-5xl font-extralight">kira</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-6" />

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm font-light tracking-wide">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Yoga & Nutrition', href: '/yoga-nutrition' },
              { name: 'Testimonials', href: '/testimonials' },
              { name: 'Our Retreats', href: '/retreats' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#A9D941] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="border-t border-white/30 mb-6" />

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          {[Linkedin, Facebook, Instagram].map((Icon, idx) => (
            <Link
              key={idx}
              href="#"
              className="group w-10 h-10 bg-[#35402A] border-2 border-white/70 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#A9D941] hover:border-transparent"
              aria-label={`Social icon ${idx}`}
            >
              <Icon className="w-5 h-5 text-white group-hover:text-[#35402A] transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-white/80 leading-relaxed">
          <p className="mb-1">
            Copyright © 2025 YogawithKira - All Rights Reserved
          </p>
          <p>Developed by botNET IT Services Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
