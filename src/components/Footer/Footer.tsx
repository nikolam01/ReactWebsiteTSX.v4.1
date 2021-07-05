import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <footer className="text-center text-white">
        <div className="container">
          <section id="socialMedia">
            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="fbBtn"
              type="button"
              to=""
              data-mdb-ripple-color="dark"
              onClick={(e) => {
                e.preventDefault()
                window.location.href =
                  'https://www.facebook.com/nikola.mirilo.5/'
              }}
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="mailBtn"
              to=""
              role="button"
              data-mdb-ripple-color="dark"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = 'mailto:nikolamirilo@gmail.com'
              }}
            >
              <i className="far fa-envelope"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="igBtn"
              to=""
              role="button"
              data-mdb-ripple-color="dark"
              onClick={(e) => {
                e.preventDefault()
                window.location.href =
                  'https://www.instagram.com/nikola.mirilo/'
              }}
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="lnBtn"
              to=""
              role="button"
              data-mdb-ripple-color="dark"
              onClick={(e) => {
                e.preventDefault()
                window.location.href =
                  'https://www.linkedin.com/in/nikola-mirilo/'
              }}
            >
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="ghBtn"
              to=""
              role="button"
              data-mdb-ripple-color="dark"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = 'https://github.com/nikolam01'
              }}
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
            to=""
            onClick={(e) => {
              e.preventDefault()
              window.location.href = 'mailto:nikolamirilo'
            }}
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
