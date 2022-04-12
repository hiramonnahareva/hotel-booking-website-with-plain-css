import { useEffect, useState } from 'react';

const useHotels = () => {
    const [hotels , setHolets] =useState ([]) ;
    useEffect (()=> {
        fetch('data.json')
        .then (res => res.json())
        .then (data => setHolets (data)) ;
    },[])
    return [hotels , setHolets]
};

export default useHotels;