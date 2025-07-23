'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface YogaGalleryProps {
  className?: string;
}

export default function YogaGallery({ className = '' }: YogaGalleryProps) {
  const images = [
    { id: 1, height: 280, offsetY: 0, alt: 'Yoga pose 1' },
    { id: 2, height: 240, offsetY: 20, alt: 'Yoga pose 2' },
    { id: 3, height: 320, offsetY: -10, alt: 'Yoga pose 3' },
    { id: 4, height: 260, offsetY: 15, alt: 'Yoga pose 4' },
    { id: 5, height: 300, offsetY: -5, alt: 'Yoga pose 5' },
    { id: 6, height: 250, offsetY: 25, alt: 'Yoga pose 6' },
  ];

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className={`relative w-full overflow-hidden bg-gray-50 ${className}`}>
      {/* Gallery container */}
      <div className="flex gap-4 py-6">
        {/* Scrolling wrapper */}
        <div className="flex gap-4 animate-scroll">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${Math.floor(index / 6)}`}
              className="flex-shrink-0 group cursor-pointer"
              style={{ marginTop: `${image.offsetY}px` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src="/images/yoga-with-kira.jpeg"
                  alt={image.alt}
                  width={200}
                  height={image.height}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  style={{ width: '200px', height: `${image.height}px` }}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${200 * images.length + 16 * (images.length - 1)}px);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}