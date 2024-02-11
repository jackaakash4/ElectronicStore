import React, { useState } from 'react'

import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Login({isLoggedIn}) {
    const[loggedin, setLoggedIn] = useState(false);
    let navigate = useNavigate();

  const submitHandler = () => {
    setLoggedIn(true);
    
  }  
  
  loggedin? navigate('/home') : ('/login');

  

  return (
    <div id='wholepage'>
      <div id='form'>
        <p>Login Or Register</p>
        <div className='username'>
          <label htmlFor='username'>Username</label><br/>        
            <input type='text' name='username' placeholder="Enter username" id="username"/>
        </div>

        <div className='password'>
          <label htmlFor='password'>Password</label><br/>
          <input type='password' placeholder="Enter password" name='password'id="password" />
        </div>

        <div className='submitButton' onClick={submitHandler}>
          Login
          
        </div>
      <div className="register">Register</div>

      </div>
    </div>
    
  )
  
}
export default Login