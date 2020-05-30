import React from 'react';
import {useSelector} from "react-redux";
import CheckoutItem from "./Checkout-Item"
import "../../styles/checkout.styles.scss";

const Checkout = () => {
    const {cartItems, totalPrice} = useSelector(state => state.cart) ;
    return ( 
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems && cartItems.map(item => <CheckoutItem key={item.id} item={item} /> )}
            <div className="total"> TOTAL: ${totalPrice}</div>
        </div>
     );
}
 
export default Checkout;