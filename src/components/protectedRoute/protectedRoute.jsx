import { Navigate } from 'react-router-dom';
import { UserRole } from '../userRole/userRole';

const ProtectedRoute = ({ element }) => {
    const role = UserRole();

    if (role !== "admin" && role !== "premium") {
        // Si el rol no es 'admin' ni 'premium', redirige a otra página
        return <Navigate to="/unauthorized" replace />;
    }

    return element;
};

export default ProtectedRoute;
