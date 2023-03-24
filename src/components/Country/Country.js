import React from 'react';

const Country = (props) => {
    const {name, flags} = props.countries;
    return (
        <div style={{border: "0.6px inset #ddd"}}>
            <h1>{name.common}</h1>   
            <img src={flags.png} alt="" />   
        </div>
    );
};

export default Country;