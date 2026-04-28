import Image from 'next/image'

const audience = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: 'Tech Professionals',
    desc: 'Enhance expertise, embrace tech, drive innovation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Non-Tech Professionals',
    desc: 'Adapt digitally, collaborate in tech environments.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Emerging Professionals',
    desc: 'Develop powerful skills for rapid career growth.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Senior Professionals',
    desc: 'Strengthen leadership, enhance strategic decisions.',
  },
]

export default function WhoShouldJoin() {
  return (
    <section className="bg-blue-600 px-4 sm:px-6 lg:px-8 py-0">
      <div className="max-w-7xl mx-auto">
        {/* Desktop layout */}
        <div className="hidden md:flex items-stretch min-h-[320px]">
          {/* Left: image + heading */}
          <div className="w-2/5 flex flex-col justify-end pr-8 pt-8">
            <p className="text-white/80 text-sm mb-1">Who Should Join?</p>
            <h2 className="text-white text-3xl font-bold mb-4">Strategic Skill Enhancement</h2>
            <div className="relative h-56 w-full">
              <Image
                src="/images/who-should-join-people.png"
                alt="Professionals"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right: 2x2 grid */}
          <div className="flex-1 grid grid-cols-2 gap-6 py-10 pl-8 border-l border-white/20">
            {audience.map(a => (
              <div key={a.title} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg border border-white/40 flex items-center justify-center">
                  {a.icon}
                </div>
                <h3 className="text-white font-bold text-base">{a.title}</h3>
                <p className="text-white/80 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden py-8">
          <p className="text-white/80 text-sm mb-1">Who Should Join?</p>
          <h2 className="text-white text-2xl font-bold mb-6">Strategic Skill Enhancement</h2>
          <div className="flex flex-col gap-5">
            {audience.map(a => (
              <div key={a.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-white/40 flex items-center justify-center flex-shrink-0">
                  {a.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">{a.title}</h3>
                  <p className="text-white/80 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
