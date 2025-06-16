import React, { useState } from 'react';
import { Mail, Phone, MapPin, Grid, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

const handleServicesClick = () => {
  // Navigate to home page first
  navigate('/#services');
  
  // Wait for navigation to complete, then smooth scroll
  setTimeout(() => {
    const element = document.getElementById('services');
    if (element) {
      const headerHeight = 100; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, 100); // Small delay to ensure page has loaded
};


  return (
    <section id='contact-form' className="py-2 lg:py-12 px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" lg:mb-6">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">CONTACT</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's stay connected
          </h2>
          <p className="text-lg text-gray-600 max-w-lg">
            Get in touch with Leanks. Call us, or email and we'll get back to you as soon as possible!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="lg:flex space-y-8 py-12 lg:mt-6 mt-4 hidden">

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">contact@leanks.co</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+234 123 456 7890</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
                  <p className="text-gray-600">
                    1686, Geraldine Lane<br />
                    New York, NY 10013
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                  <Grid className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Socials</h3>
                  <div className="flex space-x-3">
                    <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                    <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
                    <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-600 cursor-pointer" />
                    <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-700 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}

          </div>



          {/* Contact Form */}
          <div className=''>

            <div className="flex flex-col sm:flex-row gap-4 py-4">
              {/* <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                <Link to='/#services'
                
                  onClick={() => {
                    window.scrollTo(0, 0);
                    
                    
                  }}
                  > 
                  Our Services
                  </Link>
              </button> */}
              <button
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                onClick={handleServicesClick}
              >
                Our Services
              </button>

              <button className="bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                <Link to='/about'
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}>About Us</Link>
              </button>
            </div>
            <div className="p-8 rounded-xl shadow-lg bg-gray-50 px-10 py-4">

              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="pat@shuffle.dev"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:hidden">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                <Mail className="w-5 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contact@leanks.co</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 mt-4">
              <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+234 123 456 7890</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">
                  1686, Geraldine Lane<br />
                  New York, NY 10013
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                <Grid className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Socials</h3>
                <div className="flex space-x-3">
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-600 cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;