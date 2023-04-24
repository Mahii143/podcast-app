import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        // Perform login logic with email and password
        // Example: send data to API, authenticate user, etc.
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/adminlogin', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            // Assuming the token is received as part of the response data
            // const token = data.token;
            
            // Update the token in the App.js component
            // updateToken(token);
            
            localStorage.setItem('session',data.token);
            localStorage.setItem('a2asdasdasddijanijands3uzmaomiaiaosods5pueoiasdj6aosnsdsakn',true);
            // console.log('token from login.js: ', localStorage.getItem('session'));

            navigate('/dashboard');
        } catch (error) {
            console.error('Error while logging in:', error);
        }
    };

    return (
        <div>
            <form>
                <h1> Sign In </h1>
                <div>
                    <label htmlFor="email-address">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <button
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </form>

            <p className="text-sm text-white text-center">
                No account yet?
                <Link to="/signup">
                    Sign up
                </Link>
            </p>

        </div>

    )
}

export default Login