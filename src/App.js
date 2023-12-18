import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import FirstPage from './FirstPage';
import Register from './Register';
const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<FirstPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;