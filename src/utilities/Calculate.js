const add = (first, second) => {
    // return first + second
    // return first + second
    // return first + second
    return first + second
    
}
//  export default add
 const div = (first, second) => {
     return first / second
 } 

 const substra = (first, second) => {
     return first- second
 }

const multiply = (first, second) =>{
    return first *second;
}

const getTotalPrice = product => {
    const reducer = (previous, current) => previous + current.price
    const total = product.reduce (reducer, 0)
    return total
}

export {add, multiply, div, substra, getTotalPrice as getTotal}