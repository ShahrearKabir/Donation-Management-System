import CheckoutForm from '@/components/CheckoutForm';
import AxiosInstance from '@/utils/axiosInstance';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const handleDonate = async () => {
    const stripe = await stripePromise;
    const response = await AxiosInstance.post('/donation', { amount: amount * 100, email });
    // await stripe?.redirectToCheckout({ sessionId: response.data.id });
    setClientSecret(response.data.clientSecret);
  };

  return (
    <div>
      <h1>Make a Donation</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={handleDonate}>Donate ${amount}</button>

      <br />

      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
