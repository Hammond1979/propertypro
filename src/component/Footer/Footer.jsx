import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-container" >
                <div className='footer-header'>
                    <div className='footer-header-child'>
                        <span>Oakberry <small className='footer-logo'>real estate agency</small></span>
                    </div>
                    <p className='footer-header-paragraph'>A small river named Duden flows<br /> by their place and supplies it with<br /> the necessary regelialia.</p>

                    <div className="socialmedia">
                        <span className='socialmedia-icon'><i class="fa fa-facebook"></i></span>
                        <span className='socialmedia-icon'><i class="fa fa-twitter"></i></span>
                        <span className='socialmedia-icon'><i class="fa fa-instagram"></i></span>
                        <span className='socialmedia-icon'><i class="fa fa-linkedin"></i></span>
                    </div>
                </div>

                <div className='footer-body-list'>
                    <h1 >Offers</h1>
                    
                        <ul  >
                            <li className='footer_list'>
                                <span>Properties</span>
                            </li>
                            <li className='footer_list'>
                                <span>Agents</span>
                            </li>
                            <li className='footer_list'>
                                <span>Locations</span>
                            </li>
                            <li className='footer_list'>
                                <span>Client Support</span>
                            </li>
                        </ul>
                

                </div>

                <div className='footer-body-list'>
                    <h1 >Company</h1>
                    <ul >
                        <li className='footer_list'>
                            <span>Home</span>
                        </li>
                        <li className='footer_list'>
                            <span>About</span>
                        </li>
                        <li className='footer_list'>
                            <span>Blog</span>
                        </li>
                        <li className='footer_list'>
                            <span>Contact Us</span>
                        </li>
                    </ul>


                </div>

                <div className='footer-body-list'>
                    <h1 >Have a Questions?</h1>
                    <ul >
                        <li className='footer_list'>
                            <span className='footer-icon'><i class="icon fa fa-map marker"></i></span>
                            <span>10 Olaolu street,isolo,Lagos Nigeria.
                            </span>
                        </li>
                        <li className='footer_list'>
                            <span className="footer-icon"><i class="icon fa fa-phone"></i></span>
                            <span className='footer_details'>+234 807 771 6225 / 08026711306.</span>
                        </li>
                        <li className='footer_list'>
                            <span className="footer-icon"><i class="icon fa fa-envelope"></i></span>
                            <span className='footer_details'>iremifranco@gmail.com</span>
                        </li>
                    </ul>


                </div>

            </div>
            <div className='footer-copy-right'>
                <h3>©copyright 2021 | OAKBERRY
                    REAL ESTATE AGENCY. All Rights Reserved.</h3>
            </div>
        </>
    )
}



export default Footer;
