import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Input from './Input';


const Signin = () => {
    return <>
        <NavBar />
        <section className='signinWrapper'>
            <div className='signinContainer'>
                <form className="signinForm">
                    <div className='signinFormgroup'>
                        <label htmlFor="Name">Username</label>
                        <input type="text" name='name' placeholder='Username'/>
                    </div>

                    <div className='signinFormgroup'>
                        <label htmlFor="Password">Password</label>
                        <input type="Password" id='name' name='Password' placeholder='Password' />
                    </div>

                    <div className="signinsubmitBtn">
                        <input type="checkbox" name="Remember" value="Remember" />
                        <label htmlfor="Remember Me"> Remember Me</label>
                        <button type="submit" className="signinBtn">Sign in</button> 
                    </div>

                    <div class="signinsubmitBtn">
                        <label htmlfor="recover"><Link to="" className='signRecovery'>Lost your password? Click here to recover.</Link></label>
                        <label htmlfor="recover" className=""><span className="recover"> </span><Link to="/sign-up" className='signRecovery'>Dont have an account? Register Now.</Link></label>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
    </>;
};

export default Signin;
