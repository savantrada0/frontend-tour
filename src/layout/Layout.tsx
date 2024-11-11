import axios from 'axios';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
	const location = useLocation();
	const token = localStorage.getItem("token");

	if(token){
		axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`;
	}

	return (
		<div className='layout'>
				{token ?
						<Outlet />
					:
					<Navigate to={'/signin'} state={{ from: location }} replace />
				}
		</div>
	);
};

export default Layout;