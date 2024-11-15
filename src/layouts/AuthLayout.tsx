import { useAuth } from '@/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function AuthLayout() {
  const { session } = useAuth();

  if (session) {
    return <Navigate to='/' replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
