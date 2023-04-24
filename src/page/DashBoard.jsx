import React from 'react';
import '../styles/page-styles/DashBoard.css'
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Sidebar.jsx';
// import { Routes, Route } from 'react-router-dom';
// import HomeScreen from '../component/HomeScreen.jsx';
// import Error from '../component/Error.jsx';

const DashBoard = () => {

  return (
    <main className='d-flex'>
      <Sidebar />
      <div className="dashboard-container d-flex">
        <Outlet />
      </div>
    </main>
  );
}

export default DashBoard;