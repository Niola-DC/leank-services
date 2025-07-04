import React from "react";

const HeroLayout = ({ title, subtitle, children, backgroundImage }) => {
  return (
     <div className="relative flex items-center justify-center overflow-hidden pt-8 lg:pt-10 px-4">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[420px]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-blue-900/70 to-indigo-900/80"></div>
        </div>
      
      

      {/* Hero Content */}
      <div className="relative flex flex-col items-center px-2 sm:px-6 lg:px-8 mt-26">
        <div className="text-center mt-4 ">
          <h1 className="text-5xl font-bold text-white mb-3">
            {title}
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-4xl mx-auto px-4 mt-4 lg:mt-0">
            {subtitle}
          </p>
        </div>

        {/* Content Card */}
        <div className="w-full max-w-6xl mx-auto pt-2">
          {children}
        </div>
      </div>
      </div>
  );
};

export default HeroLayout;