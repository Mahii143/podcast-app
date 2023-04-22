import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddProjectBtn from '../component/AddProjectBtn';
import '../styles/page-styles/Container.css';
import Card from '../component/Card';



const Container = () => {

  const [data, setData] = useState([]);
  const [UID, setUID] = useState([]);
  const [userId, setUserId] = useState('');
  useEffect(() => {
    let uid_endpoint = 'http://localhost:5000/auth';
    fetch(uid_endpoint)
      .then(res => res.json())
      .then(data => setUID(data));
  }, []);

  let fetchProject = projectId => {
    let endpoint = `http://localhost:5000/api/project/${projectId}`;
    fetch(endpoint)
      .then(res => res.json())
      .then(data => setData(data));
  }

  useEffect(() => {
    console.log('uid:', UID);
    if (UID.length > 0) {
      const user = UID.find(user => user.user_email === localStorage.getItem('Email'));
      if (user) {
        setUserId(user.user_id);
      } else {
        console.log('unknown email!');
      }
    }
  }, [UID]);

  useEffect(() => {
    if (userId !== '') {
      console.log(`The id of Mahir2 is ${userId}`);
      fetchProject(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (data.length > 0) {
      console.log('data', data);
    }
  }, [data]);

  return (
    <div className='d-flex container'>
      <h1>Projects</h1>
      <div className="card-container">
        {
          data.length > 0 &&
          data.map((project, index) => (
            <Card data={project} key={index} />
          ))
        }
        <Link to={"/api/project/new/"+userId} ><AddProjectBtn /></Link>
      </div>
    </div>
  )
}

export default Container;

