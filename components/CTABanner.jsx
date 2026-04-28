'use client'
import { useState } from 'react'
import EnquireModal from './EnquireModal'

export default function CTABanner() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <div
          className="max-w-5xl mx-auto rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
          style={{ backgroundColor: '#2563EB' }}
        >
          {/* Decorative circles */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 hidden md:block" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 hidden md:block" />

          {/* Icon */}
          <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="#2563EB" className="w-9 h-9">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white font-bold text-xl md:text-2xl mb-1">
              Want to Learn More About Our Training Solutions?
            </h3>
            <p className="text-white/80 text-sm">Get Expert Guidance for Your Team&apos;s Success!</p>
          </div>

          {/* Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex-shrink-0 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1"
          >
            Contact Us <span className="text-lg">›</span>
          </button>
        </div>
      </section>

      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
