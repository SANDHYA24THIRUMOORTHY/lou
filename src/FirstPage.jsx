import React from 'react'
import { Link} from 'react-router-dom';
export default function FirstPage() {
  return (
    <div className='out'>
    <button>ADMIN</button>
    <Link to="/Login"><button>LOGIN</button></Link>
    
    
    </div>
  )
}