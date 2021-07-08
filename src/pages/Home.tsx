import React from 'react'

//components
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ServicesComponent from '../components/Services/ServicesComponent'
import Footer from '../components/Footer/Footer'

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <ServicesComponent />
      <Footer />
    </div>
  )
}
export default Home
