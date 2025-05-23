import { Outlet, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/apolloClient';
import {
	PolishClasses,
	EnglishClasses,
	MathClasses,
	Translations,
	AboutUs,
	Career,
	Login,
	Register,
	UserPanel,
	TermsAndConditions,
	PageNotFound,
	ChangePassword,
	RecoverPassword,
} from './subpages';
import { Welcome, Idea, Offer, Motto, Blog, Contact, Opinions } from './sections';
import { BlogPopup, ErrorPopup, Footer, Navbar, CookieBanner, HomeWrapper } from './components';
import { useAppSelector } from './hooks/reduxHooks';
import { getInitialErrorPopupValue } from './redux/errorPopupReduxSlice/errorPopupSlice';
import { ScrollToTop } from './utils/scrollToTopUtils';

const App: React.FC = () => {
	const error = useAppSelector(getInitialErrorPopupValue);

	return (
		<ApolloProvider client={client}>
			<ScrollToTop />
			<Routes>
				<Route
					element={
						<>
							{error && <ErrorPopup />}
							<CookieBanner />
							<Outlet />
						</>
					}>
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
									<Navbar />
									<HomeWrapper>
										<Welcome />
										<Idea />
										<Offer />
										<Motto />
										<Opinions />
										<Blog />
										<BlogPopup />
										<Contact />
									</HomeWrapper>
								</>
							}
						/>
						<Route path='/jezyk-polski' element={<PolishClasses />} />
						<Route path='/jezyk-angielski' element={<EnglishClasses />} />
						<Route path='/matematyka' element={<MathClasses />} />
						<Route path='/tlumaczenia' element={<Translations />} />
						<Route path='/o-nas' element={<AboutUs />} />
						<Route path='/kariera' element={<Career />} />
						<Route path='/polityka-prywatnosci' element={<TermsAndConditions />} />
					</Route>
					<Route path='/logowanie' element={<Login />} />
					<Route path='/odzyskiwanie-hasla' element={<RecoverPassword />} />
					<Route path='/rejestracja' element={<Register />} />
					<Route path='/panel-uzytkownika' element={<UserPanel />}></Route>
					<Route path='/panel-uzytkownika/zmiana-hasla' element={<ChangePassword />} />
				</Route>
				<Route
					path='*'
					element={
						<>
							<PageNotFound />
							<Footer />
						</>
					}
				/>
			</Routes>
		</ApolloProvider>
	);
};

export default App;
