import React from 'react'
import FastagHeroSection from '../components/vehicleform/vehilenumber.jsx'
import BankProviderSection from '../components/bankprovider/bankprovider.jsx'
import FAQSection from '../components/faq/faq.jsx'
import FasttagCarousel  from '../components/carousel/carousel.jsx'
import FastagBanner from '../components/about/about.jsx'
import FastagFullImage from '../components/bottomimage/bottom.jsx'


 const Home = () => {
  return (
    <>
      <FasttagCarousel/>

      <FastagHeroSection/>
      <BankProviderSection/>
      <FastagFullImage/>

      <FastagBanner/>
      <FAQSection/>
    </>
    
    
  )
}
export default Home;


