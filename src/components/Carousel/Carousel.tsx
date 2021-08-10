import React from 'react'
import img1 from '../../Assets/Images/Projects/calculator.png'
import img2 from '../../Assets/Images/Projects/web.tsx.png'
import './Carousel.scss'

const Carousel: React.FC = () => {
  return (
    <div className="Carousel">
      <h1>Projects</h1>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" id="carouselItems">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img1} alt="Third slide" />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
export default Carousel
