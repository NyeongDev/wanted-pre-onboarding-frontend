import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return <Navigate to="/signin" />;
  return <Outlet />;
};

export default AuthRoute;
