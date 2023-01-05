import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from "../CardForm/CardForm";


const stripePromise = loadStripe('pk_test_51MEDOEIWTPCOc1oJoezbNjgoykLa7x4PVUsFL4w8FSwe67R9XNIUG2FarjYLByyldJSuoUw0ze1dkbxVZHoPrWUz00j0GU6MWJ');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm handlePayment={handlePayment}/>
        </Elements>
    );
};

export default ProcessPayment;