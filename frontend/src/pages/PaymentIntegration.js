import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './PaymentIntegration.css'; // Import your CSS file for styling

const PaymentIntegration = () => {
    const [paymentId, setPaymentId] = useState(null);

    const createNewOrder = async () => {
        try {
            const response = await fetch('https://api.paypal.com/v2/checkout/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.PAYPAL_CLIENT_ID}`,
                },
                body: JSON.stringify({
                    intent: 'CAPTURE',
                    purchase_units: [{ amount: { currency_code: 'USD', value: '30.00' } }],
                }),
            });

            if (response.status === 201) {
                const orderData = await response.json();
                return orderData.id;
            } else {
                throw new Error('Could not create PayPal order');
            }
        } catch (error) {
            console.error('Error creating PayPal order:', error);
            return null;
        }
    };

    const handlePayment = async () => {
        const orderId = await createNewOrder();
        setPaymentId(orderId);
    };

    useEffect(() => {
        handlePayment(); // This automatically creates a new order on component load
    }, []); // It's advisable to trigger this logic within a specific user action, like clicking a "Pay" button

    return (
        <div className="payment-integration">
            <h1>Make a Payment</h1>
            {paymentId ? (
                <PayPalScriptProvider options={{ 'client-id': process.env.PAYPAL_CLIENT_ID }}>
                    <PayPalButtons
                        style={{ layout: 'horizontal' }}
                        createOrder={() => createNewOrder()}
                        onApprove={(data, actions) => {
                            // Handle payment approval
                            console.log('Payment successful!', data);
                            return actions.order.capture();
                        }}
                        onError={(err) => console.error('Payment error:', err)}
                    />
                </PayPalScriptProvider>
            ) : (
                <div>
                    <h3>Click to make a payment</h3>
                    <button className="paypal-button" onClick={handlePayment}>
                        Make Payment
                    </button>
                </div>
            )}
        </div>
    );
};

export default PaymentIntegration;
