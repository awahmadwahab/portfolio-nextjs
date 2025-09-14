import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const page = () => {
  return (
    
    <div className=" font-bold text-2xl">
       <Spotlight
        className="-top-80 left-0 md:-top-80 md:left-60"
        fill="#ffc300"
      />
      <section id="home" className="scroll-mt-28 md:scroll-mt-32">
        <HeroSection />
      </section>
      <section id="services" className="scroll-mt-28 md:scroll-mt-32">
        <Services />
      </section>
      <section id="portfolio" className="scroll-mt-28 md:scroll-mt-32">
        <Testimonial />
      </section>
      <Footer />
    </div>
  )
}

export default page