import React from 'react'

//components
import CvComponent from '../components/CV/CvComponent'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

let CV = () => {
  return (
    <div className="CV">
      <Navbar />
      <CvComponent />
      <Footer />
    </div>
  )
}
export default CV
