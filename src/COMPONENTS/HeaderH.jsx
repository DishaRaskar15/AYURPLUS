import React from 'react'
import { Assets } from '../assets/asset'

function HeaderH() {
  console.log('HeaderH component rendering'); // Debug line

  return (
    <div className="header-gradient rounded-3xl px-6 md:px-12 lg:px-16 py-16 mb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-300 rounded-full opacity-20 translate-y-24 -translate-x-24"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/*------------- Left Side ---------------*/}
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-6">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Trusted Healthcare Platform
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Book Appointment <br /> 
            <span className="text-green-600">With Trusted Doctors</span>
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-4">
            <img src={Assets.group_profiles} alt="Group Profiles" className="w-24 h-16 object-contain" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Ayurplus, your digital gateway to personalized Ayurvedic healthcare. 
              Book appointments, explore remedies, and consult with expert doctors, all from the comfort of your home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                const specialitySection = document.getElementById('speciality');
                if (specialitySection) {
                  specialitySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary flex items-center gap-3 px-8 py-4 text-lg font-semibold"
            >
              Book Appointment 
              <img src={Assets.arrow_icon} alt="Arrow" className="w-5 h-5" />
            </button>
            
            <button className="flex items-center gap-3 px-6 py-4 border-2 border-green-500 text-green-600 rounded-full hover:bg-green-50 transition-all duration-300 font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/*------------- Right Side ---------------*/}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img 
              className="w-full max-w-md h-auto rounded-2xl object-cover shadow-2xl" 
              src={Assets.header_img} 
              alt="Healthcare professionals"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">👨‍⚕️</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Expert Doctors</p>
                  <p className="text-sm font-semibold text-gray-800">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderH;
