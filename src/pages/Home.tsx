import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

//components
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import PortfolioComponent from '../components/Portfolio/PortfolioComponent'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1400))
      setLoading((loading) => !loading)
    }
    loadData()
  }, [])
  if (loading) {
    return (
      <div
        style={{
          backgroundColor: 'black',
          color: '#ffe107',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Loader
          type="TailSpin"
          color="#ffe107"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
      </div>
    )
  } else {
    return (
      <div className="Home">
        <Navbar />
        <Header />
        <PortfolioComponent />
        <Footer />
      </div>
    )
  }
}
export default Home
