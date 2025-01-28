import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setProcessing] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        if (!stripe || !elements) return;

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/',
            },
        });

        if (error) {
            setMessage(error.message || 'Payment failed.');
        } else if (paymentIntent?.status === 'succeeded') {
            setMessage('Payment successful!');
            toast.success('Signup successful! Please login.');
        }

        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit" disabled={isProcessing} className="mt-4 bg-green-500 text-white p-2 rounded">
                {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
            {message && <div>{message}</div>}
        </form>
    );
}
