const initialState={
    hidden: true,
    cartItems: [],
    totalPrice: 0,
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
    let prices = [];

    // const newState = state.cartItems.slice(0);

    state.cartItems.map(item => prices.push(item.quantity * item.price))

    console.log(prices, "total");

    const sum = prices.reduce(function(a, b){
        return a + b;
    }, 0);

    return sum;
}

const cart = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
              ...state,
            //   cartItems: addToCart(state,action),
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