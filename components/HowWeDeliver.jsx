const steps = [
  {
    num: '1',
    title: 'Skill Gap Analysis',
    desc: 'Assess team skill gaps and developmental needs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Customized Training Plan',
    desc: 'Create a tailored roadmap addressing organizational goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.591V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.672 1.5 1.5 1.5h13.5c.828 0 1.5-.67 1.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Flexible Program Delivery',
    desc: 'Deliver adaptable programs aligned with industry and organizational needs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.591V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.672 1.5 1.5 1.5h13.5c.828 0 1.5-.67 1.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
      </svg>
    ),
  },
]

export default function HowWeDeliver() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          How We <span className="text-blue-600">Deliver Results</span> That Matter?
        </h2>
        <p className="text-gray-500 text-base">
          A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map(s => (
          <div
            key={s.num}
            className="relative bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center"
            style={{ borderLeft: '4px solid #2563EB', paddingLeft: '2rem' }}
          >
            {/* Number badge */}
            <div className="absolute top-3 left-3 w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-xs font-semibold text-gray-500">
              {s.num}
            </div>
            {/* Icon circle */}
            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4 mt-4">
              {s.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
