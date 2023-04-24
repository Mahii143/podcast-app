import React from 'react'
import '../styles/component-styles/Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <nav className='d-flex side-bar'>
                <h1>LOGO</h1>
                <ul className='side-bar-ul'>
                    <li><Link to="./home">Home</Link></li>
                    <li><Link to="./search">Search</Link></li>
                    <li><Link to="./library">Your Library</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar