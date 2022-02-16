import React from 'react';
import './Signup.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import Input from './Input';


const registrationBody = [
    { name: 'Name' },
    { name: 'Username' },
    { name: 'Email' },
    { name: 'Password' },
    { name: 'Confirm Password' }
]

const Signup = () => {
    return <>
        <NavBar />
        <section className='registrationWrapper'>
            <div className="registrationBody">
                <form action="" className='registrationForm'>
                    <h1 className="signuptitle">Register</h1>
                    <div className='formGroup'>
                        <Input placeholder='Name' htmlFor='name' name='name' type='text' />
                    </div>
                    <div className='formGroup'>
                        <Input placeholder='Username' htmlFor="username" name='username' type='text' />
                    </div>
                    <div className="formGroup">
                        <Input placeholder="Email" htmlFor="email" name='email' type='email' />
                    </div>
                    <div className="formGroup">
                        <Input placeholder="Password" htmlFor="password" name='password' type='password' />
                    </div>
                    <div className="formGroup">
                        <Input placeholder="Confirm" htmlFor="password" name='password' type='password' />
                    </div>
                    <div className='formGroup'>
                        <Input placeholder='Birthday' htmlFor="date" name='date' type='date' min="2003-01-01" />
                    </div>
                    <div className='agentSignin'>
                        <span ><Link to="/sign-in" className="agentDetail">Already An Agent? Signin</Link></span>
                        <input type="submit" class="submitBtn" value="Signup" />
                    </div>
                </form>
            </div>
        </section>
        <Footer />
    </>;
};

export default Signup;
