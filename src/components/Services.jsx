import React from 'react'

const Services = () => {
  return (
    <div id='services'>
       <section className="relative bg-blue-900 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Top curved border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 sm:h-16 lg:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f9fafb"></path>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
                OUR SERVICES
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur. Ac viverra aliquet turpis nibh justo sed tortor eu. Maecenas risus ipsum risus et amet. Amet nascetur aliquam.
              </p>

            </div>

            {/* Image/Video Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Safety equipment and construction"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
                    {item}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg sm:text-lg mb-3">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                  Lorem ipsum color sit amet consectetur. Massa et molestie enim faucibus. Feugiat arcu pretium. Sit rhoncus pulvinar quis.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        {/* Top curved border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 sm:h-16 lg:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#1e3a8a"></path>
          </svg>
        </div>

        
      </section>
    </div>
  )
}

export default Services
