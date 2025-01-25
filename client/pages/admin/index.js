import AuthGuard from '../../components/AuthGuard';
import AdminDashboard from './dashboard';

export default function AdminPage() {
    return (
        <AuthGuard role="ADMIN">
            <h1>Admin Dashboard</h1>
            <AdminDashboard/>
        </AuthGuard>
    );
}
