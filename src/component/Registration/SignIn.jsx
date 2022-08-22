import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import env from "react-dotenv";
import axios from 'axios';

  
const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const data = {email, password}
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            console.log(data)
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {...data})
        } catch (err) {
            console.log(err)
        }
         setEmail(''); setPassword(''); 
    }

    return <>
        <NavBar />
        <section className='signinWrapper'>
            <div className='signinContainer'>
                    <div className='signinFormgroup'>
                        <label htmlFor="Name">Email</label>
                        <input placeholder="Email" htmlFor="email" 
                        name='email' type='email' value = {email} 
                        onChange= {(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className='signinFormgroup'>
                        <label htmlFor="Password">Password</label>
                        <input placeholder="Password" htmlFor="password" 
                        name='password' type='password' value = {password} 
                        onChange= {(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="signinsubmitBtn">
                        <input type="checkbox" name="Remember" value="Remember" />
                        <label htmlfor="Remember Me"> Remember Me</label>
                        <button type="submit" className="signinBtn" onClick={submitHandler}><Link to='/dashboard'>Sign in</Link></button>                
                    </div>

                    <div class="signinsubmitBtn">
                        <label htmlfor="recover"><Link to="" className='signRecovery'>Lost your password? Click here to recover.</Link></label>
                        <label htmlfor="recover" className=""><span className="recover"> </span><Link to="/signup" className='signRecovery'>Dont have an account? Register Now.</Link></label>
                    </div>
            </div>
        </section>
        <Footer />
    </>;
};

export default SignIn;
