import React from 'react'
import './About.css';

const About = () => {
    return (
        <>
            <div className='reference-container' id='about'>
                <div className='reference-image-header'>
                    <div className='reference_image'>
                    </div>
                </div>
                <div className='reference-text'>
                    <span className='reference-text-header'>
                        About Us
                    </span>
                    <h2 className='reference-text-subheading'>
                        Oakberry A Real Estate Company
                    </h2>
                    <p className='reference-text-paragragh'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <img src="images/about1.jpg" alt="" />

                </div>
            </div>
        </>
    )
}

export default About;
