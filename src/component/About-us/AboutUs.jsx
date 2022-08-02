import React from 'react'
import { Link } from 'react-router-dom';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <>
            <div className='hero-section-container'>
                <h2 className='hero-section-tagline'>Find The Best Place For Living</h2>
                <p>
                    Find a variety of properties that suit you very easily,forget all difficulties in finding a residence for you.
                </p>
                <Link to='/property'><button className='button_About'>View All Properties</button>
                </Link>
            </div>
        </>
    )
}

export default AboutUs;

