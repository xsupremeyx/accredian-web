'use client'
import { useState } from 'react'
import Image from 'next/image'

const courses = [
  {
    img: '/images/course-program-specific.webp',
    title: 'Program Specific',
    desc: 'Certificate, Executive, Post Graduate Certificate',
  },
  {
    img: '/images/course-industry-specific.webp',
    title: 'Industry Specific',
    desc: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
  },
  {
    img: '/images/course-topic-specific.webp',
    title: 'Topic Specific',
    desc: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
  },
  {
    img: '/images/course-level-specific.webp',
    title: 'Level Specific',
    desc: 'Senior Leadership, Mid-Career Professionals, Freshers',
  },
]

export default function CourseSegmentation() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Tailored <span className="text-blue-600">Course Segmentation</span>
        </h2>
        <p className="text-gray-500 text-base">
          Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>
      </div>

      {/* Desktop: 4 cards row */}
      <div className="hidden md:grid grid-cols-4 gap-5 max-w-5xl mx-auto">
        {courses.map(c => (
          <CourseCard key={c.title} course={c} />
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="md:hidden max-w-sm mx-auto">
        <CourseCard course={courses[current]} />
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {courses.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? 'bg-blue-600' : 'border border-gray-400 bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <div className="relative w-full h-44">
        <Image
          src={course.img}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-blue-600 font-bold text-base mb-1">{course.title}</h3>
        <p className="text-gray-600 text-sm">{course.desc}</p>
      </div>
    </div>
  )
}
