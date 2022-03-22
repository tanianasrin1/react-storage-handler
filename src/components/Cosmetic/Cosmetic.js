import React from 'react';
import { addToDb, removeToDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
   const addTOCard = (id) =>{
    //    localStorage.setItem(id, 1)
    // addToDb(id)
    addToDb(id)
   }

//    const addToCardWithParam = () => addTOCard(id)
  const removeFromCart = id =>{
      removeToDb (id)

  } 
    return (
        <div className='product'>
            <h2>This by: {name} </h2>
            <p>Only for: ${price}  </p>
            <p>Has id: {id}  </p>
            {/* <button onClick={addToCardWithParam}>Add to card</button> */}
            <button onClick={() => addTOCard(id) }>Purchase</button>
            <button onClick={() => removeFromCart(id)}> Remove </button>
        </div>
    );
};


export default Cosmetic;