const stats = [
  { badge: '10K+', desc: 'Professionals Trained For Exceptional Career Success' },
  { badge: '200+', desc: 'Sessions Delivered With Unmatched Learning Excellence' },
  { badge: '5K+', desc: 'Active Learners Engaged In Dynamic Courses' },
]

export default function TrackRecord() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Our <span className="text-blue-600">Track Record</span>
        </h2>
        <p className="text-gray-500 text-base">
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </p>
      </div>

      {/* Desktop: 3 cols with dividers | Mobile: stacked with horizontal dividers */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {stats.map((stat, i) => (
          <div key={stat.badge} className="flex-1 flex flex-col items-center text-center px-6 py-4 relative">
            {/* Divider */}
            {i > 0 && (
              <>
                {/* Desktop vertical divider */}
                <div className="hidden md:block absolute left-0 top-4 bottom-4 w-px bg-gray-200" />
                {/* Mobile horizontal divider */}
                <div className="block md:hidden w-full h-px bg-gray-200 mb-6" />
              </>
            )}
            <div
              className="px-6 py-2 rounded-full text-blue-700 font-bold text-xl mb-3"
              style={{ backgroundColor: '#DBEAFE' }}
            >
              {stat.badge}
            </div>
            <p className="text-gray-700 text-sm font-medium max-w-[180px]">{stat.desc}</p> 
          </div>
        ))}
      </div>
    </section>
  )
}
