import React from 'react';
import './Signup.css'


const Signup = () => {
  return <>
            <section>
                <div className="container">
                    <form action="" className="form">
                        <h1 className="signuptitle">Register</h1>

                        <div className="form-group ">
                            <label for="" className="label">Name</label>
                            <input type="text" className="input" placeholder="" />

                        </div>

                        <div className="form-group">
                            <label for="" className="label">Username</label>
                            <input type="text" class="input" placeholder="" />

                        </div>

                        <div className="form-group">
                            <label for="Email" className="label">Email</label>
                            <input type="Email" class="input" placeholder="" />

                        </div>

                        <div className="form-group">
                            <label for="Password" className="label">Password</label>
                            <input type="Password" className="input" placeholder="" />

                        </div>

                        <div className="form-group">
                            <label for="Password" className="label">Confirm Password</label>
                            <input type="Password" className="input" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label for="date" className="label">Birthday</label>
                            <input type="date" class="input" placeholder="a" min="2003-01-01" />

                        </div>
                        <div className='Agent-details'>
                        <span ><a href="/Signin" className="Agent">Already An Agent? Signin</a></span>
                            <input type="submit" class="submitBtn" value="Sign up" />
                        </div>
                    </form>
                </div>
            </section>

  </>;
};

export default Signup;
