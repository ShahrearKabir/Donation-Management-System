import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAuthenticated, getUserFromToken } from '../utils/auth';

export default function AuthGuard({ children, role }) {
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
        } else {
            const user = getUserFromToken();
            if (user?.roles.includes(role)) {
                router.push('/admin');
            }
        }
    }, []);

    return children;
}
