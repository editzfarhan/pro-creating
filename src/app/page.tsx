import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <FeaturedWebinars/>
    </div>
  )
}

export default page