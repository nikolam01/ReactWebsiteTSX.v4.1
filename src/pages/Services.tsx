import React from 'react'
import ServicesComponent from '../components/Services/ServicesComponent'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const Services: React.FC = () => {
  return (
    <div className="Services">
      <Navbar />
      <ServicesComponent />
      <Footer />
    </div>
  )
}
export default Services
