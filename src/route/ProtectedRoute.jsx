import { checkAuth } from "@src/libs/localStorage";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = checkAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // if (!token) navigate("/login");
  }, [navigate, token]);

  return children || <Outlet />;
}
export default ProtectedRoute;
