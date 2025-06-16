import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import CoreValues from '../components/CoreValues'
import ContactSection from '../components/ContactSection'
import CallToAct from '../components/CallToAct'
import { useLocation } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.scrollToServices) {
      setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
          const headerHeight = 100;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.state]);
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
