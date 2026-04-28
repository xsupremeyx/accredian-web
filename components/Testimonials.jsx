'use client'
import { useState } from 'react'

const testimonials = [
  {
    logo: 'https://logo.clearbit.com/adp.com',
    company: 'ADP',
    quote: '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
  },
  {
    logo: 'https://logo.clearbit.com/bayer.com',
    company: 'Bayer',
    quote: '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
  },
  {
    logo: 'https://logo.clearbit.com/hcltech.com',
    company: 'HCL',
    quote: '"Partnering with Accredian has been a transformative experience for our teams. Their expertise in customized corporate learning helped us build a future-ready workforce capable of tackling emerging challenges."',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  // Desktop shows 2 at a time, mobile shows 1
  const desktopTotal = Math.ceil(testimonials.length / 2)

  const desktopPairs = []
  for (let i = 0; i < testimonials.length; i += 2) {
    desktopPairs.push(testimonials.slice(i, i + 2))
  }

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Testimonials from <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="text-gray-500 text-base">
            What <span className="text-blue-600">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Desktop: 2 cards side by side */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-5">
            {desktopPairs[current] && desktopPairs[current].map(t => (
              <TestimonialCard key={t.company} t={t} />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {desktopPairs.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden">
          <TestimonialCard t={testimonials[current]} />
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <img
        src={t.logo}
        alt={t.company}
        className="h-10 object-contain mb-4"
        onError={e => { e.target.style.display = 'none' }}
      />
      <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
    </div>
  )
}
