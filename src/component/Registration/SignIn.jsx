import React from 'react';
import './Sign-in.css';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


const SignIn = () => {
  return <>
           <NavBar />
           <section className='registrationFolder'>
                <div className='registrationBody'>
                    <form action="" className="registrationForm">
                        <div className='formGroup'>
                            <label For="Name">Username</label>
                            <input type="text" id='username' name='name' />
                        </div>

                        <div className='formGroup'>
                            <label For="Password">Password</label>
                            <input type="Password" id='name' name='Password' />
                        </div>

                        <div class="signinsubmitBtn">
                            <input type="checkbox" id="Remember" name="Remember" value="Remember" />
                            <label for="" class="Remember"> Remember Me</label>
                            <input type="submit" class="SigninsubmitBtn" value="Sign in" />
                        </div>

                        <div class="submitBtn">
                            <label for="" className=""><Link to="" className='signRecovery'>Lost your password? Click here to recover.</Link></label>
                            <label for="" className=""><span class="recover"> </span><Link to="/sign-up" className='signRecovery'>Dont have an account? Register Now.</Link></label>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
  </>;
};

export default SignIn;
