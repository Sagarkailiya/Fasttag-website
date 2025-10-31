import React, { useState } from 'react';
import { Circle, Zap } from 'lucide-react';

export default function FastagHeroSection() {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState(null);

 const mockVehicleData = [
  {
    reg_no: 'PY01MW8675',
    owner: 'JOHN DOE',
    model: 'PORCHE GDI DCT',
    fuel_type: 'PETROL',
    color: 'TITAN GREY',
    insurance_upto: '14/12/2024',
    rc_status: 'ACTIVE',
    recharge_status: 'Success',
    last_recharge_amount: 500,
    last_recharge_date: '2025-10-01',
  },
  {
    reg_no: 'KA03AB1234',
    owner: 'PRIYA SHARMA',
    model: 'SWIFT VXI',
    fuel_type: 'PETROL',
    color: 'PEARL WHITE',
    insurance_upto: '10/11/2024',
    rc_status: 'ACTIVE',
    recharge_status: 'Pending',
    last_recharge_amount: 300,
    last_recharge_date: '2025-10-03',
  },
  {
    reg_no: 'DL05CD6789',
    owner: 'AMIT VERMA',
    model: 'CRETA SX',
    fuel_type: 'DIESEL',
    color: 'PHANTOM BLACK',
    insurance_upto: '05/08/2025',
    rc_status: 'ACTIVE',
    recharge_status: 'Failed',
    last_recharge_amount: 250,
    last_recharge_date: '2025-10-02',
  }
];

 const handleProceed = () => {
  if (vehicleNumber.trim()) {
    const matchedVehicle = mockVehicleData.find(
      (vehicle) => vehicle.reg_no === vehicleNumber.trim().toUpperCase()
    );
    if (matchedVehicle) {
      setVehicleInfo(matchedVehicle);
    } else {
      alert('Vehicle not found in mock database');
      setVehicleInfo(null);
    }
  } else {
    alert('Please enter a vehicle number');
  }
};


  return (
    <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Recharge your FASTag online instantly with <br />
              Company Name
            </h1>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <Circle className="w-3 h-3 fill-teal-600 text-teal-600 flex-shrink-0" />
                <span>Multiple Payment Option</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <Circle className="w-3 h-3 fill-teal-600 text-teal-600 flex-shrink-0" />
                <span>Multiple Discounts & Offers for FASTag</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <Circle className="w-3 h-3 fill-teal-600 text-teal-600 flex-shrink-0" />
                <span>24×7 Customer Support</span>
              </li>
            </ul>
          </div>

          
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              
              <div className="bg-[#00CF7E] px-6 py-5 flex items-center justify-between">
                <label className="text-white font-semibold text-lg">
                  FASTag Recharge
                </label>
                
              </div>

              
              <div className="p-6">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Enter vehicle number"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                />

                <button
                  className="w-full bg-[#00CF7E] hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
                  onClick={handleProceed}
                >
                  Proceed
                </button>

                <small className="text-gray-700 flex items-center gap-1 mb-4">
                  <Zap className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  Get the best deals on FASTag Recharge
                </small>

               {vehicleInfo && (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-800">
    <p><strong>Owner:</strong> {vehicleInfo.owner}</p>
    <p><strong>Model:</strong> {vehicleInfo.model}</p>
    <p><strong>Fuel Type:</strong> {vehicleInfo.fuel_type}</p>
    <p><strong>Color:</strong> {vehicleInfo.color}</p>
    <p><strong>Insurance Valid Upto:</strong> {vehicleInfo.insurance_upto}</p>
    <p><strong>RC Status:</strong> {vehicleInfo.rc_status}</p>
    <p><strong>Recharge Status:</strong> {vehicleInfo.recharge_status}</p>
    <p><strong>Last Recharge:</strong> ₹{vehicleInfo.last_recharge_amount} on {vehicleInfo.last_recharge_date}</p>
  </div>
)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}