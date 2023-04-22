import React from 'react';
import Profile from './Profile';
// import { Navigate } from 'react-router-dom';
import Navbar from '../component/Navbar';


const Home = () => {
  return (
    <div>Home
      <Navbar/>
      <Profile />
    </div>
  )
}

export default Home