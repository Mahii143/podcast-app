import React from 'react'
import '../styles/component-styles/Navbar.css';
import Signout from './Signout';

// import Signout from '../page/Signout';

const Navbar = () => {
  return (
    <nav className='navbar-nav'>
      <ul className='d-flex navbar-ul'>
        <span>uname: {localStorage.getItem('session').slice(0,10)}</span>
        <Signout/>
      </ul>
    </nav>
  );
}

export default Navbar;