import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
} from 'react-router-dom';
import TodoPage from '../pages/TodoPage';
import AuthPage from '../pages/AuthPage';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Navigate to="/todo" />} />
			<Route path="*" element={<NotFoundPage />} />
			<Route element={<AuthRoute />}>
				<Route path="/todo" element={<TodoPage />} />
			</Route>
			<Route element={<NonAuthRoute />}>
				<Route path="/signup" element={<AuthPage />} />
				<Route path="/signin" element={<AuthPage />} />
			</Route>
		</>
	)
);

export default router;
