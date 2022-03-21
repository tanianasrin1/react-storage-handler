import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
   const addTOCard = (id) =>{
       console.log('item', id)
   }

   const addToCardWithParam = () => addTOCard(id)
    return (
        <div className='product'>
            <h2>This by: {name} </h2>
            <p>Only for: ${price}  </p>
            <p>Has id: {id}  </p>
            <button onClick={addToCardWithParam}>Add to card</button>
        </div>
    );
};

export default Cosmetic;