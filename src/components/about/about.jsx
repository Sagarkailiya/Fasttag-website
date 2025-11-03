import React from 'react';
import Fasttag from '../../assets/fasttag.jpg'

const FastagBanner = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
      
      
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-bold text-blue-600">Company Name</span>, your trusted platform for FASTag recharge.
          We make it easy for vehicle owners to recharge their FASTag quickly and securely from anywhere.
        </p>
        <p className="text-gray-700">
          Our goal is to save your time at toll plazas by providing a smooth recharge experience with multiple payment options.
          With reliable service, exciting offers, and dedicated support, we are here to make your travel easier and more convenient.
        </p>
      </div>

      {/* Right Section: FASTag Card */}
       <div className="md:w-1/2 flex justify-center">
        <img 
          src={Fasttag} 
          alt="FASTag" 
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default FastagBanner;