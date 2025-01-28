import Navbar from '@/components/Nav';
import AuthGuard from '../../components/AuthGuard';
import AdminDashboard from './dashboard';
import { isAuthenticated } from '@/utils/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AdminPage() {
    const router = useRouter();
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
        if (!isAuthenticated()) {
            router.push('/login');
        }
    }, []);
    return (
        <>
            <Navbar>
                {
                    domLoaded && isAuthenticated() ?
                        <AuthGuard role="ADMIN">
                            <main className="flex flex-col row-start-2 items-center w-1/2 justify-center m-auto">
                                <h1 className='text-2xl font-bold'>Admin Dashboard</h1>
                                <AdminDashboard />
                            </main>
                        </AuthGuard>
                        : <>Logging out</>
                }
            </Navbar>

        </>

    );
}
