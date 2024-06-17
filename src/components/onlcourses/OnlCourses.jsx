import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebase'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './OnlCourses.css';

const OnlCourses = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        history.push('/login');
      }
    });
    return () => unsubscribe();
  }, [history]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push('/about');
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div className='content'>
            <h2>My Courses</h2>
            {/*Courses list query*/}
          </div>
        );
      case 'tests':
        return (
          <div className='content'>
            <h2>My Tests</h2>
            {/* Quizz List Query */}
          </div>
        );
      case 'notes':
        return (
          <div className='content'>
            <h2>My Notes</h2>
            {/* Notes depending on tests and quizzes query */}
          </div>
        );
      default:
        return (
          <div className='content'>
            <h1>Welcome, {user?.displayName}</h1>
            <p>Here you can find all your courses, tests, and notes.</p>
          </div>
        );
    }
  };

  return (
    <div className='dashboard d-flex'>
      <div className='sidebar bg-dark text-white p-3'>
        <input type='text' className='form-control mb-3' placeholder='Search...' />
        <ul className='nav flex-column'>
          <li className='nav-item' onClick={() => setActiveTab('dashboard')}>
            <a className='nav-link text-white' href='#'>Dashboard</a>
          </li>
          <li className='nav-item' onClick={() => setActiveTab('courses')}>
            <a className='nav-link text-white' href='#'>My Courses</a>
          </li>
          <li className='nav-item' onClick={() => setActiveTab('tests')}>
            <a className='nav-link text-white' href='#'>My Tests</a>
          </li>
          <li className='nav-item' onClick={() => setActiveTab('notes')}>
            <a className='nav-link text-white' href='#'>My Notes</a>
          </li>
          <li className='nav-item' onClick={handleLogout}>
            <a className='nav-link text-white' href='#'>Logout</a>
          </li>
        </ul>
      </div>
      <div className='content-container p-3 flex-grow-1'>
        <div className='d-flex justify-content-end align-items-center mb-3'>
          {user && (
            <div className='profile d-flex align-items-center'>
              <img src={user.photoURL} alt='Profile' className='profile-pic rounded-circle me-2' />
            </div>
          )}
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default OnlCourses;