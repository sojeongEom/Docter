import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Dashboard from './pages/Dashboard';

const routes = [
	{
		path: 'app',
		element: <DashboardLayout />,
		children: [
			{ path: 'dashboard', element: <Dashboard /> },
		]
	},
	{
		path: '/',
		element: <DashboardLayout />,
		children: [
			{ path: '/', element: <Navigate to="/app/dashboard" /> },
		]
	},
];

export default routes;