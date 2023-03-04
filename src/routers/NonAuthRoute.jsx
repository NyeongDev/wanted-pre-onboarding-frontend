import { Navigate, Outlet } from 'react-router-dom';

const NonAuthRoute = () => {
	const accessToken = localStorage.getItem('accessToken');
	if (accessToken) return <Navigate to="/todo" />;
	return <Outlet />;
};
export default NonAuthRoute;
