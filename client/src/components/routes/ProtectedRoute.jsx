import { useAuth } from '../../context/authContext';
import { Outlet, Navigate} from 'react-router-dom';

export default function ProtectedRoute() {
  const {token}=useAuth()
  return token ? <Outlet /> : <Navigate to='/login' />;
}