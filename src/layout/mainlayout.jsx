import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './navBar';
import Footer from './footer';

const Mainlayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <main className="grow bg-white pt-0" >
        <Outlet>

        </Outlet>
      </main>
      <Footer/>
    </div>
  )
}

export default Mainlayout