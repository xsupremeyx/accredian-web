export default function AccredianEdge() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>
        <p className="text-gray-500 text-base">
          Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Desktop image */}
        <img
          src="/images/edge-desktop.png"
          alt="Accredian Edge - Strategic Training Overview"
          className="hidden md:block w-full"
        />
        {/* Mobile image */}
        <img
          src="/images/edge-mobile.png"
          alt="Accredian Edge - Our USPs"
          className="block md:hidden w-full max-w-sm mx-auto"
        />
      </div>
    </section>
  )
}
