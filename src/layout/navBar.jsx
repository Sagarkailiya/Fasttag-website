import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Wallet from '../assets/navbaricon/wallet.png';
import Profile from '../assets/navbaricon/profile.png';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/navbaricon/logo.webp'



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen(!isOpen);
  const handleItemClick = () => setIsOpen(false);

  return (
    <div className='flex sticky top-0 z-50 bg-amber-300 justify-between items-center w-full p-2'>
      <Link to='/' >
      <img src={LogoImage} alt="logo" className='w-24 h-auto' />
      </Link>
      

      <div className='flex items-center gap-2'>
         <Link to={"/signin"} >
         <img src={Wallet} alt="Wallet" width={35} />
         </Link>
        
        <Link to={"/signin"} >
        <img src={Profile} alt="User" width={35} className='hidden sm:block' />
        </Link>
        

        <button className='sm:hidden text-3xl cursor-pointer' onClick={handleMenuClick}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white shadow-lg p-4 z-50
                    transition-transform duration-300 ease-in-out transform ${
                      isOpen ? 'translate-x-0' : 'translate-x-full'
                    } sm:hidden`}
      >
         <div className='flex justify-between'>
          <Link to='/' >
      <img src="" alt="logo" className='w-24 h-auto' />
      </Link>
    <button onClick={() => setIsOpen(false)} className='text-3xl cursor-pointer '>
      <HiX />
    </button>
  </div>

        <ul className='flex flex-col gap-4 mt-16'>
          <Link to={'/'}> <li className='text-lg font-semibold' onClick={handleItemClick}>Home</li></Link>
          
          
          <Link to={"/signin"} ><li className='text-lg font-semibold' onClick={handleItemClick}>Profile</li></Link>
          
          <li className='text-lg font-semibold' onClick={handleItemClick}>Wallet</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;