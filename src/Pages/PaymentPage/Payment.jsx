import React from 'react';
import "./Payment.css";
import ProductPaymentComponent from './ProductPaymentComponent';
import ContactComponent from './ContactComponent';

export default function Payment() {

    return (
        <div className='payment-page'>
            <div className='payment-container'>
                <ContactComponent />
                <ProductPaymentComponent />
            </div>
        </div>
    );
}
