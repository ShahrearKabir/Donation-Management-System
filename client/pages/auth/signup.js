import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function Signup() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = (data) => {
        console.log('User registered:', data);
        router.push('/auth/login');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                <input {...register('email')} placeholder="Email" className="p-2 border rounded w-full mb-2" />
                <input {...register('password')} type="password" placeholder="Password" className="p-2 border rounded w-full mb-2" />
                <button className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
            </form>
        </div>
    );
}
