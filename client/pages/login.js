import { useForm } from 'react-hook-form';
import { login } from '../services/auth.service';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const res = await login(data);
            localStorage.setItem('token', res?.access_token);
            toast.success('Login successful');
            router.push('/');
        } catch (error) {
            toast.error('Login failed');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-md">
                <input {...register('username')} placeholder="Username" className="p-2 border rounded w-full mb-2" required />
                <input {...register('password')} type="password" placeholder="Password" className="p-2 border rounded w-full mb-2" required />
                <button className="bg-blue-500 text-white p-2 rounded w-full" type="submit">Login</button>
                <hr />
                <Link href='/signup'>Signup</Link>
            </form>
        </div>
    );
}
