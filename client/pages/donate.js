import CheckoutForm from '@/components/CheckoutForm';
import Navbar from '@/components/Nav';
import AxiosInstance from '@/utils/axiosInstance';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { use, useEffect, useState } from 'react';
import Select from 'react-select';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [funds, setFunds] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDonate = async () => {
    const stripe = await stripePromise;
    const response = await AxiosInstance.post('/donation', { amount: amount * 100, email, fundId: selectedOption.value });
    // await stripe?.redirectToCheckout({ sessionId: response.data.id });
    setClientSecret(response.data.clientSecret);
  };

  useEffect(async () => {
    const response = await AxiosInstance.get('/fund');
    console.log('response:::', response);

    setFunds(response.data.map((fund) => ({ value: fund.id, label: fund.fundType })));
  }, []);

  return (
    <Navbar>
      <main className="flex flex-col row-start-2 items-center w-1/2 justify-center m-auto">

        <h1 className='text-2xl font-bold mb-4'>Make a Donation</h1>

        <Select styles={{ container: (base) => ({ ...base, width: '100%' }) }} options={funds} defaultValue={selectedOption} onChange={setSelectedOption} placeholder="Select a fund" />
        <input className='p-2 border rounded w-full mt-4' type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input className='p-2 border rounded w-full mt-4' type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <button className='mt-4 bg-green-500 text-white p-2 rounded' onClick={handleDonate}>Donate ${amount}</button>

        <br />

        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      
      </main>
    </Navbar>
  );
}
