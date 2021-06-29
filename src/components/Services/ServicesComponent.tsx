import React from 'react'
import './Services.scss'
import SingleService from './SingleService'

let ServicesComponent = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>What I Do</h2>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites
              </p>
            </div>
          </div>
        </div>
        <div className="flex-box">
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
    </section>
  )
}
export default ServicesComponent
