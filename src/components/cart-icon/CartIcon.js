import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/ShoppingCart.svg";
import {useDispatch} from "react-redux";
import "../../styles/cart-icon.scss";

const CartIcon = () => {
    const dispatch = useDispatch();

    return ( 
        <div className="cart-icon" onClick={()=> dispatch({type: "TOGGLE_CART_HIDDEN"})}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
     );
}
 
export default CartIcon;