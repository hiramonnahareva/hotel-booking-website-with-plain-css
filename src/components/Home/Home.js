import React from 'react';
import useHotels from '../../hooks/useHotels';
import Hotel from '../Hotel/Hotel';
import './Home.css' ;

const Home = () => {
    const [hotels] = useHotels() ;
    return (
        <div>
            <h1>Hotel Booking</h1>
            <div className="hotel-container">
            {
                hotels.map (hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
            }
            </div>
        </div>
    );
};

export default Home;