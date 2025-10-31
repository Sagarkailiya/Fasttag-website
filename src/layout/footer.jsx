import React from 'react';
import { MapPinCheck,Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/navbaricon/logo.webp'


const Footer = () => {
  return (
    <div className='flex  flex-col  bg-amber-300 p-4 '>
      {/* Top section: image left, list right */}
      <div className='flex justify-between items-start flex-col sm:flex-row'>
        {/* Left: Image */}
        <div>
          <img src={LogoImage} alt="ddcc" className='w-24 h-auto pb-5' />
        </div>

        <div>
         <h3 class="text-xl font-bold mb-2">Quick Links</h3>
          <ul className='space-y-2'>
            <Link to={'/termandcondition'} ><li>Terms & Conditions</li></Link>
            <Link to={'/privacypolicy'} ><li> Privacy Policy</li></Link>
            
          </ul>

        </div>


        {/* Right: List */}
       <div className=''>
  <h2 className="text-2xl font-semibold mb-2">Reach Us</h2>
  <ul className="space-y-2">
    <li className="flex items-center gap-2">
      <Mail className="w-5 h-5 text-gray-600" />
      <span>ops@FastTag.in</span>
    </li>
    <li className="flex items-center gap-2">
      <Mail className="w-5 h-5 text-gray-600" />
      <span>tech@FastTag.in</span>
    </li>
    <li className="flex items-start gap-2">
      <MapPinCheck className="w-5 h-5 text-gray-600 mt-1" />
      <span className=' w-60 text-wrap  '>
        Office No 15, Ground Floor, D-29, Sector 3, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301.
      </span>
    </li>
  </ul>
</div>

      </div>

      {/* Bottom section */}
      <div className='mt-6 text-center'>
        <div>
          <span>© 2025 FastTag.All rights reserved</span>
          <span></span>

        </div>
      </div>
    </div>
  );
};

export default Footer;