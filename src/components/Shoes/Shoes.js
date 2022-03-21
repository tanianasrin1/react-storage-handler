import React from 'react';
import { add, div, multiply, substra} from '../../utilities/Calculate';

const Shoes = () => {
    const first = 6
    const second = 5
    const result = multiply(first, second)
    const sum = add(first, second)
    const result1 = div(first, second)
    const result2 = substra(first, second)
    return (
        <div>
            <h2>This is a components</h2>
            <p>Result:  {result} </p>
            <p>Sum:  {sum} </p>
            <p>Div:  {result1} </p>
            <p>Sub: {result2} </p>
        </div>

    );
};

export default Shoes;