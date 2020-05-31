import React from 'react';
import {useSelector} from "react-redux";
import StripeButton from "../../components/stripe/StripeButton"
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
            <div className="test-warning">
                * Please use the following test credit card for Payments* 
                <br/>
                Card number: 4242424242424242
                - Exp: 01/2025
                - CVV: 123
            </div>
            <StripeButton price={totalPrice} />
        </div>
     );
}
 
export default Checkout;