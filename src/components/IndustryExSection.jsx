import React from 'react';
import CallToAct from './CallToAct';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { feOffset } from 'framer-motion/m';

const IndustryExperienceSection = () => {
  return (
    <section className="bg-white py-16 px-8 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Top Section - Industry Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4 block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry
              <br />
              <span className="text-blue-600">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in the logistics industry our team possess deep knowledge
              and insights into global trade regulations and market trends.
            </p>
            {/* <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">

              <AnchorLink href='/contact-form'
                onClick={() => {
                  window.scrollTo(0, 0);
                  feOffset
                }}>

                CONTACT US
              </AnchorLink>
            </button> */}
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              <AnchorLink
                href='#contact-form'
                offset={100}
                className="block w-full h-full text-inherit no-underline"
              >
                CONTACT US
              </AnchorLink>
            </button>


          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/images/yard.jpg"
                alt="Person working with logistics data and planning"
                className="rounded-xl shadow-lg w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - CTA */}
        {/* <CallToAct title=" Driving Tomorrow's" title2=" Logistics Today" para="
                Leanks is here to make shipping easier and more efficient for everyone" btn1="OUR SERVICES" btn2="ABOUT US" /> */}
        <CallToAct title="The fastest way for " title2="you to ship out" para="
                Leanks is here to make shipping easier and more efficient for everyone">
          <div className='flex-col'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mx-4 px-8 py-3 rounded-lg transition-colors duration-200">
              <Link to='/contact'>CONTACT US</Link>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              <Link to='/#services'>Learn More</Link>

            </button>
          </div>
        </CallToAct>
      </div>
    </section>
  );
};

export default IndustryExperienceSection;