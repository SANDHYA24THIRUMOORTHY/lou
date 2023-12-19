import React, { useState, useContext } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from './UserContext';
import './Register.css';
const Register = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(null);
  const [signupDetails, setSignupDetails] = useState({ 
    username: "",
    dob: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    password: "",
    aadharno: "",
    nation: "",
    state: "",
    address: "",
    accno: "",
    occup: "",

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
      <h2 className='m'>REGISTER</h2>

        <table className='this'>
          <tbody>
            <tr>
              <td className='z'><b>NAME :</b></td>
              <td>
                <input
                  type="text"
                  name="username" placeholder='name in aadhar card'
                  value={signupDetails.username}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className='z'><b>DOB :</b></td>
              <td>
                <input
                  type="date"
                  name="dob"
                  value={signupDetails.dob}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>


            <tr>
            <td className='z'><b>AGE :</b></td>
              <td>
                <input
                  type="text"
                  name="age" placeholder='age'
                  value={signupDetails.age}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className='z'><b>AADHAR NUMBER :</b></td>
              <td>
                <input
                    type="text"
                    name="aadharno" placeholder='aadhar no'
                  value={signupDetails.aadharno}
                  onChange={handleInputChange}
                    required
                />
              </td>
            </tr>
            <tr>
              <td className='z'><b>ACCOUNT NUMBER :</b></td>
              <td>
                <input
                    type="text"
                    name="accno" placeholder='account no'
                  value={signupDetails.accno}
                  onChange={handleInputChange}
                    required
                />
              </td>
            </tr>


            <tr>
              <td className='z'><b>GENDER :</b></td>
              <td>
                  <select name="gender" onChange={handleInputChange}>
                    <option></option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
              </td>
            </tr>


            <tr>
              <td className='z'><b>MOBILE NUMBER :</b></td>
              <td>
                <input
                  type="tel"
                  name="contact"  placeholder='mobile no'
                  value={signupDetails.contact}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </td>
            </tr>


            <tr>
              <td className='z'><b>OOCUPATION :</b></td>
              <td>
                <input
                  type="text"
                  name="occup" placeholder='your occupation'
                  value={signupDetails.occup}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className='z'><b>EMAIL :</b></td>
              <td>
                <input
                  type="email"
                  name="email" placeholder='mail id'
                  value={signupDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>


            <tr>
              <td className='z'><b>PASSWORD :</b></td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={signupDetails.password}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>


            <tr>
              <td className='z'><b>CONFIRM PASSWORD :</b></td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirm}
                  onChange={handleConfirmPassword}
                  required
                />
              </td>
            </tr>


           
                 
            
            <tr>
              <td className='z'><b>NATIONALITY :</b></td>
              <td>
                <input
                    type="text"
                    name="nation" placeholder='ex: Indian'
                  value={signupDetails.nation}
                  onChange={handleInputChange}
                    required
                />
              </td>
            </tr>
            <tr>
              <td className='z'><b>STATE:</b></td>
              <td>
                <input
                    type="text"
                    name="state" placeholder='ex: Rajasthan'
                  value={signupDetails.state}
                  onChange={handleInputChange}
                    required
                />
              </td>
            </tr>
            <tr>
              <td className='z'><b>ADDRESS :</b></td>
              <td>
                <input
                    type="text"
                    name="address" placeholder='door no, area, city, state'
                  value={signupDetails.address}
                  onChange={handleInputChange}
                    required
                />
              </td>
            </tr>

   
            <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <Link to="/sidebar">
                  <button type="submit" className='bt'>Register</button>
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

export default Register;