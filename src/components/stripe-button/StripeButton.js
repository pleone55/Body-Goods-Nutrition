import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_k4nhYfO3yVnZudaN3vj7t55O001CMIa8QJ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name='Body Goods Nutrition'
            billingAddress
            shippingAddress
            image='https://www.mybodygoods.com/wp-content/uploads/2019/11/cropped-Favicon-1-180x180.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;