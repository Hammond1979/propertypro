import React from 'react';
import './Signup.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


const registrationBody =[
{name:'Name'},
{name:'Username'},
{name:'Email'},
{name:'Password'},
{name:'Confirm Password'}
]

const Signup = () => {
  return <>
           <NavBar />
            <section className='registrationFolder'> 
                <div className="registrationBody">
                    <form action="" className="registrationForm">
                        <h1 className="signuptitle">Register</h1>
                      
                       <div className="formGroup">
                            <label for="" className="label">{detail.name}</label>
                        </div>
                        
                        <div className="formGroup">
                            <label for="date" className="label">Birthday</label>
                            <input type="date" class="input" placeholder="a" min="2003-01-01" />

                        </div>
                        <div className='agentSignin'>
                        <span ><Link to="/sign-in" className="agent">Already An Agent? Signin</Link></span>
                            <input type="submit" class="submitBtn" value="Sign up" />
                        </div>
                    </form>

                    {registrationBody.map((detail) =>
                     <label for="" className="label">{detail.name}</label>
                    )}
                </div>
            </section>
        <Footer />
  </>;
};

export default Signup;
