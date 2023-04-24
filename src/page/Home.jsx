import React from 'react';
import Navbar from '../component/Navbar';

import '../styles/page-styles/Home.css'
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Outlet />
      </div>
    </>
  )
}

export default Home