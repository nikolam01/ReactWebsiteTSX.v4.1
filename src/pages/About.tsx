import React from 'react'

//components
import Me from '../components/Me/Me'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const About: React.FC = () => {
  return (
    <div className="About">
      <Navbar />
      <Me />
      <Footer />
    </div>
  )
}
export default About
