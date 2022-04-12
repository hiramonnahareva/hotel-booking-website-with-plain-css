import React from 'react';
import { Link } from 'react-router-dom';
import './Hotel.css' ;

const Hotel = ({hotel}) => {
    
    const {name , img , description} = hotel ;
    return (
        <div className='hotel'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <Link className='booking-btn' to ='/checkOut'>Booking</Link>
        </div>
    );
};

export default Hotel;