'use client'

const logos = [
  { name: 'Reliance', src: 'https://logo.clearbit.com/ril.com' },
  { name: 'HCL', src: 'https://logo.clearbit.com/hcltech.com' },
  { name: 'IBM', src: 'https://logo.clearbit.com/ibm.com' },
  { name: 'CRIF', src: 'https://logo.clearbit.com/crif.com' },
  { name: 'ADP', src: 'https://logo.clearbit.com/adp.com' },
  { name: 'Bayer', src: 'https://logo.clearbit.com/bayer.com' },
]

export default function Partnerships() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>
        <p className="text-gray-500 text-base">
          Successful Collaborations With the <span className="text-blue-600">Industry&apos;s Best</span>
        </p>
      </div>

      {/* Desktop: flex row */}
      <div className="hidden lg:flex justify-center items-center gap-12 max-w-5xl mx-auto flex-wrap">
        {logos.map(logo => (
          <div key={logo.name} className="flex items-center justify-center w-28">
            <img
              src={logo.src}
              alt={logo.name}
              className="h-10 object-contain grayscale hover:grayscale-0 transition-all"
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span className="hidden text-gray-500 font-semibold text-sm">{logo.name}</span>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet: marquee carousel */}
      <div className="lg:hidden overflow-hidden">
        <div className="flex gap-12 animate-marquee" style={{ width: 'max-content' }}>
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              className="h-10 object-contain flex-shrink-0"
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
