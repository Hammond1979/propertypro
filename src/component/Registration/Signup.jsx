import React, { useState} from 'react';
import './Signup.css';
import NavBar from '../NavBar/NavBar';
import { useDispatch } from "react-redux";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import env from "react-dotenv";
import swal from 'sweetalert';
import axios from 'axios';
import { setCurrentUser, signupError } from '../../slice/signupslice';


const Signup = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const defaultdata = {
        firstName:"", 
        lastName:"", 
        email:"", 
        password:"", 
        phoneNumber:"",
    };
    
    const [data, setData] = useState(defaultdata);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
      };
        
        
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {...data})
            const {createdToken} = response.data;
            console.log(createdToken)
            localStorage.setItem('data', JSON.stringify(createdToken))
            navigate('/dashboard');
            swal({
                title: `Hello, ${response.data.user.firstName}`,
                text: response.data.message,
                icon: "success",
                button: "Okay",
              });
              dispatch(setCurrentUser({ currentUser: response.data.user}))
        } catch (err) {
            console.log(err)
            // dispatch(signupError({ userError: err.response.data.message}));
        }
    }

    return <>
        <NavBar />
        <section className='registrationWrapper'>
            <div className="registrationBody">
                    <h1 className="signuptitle">Register</h1>
                    <div className='formGroup'>
                        <input placeholder='firstName' htmlFor='firstName' 
                        name='firstName' type='text' value = {data.firstName} 
                        onChange= {handleChange}/>
                    </div>
                    <div className='formGroup'>
                        <input placeholder='lastName' htmlFor="lastName" 
                        name='lastName' type='text' value = {data.lastName} 
                        onChange= {handleChange}/>
                    </div>
                    <div className="formGroup">
                        <input placeholder="Email" htmlFor="email" 
                        name='email' type='email' value = {data.email} 
                        onChange= {handleChange}/>
                    </div>
                    <div className="formGroup">
                        <input placeholder="Password" htmlFor="password" 
                        name='password' type='password' value = {data.password} 
                        onChange= {handleChange}/>
                    </div>
                    <div className="formGroup">
                        <input placeholder="phoneNumber" htmlFor="phoneNumber" 
                        name='phoneNumber' type='phoneNumber' value = {data.phoneNumber} 
                        onChange= {handleChange}/>
                    </div>
                    <div className='agentSignin'>
                        <span ><Link to="/signin" className="agentDetail">Already An Agent? Signin</Link></span>
                        <button class="submitBtn"  onClick={submitHandler}>submit</button>                   
                 </div>
            </div>
        </section>
        <Footer />
    </>
};

export default Signup;
