import React, { useState } from 'react';
import './SignIn.css';
import NavBar from '../../component/NavBar/NavBar'
import Footer from '../../component/Footer/Footer'


const SignIn = () => {
    const [mobile, setMobile] = useState(false)
  return <>
           <NavBar />
           <section>
                <div className='container'>
                    <form action="" className="form">
                        <div className='form-group'>
                            <label For="Name">Username</label>
                            <input type="text" id='username' name='name' />
                        </div>

                        <div className='form-group'>
                            <label For="Password">Password</label>
                            <input type="Password" id='name' name='Password' />
                        </div>

                        <div class="signinsubmitBtn">
                            <input type="checkbox" id="Remember" name="Remember" value="Remember" />
                            <label for="" class="Remember"> Remember Me</label>
                            <input type="submit" class="SigninsubmitBtn" value="Sign in" />
                        </div>

                        <div class="signinsubmitBtn">
                            <label for="" className=""><a href="" className='signRecovery'>Lost your password? Click here to recover.</a></label>
                            <label for="" className=""><span class="recover"> </span><a href="/Signup" className='signRecovery'>Dont have an account? Register Now.</a></label>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
  </>;
};

export default SignIn;
