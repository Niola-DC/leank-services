import React from 'react'
import { Link } from 'react-router-dom'

const CallToAct = ({ title,title2, para, children}) => {
  return (
    <div>
       <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-16 px-8 sm:px-12 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            {/* Content */}
            <div className="mb-8 lg:mb-0">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {title}
                <br />
                {title2}
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 max-w-lg">
                {para}
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:flex-shrink-0">
            
              {children}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CallToAct


  // <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
  //              <Link>{btn1} </Link>
  //             </button>
  //             <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
  //               {btn2}
  //             </button>