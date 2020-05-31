import React from 'react';
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const StripePrice = price * 100;
    const PublishableKey = "pk_test_N5lhtYeoEgfo2FgjefRDSokr002u11l1XM";

    const token = token => {
        console.log(token, "token");
        alert('Payments Successful')
    }

    return ( 
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`your total is $${price}`}
            amount={StripePrice}
            panelLabel="Pay Now"
            token={token}
            stripeKey={PublishableKey}
        />
     );
}
 
export default StripeCheckoutButton;