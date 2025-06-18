
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>loading</p>; 
  }

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
