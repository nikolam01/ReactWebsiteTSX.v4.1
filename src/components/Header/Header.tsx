import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'

let Header = () => {
  return (
    <div className="Header" id="particles-js">
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      />
      <h1>Welcome to my personal website</h1>
      <h2>It's nice to meet you</h2>
      <Link className="tellBtn" to="/contact">
        Tell me more
      </Link>
    </div>
  )
}
export default Header
