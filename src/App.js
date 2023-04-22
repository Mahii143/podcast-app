import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import Choose from './page/Choose';

function App() {
  const [token, setToken] = useState(null);

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  // Custom hook to navigate to home when token changes
  const useNavToHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
      if (token) {
        navigate('/');
      }
    }, [navigate]);
  };

  // Call the custom hook to navigate to home when token changes
  useNavToHome();

  // Conditionally render Login page if token is null
  if (token === null) {
    return (
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login updateToken={updateToken} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      {/* <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login updateToken={updateToken} />} /> */}
    </Routes>
  );
}


export default App;
