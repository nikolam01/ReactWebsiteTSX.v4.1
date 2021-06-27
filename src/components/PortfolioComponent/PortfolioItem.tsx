import React from 'react'

interface Props {
  image: string
  alt: string
  text: string
}

let PortfolioItem: React.FC<Props> = ({ image, alt, text }) => {
  return (
    <div className="card col-sm-4">
      <img className="card-img-top" src={image} alt={alt}></img>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}
export default PortfolioItem
