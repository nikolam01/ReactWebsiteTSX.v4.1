import React from 'react'
import './Services.scss'

interface ServiceProps {
  icon: string
  title: string
  text: string
}

const SingleService: React.FC<ServiceProps> = ({ icon, title, text }) => {
  return (
    <div id="SingleService" className="col-sm-4">
      <i className={icon} id="icon"></i>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
export default SingleService
