import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [role, setRole] = useState('patient');
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === 'patient') {
      const patients = JSON.parse(localStorage.getItem('patients')) || [];
      patients.push({ ...formData, role });
      localStorage.setItem('patients', JSON.stringify(patients));
    } else {
      const doctors = JSON.parse(localStorage.getItem('doctors')) || [];
      doctors.push({ ...formData, role });
      localStorage.setItem('doctors', JSON.stringify(doctors));
    }

    alert('Registration successful');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

        <div className="flex justify-center gap-6 mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="role"
              value="patient"
              checked={role === 'patient'}
              onChange={() => setRole('patient')}
              className="mr-2"
            />
            Patient
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="role"
              value="doctor"
              checked={role === 'doctor'}
              onChange={() => setRole('doctor')}
              className="mr-2"
            />
            Doctor
          </label>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {role === 'patient' ? (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="form-input"
                required
              />
              <select
                name="gender"
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
              <input
                type="date"
                name="dob"
                placeholder="DOB"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="form-input"
                required
              />
            </>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Doctor Name"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="speciality"
                placeholder="Speciality"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="number"
                name="experience"
                placeholder="Experience (years)"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="number"
                name="fees"
                placeholder="Consultation Fees"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Clinic Address"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="form-input"
                required
              />
            </>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
