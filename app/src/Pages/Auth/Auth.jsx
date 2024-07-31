import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import LoginImage2 from "../../Assets/loginimage_2.svg";
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    // const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleBackHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="auth-container">
            <div className="auth-container-in">
                <div className="auth-container-in-one">
                    <img src={LoginImage2} className='LoginImage' alt="Auth" />
                </div>
                <div className="auth-container-in-two">
                    <div className="auth-form">
                        <div className="auth-form-heading">
                            <h1>{isLogin ? 'Login' : 'Create an Account'}</h1>
                        </div>
                        {isLogin ? (
                            <form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" required />
                                </div>
                                <button type="submit">Login</button>
                                <p>Don't have an account? <span onClick={toggleForm}>Register here</span></p>
                            </form>
                        ) : (
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" required />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" required />
                                </div>
                                <button type="submit">Register</button>
                                <p>Already have an account? <span onClick={toggleForm}>Login here</span></p>
                            </form>
                        )}
                        <button onClick={handleBackHome} className="back-home-button">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;