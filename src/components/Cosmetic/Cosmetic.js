import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
    return (
        <div className='product'>
            <h2>This by: {name} </h2>
            <p>Only for: ${price}  </p>
            <p>Has id: {id}  </p>
        </div>
    );
};

export default Cosmetic;