import React from 'react'

//components
import PortfolioComponent from '../components/Portfolio/PortfolioComponent'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Portfolio: React.FC = () => {
  return (
    <div className="Portfolio">
      <Navbar />
      <PortfolioComponent />
      <Footer />
    </div>
  )
}
export default Portfolio
