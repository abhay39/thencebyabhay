import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FAQS from '../components/FAQS'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FAQS />
      <Footer />
    </main>
  )
}

export default HomePage