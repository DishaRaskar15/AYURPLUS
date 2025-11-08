import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './PAGES/Home';
import Doctor from './PAGES/Doctors';
import Login from './PAGES/Login';
import About from './PAGES/About';
import Contact from './PAGES/Contact';
import MyProfile from './PAGES/MyProfile';
import MyAppointments from './PAGES/MyAppointments';
import Appointments from './PAGES/Appointments';
import Navbar from './COMPONENTS/Navbar';
import HeaderH from './COMPONENTS/HeaderH';
import SpecialityMenu from './COMPONENTS/SpecialityMenu';
import TopDoctors from './COMPONENTS/TopDoctors';
import AppContext from './context/AppContext';
import Footer from './COMPONENTS/Footer';
import Medicine from './PAGES/Medicine';
import Payment from './PAGES/Payment';
import Register from './PAGES/register';
import DoctorDashboard from './PAGES/DoctorsDashboard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Navbar stays fixed across all pages */}
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctor />} />
          <Route path='/doctors/:speciality' element={<Doctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/myappointments' element={<MyAppointments />} />
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/medicine' element={<Medicine />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/register' element={<Register />} />
          <Route path='/DoctorsDashboard' element={<DoctorDashboard />} />
        </Routes>
      </main>

      {/* ✅ Optional Footer across pages */}
      <Footer />
    </div>
  );
};

export default App;
