import React from 'react'
import './Projects.scss'
import Card from '../Card/Card'

//images
import calculator from '../../Assets/Images/Projects/calculator.png'
import webSite from '../../Assets/Images/Projects/web.tsx.png'

const ProjectsComponent: React.FC = () => {
  return (
    <div className="ProjectsComponent">
      <h1>Projects</h1>
      <div className="Cards">
        <Card
          image={webSite}
          alt="Personl Website in React TypeScript"
          text="Personl Website in React TypeScript"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <Card
          image={calculator}
          alt="JavaScript calculator"
          text="JavaScript calculator"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <Card
          image={webSite}
          alt="Personl Website in React TypeScript"
          text="Personl Website in React TypeScript"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <Card
          image={calculator}
          alt="JavaScript calculator"
          text="JavaScript calculator"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />{' '}
        <Card
          image={webSite}
          alt="Personl Website in React TypeScript"
          text="Personl Website in React TypeScript"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
        <Card
          image={calculator}
          alt="JavaScript calculator"
          text="JavaScript calculator"
          onClick={(e: any) => {
            e.preventDefault()
            window.location.href = 'https://www.linkedin.com/in/nikola-mirilo/'
          }}
        />
      </div>
    </div>
  )
}
export default ProjectsComponent
