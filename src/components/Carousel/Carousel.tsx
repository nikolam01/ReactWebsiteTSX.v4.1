import React from 'react'

interface Props {
  image: string
}

const Carousel: React.FC<Props> = ({ image, imageAlt }) => {
  return (
    <div className="Carousel">
      <div className="carousel-item">
        <img className="d-block w-100" src={image} alt={imageAlt} />
      </div>
    </div>
  )
}
export default Carousel
