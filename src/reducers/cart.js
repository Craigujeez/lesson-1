const initialState={
    hidden: true,
    cartItems: [],
    totalPrice: 0,
}

const addToCart = (state,action) => {
    const existingCartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id) // checking to see if item already exists in cart

    if(existingCartItem){
        return state.cartItems.map(cartItem => cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)  // if it exists we increase the quantity of the item instead of creating duplicates
    }

    return [...state.cartItems, {...action.payload, quantity: 1}]     // if the item doesnt exist we add it to the cart with the added property of quantity
}

const clearFromCart = (state,action) => {
    const newCart = state.cartItems.filter(item => item.id !== action.payload.id);
    return newCart;
};

const RemoveItemFromCart = (state,action) => {
    if(action.payload.quantity === 1){
        return clearFromCart(state,action)
    }
    return state.cartItems.map(cartItem => cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
};

const TotalPrice = (state) => {
    // const newState = state.cartItems.slice(0);
    let total = state.cartItems.map(item => item.quantity * item.price);

    console.log(total, "total");
    const add = (a, b) => a + b 

    const sum = total.reduce(add,0);
    return sum;
}

const cart = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
              ...state,
              cartItems: addToCart(state,action),
              totalPrice: TotalPrice(state),
            };
        case "TOGGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden,
            };
        case "CLEAR_ITEM_FROM_CART":
            return {
                ...state,
                cartItems: clearFromCart(state,action),
                totalPrice: TotalPrice(state),
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: RemoveItemFromCart(state,action),
                totalPrice: TotalPrice(state),
            };
            
        default:
            return state;
    }
}

export default cart;