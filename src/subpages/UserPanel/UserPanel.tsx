import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { client } from '../../apollo/apolloClient';
import { supabase } from '../../supabase/supabase';
import { userDataGraph } from '../../graphql/userdataGraph';
import { useCheckSessionStatus } from '../../hooks/useCheckSessionStatus';
import { UserDataModel } from '../../models/userData.model';

const UserPanel: React.FC = () => {
	const navigate = useNavigate();
	const { checkUserStatus } = useCheckSessionStatus();

	const { data, error, loading, refetch } = useQuery(userDataGraph);

	useEffect(() => {
		checkUserStatus();
	}, []);

	useEffect(() => {
		if (data && !loading && !error) refetch();
	}, [data, loading, error, refetch]);

	const logout = async () => {
		const { error } = await supabase.auth.signOut();

		if (!error) {
			client.resetStore().then(() => {
				navigate('/');
			});
		} else {
			console.log(error);
		}
	};

	return (
		<section>
			<h1>Panel użytkownika</h1>
			{!error ? (
				!loading ? (
					<>
						{data.userdataCollection.edges.length === 0 && (
							<div>
								<p>Ups! Najwidoczniej musimy jeszcze uzupełnić Twoją bazę danych! Daj nam chwilę..</p>
							</div>
						)}
						{data.userdataCollection.edges.length > 0 && (
							<>
								{data.userdataCollection.edges.map((data: UserDataModel, id: number) => (
									<div key={id}>
										<p>{data.node.user_id}</p>
										<p>{data.node.email}</p>
										<p>{id}</p>
									</div>
								))}
							</>
						)}
						<Link to='zmiana-hasla'>Resetuj hasło</Link>
						<button type='button' onClick={logout}>
							Wyloguj
						</button>
					</>
				) : (
					<div>Ładowanie.. </div>
				)
			) : (
				<div>Błąd..</div>
			)}
		</section>
	);
};

export default UserPanel;
