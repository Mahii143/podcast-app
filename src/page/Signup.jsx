import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:3001/signup', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            //const data = await response.json();
            
            console.log("sign up successfull");

            navigate('/');

        } catch (error) {
            console.error('Error while logging in:', error);
        }
    }
    
    
    return (
        <div>
            <div>
                <h1> Sign Up </h1>
                <form>
                    <div>
                        <label htmlFor="user-name">
                            User Name
                        </label>
                        <input
                            type="text"
                            label="Email address"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="User Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email-address">
                            Email address
                        </label>
                        <input
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email address"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            label="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                    >
                        Sign up
                    </button>

                </form>

                <p>
                    Already have an account?{' '}
                    <Link to="/login" >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup