import React from "react";

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
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Condition</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Help</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
        </nav>

        <div className="border-t border-slate-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">© 2025 Leanks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;