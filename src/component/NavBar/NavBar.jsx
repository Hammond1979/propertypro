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
                    <li className='list1' >
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className='list1'>ABOUT</li>
                    <li className='list1'>FOR SALE</li>
                    <li className='list1'>FOR RENT</li>
                    <li className='list1'>CONTACT US</li>
                    <li className='list1'>SERVICES</li>
                </ul>


                <div className={mobile ? "agent-wrapper_mobile" : "agent-wrapper"}>
                    <Link className='submit' to='/Signup'>Submit a property</Link>
                </div>

            </nav>
        </>
    )
}

export default NavBar
