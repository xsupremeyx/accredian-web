export default function CATFramework() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F0F4FF' }}>
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>
        <p className="text-gray-500 text-base">
          Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
        </p>
      </div>

      {/* 3 circles with S-curve SVG connector */}
      <div className="max-w-4xl mx-auto relative">
        {/* SVG connector - desktop */}
        <div className="hidden md:block absolute inset-0 pointer-events-none" style={{ top: '10%', zIndex: 0 }}>
          <svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M 150 60 C 225 20, 300 20, 340 100 C 380 180, 460 180, 500 100 C 540 20, 600 20, 700 20"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeDasharray="0"
            />
            {/* Dots on the curve */}
            <circle cx="340" cy="100" r="7" fill="#2563EB" />
            <circle cx="500" cy="100" r="7" fill="#2563EB" />
            <circle cx="150" cy="60" r="7" fill="#2563EB" />
            <circle cx="700" cy="20" r="7" fill="#2563EB" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 relative z-10">
          {[
            {
              title: 'Concept',
              desc: 'Foundational knowledge for deep subject understanding.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              ),
            },
            {
              title: 'Application',
              desc: 'Practical implementation through real-world scenarios.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
              ),
            },
            {
              title: 'Tools',
              desc: 'Resources and techniques for effective skill mastery.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div key={item.title} className="flex flex-col items-center text-center" style={{ marginTop: i === 1 ? '3rem' : '0' }}>
              <div
                className="w-44 h-44 md:w-52 md:h-52 rounded-full border-2 border-blue-500 bg-white flex flex-col items-center justify-center px-5 shadow-sm"
              >
                {item.icon}
                <h3 className="text-gray-900 font-bold text-lg mt-2">{item.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
