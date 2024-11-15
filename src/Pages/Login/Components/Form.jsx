import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    async function clickLogin(e) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });

            alert(response.data.message);

            const token = response.data.token; 
            if (token) { 
                localStorage.setItem('token', token);
            } else {
                alert('No token received, login failed');
            }

            navigate('/Home');
        } catch (error) {
            console.error('Error during login:', error);
            alert(error.response?.data?.message || 'Login failed');
        }
    }

    return (
        <div id="signup-body">
            <div className="signup-container">
                <h2 style={{ fontSize: '35px', fontFamily: "'Yanone Kaffeesatz', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight: 400 }}>SAKTHI SAADHAK</h2>

                <h3 style={{ fontFamily: 'sans-serif' }}>Log in</h3>
                <form id="login-form" onSubmit={clickLogin}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                            required
                        />
                    </div>
                    <button type="submit" className="signup-button">Login</button>
                </form>
                <div className="info">
                    <p>Don't have an account? <a href="/Signup">Sign up</a></p>
                    <p><a href="/Forgot">Forgot Password?</a></p>
                </div>
            </div>
        </div>
    );
}

export default Form;
