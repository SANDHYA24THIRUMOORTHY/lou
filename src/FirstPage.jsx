import React from 'react'
import { Link} from 'react-router-dom';
export default function FirstPage() {
  return (
    <div className='out'>
    <Link to="/sidebar"><button>ADMIN</button></Link>
    <Link to="/Login"><button>LOGIN</button></Link>
    
    
    </div>
  )
}