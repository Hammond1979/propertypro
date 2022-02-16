import React from 'react'
import './Landed.css'

const herosection = [
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
          <div className='herosection'>
          <h1 className="herosection-header">Find your next place to live</h1>
          <div className="heroimage-container">


            {herosection.map((hero) =>

                      <img src={hero.img} className='hero_image'/>
          
     
              )}
              </div>

          </div>
       
     
    </>
  )
}

export default Landed;

