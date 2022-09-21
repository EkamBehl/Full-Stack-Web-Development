import React from 'react';
import './App.css';
import HomePage from './routes/homePage';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>  
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    
     
    
  );
}

export default App;
