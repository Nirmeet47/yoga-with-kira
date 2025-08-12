'use client'

import { useState, useEffect } from 'react'

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

  // Start from the "middle" set so an image is already on the left
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
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          <span className="text-green-500 font-medium">Next</span>
          <span className="text-gray-800"> Retreats</span>
        </h2>
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

      {/* Info */}
      <div className="px-6 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-green-500 mb-4 tracking-wide">
          {currentRetreat.destination}
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          {currentRetreat.description}
        </p>
      </div>
    </div>
  )
}
