import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

let Footer = () => {
  return (
    <div className="Footer">
      <footer className="text-center text-white">
        <div className="container">
          <section id="socialMedia">
            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="fbBtn"
              to="https://www.facebook.com/nikola.mirilo.5/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="mailBtn"
              to="mailto:nikolamirilo@gmail.com"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="far fa-envelope"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="igBtn"
              to="https://www.instagram.com/nikola.mirilo/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="lnBtn"
              to="https://www.linkedin.com/in/nikola-mirilo/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="ghBtn"
              to="https://github.com/nikolam01"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </Link>
          </section>
        </div>
        <div className="text-center text-body p-3" id="copyright">
          © 2021 Copyright: {''}
          <Link
            className="text-body text-decoration-none"
            id="coprightName"
            to="mailto:nikolamirilo"
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            Nikola Mirilo
          </Link>
        </div>
      </footer>
    </div>
  )
}
export default Footer
