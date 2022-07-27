import React from 'react';
import './css/index.css';

function Login() {
    return (
        <div className="login">
            <div className="wrapper">
                <div className="logo">
                    <img src="/assets//welcone/logo.svg" alt="로고" />
                </div>
                <form className="login-contentw">
                    <div className="email-inp"></div>
                    <div className="password-inp"></div>
                </form>
            </div>
        </div>
    );
}

export default Login;
