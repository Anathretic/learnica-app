import { Outlet, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/apolloClient';
import { Login, Register, UserPanel, TermsAndConditions, PageNotFound } from './subpages';
import { Welcome, AboutUs, Offer, Motto, Contact } from './sections';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Routes>
				<Route
					element={
						<>
							<Outlet />
							<Footer />
						</>
					}>
					<Route
						path='/'
						element={
							<>
								<Welcome />
								<AboutUs />
								<Offer />
								<Motto />
								<Contact />
							</>
						}
					/>
					<Route path='/logowanie' element={<Login />} />
					<Route path='/rejestracja' element={<Register />} />
					<Route path='/panel-uzytkownika' element={<UserPanel />} />
					<Route path='/polityka-prywatnosci' element={<TermsAndConditions />} />
					<Route path='*' element={<PageNotFound />} />
				</Route>
			</Routes>
		</ApolloProvider>
	);
};

export default App;
