import React, { useState, useContext } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from './UserContext';
import './Register.css';
const AdminLogin = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(null);
  const [signupDetails, setSignupDetails] = useState({ 
    username: "",
    
    adminid: "",
    
    phonenumber: "",

   });
   
   const { setUser } = useContext(UserContext); 

  const checkUserExists = async (username) => {
      const response = await axios.get('https://658159793dfdd1b11c430784.mockapi.io/todo');
      return response.data.some(user => user.username === username);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const userExists = await checkUserExists(signupDetails.username);
    if (userExists) {
      console.log('User already exists. Redirecting to login...');
      navigate('/login');
      return;
    }

    if (confirm !== signupDetails.password){
      alert('Password and Confirm Password are not same...')
      return;
    }

    axios.post('https://658159793dfdd1b11c430784.mockapi.io/todo', signupDetails)
      .then(response => {
        console.log('Signup successful:', response.data);
        setUser(response.data);
        navigate('/sidebar');
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
    // alert(e.target.name);
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <div className='whole'>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
    <div >
      <form onSubmit={handleSignup} className='reg'>
      <br></br>
      <h2 className='m'>ADMIN LOGIN</h2>

        <table className='this'>
          <tbody>
            <tr>
              <td className='z'><b>NAME :</b></td>
              <td>
                <input
                  type="text"
                  name="username" placeholder='username'
                  value={signupDetails.username}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className='z'><b>ADMIN ID :</b></td>
              <td>
                <input
                    type="text"
                    name="adminid" placeholder='admin id'
                  value={signupDetails.adminid}
                  onChange={handleInputChange}
                    required
                />
              </td>
            </tr>


           

            <tr>
              <td className='z'><b>MOBILE NUMBER :</b></td>
              <td>
                <input
                  type="tel"
                  name="phonenumber"  placeholder='mobile no'
                  value={signupDetails.phonenumber}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </td>
            </tr>

            <tr>
            <td colSpan="2" style={{ textAlign: 'center' }}>
              <Link to="/">
              <button type="submit" className='bt'>Login</button>
              </Link>
            </td>
        </tr>
            
          </tbody>
        </table>
      </form>
    </div>
    </div>
    </div>
  );
};

export default AdminLogin;