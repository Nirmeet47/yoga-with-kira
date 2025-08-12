'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const retreatData = [
  {
    id: 1,
    image: '/images/retreats/retreats-hero.jpg',
    destination: 'RETREAT 1',
    description: 'Relax and unwind at our serene retreat location.'
  },
  {
    id: 2,
    image: '/images/retreats/retreats-hero.jpg',
    destination: 'RETREAT 2',
    description: 'Find peace with yoga sessions and meditation.'
  },
  {
    id: 3,
    image: '/images/retreats/retreats-hero.jpg',
    destination: 'RETREAT 3',
    description: 'Reconnect with nature in a rejuvenating environment.'
  }
]

export default function NextRetreatsComponent() {
  const extendedData = [...retreatData, ...retreatData, ...retreatData]
  const [currentIndex, setCurrentIndex] = useState(retreatData.length)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const centerIndex = Math.floor(currentIndex) % retreatData.length
  const currentRetreat = retreatData[centerIndex]

  return (
    <div className="bg-[#f7f7f5]">
      {/* Header */}
      <div className="text-center py-12 px-6">
        <h2 className="font-amaranth text-4xl md:text-5xl font-light mb-6">
          <span className="text-[#A9D941] font-medium">Next</span>{' '}
          <span className="text-black">Retreats</span>
        </h2>
        <div className="max-w-full mx-auto text-gray-600 leading-relaxed">
          <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="whitespace-nowrap overflow-hidden text-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden h-[450px]">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{
            transform: `translateX(calc(-${currentIndex * 50}vw + 25vw))`,
          }}
        >
          {extendedData.map((retreat, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-full px-3"
              style={{ width: '50vw' }}
            >
              <img
                src={retreat.image}
                alt={retreat.destination}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Destination Info */}
      <div className=" px-6 py-12 text-center">
        <p className="font-amaranth text-black mb-6 text-xl">
          Our next yoga travel destination is{' '}
          <span className="text-[#A9D941] font-medium">
            {currentRetreat.destination}
          </span>
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center ">
          <button className="bg-[#35402A] text-white px-8 py-2 rounded-full text-lg font-medium transition-colors duration-300">
            Know more
          </button>
          <button className="bg-[#A9D941] border-4 border-[#35402A] px-3 py-3 rounded-full transition-colors duration-300">
            <ArrowRight className="w-4 h-4 text-[#35402A]" />
          </button>
        </div>
      </div>
    </div>
  )
}
