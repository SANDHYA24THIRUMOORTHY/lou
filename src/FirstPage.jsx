// FirstPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css';

export default function FirstPage() {
  const userLoggedIn = false; // Replace with your actual authentication logic

  const handleAdminClick = () => {
    // Implement logic for handling admin button click
    console.log('Admin button clicked');
  };

  return (
    <div className='out'>
      <button className='sb' onClick={handleAdminClick} aria-label="Admin">
        ADMIN
      </button>
      <br></br>
      <br></br>
      {userLoggedIn ? (
        <Link to="/Logout">
          <button className='sb'>LOGOUT</button>
        </Link>
      ) : (
        <>
          <Link to="/Login">
            <button className='sb'>LOGIN</button>
          </Link>
          
        </>
      )}
    </div>
  );
}
