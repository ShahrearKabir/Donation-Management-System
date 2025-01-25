import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function DonationForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const { token } = await stripe.createToken(elements.getElement(CardElement));
        console.log('Token:', token);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className=" container">
                <form onSubmit={handleSubmit} className="p-6 border rounded shadow-md">
                    <h2 className="text-xl mb-4">Make a Donation</h2>
                    <CardElement />
                    <button type="submit" disabled={!stripe} className="mt-4 bg-green-500 text-white p-2 rounded">
                        Donate
                    </button>
                </form>
            </div>
        </div>
    );
}

// import { loadStripe } from '@stripe/stripe-js';
// import { useState } from 'react';
// import axios from '../utils/axiosInstance';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

// export default function DonatePage() {
//   const [amount, setAmount] = useState(50);
//   const [email, setEmail] = useState('');

//   const handleDonate = async () => {
//     const stripe = await stripePromise;
//     const response = await axios.post('/stripe/checkout', { amount, email });
//     await stripe?.redirectToCheckout({ sessionId: response.data.id });
//   };

//   return (
//     <div>
//       <h1>Make a Donation</h1>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//       <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
//       <button onClick={handleDonate}>Donate ${amount}</button>
//     </div>
//   );
// }

