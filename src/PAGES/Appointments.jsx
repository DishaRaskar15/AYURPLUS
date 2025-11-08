import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Appointments() {
  const { state } = useLocation();
  const doctor = state ? state.doctor : null;
  const navigate = useNavigate();

  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);

  const doctorInfo = doctor ? doctor : null;

  // Generate time slots once
  useEffect(() => {
    const slots = [];
    for (let hour = 10; hour <= 22; hour++) {
      slots.push(`${hour}:00`);
    }
    setAvailableSlots(slots);
  }, []);

  // Load booked slots for selected date
  useEffect(() => {
    if (appointmentDate) {
      const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
      const slotsForDate = allAppointments
        .filter((app) => app.date === appointmentDate)
        .map((app) => app.time);
      setBookedSlots(slotsForDate);
    }
  }, [appointmentDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookedSlots.includes(appointmentTime)) {
      alert("Selected time slot is already booked. Please choose another.");
      return;
    }

    const appointmentDetails = {
      patientName,
      doctor: doctor.name,
      symptoms,
      date: appointmentDate,
      time: appointmentTime,
    };

    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    storedAppointments.push(appointmentDetails);
    localStorage.setItem("appointments", JSON.stringify(storedAppointments));

    alert('Appointment booked successfully!');
    navigate('/myappointments');
  };

  return (
    <div className="max-w-2xl mx-auto my-6 p-4">
      {doctorInfo ? (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white text-center">Book Appointment</h1>
          </div>

          <div className="p-6">
            {/* Doctor's Info - Horizontal Compact */}
            <div className="flex items-center justify-between mb-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <img
                  src={doctorInfo.image}
                  alt={doctorInfo.name}
                  className="w-16 h-16 object-cover rounded-full border-2 border-green-200"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold text-gray-800">{doctorInfo.name}</h2>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600 font-medium">{doctorInfo.speciality}</span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{background:'#10b981'}}></span>
                    <span className="text-gray-500">Available today</span>
                  </div>
                  <div className="flex gap-3 text-xs text-gray-600 mt-1">
                    <span>{doctorInfo.degree}</span>
                    <span>{doctorInfo.experience}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-sm font-semibold" style={{background:'#ecfdf5', color:'#059669'}}>₹{doctorInfo.fees}</span>
              </div>
            </div>

            {/* Appointment Form - Horizontal Layout */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Row - Patient Name and Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-semibold text-gray-700 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors shadow-sm"
                    placeholder="Enter patient name"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                    className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors shadow-sm"
                    style={{ width: '100%', maxWidth: '360px' }}
                  />
                </div>
              </div>

              {/* Second Row - Time and Symptoms */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-1">
                    Select Time
                  </label>
                  <select
                    id="time"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    required
                    className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors shadow-sm"
                    style={{ width: '100%', maxWidth: '360px' }}
                    disabled={!appointmentDate}
                  >
                    <option value="">Select Time</option>
                    {availableSlots.map((slot, index) => (
                      <option key={index} value={slot} disabled={bookedSlots.includes(slot)}>
                        {bookedSlots.includes(slot) ? `${slot} (Booked)` : slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="symptoms" className="block text-sm font-semibold text-gray-700 mb-1">
                    Symptoms (Optional)
                  </label>
                  <textarea
                    id="symptoms"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    rows="2"
                    className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none shadow-sm"
                    style={{ width: '100%', maxWidth: '360px' }}
                    placeholder="Briefly describe your symptoms..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </form>

            {/* Quick Info - Compact */}
            <div className="mt-4 p-3 rounded-lg border" style={{background:'#f8fafc', borderColor:'#dbeafe'}}>
              <div className="flex items-center">
                <span className="text-blue-500 text-base mr-2">ℹ️</span>
                <p className="text-xs" style={{color:'#1e3a8a'}}>
                  Confirmation email will be sent after booking. Please arrive 10 minutes early.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <span className="text-red-400 text-3xl mb-3 block">⚠️</span>
            <h2 className="text-lg font-semibold text-red-800 mb-2">No Doctor Selected</h2>
            <p className="text-red-600 mb-3 text-sm">Please select a doctor first to book an appointment.</p>
            <button
              onClick={() => navigate('/doctors')}
              className="btn-primary px-6 py-2 text-sm"
            >
              Browse Doctors
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
