import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Assets } from '../assets/asset';
function Payment() {
  const [appointment, setAppointment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPayment = JSON.parse(localStorage.getItem("pendingPayment"));
    if (storedPayment) {
      setAppointment(storedPayment);
    } else {
      navigate("/myappointments"); // Redirect if no payment in progress
    }
  }, [navigate]);

  const handleConfirmPayment = () => {
    if (!appointment) return;

    // Mark the appointment as paid in appointments list
    const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const updatedAppointments = allAppointments.map((appt) =>
      appt.date === appointment.date &&
      appt.time === appointment.time &&
      appt.doctor === appointment.doctor &&
      appt.symptoms === appointment.symptoms
        ? { ...appt, paid: true }
        : appt
    );

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    localStorage.removeItem("pendingPayment");

    navigate("/myappointments");
  };

  return (
    <div className="max-w-lg mx-auto my-16 p-6 bg-white rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      {appointment ? (
        <>
          <p className="text-lg mb-2">Pay fees to <strong>{appointment.doctor}</strong></p>
          <div className="mx-auto mb-4 p-3 rounded-lg" style={{background:'#f9fafb', display:'inline-block'}}>
            <img
              src={Assets.Qr}
              alt="Doctor UPI QR"
              className="mx-auto border border-gray-300"
              style={{width:'200px', height:'200px'}}
            />
          </div>
          <p className="mb-4 text-sm text-gray-600">Scan the QR code to pay the consultation fee, then press Confirm.</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigate('/myappointments')}
              className="btn-secondary"
            >
              Back
            </button>
            <button
              onClick={handleConfirmPayment}
              className="btn-primary"
            >
              Confirm Payment
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Payment;
