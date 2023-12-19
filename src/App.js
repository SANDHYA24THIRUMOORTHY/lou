import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FirstPage from './FirstPage';
import Login from './Login';
import Register from './Register';
import Loureq from './Loureq';
import Sidebar from './Sidebar';
import { UserProvider } from './UserContext';
const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<FirstPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/req' element={<Loureq/>}></Route>
        <Route path='/sidebar' element={<Sidebar/>}></Route>
        
    </Routes>
    </BrowserRouter>
    </UserProvider>
  );
};

export default App;