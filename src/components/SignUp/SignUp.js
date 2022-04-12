import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import SignInGoogle from '../SignInGoogle/SignInGoogle';

const SignUp = () => {
    const [email , setEmail] = useState ('') ;
    const [password , setPassword] = useState ('') ;
    const [error , setError] = useState ('') ;
    const [comfirmpassword , setConfirmPassword] = useState ('') ;
    const [
        createUserWithEmailAndPassword,
        user,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate () ;
      
      const handleEmailBlur = event => {
          setEmail (event.target.value) ;
      }

      const handlePasswordBlur = event => {
          setPassword (event.target.value) ;
      }
      const handleConfirmPassword = event => {
        setConfirmPassword (event.target.value) ;
      }
    const handleCreateUser = event => {
        event.preventDefault () ;
        if (password !== comfirmpassword) {
            setError ('Password did not match') ;
            return ;
        }
        createUserWithEmailAndPassword(email, password)
    }
    
    if (user) {
       navigate ('/') ;
    }
    
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sing Up</h2>
          <form onSubmit={handleCreateUser}>
          <div className='input-group'>
             <label htmlFor="email">Email</label>
             <input onBlur={handleEmailBlur} type="email" name='email' id='' />
              </div>  
          <div className='input-group'>
             <label htmlFor="password">Password</label>
             <input onBlur={handlePasswordBlur} type="password" name='password' id='' />
              </div>  
          <div className='input-group'>
             <label htmlFor="confirm-password">Confirm Password</label>
             <input onBlur={handleConfirmPassword} type="confirm-password" name='confirm-password' id='' />
              </div>  
              <p style={{color:'red'}}>{error || hookError}</p>
              <input className='form-submit' type="submit" value="Sing Up" />
          </form>
          <p>
             Already Have account? <Link className='form-link' to='/login'>Login</Link>
          </p>
          <SignInGoogle></SignInGoogle>
        </div>
        <div>
        </div>
    </div>
    );
};

export default SignUp;