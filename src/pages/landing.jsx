import React from 'react'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import CoreValues from '../components/CoreValues'
import ContactSection from '../components/ContactSection'
import CallToAct from '../components/CallToAct'

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      {/* Hello */}
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <CoreValues />
      <ContactSection />

    </div>
  )
}

export default HomePage
