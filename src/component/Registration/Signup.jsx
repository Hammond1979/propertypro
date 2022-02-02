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
        <section className='registrationWrappe'>
            <div className="registrationBody">
                <form action="" className='registrationForm'>
                    <h1 className="signuptitle">Register</h1>
                    <div className='formGroup'>
                        <Input placeholder='Name' htmlFor='name' name='name' type='text'/>
                    </div>
                    <div className='formGroup'>
                        <Input placeholder='Username' htmlFor="username" name='username' type='text' />
                    </div>
                    <div className="formGroup">
                            <Input placeholder="Email" htmlFor="email" name='email' type='email'/>
                        </div>
                        <div className="formGroup">
                        <Input placeholder="Password" htmlFor="password" name='password' type='password'/>   
                        </div>
                        <div className="formGroup">
                        <Input placeholder="Confirm" htmlFor="password" name='password' type='password'/>   
                        </div>
                    <div className='formGroup'>
                        <Input placeholder='Birthday' htmlFor="date" name='date' type='date' min="2003-01-01"/>
                    </div>
                    <div class="signinsubmitBtn">
                            <input type="checkbox" id="Remember" name="Remember" value="Remember" />
                            <label htmlfor="" class="Remember"> Remember Me</label>
                            <input type="submit" class="SigninsubmitBtn" value="Sign in" />
                        </div>
                    <div className='agentSignin'>
                            <span ><Link to="/sign-in" className="agentDetail">Already An Agent? Signin</Link></span>
                            <input type="submit" class="submitBtn" value="Signup" />
                        </div>
                </form>
            </div>
        </section>
        {/* <section className='registrationWrapper'>

            <div className="registrationBody">
                {registrationBody.map((detail) =>
                    <form action="" className="registrationForm">
                        <h1 className="signuptitle">Register</h1>

                        <div className="formGroup">
                            <label htmlfor="" className="label">{detail.name}</label>
                        </div>

                        <div className="formGroup">
                            <label htmlfor="date" className="label">Birthday</label>
                            <input type="date" class="input" placeholder="" min="2003-01-01" />

                        </div>
                        <div className='agentSignin'>
                            <span ><Link to="/sign-in" className="agentDetail">{detail.access}</Link></span>
                            <input type="submit" class="submitBtn" value="Signup" />
                        </div>
                    </form>
                )}
            </div>
        </section> */}
        <Footer />
    </>;
};

export default Signup;
