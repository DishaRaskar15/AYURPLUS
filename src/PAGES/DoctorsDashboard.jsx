import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const doctor = JSON.parse(localStorage.getItem('currentUser'));
  const navigate = useNavigate();

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('appointments')) || [];
    // Separate pending vs. history
    const myAppts = all.filter(a => a.doctor === doctor.name);
    setAppointments(myAppts);
  }, [doctor.name]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const pending = appointments.filter(a => !a.paid && a.status !== 'Cancelled');
  const history = appointments.filter(a => a.paid || a.status === 'Cancelled');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dr. {doctor.name}</h1>
            <p className="text-gray-600">{doctor.speciality}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-8">
        {/* Profile Card */}
        <section className="bg-white rounded-lg shadow p-6 flex items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-28 h-28 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-xl font-semibold">Profile Summary</h2>
            <p><span className="font-medium">Degree:</span> {doctor.degree}</p>
            <p><span className="font-medium">Experience:</span> {doctor.experience} yrs</p>
            <p><span className="font-medium">Fees:</span> ₹{doctor.fees}</p>
            <p><span className="font-medium">Email:</span> {doctor.email}</p>
            <p><span className="font-medium">Address:</span> {doctor.address}</p>
          </div>
        </section>

        {/* Pending Appointments */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Pending Requests</h2>
          {pending.length ? (
            pending.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <p><span className="font-medium">Patient:</span> {a.patientName}</p>
                  <p><span className="font-medium">Date:</span> {a.date}</p>
                  <p><span className="font-medium">Time:</span> {a.time}</p>
                  <p><span className="font-medium">Symptoms:</span> {a.symptoms}</p>
                </div>
                <span className="text-orange-600 font-semibold">Awaiting Payment</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No pending appointments.</p>
          )}
        </section>

        {/* Appointment History */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Appointment History</h2>
          {history.length ? (
            history.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <p><span className="font-medium">Patient:</span> {a.patientName}</p>
                  <p><span className="font-medium">Date:</span> {a.date}</p>
                  <p><span className="font-medium">Time:</span> {a.time}</p>
                  <p><span className="font-medium">Status:</span> {a.paid ? 'Paid' : a.status}</p>
                </div>
                <span
                  className={`font-semibold ${
                    a.paid ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {a.paid ? '✔' : '✖'}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No past appointments.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default DoctorDashboard;
