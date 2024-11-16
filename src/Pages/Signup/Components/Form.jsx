import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Signup.css';

function Form() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [state, setState] = useState('');

    const indianStates = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Lakshadweep",
        "Delhi (National Capital Territory)",
        "Puducherry (Pondicherry)",
        "Ladakh",
        "Jammu and Kashmir"
    ];
    
    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value)
    }

    function handleState(e) {
        setState(e.target.value)
    }

    const clickSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const userData = { username, email, password, state };

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
                    <label htmlFor="state">Location:</label>
                    <select 
                        id="state" 
                        name="state" 
                        className="form-select"
                        value={state}
                        onChange={handleState}
                        required
                    >
                        <option value="">Select your location</option>
                        {indianStates.map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
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