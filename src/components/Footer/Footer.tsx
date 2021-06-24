import React from 'react'
import './Footer.scss'

let Footer = () => {
  return (
    <div className="Footer">
      <footer className="text-center text-white">
        <div className="container">
          <section id="socialMedia">
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="fbBtn"
              href="https://www.facebook.com/nikola.mirilo.5/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="mailBtn"
              href="mailto:nikolamirilo@gmail.com"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="far fa-envelope"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="igBtn"
              href="https://www.instagram.com/nikola.mirilo/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="lnBtn"
              href="https://www.linkedin.com/in/nikola-mirilo/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              id="ghBtn"
              href="https://github.com/nikolam01"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center text-body p-3" id="copyright">
          © 2021 Copyright: {''}
          <a
            className="text-body text-decoration-none"
            id="coprightName"
            href="mailto:nikolamirilo"
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            Nikola Mirilo
          </a>
        </div>
      </footer>
    </div>
  )
}
export default Footer
