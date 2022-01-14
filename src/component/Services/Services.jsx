import React from 'react'
import Workflow from '../WorkFlow/Workflow'
import './Services.css'

const Servicedata = [
  { img: 'images/home-repair1.png', header: 'Development', paragragh: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
  { img: 'images/sales.png', header: 'Sales Marketing', paragragh: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
  { img: 'images/banking.png', header: 'Brokerage', paragragh: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
]


const Services = () => {
  return (
    <>
      <div className='service_container'>
        <div className='color'>
          <Workflow header='Service' subHeader='How it works' />
        </div>


        <div className='Workflow_wrapper'>
          {Servicedata.map((service) =>
            <div className='services'>
              <img src={service.img} className='service_image' />
              <h3>{service.header}</h3>
              <p>{service.paragragh}</p>
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default Services
