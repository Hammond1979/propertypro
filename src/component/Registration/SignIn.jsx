import React from 'react';
import { Link } from 'react-router-dom'; 
import './Signin.css';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Input from './Input';


const SignIn = () => {
  return <>
           <NavBar />
           <section className='registrationWrapper'>
                <div className='registrationBody'>
                    <form action="" className="registrationForm">
                        <Input/>
                    </form>
                </div>
            </section>
            <Footer />
  </>;
};

export default SignIn;
