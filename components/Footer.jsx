'use client'
import { useState } from 'react'
import EnquireModal from './EnquireModal'

const socialIcons = {
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  ),
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* Mobile footer: dark */}
      <footer className="md:hidden bg-gray-900 text-white px-6 pt-8 pb-6">
        <FooterContent onEnquire={() => setModalOpen(true)} dark />
      </footer>

      {/* Desktop footer: white */}
      <footer className="hidden md:block bg-white text-gray-800 border-t border-gray-100 px-8 pt-10 pb-6">
        <FooterContent onEnquire={() => setModalOpen(true)} dark={false} />
      </footer>

      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

function FooterContent({ onEnquire, dark }) {
  const textMuted = dark ? 'text-gray-400' : 'text-gray-500'
  const textMain = dark ? 'text-white' : 'text-gray-800'
  const divider = dark ? 'border-gray-700' : 'border-gray-200'
  const iconColor = dark ? 'text-white' : 'text-gray-600'
  const emailColor = dark ? 'text-blue-400' : 'text-blue-600'

  return (
    <div className="max-w-5xl mx-auto">
      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <div className="flex flex-col mb-3">
            <span className={`text-2xl font-bold text-blue-600`} style={{ fontFamily: 'Georgia, serif' }}>accredian</span>
            <span className={`text-xs ${textMuted} tracking-wider`}>credentials that matter</span>
          </div>
          <div className={`flex gap-4 ${iconColor}`}>
            {Object.entries(socialIcons).map(([name, icon]) => (
              <a key={name} href="#" aria-label={name} className="hover:text-blue-500 transition-colors">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <button
            onClick={onEnquire}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Enquire Now
          </button>
          <span className={`text-sm ${textMuted}`}>Speak with our Advisor</span>
        </div>
      </div>

      <div className={`border-t ${divider} my-5`} />

      {/* Links row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h4 className={`font-semibold ${textMain} mb-3`}>Accredian</h4>
          {['About', 'Blog', 'Why Accredian'].map(link => (
            <a key={link} href="#" className={`block text-sm ${textMuted} mb-2 hover:text-blue-500 transition-colors`}>{link}</a>
          ))}
        </div>
        <div>
          <h4 className={`font-semibold ${textMain} mb-3`}>Contact Us</h4>
          <p className={`text-sm ${textMuted} mb-1`}>
            Email us:{' '}
            <a href="mailto:enterprise@accredian.com" className={`${emailColor} hover:underline`}>
              enterprise@accredian.com
            </a>
          </p>
          <p className={`text-sm ${textMuted}`}>
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
          </p>
        </div>
      </div>

      <div className={`border-t ${divider} pt-5 text-center`}>
        <p className={`text-xs ${textMuted}`}>
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </div>
  )
}
