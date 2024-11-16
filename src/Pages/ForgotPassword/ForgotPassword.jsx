import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, Loader2 } from 'lucide-react';
import axios from 'axios';
import './ForgotPassword.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const response = await axios.post('https://sakthi-saadak-backend.onrender.com/forgot-password', {
                email
            });
            setMessage(response.data.message || 'Reset link sent to your email!');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Failed to process request');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div id="forgot-password-body">
            <div className="forgot-password-container">
                <h2 className="title">SAKTHI SAADHAK</h2>

                <div className="forgot-password-header">
                    <h3>Reset Password</h3>
                    <p>
                        Enter your email address and we'll send you instructions to reset your password.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-container">
                            <Mail className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    {message && (
                        <div className={`message ${message.includes('Failed') ? 'error' : 'success'}`}>
                            {message}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <Loader2 className="spinner" />
                        ) : (
                            'Send Reset Instructions'
                        )}
                    </button>
                </form>

                <div className="back-link">
                    <button
                        onClick={() => navigate('/login')}
                        className="back-button"
                    >
                        <ArrowLeft />
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword