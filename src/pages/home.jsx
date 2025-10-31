import React from 'react'
import FastagHeroSection from '../components/vehicleform/vehilenumber.jsx'
import BankProviderSection from '../components/bankprovider/bankprovider.jsx'
import FAQSection from '../components/faq/faq.jsx'
import FasttagCarousel  from '../components/carousel/carousel.jsx'


 const Home = () => {
  return (
    <>
      <FasttagCarousel/>

      <FastagHeroSection/>
      <BankProviderSection/>
      <FAQSection/>
    </>
    
    
  )
}
export default Home;


