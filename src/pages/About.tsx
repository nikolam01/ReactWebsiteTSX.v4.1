import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

//components
import Me from '../components/Me/Me'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const About: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000))
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
          fontSize: '30px',
          fontFamily: "'Quicksand', sans-serif",
          transform: 'rotate(720deg)',
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
      <div className="About">
        <Navbar />
        <Me />
        <Footer />
      </div>
    )
  }
}
export default About
