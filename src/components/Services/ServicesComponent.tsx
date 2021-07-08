import React from 'react'
import './Services.scss'
import SingleService from './SingleService'

const ServicesComponent: React.FC = () => {
  return (
    <div className="ServicesComponent">
      <h1>Services</h1>
      <div className="ServiceItems">
        <SingleService
          icon="fa fa-desktop"
          title="Unique design"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-desktop"
          title="Unique design"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-desktop"
          title="Unique design"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-desktop"
          title="Unique design"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-desktop"
          title="Unique design"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
        <SingleService
          icon="fa fa-desktop"
          title="Unique design"
          text="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites"
        />
      </div>
    </div>
  )
}
export default ServicesComponent
