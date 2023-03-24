import React from 'react';
import Country from '../Country/Country';
import { useEffect, useState } from 'react';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url) 
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div className='wrapContainer'>
            {
                countries.map(country => <Country countries = {country} key={country.cca3}/>)
            }
        </div>
    );
};

export default Countries;