import React from 'react';

import {Button} from "../form/Form"
import "../../styles/cart-dropdown.scss";

const Cart = () => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <Button title="Go To Checkout"/>
        </div>
     );
}
 
export default Cart;