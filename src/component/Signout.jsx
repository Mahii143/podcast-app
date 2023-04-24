import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
    const navigate = useNavigate();

    return (
        <button className="button-23" onClick={() => {
            localStorage.clear();
            navigate('/');
        }}>
            Logout
        </button>
    )
}

export default Signout;