import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrackRecord from '@/components/TrackRecord'
import Partnerships from '@/components/Partnerships'
import AccredianEdge from '@/components/AccredianEdge'
import DomainExpertise from '@/components/DomainExpertise'
import CourseSegmentation from '@/components/CourseSegmentation'
import WhoShouldJoin from '@/components/WhoShouldJoin'
import CATFramework from '@/components/CATFramework'
import HowWeDeliver from '@/components/HowWeDeliver'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="stats"><TrackRecord /></section>
      <section id="clients"><Partnerships /></section>
      <section id="accredian-edge"><AccredianEdge /></section>
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <section id="cat"><CATFramework /></section>
      <section id="how-it-works"><HowWeDeliver /></section>
      <section id="faqs"><FAQ /></section>
      <section id="testimonials"><Testimonials /></section>
      <CTABanner />
      <Footer />
    </main>
  )
}
