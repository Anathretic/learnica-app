import { Outlet, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/apolloClient';
import {
	PolishClasses,
	EnglishClasses,
	MathClasses,
	Translations,
	Curriculum,
	Lectors,
	Login,
	Register,
	UserPanel,
	TermsAndConditions,
	PageNotFound,
} from './subpages';
import { Welcome, Idea, Offer, Motto, Contact } from './sections';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Routes>
				<Route
					element={
						<>
							<Navbar />
							<Outlet />
							<Footer />
						</>
					}>
					<Route
						path='/'
						element={
							<>
								<Welcome />
								<Idea />
								<Offer />
								<Motto />
								<Contact />
							</>
						}
					/>
					<Route path='/jezyk-polski' element={<PolishClasses />} />
					<Route path='/jezyk-angielski' element={<EnglishClasses />} />
					<Route path='/matematyka' element={<MathClasses />} />
					<Route path='/tlumaczenia' element={<Translations />} />
					<Route path='/program-nauczania' element={<Curriculum />} />
					<Route path='/lektorzy' element={<Lectors />} />
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
