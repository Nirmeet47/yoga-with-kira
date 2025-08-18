'use client';

import Image from 'next/image';

interface YogaGalleryProps {
  className?: string;
}

export default function YogaStyles({ className = '' }: YogaGalleryProps) {
  const images = [
    { id: 1, alt: 'Yoga pose 1', src: '/images/home/yoga-off-1.jpg' },
    { id: 2, alt: 'Yoga pose 2', src: '/images/home/yoga-off-2.jpg' },
    { id: 3, alt: 'Yoga pose 3', src: '/images/home/yoga-off-3.jpg' },
    { id: 4, alt: 'Yoga pose 4', src: '/images/home/yoga-off-4.jpg' },
    { id: 5, alt: 'Yoga pose 5', src: '/images/home/yoga-off-5.jpg' },
    { id: 6, alt: 'Yoga pose 6', src: '/images/home/yoga-off-6.jpg' },
  ];

  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className={`relative w-full overflow-hidden bg-gray-50 ${className}`}>
      {/* Heading */}
      <div className="text-center py-8">
        <h2 className="text-5xl font-amaranth font-medium text-gray-900">
          Styles of Yoga
        </h2>
        <p className="mt-4 text-md text-gray-500 max-w-5xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur sequi iure autem eos nisi inventore ratione corrupti!
        </p>
      </div>

      {/* Gallery container */}
      <div className="flex gap-4 py-6 mb-8">
        <div className="flex gap-4 animate-scroll">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${Math.floor(index / 6)}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                style={{ width: '400px', height: '276px' }} // 15% taller
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={276}
                  className="object-cover w-full h-full block transition-transform duration-300 group-hover:scale-110"
                />
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
            transform: translateX(-${320 * images.length + 16 * (images.length - 1)}px);
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
