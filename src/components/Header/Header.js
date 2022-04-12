import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Header.css' ;

const Header = () => {
    const [user] = useAuthState (auth) ;
    const handleSignOut = () => {
        signOut(auth) ;
    }
    return (
        <div>
           <nav>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/booking'>Booking</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/reviewes'>Reviewes</Link>
            {
               user ? <button onClick={handleSignOut}>sign Out</button> : <Link to='/login'>Login</Link>
           }
           </nav>
        </div>
    );
};

export default Header;