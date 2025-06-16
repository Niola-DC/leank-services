import { Facebook, Grid3X3, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import MyMap from "./map";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-medium mb-2">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's stay connected
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with Leanks. Call us, or email and we'll get back to you as soon as possible!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">contact@Leanks.com</p>
          </div>
          
          {/* Phone */}
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+234 123 456 7890</p>
          </div>
          
          {/* Socials */}
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid3X3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Socials</h3>
            <div className="flex justify-center gap-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-700 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="w-full h-80 rounded-lg z-0 px-6">
          {/* <div className="w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-orange-200 flex items-center justify-center"> */}
            {/* <p className="text-gray-700 font-medium">Interactive Map Area</p> */}
            <MyMap />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection