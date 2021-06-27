import React from 'react'
import './CvComponent.scss'
import cvImg from '../../Assets/Images/CV/cv.webp'

let CvComponent: React.FC = () => {
  return (
    <div className="CvComponent">
      <img className="cvImg" alt="CV" src={cvImg}></img>
    </div>
  )
}
export default CvComponent
