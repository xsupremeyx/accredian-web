'use client'
import { useState } from 'react'
import Image from 'next/image'
import EnquireModal from './EnquireModal'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-6 bg-white">
        <div
          className="max-w-7xl mx-auto rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#EFF6FF' }}
        >
          {/* Mobile: image on top, text below */}
          <div className="flex flex-col md:flex-row">
            {/* Mobile image (top) */}
            <div className="md:hidden w-full flex justify-center pt-6 px-4">
              <div className="relative w-full max-w-sm h-64">
                <Image
                  src="/images/hero-professionals.png"
                  alt="Enterprise professionals"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 px-6 md:px-10 py-8 md:py-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Next-Gen{' '}
                <span className="text-blue-600">Expertise</span>{' '}
                For Your{' '}
                <span className="text-blue-600">Enterprise</span>
              </h1>
              <p className="text-gray-700 text-base md:text-lg mb-6">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* Checkmarks — desktop: 1 row, mobile: 2x2 grid */}
              <div className="hidden md:flex flex-row gap-6 mb-7">
                {['Tailored Solutions', 'Industry Insights', 'Expert Guidance'].map(item => (
                  <span key={item} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <span className="text-green-500 text-lg">✔</span> {item}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 md:hidden mb-7">
                {['Tailored Solutions', 'Industry Insights', 'Expert Guidance', 'Measurable Impact'].map(item => (
                  <span key={item} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <span className="text-green-500 text-lg">✔</span> {item}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full md:w-auto md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors"
              >
                Enquire Now
              </button>
            </div>

            {/* Desktop image (right) */}
            <div className="hidden md:flex w-2/5 items-end justify-center pr-4">
              <div className="relative w-full h-80">
                <Image
                  src="/images/hero-professionals.png"
                  alt="Enterprise professionals"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
