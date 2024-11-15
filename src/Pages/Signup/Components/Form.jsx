import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

function Form(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [postalCode, setPostalCode] = useState('');

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleConfirmPassword(e){
        setConfirmPassword(e.target.value)
    }

    function handlePostalCode(e){
        setPostalCode(e.target.value)
    }

    const clickSignup = async (e) => {
        e.preventDefault(); 

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const userData = { username, email, password, postalCode };

        try {
            const response = await axios.post('http://localhost:5000/signup', userData);

            const { token } = response.data; 
            localStorage.setItem('token', token);
            
            Navigate('/Home')

        } catch (error) {
            alert("Error during signup. Try again");
            console.error('Error during signup:', error.response.data);
        }
    };

    return (
        <div className="signup-container">        
            <h2 style={{ fontSize: '35px', fontFamily: "'Yanone Kaffeesatz', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight: 400 }}>SAKTHI SAADHAK</h2>
        
            <h3 style={{ fontFamily: 'sans-serif' }}>Sign-up</h3>
            <form id="signup-form" onSubmit={clickSignup}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handleUsername} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleEmail} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handlePassword} required />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" onChange={handleConfirmPassword} required />
                </div>
                <div>
                    <label htmlFor="postal-code">Postal Code:</label>
                    <input type="text" id="postal-code" name="postal-code" onChange={handlePostalCode} required />
                </div>
                <button type="submit" className="signup-button">Signup</button>
            </form>
            <div className="info">
                <p>Already have an account? <a href="/Login">Login</a></p>
            </div>
        </div>
    );
}

export default Form;
