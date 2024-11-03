import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ children, userType }) {
  const { user, userType: currentUserType } = useAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (userType && userType !== currentUserType) {
    return <Navigate to="/" />;
  }

  return children;
}