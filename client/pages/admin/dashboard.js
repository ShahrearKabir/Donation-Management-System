import { useEffect, useState } from 'react';
import axios from '../../utils/axiosInstance';

export default function AdminDashboard() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('/donation').then(({ data }) => setDonations(data));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>${donation.amount} - {donation.email}</li>
        ))}
      </ul>
    </div>
  );
}
