import React from 'react'

const PageLayout = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden pt-8 lg:pt-0 px-3">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[400px]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-blue-900/70 to-indigo-900/80"></div>
        </div>
        <div className="w-full max-w-6xl mx-auto relative pt-16 lg:pt-20">
          {children}
        </div>
      
    </div>
  )
}

export default PageLayout
