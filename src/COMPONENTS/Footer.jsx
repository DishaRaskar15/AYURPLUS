import React from 'react';
import { Assets } from '../assets/asset';

function Footer() {
  return (
    <div className="bg-green-50 text-gray-800 py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ----------Left Section--------- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={Assets.Logo} alt="Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold text-green-600">Ayurplus</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted digital gateway to personalized Ayurvedic healthcare. We connect you with experienced doctors, provide effective remedies, and offer easy appointment scheduling—all from the comfort of your home.
            </p>
          </div>

          {/* ----------Center Section--------- */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-green-600">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-green-600 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* ----------Right Section--------- */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-green-600">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">📞 +91 9847352877</p>
              <p className="text-gray-600">✉️ ayurpluscont@gmail.com</p>
            </div>
          </div>
        </div>

        {/*---------Copyright Text-----------*/}
        <div className="border-t border-green-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; 2025 Ayurplus. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
