import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FrontCardPage from '../components/FrontCardPage'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      
      <Navbar/>
      <div className='space-y-8'>
      <Banner/>
      </div>
      
      <FrontCardPage/>
      <Footer/>
   
    </>
  )
}

export default Home
