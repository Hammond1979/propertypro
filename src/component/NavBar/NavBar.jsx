import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



const NavBar = () => {
    const [mobile, setMobile] = useState(false)
    return (
        <>
            <nav className={mobile ? "nav_main_mobile" : " nav_main "}>
                <div className='nav_logo'>
                    <span className='navicon'><i class="fa fa-home"></i></span>
                    <span>Oakberry <small>real estate agency</small></span>
                </div>


                <div className="navigate" onClick={() => { setMobile(!mobile) }}>
                    <i className="fa fa-bars"></i>
                </div>


                <ul className={mobile ? "nav_list_mobile" : "nav_list"}>
                    <li className='nav_content' >
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className='nav_content'>ABOUT</li>
                    <li className='nav_content'>PROPERTIES</li>
                    <li className='nav_content'>CONTACT US</li>
                    <li className='nav_content'>SERVICES</li>
                </ul>


                <div className={mobile ? "agent-wrapper_mobile" : "agent-wrapper"}>
                    <Link className='submit' to='/Signup'>Submit a property</Link>
                </div>

            </nav>
        </>
    )
}

export default NavBar
