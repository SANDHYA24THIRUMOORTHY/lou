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
    <div className='page-container'>
      <div className='side-panel'>
        {/* Replace 'image-url.jpg' with the URL of your desired image */}
        <img src='https://www.shutterstock.com/image-vector/access-control-fingerprint-security-cybersecurity-600nw-2274134989.jpg' className='side-panel-image' />
      </div>
        
      <div className='content-container'>
      
        <div >
        <h3>IF YOU ARE AN ADMIN,CLICK HERE</h3>
        <Link to='/admin'>
        <button className='sb' onClick={handleAdminClick} aria-label="Admin" ><h1>
        ADMIN
        </h1></button>
        </Link>
          <br />
          {userLoggedIn ? (
            <Link to="/Logout">
           
              <button className='sb'>LOGOUT</button>
            </Link>
          ) : (
            <><br></br><br></br><br></br>
            <h3>IF YOU ARE A USER,CLICK HERE</h3>
              <Link to="/Login">
                <button className='sb'><h1>LOGIN</h1></button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
