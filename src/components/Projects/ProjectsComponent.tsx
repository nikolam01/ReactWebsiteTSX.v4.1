import React from 'react'
import './Projects.scss'
import ProjectItem from './ProjectItem'
import responsiveDesign from '../../Assets/Images/Portofolio/responsive-design.jpg'
const ProjectsComponent: React.FC = () => {
  return (
    <div className="ProjectsComponent">
      <h1>Projects</h1>
      <ProjectItem
        image={responsiveDesign}
        alt="Responsive Design"
        text="Limitless Dimensions"
        onClick={(e: any) => {
          e.preventDefault()
          window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
        }}
      />
    </div>
  )
}
export default ProjectsComponent
