import { useEffect, useState } from 'react';
import axios from '../../utils/axiosInstance';

export default function AdminDashboard() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('/donation').then(({ data }) => setDonations(data));
  }, []);

  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-bold '>Donar List</h1>
      <table className='table-auto w-100 mt-4'>
        <thead>
          <tr>
            <th>Fund</th>
            <th>Amount</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <>
              {/* <li key={donation.id}>${donation.amount} - {(donation?.user?.email)} - {(donation?.fund?.fundType)}</li> */}
              <tr key={donation.id}>
                <td>{donation?.fund?.fundType}</td>
                <td>${donation.amount}</td>
                <td>{donation?.user?.email}</td>
              </tr>
            </>
          ))}

        </tbody>
      </table>
    </div>
  );
}
