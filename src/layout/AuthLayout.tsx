import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
	const location = useLocation();
	const token = localStorage.getItem("token");

	return (
		<div>
			{token ?
				<Navigate to={'/'} state={{ from: location }} replace />
				:
				<Outlet />
			}
		</div>
	);
};

export default AuthLayout;