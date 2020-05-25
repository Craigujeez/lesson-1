import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "../cart-item/Cart-Item";
import {Button} from "../form/Form"
import "../../styles/cart-dropdown.scss";

const Cart = () => {
    const {cartItems} = useSelector(state => state.cart)
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <Button title="Go To Checkout"/>
        </div>
     );
}
 
export default Cart;