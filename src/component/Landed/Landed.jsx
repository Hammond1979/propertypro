import React from 'react'
import './Landed.css'

const Landdata = [
  {img:'images/house1.png'},
  {img:'images/house2.png'},
  {img:'images/house3.png'},
  {img:'images/house4.png'},
  {img:'images/house5.png'},
  {img:'images/house6.png'}
]

const Landed = () => {
  return (
    <>
          <div className='Landdata'>
          <h1 className="land-heading">Find your next place to live</h1>
          <div className="land-child">


            {Landdata.map((hero) =>

                      <img src={hero.img} className='Land-image'/>
          
     
              )}
              </div>

          </div>
       
     
    </>
  )
}

export default Landed;

