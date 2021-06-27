import React from 'react'

//components
import PortfolioComponent from '../components/PortfolioComponent/PortfolioComponent'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

let Portfolio: React.FC = () => {
  return (
    <div className="Portfolio">
      <Navbar />
      <PortfolioComponent />
      <Footer />
    </div>
  )
}
export default Portfolio
