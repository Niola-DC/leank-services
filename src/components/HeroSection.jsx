import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 lg:pt-0">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-blue-900/70 to-indigo-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Reliable{' '}
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Shipping
              </span>
            </h1>

            {/* Subheading */}
            <div className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              <p className="mb-2">
                At <span className="font-semibold text-cyan-400">Leanks Innovation Services</span>, we deliver more than just packages.
              </p>
              <p>
                We deliver trust, speed, and security across borders
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link to='/contact'>GET A QUOTE</Link>
              </button>
            </div>

            {/* Optional: Stats or Features */}
            <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm sm:text-base">Deliveries Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm sm:text-base">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300 text-sm sm:text-base">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
