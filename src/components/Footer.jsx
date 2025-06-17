import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 flex justify-center items-center">
          <span className="text-blue-400">
            <img src="/icon.png" className="w-50" />
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          <p className="text-gray-300 hover:text-white transition-colors"><Link to='about' onClick={() => {
            window.scrollTo(0, 0);
          }}>About Us</Link></p>
          <p className="text-gray-300 hover:text-white transition-colors"><Link to='/#services'>Services</Link></p>
          <p className="text-gray-300 hover:text-white transition-colors"><Link to='/#contact-form'>Contact</Link></p>
          <p className="text-gray-300 hover:text-white transition-colors"><Link to='terms' onClick={() => {
            window.scrollTo(0, 0);
          }}>Terms & Condition</Link></p>
          <p className="text-gray-300 hover:text-white transition-colors"><Link to='/#contact-form'>Help</Link></p>
          <p className="text-gray-300 hover:text-white transition-colors"><Link to='privacy-policy' onClick={() => {
            window.scrollTo(0, 0);
          }}>Privacy</Link></p>
        </nav>

        <div className="border-t border-slate-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">© 2025 Leanks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;