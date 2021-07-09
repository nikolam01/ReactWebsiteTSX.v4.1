import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import Logo from '../../Assets/Images/Logo/Logo.png'

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <nav
        className="navbar navbar-expand-lg navbar-light p-0"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <NavLink className="navbar-brand pl-3" to="/">
          <img className="logo" src={Logo} alt="Logo"></img>
        </NavLink>
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
              <NavLink className="nav-link pr-0" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link pr-0" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link pr-0" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link pr-0" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link pr-0" to="/cv">
                CV
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
