const addToDb = id => {
    // const quantity = localStorage.getItem(id)
    let shoppingCart;

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart= JSON.parse(storedCart)
    }
    else{
        shoppingCart= {}
    }
    // add quantity
    const quantity = shoppingCart[id]
    if(quantity){
        // console.log('already exists')
         // localStorage.setItem(id, newQuantity)
        const newQuantity = parseInt(quantity) + 1
        shoppingCart[id] = newQuantity

       
    }
    else{
        // console.log('new item')
        // localStorage.setItem(id, 1)
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    
}

const removeToDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

export {addToDb, removeToDb, deleteShoppingCart}