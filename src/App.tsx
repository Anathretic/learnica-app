import { Outlet, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/apolloClient';
import { Login, Register, UserPanel } from './subpages';
import { Welcome } from './sections';

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Routes>
				<Route element={<Outlet />}>
					<Route path='/' element={<Welcome />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/user-panel' element={<UserPanel />} />
				</Route>
			</Routes>
		</ApolloProvider>
	);
};

export default App;
