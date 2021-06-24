import React from 'react'
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
        <a className="navbar-brand pl-3" href="/">
          <img className="logo" src={Logo} alt="Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
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
              <a className="nav-link pr-0" href="/">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link pr-0" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link pr-0" href="/about">
                About
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link pr-0" href="/cv">
                CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
