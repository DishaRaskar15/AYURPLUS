import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleCancel = (indexToRemove) => {
    const updatedAppointments = appointments.filter((_, i) => i !== indexToRemove);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const handlePayNow = (appointment) => {
    localStorage.setItem("pendingPayment", JSON.stringify(appointment));
    navigate("/payment");
  };

  return (
    <div className="max-w-3xl mx-auto my-16 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">My Appointments</h1>
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <div key={index} className="p-6 rounded-lg mb-6 shadow-md" style={{background:'#f3f4f6'}}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold" style={{color:'#111827'}}>{appointment.doctor}</h2>
              {appointment.paid ? (
                <span className="rounded-full px-3 py-1 text-sm" style={{background:'#dcfce7', color:'#059669'}}>Paid</span>
              ) : null}
            </div>
            <p className="text-gray-600">Date: {appointment.date}</p>
            <p className="text-gray-600">Time: {appointment.time}</p>
            <p className="text-gray-600">Symptoms: {appointment.symptoms}</p>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => handleCancel(index)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => handlePayNow(appointment)}
                className="btn-primary"
                disabled={Boolean(appointment.paid)}
                style={appointment.paid ? {opacity:0.6, cursor:'not-allowed'} : undefined}
              >
                {appointment.paid ? 'Paid' : 'Pay Now'}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">You have no appointments booked.</p>
      )}
    </div>
  );
}

export default MyAppointments;
