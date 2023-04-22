import React from 'react';
import Navbar from '../component/Navbar';
import Container from './Container';
import '../styles/page-styles/DashBoard.css'

const DashBoard = () => {
    const email = localStorage.getItem('Email');
    // console.log(email);
  return (
    <main className='d-flex'>
        <Navbar name={email} />
        <Container/>
    </main>
  );
}

export default DashBoard;