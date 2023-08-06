import React from 'react';
import Login from './Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SignUp from './Signup';
import Home from './Home';
import Display from './Display';
export default   function App()
{
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
