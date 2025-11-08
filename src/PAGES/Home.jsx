import React from 'react';
import HeaderH from '../COMPONENTS/HeaderH';
import SpecialityMenu from '../COMPONENTS/SpecialityMenu';
import TopDoctors from '../COMPONENTS/TopDoctors';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="animate-fadeInUp">
        <HeaderH />
      </div>
      <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <SpecialityMenu/>
      </div>
      <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
        <TopDoctors/>
      </div>
    </div>
  );
};

export default Home;
