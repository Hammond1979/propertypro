import React, { useState} from 'react';
import './Signup.css';
import NavBar from '../NavBar/NavBar';
import { useDispatch } from "react-redux";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { setCurrentUser, signupError } from '../../slice/signupslice';

const url = 'http://localhost:3006/v1/signup'

const Signup = () => {
    let navigate = useNavigate ();
    const dispatch = useDispatch();
    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phoneNumber,setphoneNumber] = useState('');
    
        const data = {firstName, lastName, email, password, phoneNumber}
        // let collected = {
        //     firstname: addEventListener,
        //     lastName: onsubmit,
        // }
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(url, {...data})
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
            dispatch(signupError({ userError: err.response.data.message}));
        }
        // setfirstName(''); setlastName(''); setEmail(''); setPassword(''); setphoneNumber('')
    }

    return <>
        <NavBar />
        <section className='registrationWrapper'>
            <div className="registrationBody">
                    <h1 className="signuptitle">Register</h1>
                    <div className='formGroup'>
                        <input placeholder='firstName' htmlFor='firstName' 
                        name='firstName' type='text' value = {firstName} 
                        onChange= {(e) => setfirstName(e.target.value)}/>
                    </div>
                    <div className='formGroup'>
                        <input placeholder='lastName' htmlFor="lastName" 
                        name='lastName' type='text' value = {lastName} 
                        onChange= {(e) => setlastName(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                        <input placeholder="Email" htmlFor="email" 
                        name='email' type='email' value = {email} 
                        onChange= {(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                        <input placeholder="Password" htmlFor="password" 
                        name='password' type='password' value = {password} 
                        onChange= {(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                        <input placeholder="phoneNumber" htmlFor="phoneNumber" 
                        name='phoneNumber' type='phoneNumber' value = {phoneNumber } 
                        onChange= {(e) => setphoneNumber(e.target.value)}/>
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
