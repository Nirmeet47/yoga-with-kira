'use client'

import { useState, useEffect } from 'react'

const retreatData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop',
    destination: 'DHARAMSHALA, INDIA',
    description: 'Experience tranquility in the foothills of the Himalayas with authentic yoga practices and meditation sessions surrounded by pristine mountain landscapes.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&h=500&fit=crop',
    destination: 'RISHIKESH, INDIA',
    description: 'Discover inner peace at the yoga capital of the world, where ancient wisdom meets modern wellness practices along the sacred Ganges River.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=500&fit=crop',
    destination: 'UBUD, BALI',
    description: 'Immerse yourself in Balinese culture with healing ceremonies, rice terrace meditation, and transformative wellness experiences.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    destination: 'COSTA RICA',
    description: 'Reconnect with nature in tropical paradise through jungle yoga sessions, wildlife encounters, and sustainable living practices.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=500&fit=crop',
    destination: 'NEPAL MOUNTAINS',
    description: 'Find spiritual awakening in the shadow of the world\'s highest peaks with traditional meditation and breathwork practices.'
  }
]

export default function NextRetreatsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Duplicate array for infinite scroll
  const extendedData = [...retreatData, ...retreatData, ...retreatData]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  // Get current destination info based on center image
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
        <div className="max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      {/* Full width - images touch desktop edges, center fully visible */}
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

      {/* Bottom Content */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Destination Info */}
          <div className="text-center mb-8">
            <p className="text-gray-700 mb-2">Our next yoga travel destination is</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-green-500 mb-4 tracking-wide">
              {currentRetreat.destination}
            </h3>
            <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              {currentRetreat.description}
            </p>
          </div>

          {/* Know More Button */}
          <div className="text-center">
            <button className="inline-flex items-center bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <span className="mr-2">Know more</span>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center ml-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}