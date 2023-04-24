import React, { useEffect, useState } from 'react'
import Card from './Card';
import '../styles/component-styles/HomeScreen.css';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch('http://localhost:3001/getpodcasts', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('session')}`,
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => setData(data));

    }
    catch (err) {
      console.log('Error while fetching data', err);
    }
  }, [data.length]);
  return (
    <>
      <h3>Trending</h3>
      <div className="d-flex trending-container">
        {
          data.length > 0 &&
          data.map((podcast, index) => (
            <Link to={`./${podcast._id}`} className="d-flex podcast-card" key={index}>
              <Card data={podcast} key={index} />
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default HomeScreen