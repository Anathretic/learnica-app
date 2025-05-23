import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@apollo/client';
import { client } from '../../apollo/apolloClient';
import { supabase } from '../../supabase/supabase';
import { userDataGraph } from '../../graphql/graphs';
import { SubpageLoader } from '../../components/Loader';
import { useCheckSessionStatus } from '../../hooks/useCheckSessionStatus';
import { UserDataModel } from '../../models/userData.model';

const UserPanel: React.FC = () => {
	const { checkUserStatus } = useCheckSessionStatus();
	const navigate = useNavigate();

	const { data, error, loading, refetch } = useQuery(userDataGraph);

	const logout = async () => {
		const { error } = await supabase.auth.signOut();

		if (!error) {
			client.resetStore().then(() => {
				navigate('/');
			});
		}
	};

	useEffect(() => {
		if (data && !loading && !error) refetch();
	}, [data, loading, error, refetch]);

	useEffect(() => {
		checkUserStatus();
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Panel Użytkownika | Learnica</title>
				<meta
					name='description'
					content='Zarządzaj swoim kontem Learnica, lekcjami i dostępem do materiałów edukacyjnych.'
				/>
				<meta property='og:title' content='Panel Użytkownika | Learnica' />
				<meta
					property='og:description'
					content='Dostęp do Twojego konta, planu nauki i zasobów. Ucz się wygodnie z Learnica.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/panel-uzytkownika' />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main>
				<section className='dashboard'>
					{!error ? (
						!loading ? (
							<>
								{data.userdataCollection.edges.length > 0 && (
									<>
										{data.userdataCollection.edges.map((data: UserDataModel, id: number) => (
											<div key={id} className='dashboard__container'>
												<h1 className='dashboard__title'>
													Witaj użytkowniku rejestrujący się mailem: <span>{data.node.email}</span>
												</h1>
												<p className='dashboard__subtext'>
													Już niedługo będziesz mógł zdobywać wiedzę za pomocą tej platformy! :)
												</p>
											</div>
										))}
										<Link className='dashboard__link' to='zmiana-hasla'>
											Resetuj hasło
										</Link>
										<button className='dashboard__logout-btn' type='button' onClick={logout}>
											Wyloguj
										</button>
									</>
								)}
							</>
						) : (
							<SubpageLoader />
						)
					) : (
						<div className='dashboard__error-message'>
							<p>Błąd.. Spróbuj odświeżyć stronę!</p>
						</div>
					)}
				</section>
			</main>
		</>
	);
};

export default UserPanel;
