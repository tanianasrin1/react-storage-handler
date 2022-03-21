import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
// import { add } from '../../utilities/Calculate';
// import add from '../../utilities/Calculate';

const Cosmetics = () => {
    // const first = 33
    // const second = 30
    // const total = add(first , second)
  const [cosmetics, setCosmetics] = useState([])

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))
  } , [])

    return (
        <div>
            <h2>Welcome to my Cosmetics storage</h2>
            {/* <p>Total:  {total} </p> */}
           <div className='grid'>
           {
                cosmetics.map(cosmetic=> <Cosmetic 
                    key= {cosmetics.id} 
                    cosmetic= {cosmetic}
                    ></Cosmetic>)
            }
           </div>
        </div>
    );
};

export default Cosmetics;