// Doctor.js

import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const { speciality } = useParams(); // From URL like /doctors/gynecologist
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  // Function to filter doctors based on speciality
  const handleSpecialityFilter = (selectedSpeciality) => {
    navigate(`/doctors/${selectedSpeciality.toLowerCase().replace(/ /g, '-')}`);
  };

  // Whenever URL speciality changes, update doctor list
  useEffect(() => {
    if (speciality) {
      const formattedSpeciality = speciality.replace(/-/g, ' ').toLowerCase();

      const filtered = doctors.filter((doc) => 
        doc.speciality.toLowerCase().replace(/_/g, ' ').includes(formattedSpeciality)
      );
      setFilterDoc(filtered);
    } else {
      setFilterDoc(doctors); // Show all if no speciality selected
    }
  }, [speciality, doctors]);

  // Function to navigate to appointment page with selected doctor's data
  const handleDoctorClick = (doctor) => {
    navigate('/appointments', { state: { doctor } }); // Pass doctor data via state
  };

  return (
    <div className="p-8">
      <p className="text-2xl font-bold text-center text-green-700 mb-6">Browse Doctors by Speciality</p>

      {/* Specialty List */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <p onClick={() => handleSpecialityFilter('General Physician')} className="cursor-pointer bg-green-100 px-4 py-2 rounded-full hover:bg-green-200">General Physician</p>
        <p onClick={() => handleSpecialityFilter('Gynecologist')} className="cursor-pointer bg-green-100 px-4 py-2 rounded-full hover:bg-green-200">Gynecologist</p>
        <p onClick={() => handleSpecialityFilter('Dermatologist')} className="cursor-pointer bg-green-100 px-4 py-2 rounded-full hover:bg-green-200">Dermatologist</p>
        <p onClick={() => handleSpecialityFilter('Pediatrician')} className="cursor-pointer bg-green-100 px-4 py-2 rounded-full hover:bg-green-200">Pediatrician</p>
        <p onClick={() => handleSpecialityFilter('Neurologist')} className="cursor-pointer bg-green-100 px-4 py-2 rounded-full hover:bg-green-200">Neurologist</p>
        <p onClick={() => handleSpecialityFilter('Gastroenterologist')} className="cursor-pointer bg-green-100 px-4 py-2 rounded-full hover:bg-green-200">Gastroenterologist</p>
      </div>

      {/* Doctor Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleDoctorClick(item)} // Redirect to appointments page with doctor data
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-green-400"
              />
              <div className="mt-4 text-center">
                <div className="flex justify-center items-center gap-2 mb-2 text-sm text-green-500">
                  <p>Available</p>
                </div>
                <p className="text-xl font-semibold text-green-700">{item.name}</p>
                <p className="text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-green-700 col-span-3">No doctors available for this speciality.</p>
        )}
      </div>
    </div>
  );
};

export default Doctor;
