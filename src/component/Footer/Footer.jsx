import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-section" >
                <div className='footer4'>
                    <div className='footer1'>
                        <span>Oakberry <small className='small'>real estate agency</small></span>
                    </div>
                    <p>A small river named Duden flows<br /> by their place and supplies it with<br /> the necessary regelialia.</p>

                    <div className="Socialmedia">
                        <span className='square1'><i class="fa fa-facebook"></i></span>
                        <span className='square1'><i class="fa fa-twitter"></i></span>
                        <span className='square1'><i class="fa fa-instagram"></i></span>
                        <span className='square1'><i class="fa fa-linkedin"></i></span>
                    </div>
                </div>

                <div className='footer2'>
                    <h1>Offers</h1>
                    <ul >
                        <li className='unstyled'>
                            <span>Properties</span>
                        </li>
                        <li className='unstyled'>
                            <span>Agents</span>
                        </li>
                        <li className='unstyled'>
                            <span>Locations</span>
                        </li>
                        <li className='unstyled'>
                            <span>Client Support</span>
                        </li>
                    </ul>


                </div>

                <div className='footer2'>
                    <h1>Company</h1>
                    <ul >
                        <li className='unstyled'>
                            <span>Home</span>
                        </li>
                        <li className='unstyled'>
                            <span>About</span>
                        </li>
                        <li className='unstyled'>
                            <span>Blog</span>
                        </li>
                        <li className='unstyled'>
                            <span>Contact Us</span>
                        </li>
                    </ul>


                </div>

                <div className='footer2'>
                    <h1>Have a Questions?</h1>
                    <ul >
                        <li className='unstyled'>
                            <span className='square2'><i class="icon fa fa-map marker"></i></span>
                            <span>10 Olaolu street,isolo,Lagos Nigeria.
                            </span>
                        </li>
                        <li className='unstyled'>
                            <span className="square2"><i class="icon fa fa-phone"></i></span>
                            <span className='footer_details'>+234 807 771 6225 / 08026711306.</span>
                        </li>
                        <li className='unstyled'>
                            <span className="square2"><i class="icon fa fa-envelope"></i></span>
                            <span className='footer_details'>iremifranco@gmail.com</span>
                        </li>
                    </ul>


                </div>

            </div>
            <div className='right'>
                <h3>©copyright 2021 | OAKBERRY
                    REAL ESTATE AGENCY. All Rights Reserved.</h3>
            </div>
        </>
    )
}



export default Footer;
