import { useForm } from 'react-hook-form';
import { signup } from '../services/auth.service';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function Signup() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            await signup(data);
            toast.success('Signup successful! Please login.');
            router.push('/login');
        } catch (error) {
            toast.error('Signup failed!');
        }
    };

    // return (
    //     <div>
    //         <h1>Signup</h1>
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //             <input {...register('email')} placeholder="Email" required />
    //             <input {...register('password')} type="password" placeholder="Password" required />
    //             <button type="submit">Signup</button>
    //         </form>
    //     </div>
    // );
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-md">
                <input {...register('email')} placeholder="Email" className="p-2 border rounded w-full mb-2" />
                <input {...register('password')} type="password" placeholder="Password" className="p-2 border rounded w-full mb-2" />
                <button className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
                <hr />
                <div className="flex justify-end mt-4"><span>already have an account?&nbsp; </span><b><Link href='/login'>Login</Link></b></div>
            </form>
        </div>
    )
}
