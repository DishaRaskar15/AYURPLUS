import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-10">
      <div className="max-w-10xl w-full bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">About Ayurplus</h1>
        
        <p className="text-green-700 text-center mb-8 text-lg">
          Your Trusted Partner in Ayurvedic Healthcare
        </p>

        <div className="space-y-6 text-green-600">
          <p>
            <strong>Ayurplus</strong> is a revolutionary platform designed to bring the timeless wisdom of Ayurveda to your fingertips. 
            We aim to make healthcare more personalized, natural, and accessible for everyone. 
          </p>

          <p>
            Our team of certified Ayurvedic doctors and specialists are committed to providing authentic consultations, remedies, and treatments 
            that align with ancient traditions, blended with modern convenience.
          </p>

          <p>
            Whether you are seeking online consultations, booking appointments, purchasing trusted Ayurvedic medicines, 
            or exploring lifestyle advice — Ayurplus is your one-stop solution.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-green-100 rounded-xl p-6 shadow">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h2>
              <p>
                To make holistic, Ayurvedic healthcare accessible to every home through technology, compassion, and trusted expertise.
              </p>
            </div>

            <div className="bg-green-100 rounded-xl p-6 shadow">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Vision</h2>
              <p>
                To be the most trusted platform for natural healing, empowering healthier lives through the power of Ayurveda.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-green-600">
            🌿 Join us on a journey to better health, naturally!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
