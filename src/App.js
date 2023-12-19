import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FirstPage from './FirstPage';
import Login from './Login';
import Register from './Register';
import Transaction from './Transaction';
import Sidebar from './Sidebar';
import { UserProvider } from './UserContext';
import Loureq from './Loureq';
import Loudoc from './Loudoc';
const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<FirstPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/sidebar' element={<Sidebar/>}></Route>
        <Route path='/trans' element={<Transaction/>}></Route>
        <Route path='/req' element={<Loureq/>}></Route>
        <Route path='/loudoc' element={<Loudoc/>}></Route>
        
    </Routes>
    </BrowserRouter>
    </UserProvider>
  );
};

export default App;