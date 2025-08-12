'use client'

import { useState, useEffect } from 'react'

export default function RetreatCards() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // We repeat manually so each card has its own image field (not from shared array)
  const retreatCards = [
    {
      image: '/images/retreats/retreats-hero.jpg',
      date: 'October 25, 2019',
      title: 'Mountain Yoga Retreat'
    },
    {
      image: '/images/retreats/retreats-hero.jpg',
      date: 'November 15, 2019',
      title: 'Beach Meditation'
    },
    {
      image: '/images/retreats/retreats-hero.jpg',
      date: 'December 10, 2019',
      title: 'Forest Wellness'
    },
    {
      image: '/images/retreats/retreats-hero.jpg',
      date: 'January 20, 2020',
      title: 'Desert Mindfulness'
    },
    {
      image: '/images/retreats/retreats-hero.jpg',
      date: 'February 14, 2020',
      title: 'Lake Serenity'
    }
  ]

  // Duplicate for smooth infinite scroll
  const extendedData = [...retreatCards, ...retreatCards, ...retreatCards]

  return (
    <section className="bg-[#f7f7f5] flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-6xl">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {extendedData.map((retreat, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 px-4"
              >
                <div
                  className="relative rounded-xl overflow-hidden mb-4 shadow-lg"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={retreat.image}
                    alt={retreat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-500">{retreat.date}</p>
                  <h3 className="text-lg font-medium text-gray-900">{retreat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
