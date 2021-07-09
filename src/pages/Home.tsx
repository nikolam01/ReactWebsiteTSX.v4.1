import React from 'react'

//components
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ServicesComponent from '../components/Services/ServicesComponent'

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
