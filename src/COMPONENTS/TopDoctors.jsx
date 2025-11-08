import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Top Doctors to Book</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Simply browse through our extensive list of trusted doctors and book your appointment.
        </p>
      </div>

      {/* Doctor Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {doctors.slice(0, 8).map((item, index) => (
          <div
            onClick={() => navigate('/appointments', { state: { doctor: item } })}
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 overflow-hidden"
          >
            <div className="p-6">
              <div className="relative mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-green-100 group-hover:border-green-300 transition-colors"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center gap-2 mb-3 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Available</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.speciality.replace('_', ' ')}</p>
                <p className="text-xs text-gray-500 mb-3">{item.experience} experience</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₹{item.fees}</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDoctors;