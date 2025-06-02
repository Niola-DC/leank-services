
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function LeanksHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a1b3a' }}>

      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        {/* Top Contact Bar */}
        <div className="border-b border-indigo-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-end items-start sm:items-center py-2 space-y-2 sm:space-y-0 sm:space-x-8">
              {/* Phone */}
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <div>
                  <span className="text-white font-medium">+234 123 456 7890</span>
                  <div className="text-xs text-gray-300">Toll Free</div>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <div>
                  <span className="text-white font-medium">leanks@gmail.com</span>
                  <div className="text-xs text-gray-300">Official email</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                {/* Logo Icon */}
                <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center mr-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold tracking-wide">LEANKS</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#" 
                className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-200 border-b-2 border-cyan-400 pb-1"
              >
                HOME
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href="#" 
                className="text-white font-medium hover:text-cyan-400 transition-colors duration-200"
              >
                ABOUT US
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href="#" 
                className="text-white font-medium hover:text-cyan-400 transition-colors duration-200"
              >
                CONTACT US
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:text-cyan-400 hover:bg-indigo-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

                {/* </div> */}

        {/* Mobile Slide-out Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Slide-out menu */}
            <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-indigo-900 to-blue-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-indigo-700/30">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-cyan-400 rounded flex items-center justify-center mr-1">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div>
                      <div className="w-6 h-6 bg-cyan-400 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <span className="ml-2 text-xl font-bold tracking-wide text-white">LEANKS</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-white hover:text-cyan-400 hover:bg-indigo-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col flex-1 px-6 py-8 space-y-6">
                  <a 
                    href="#" 
                    className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-200 text-lg py-3 border-b border-indigo-700/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </a>
                  <a 
                    href="#" 
                    className="text-white font-medium hover:text-cyan-400 transition-colors duration-200 text-lg py-3 border-b border-indigo-700/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT US
                  </a>
                  <a 
                    href="#" 
                    className="text-white font-medium hover:text-cyan-400 transition-colors duration-200 text-lg py-3 border-b border-indigo-700/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONTACT US
                  </a>
                </div>

                {/* Contact Info at Bottom */}
                <div className="px-6 py-6 border-t border-indigo-700/30 bg-indigo-800/30">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                      <div>
                        <div className="text-white font-medium">+234 123 456 7890</div>
                        <div className="text-xs text-gray-300">Toll Free</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                      <div>
                        <div className="text-white font-medium">leanks@gmail.com</div>
                        <div className="text-xs text-gray-300">Official email</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* </div> */}
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to LEANKS</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your content goes here. This is a responsive layout that adapts to different screen sizes.
          </p>
        </div>
      </main>
    </div>
  );
}
