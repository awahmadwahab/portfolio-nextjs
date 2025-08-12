import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const page = () => {
  return (
    
    <div className=" font-bold text-2xl">
       <Spotlight
        className="-top-80 left-0 md:-top-80 md:left-60"
        fill="#ffc300"
      />
    <HeroSection  />
    <Services/>
    <Testimonial />
    </div>
  )
}

export default page