import React from 'react'
import './Services.scss'

interface ServiceProps {
  icon: string
  title: string
  text: string
}

const SingleService: React.FC<ServiceProps> = ({ icon, title, text }) => {
  return (
    <div className="col-sm-6 col-lg-4" id="SingleService">
      <div className="feature-box-1">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="feature-content">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
export default SingleService
