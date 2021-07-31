import React from 'react'
import ProjectsComponent from '../components/Projects/ProjectsComponent'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Projects: React.FC = () => {
  return (
    <div className="Projects">
      <Navbar />
      <ProjectsComponent />
      <Footer />
    </div>
  )
}

export default Projects
