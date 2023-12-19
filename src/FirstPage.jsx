import React from 'react'
import { Link} from 'react-router-dom';
import './FirstPage.css';
export default function FirstPage() {
  return (
    <div className='out'>
    <button className='sb'>ADMIN</button>
    <br></br>
    <br></br>
    <Link to="/Login" ><button className='sb'>LOGIN</button></Link>
    
    
    </div>
  )
}