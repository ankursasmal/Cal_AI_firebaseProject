// src/components/PayPalPayment.js
import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

// Define the PayPal script options
const initialOptions = {
  clientId: 'YOUR_PAYPAL_CLIENT_ID', // Replace with your PayPal client ID
  currency: 'USD', // You can set your preferred currency here
};

const PayPalPayment = () => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '100.00' // Amount to charge
              }
            }]
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log('Order:', order);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
