import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();

  if (!user) {
    toast.error("Unauthorized to access this route!", {
      toastId: "custom-id-yes",
    });
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
