import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import AdminSignup from './page/AdminSignup';
import AdminLogin from './page/AdminLogin';
import Choose from './page/Choose';
import DashBoard from './page/Dashboard';
import ViewPodcast from './page/ViewPodcast';

import HomeScreen from './component/HomeScreen';
import Search from './component/Search';
import Library from './component/Library';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      if (localStorage.getItem('session')) {
        navigate('/');
      }
    };
    const intervalId = setInterval(() => {
      if (localStorage.getItem('session')) {
        navigate('/');
      }
    }, 600000);

    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', handleStorageChange);
    }

  }, [navigate]);

  // Conditionally render Login page if token is null
  if (localStorage.getItem('session') === null) {
    return (
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/*" element={<Home />}>
        <Route path="dashboard/*" element={<DashBoard />} >
          <Route path="home/" element={<HomeScreen />} />
          <Route path="home/:id" element={<ViewPodcast />} />
          <Route path="search/" element={<Search />} />
          <Route path="library/" element={<Library />} />
        </Route>
      </Route>
    </Routes>
  );
}


export default App;
