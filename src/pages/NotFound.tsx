import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import FourOFour from '../components/404/BadRoute'
import Footer from '../components/Footer/Footer'

const NotFound: React.FC = () => {
  return (
    <div className="NotFound">
      <Navbar />
      <FourOFour />
      <Footer />
    </div>
  )
}
export default NotFound
