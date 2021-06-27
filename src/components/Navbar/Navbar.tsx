import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import Logo from '../../Assets/Images/Logo/Logo.png'

let Navbar = () => {
  return (
    <div className="Navbar">
      <nav
        className="navbar navbar-expand-lg navbar-light p-0"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Link className="navbar-brand pl-3" to="/">
          <img className="logo" src={Logo} alt="Logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars fa-1x"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
            id="navItems"
            style={{
              textAlign: 'right',
              marginLeft: 'auto',
              fontSize: '20px',
            }}
          >
            <li className="nav-item active">
              <Link className="nav-link pr-0" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link pr-0" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link pr-0" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link pr-0" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link pr-0" to="/cv">
                CV
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
