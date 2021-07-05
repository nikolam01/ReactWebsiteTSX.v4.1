import React from 'react'

interface Props {
  image: string
  alt: string
  text: string
  onClick: any
}

const PortfolioItem: React.FC<Props> = ({ image, alt, text, onClick }) => {
  return (
    <div className="card col-sm-4" onClick={onClick}>
      <img
        className="card-img-top"
        style={{ cursor: 'pointer' }}
        src={image}
        alt={alt}
      ></img>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}
export default PortfolioItem
