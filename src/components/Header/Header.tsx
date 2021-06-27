import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

let Header: React.FC = () => {
  return (
    <div className="Header" id="particles-js">
      <h1>Welcome to my personal website</h1>
      <h2>It's nice to meet you</h2>
      <Link className="tellBtn" to="/about">
        Tell me more
      </Link>
    </div>
  )
}
export default Header
