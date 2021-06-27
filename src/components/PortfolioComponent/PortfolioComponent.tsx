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
        />
        <PortfolioItem
          image={digitalMarketing}
          alt="Digital Marketing"
          text="Insanely higher Reach"
        />
        <PortfolioItem
          image={graphicDesign}
          alt="Graphic Design"
          text="Designing your apps"
        />
        <PortfolioItem
          image={photography}
          alt="Photography"
          text="Proffesional shots"
        />
        <PortfolioItem
          image={webDevelopment}
          alt="Web Development"
          text="Making digital products"
        />
        <PortfolioItem
          image={projectManagement}
          alt="Project Management"
          text="Coordinating your projects"
        />
      </div>
    </div>
  )
}
export default PortfolioComponent
