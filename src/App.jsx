import { useState } from 'react'
import './App.scss'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import OurServices from './pages/OurServices/OurServices'
import ManagementApproach from './pages/ManagementApproach/ManagementApproach'
import JoinUs from './pages/JoinUs/JoinUs'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <AboutUs />
      <OurServices />
      <ManagementApproach />
      <JoinUs />
      {/* <Footer /> */}
    </>
  )
}

export default App
