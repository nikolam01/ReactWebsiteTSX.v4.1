import React from 'react'

//component
import ContactForm from '../components/ContactForm/ContactForm'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  )
}
export default Contact
