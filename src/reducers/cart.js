const initialState={
    hidden: true,
    cartItems: [],
}

const addToCart = (state,action) => {
    const existingCartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id) // checking to see if item already exists in cart

    if(existingCartItem){
        return state.cartItems.map(cartItem => cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)  // if it exists we increase the quantity of the item instead of creating duplicates
    }

    return [...state.cartItems, {...action.payload, quantity: 1}]     // if the item doesnt exist we add it to the cart with the added property of quantity
}

const cart = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
              ...state,
              cartItems: addToCart(state,action),
            };
        case "TOGGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden,
            };
            
        default:
            return state;
    }
}

export default cart;