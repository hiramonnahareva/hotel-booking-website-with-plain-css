import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import './Login.css' ;
const Login = () => {
    const [email , setEmail] = useState ('') ;
    const [password , setPassword] = useState ('') ;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate () ;
      const location = useLocation () ;

     const handleRestePassword = () => {
        sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
  });
    
      }
      const from = location?.state?.pathname || '/' ;

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate (from , {replace: true})
    }
    const handleUserSignIn = event => {
        event.preventDefault () ;
        signInWithEmailAndPassword( email , password ) ;
    }
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Login</h2>
          <form onSubmit={handleUserSignIn} action="">
          <div className='input-group'>
             <label htmlFor="email">Email</label>
             <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
              </div>  
          <div className='input-group'>
             <label htmlFor="password">Password</label>
             <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
              </div>  
              <p style={{color:'red'}}>{error?.message}</p>
              {
                  loading && <p>Loading...</p>
              }
              <input className='form-submit' type="submit" value="Login" required />
              <br />
            <button onClick={handleRestePassword}>Change Password</button>
          </form>
          <p>
              new to Here? <Link className='form-link' to='/signup'>Create an account</Link>
          </p>
        </div>
    </div>
    );
};

export default Login;