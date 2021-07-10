import React from 'react'

//components
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import PortfolioComponent from '../components/Portfolio/PortfolioComponent'

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <PortfolioComponent />
      <Footer />
    </div>
  )
}
export default Home
