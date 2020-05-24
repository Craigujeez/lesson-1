const initialState={
    hidden: true,
    cart: [],
}

const addToCart = (state,action) => {
    const newCart = state.cart.slice(0);
    newCart.push(action.item);
    return newCart;
}

const cart = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
              ...state,
              cart: addToCart(state,action),
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