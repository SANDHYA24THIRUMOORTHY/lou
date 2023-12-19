import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { UserContext } from './UserContext'; // Import UserContext

function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get('https://65643730ceac41c0761da0dd.mockapi.io/api/v1/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username);
    
    // console.log(foundUsers);

    if (foundUsers.length > 0) {
      setUser(foundUsers[0]);
      navigate('/req')
    } else {
      alert('Account not found please register')
      navigate('/register')
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='whole'>
      <div >
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
       <form onSubmit={handleLogin}>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</h2>
          <label>
            <b>USERNAME :</b>
            <input
              type="text"
              name="username"
              value={loginDetails.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
           <b> PASSWORD :</b>
            <input
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit"className='lb'>Login</button>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account</h5>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/register"><button className='lb'>Register</button></Link>
        </form>

        <br></br>
        
      </div>
       
        </div>
      
      </div>
  )
}


export default Login;