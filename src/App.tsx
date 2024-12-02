import { Outlet, Route, Routes } from 'react-router-dom';
import { Login, Register, UserPanel } from './subpages';
import { Welcome } from './sections';

const App: React.FC = () => {
	return (
		<Routes>
			<Route element={<Outlet />}>
				<Route path='/' element={<Welcome />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/user-panel' element={<UserPanel />} />
			</Route>
		</Routes>
	);
};

export default App;
