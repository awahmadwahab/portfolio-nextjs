import HeroSection from '@/components/HeroSection'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const page = () => {
  return (
    
    <div className=" font-bold text-2xl">
       <Spotlight
        className="-top-80 left-0 md:-top-80 md:left-60"
        fill="yellow"
      />
    <HeroSection  />
    </div>
  )
}

export default page