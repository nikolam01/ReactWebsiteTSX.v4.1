import React from 'react'
import './PortfolioComponent.scss'

//images
import responsiveDesign from '../../Assets/Images/Portofolio/responsive-design.jpg'
import digitalMarketing from '../../Assets/Images/Portofolio/digital-marketing.jpg'
import photography from '../../Assets/Images/Portofolio/photography.jpg'
import projectManagement from '../../Assets/Images/Portofolio/project-management.jpg'
import webDevelopment from '../../Assets/Images/Portofolio/web-development.jpg'
import graphicDesign from '../../Assets/Images/Portofolio/graphic-design.jpg'

//components
import PortfolioItem from './PortfolioItem'

let PortfolioComponent: React.FC = () => {
  return (
    <div className="PortfolioComponent">
      <h1>Portfolio</h1>
      <div className="PortfolioItems">
        <PortfolioItem
          image={responsiveDesign}
          alt="Responsive Design"
          text="Limitless Dimensions"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <PortfolioItem
          image={digitalMarketing}
          alt="Digital Marketing"
          text="Insanely higher Reach"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <PortfolioItem
          image={graphicDesign}
          alt="Graphic Design"
          text="Designing your apps"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <PortfolioItem
          image={photography}
          alt="Photography"
          text="Proffesional shots"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <PortfolioItem
          image={webDevelopment}
          alt="Web Development"
          text="Making digital products"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <PortfolioItem
          image={projectManagement}
          alt="Project Management"
          text="Coordinating your projects"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
      </div>
    </div>
  )
}
export default PortfolioComponent
