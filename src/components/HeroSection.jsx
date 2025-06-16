import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-8 lg:pt-0">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90  to-indigo-900/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Main Heading */}
          <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
            Reliable{" "}
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent sm:inline">
              Shipping
            </span>
          </h1>

          {/* Subheading */}
          <div className="mb-4 text-lg leading-relaxed text-gray-200 sm:text-xl md:text-2xl">
            <p className="mb-2">
              At{" "}
              <span className="font-semibold text-cyan-400">
                Leanks Innovation Services
              </span>
              , we deliver more than just packages.
            </p>
            <p>We deliver trust, speed, and security across borders</p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <button className="inline-flex transform items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-600 hover:shadow-xl">
              <Link to="/contact">GET A QUOTE</Link>
            </button>
          </div>

          {/* Optional: Stats or Features */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3 sm:gap-12">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-cyan-400 sm:text-4xl">
                500+
              </div>
              <div className="text-sm text-gray-300 sm:text-base">
                Deliveries Daily
              </div>
            </div>

            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-cyan-400 sm:text-4xl">
                50+
              </div>
              <div className="text-sm text-gray-300 sm:text-base">
                Countries Covered
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-cyan-400 sm:text-4xl">
                99%
              </div>
              <div className="text-sm text-gray-300 sm:text-base">
                On-Time Delivery

            {/* Optional: Stats or Features */}
            <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 mb-4 lg:mb-1">
               <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">42,000+ Tonnes </div>
                <div className="text-gray-300 text-sm sm:text-base">Weight of Goods Moved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm sm:text-base">Deliveries Yearly (Marine Supply)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm sm:text-base">Businesses Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl  font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300 text-sm sm:text-base">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/60"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
