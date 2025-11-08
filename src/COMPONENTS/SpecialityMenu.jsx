import React from 'react';
import { specialityData } from '../assets/asset';
import { Link } from 'react-router-dom';

function SpecialityMenu() {
  return (
    <div id="speciality" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Find by Speciality</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Simply browse through our list of trusted doctors and schedule your appointment hassle-free.
        </p>
      </div>

      {/* Speciality Cards */}
      <div className="flex justify-center">
        <div className="flex gap-8 px-4 overflow-x-auto scrollbar-hide max-w-6xl">
          {specialityData.map((item, index) => {
            // create a slug that replaces underscores/spaces with hyphens and lowercases
            const slug = item.speciality.toLowerCase().replace(/[_\s]+/g, '-');

            return (
              <Link 
                onClick={() => window.scrollTo(0,0)} 
                key={index} 
                to={`/doctors/${slug}`}
                className="flex flex-col items-center flex-shrink-0 gap-4 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-lg p-4 group-hover:bg-green-50 group-hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-gray-100 group-hover:border-green-200">
                  <img 
                    src={item.image} 
                    alt={item.speciality} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-green-600 font-semibold text-center text-sm group-hover:text-green-700 transition-colors">
                  {item.speciality.replace(/_/g, ' ')}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SpecialityMenu;
