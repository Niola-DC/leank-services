import React, { useState } from 'react';

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      id: 0,
      title: "Industry Experience",
      subtitle: "Experience",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "With years of experience in the logistics industry our team possess deep knowledge and insights into global trade regulations and market trends.",
      features: [
        "15+ Years of Industry Experience",
        "Expert Knowledge in Global Trade",
        "Certified Logistics Professionals"
      ]
    },
    {
      id: 1,
      title: "Streamlined Operations",
      subtitle: "Expertise",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "Our specialized team brings cutting-edge technology and innovative solutions to streamline your supply chain operations and maximize efficiency.",
      features: [
        "Advanced Tracking Technology",
        "AI-Powered Route Optimization",
        "Real-time Supply Chain Visibility"
      ]
    },
    {
      id: 2,
      title: "Customer Centric Approach",
      subtitle: "Approach",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: "We prioritize your unique needs with personalized service, 24/7 support, and tailored logistics solutions that grow with your business.",
      features: [
        "24/7 Customer Support",
        "Personalized Service Plans",
        "Dedicated Account Management"
      ]
    }
  ];

  const currentTab = tabData[activeTab];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12">
            why choose us?
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-16">
            {tabData.map((tab, index) => (
              <React.Fragment key={tab.id}>
                <div 
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    activeTab === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className={`w-4 h-4 rounded-full mb-2 transition-colors duration-300 ${
                    activeTab === index ? 'bg-blue-900' : 'bg-gray-300'
                  }`}></div>
                  <div className="text-center">
                    <div className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                      activeTab === index ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {tab.title.split(' ')[0]}
                    </div>
                    <div className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                      activeTab === index ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {tab.subtitle}
                    </div>
                  </div>
                </div>
                
                {/* Connector Line */}
                {index < tabData.length - 1 && (
                  <div className="hidden sm:block w-16 lg:w-24 h-px bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-32 bg-blue-200 rounded-lg opacity-30 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-24 bg-gray-200 rounded-lg opacity-40 transition-all duration-500"></div>
              
              {/* Image Container with Stacked Images */}
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                  {tabData.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        activeTab === index 
                          ? 'opacity-100 translate-x-0 z-10' 
                          : activeTab > index 
                            ? 'opacity-0 -translate-x-full z-0' 
                            : 'opacity-0 translate-x-full z-0'
                      }`}
                    >
                      <img 
                        src={tab.image}
                        alt={tab.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay for smooth transitions */}
                      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                        activeTab === index ? 'opacity-0' : 'opacity-20'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {currentTab.title}
              </h3>
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6">
                {currentTab.content}
              </p>
              
              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {currentTab.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center lg:justify-start">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="inline-flex items-center px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {tabData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-blue-900 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;