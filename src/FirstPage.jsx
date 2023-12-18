import React from 'react'
import { Link} from 'react-router-dom';
import './FirstPage.css';
export default function FirstPage() {
  return (
    <div className='box'>
    
    <button>ADMIN</button>    
    <Link to="/login"><button>USER</button> </Link>   
    </div>
  )
}
