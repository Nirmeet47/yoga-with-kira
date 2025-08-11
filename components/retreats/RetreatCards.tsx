'use client'

import { useState, useEffect } from 'react'

const retreatData = [
  { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', date: 'October 25, 2019', title: 'Mountain Yoga Retreat' },
  { id: 2, image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop', date: 'November 15, 2019', title: 'Beach Meditation' },
  { id: 3, image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop', date: 'December 10, 2019', title: 'Forest Wellness' },
  { id: 4, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', date: 'January 20, 2020', title: 'Desert Mindfulness' },
  { id: 5, image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop', date: 'February 14, 2020', title: 'Lake Serenity' }
]

export default function RetreatCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Duplicate array for infinite scroll
  const extendedData = [...retreatData, ...retreatData, ...retreatData]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gray-50 flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-6xl">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100/3)}%)`,
            }}
          >
            {extendedData.map((retreat, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 px-4"
              >
                <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg" style={{ aspectRatio: '4/3' }}>
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