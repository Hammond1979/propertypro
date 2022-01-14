import React from 'react'
import './About.css';

const About = () => {
    return (
        <>
            <div className='about-content'>
                <div className='About-container'>
                    <div className='Aboutimg'>
                    </div>
                </div>
                <div className='about-text'>
                    <span className='Sub-about'>
                        About Us
                    </span>
                    <h2 className='Sub-subheading'>
                        Oakberry A Real Estate Company
                    </h2>
                    <p className='about-paragragh'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <img src="images/about1.jpg" alt="" />

                </div>
            </div>
        </>
    )
}

export default About;
