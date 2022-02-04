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
                <form action="" className="signinForm">
                    <div className='signinFormgroup'>
                        <label htmlFor="Name">Username</label>
                        <input type="text" name='name' />
                    </div>

                    <div className='signinFormgroup'>
                        <label htmlFor="Password">Password</label>
                        <input type="Password" id='name' name='Password' />
                    </div>

                    <div className="signinsubmitBtn">
                        <input type="checkbox" name="Remember" value="Remember" />
                        <label htmlfor=""> Remember Me</label>
                        <input type="submit" className="SigninsubmitBtn" value="Sign in" />
                    </div>

                    <div class="signinsubmitBtn">
                        <label htmlfor=""><Link to="" className='signRecovery'>Lost your password? Click here to recover.</Link></label>
                        <label for="" className=""><span class="recover"> </span><Link to="/sign-up" className='signRecovery'>Dont have an account? Register Now.</Link></label>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
    </>;
};

export default Signin;
