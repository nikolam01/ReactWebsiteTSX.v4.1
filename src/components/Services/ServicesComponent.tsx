import React from 'react'
import './Services.scss'
import SingleService from './SingleService'

const ServicesComponent: React.FC = () => {
  return (
    <div className="ServicesComponent">
      <h1>Services</h1>
      <div className="row" id="ServiceItems">
        <SingleService
          icon="fa fa-desktop"
          title="Unique design"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-bank"
          title="Diverse"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-car"
          title="Playful"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-globe"
          title="Lorem"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-lock"
          title="ProjectManagement"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-money"
          title="Mistify"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
      </div>
    </div>
  )
}
export default ServicesComponent
