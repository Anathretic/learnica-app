import { Outlet, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/apolloClient';
import { Login, Register, UserPanel } from './subpages';
import { Welcome, Contact } from './sections';

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Routes>
				<Route element={<Outlet />}>
					<Route
						path='/'
						element={
							<>
								<Welcome />
								<Contact />
							</>
						}
					/>
					<Route path='/logowanie' element={<Login />} />
					<Route path='/rejestracja' element={<Register />} />
					<Route path='/panel-uzytkownika' element={<UserPanel />} />
				</Route>
			</Routes>
		</ApolloProvider>
	);
};

export default App;
